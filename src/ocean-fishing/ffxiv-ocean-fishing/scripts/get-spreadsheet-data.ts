import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'

const SHEET = path.resolve(__dirname, '../data/Ocean Fishing Textual Style.html')
const OUTPUT = path.resolve(__dirname, '../data/spreadsheet-data-raw.json')
const $ = cheerio.load(fs.readFileSync(SHEET).toString())

type Cheerio = any // I don't know how to get the Cheerio type from cheerio

// Parsing the sheet works by finding the cells with these strings as text,
// then reading the 10 rows after it
const FISHING_SPOTS = [
  'Outer Galadion Bay',
  'Galadion Spectral Current',
  'The Southern Strait of Merlthor',
  'Southern Merlthor Spectral Current',
  'The Northern Strait of Merlthor',
  'Northern Merlthor Spectral Current',
  'Open Rhotano Sea',
  'Rhotano Spectral Current',
  'Cieldalaes Margin',
  'Cieldalaes Spectral Current',
  'Open Bloodbrine Sea',
  'Bloodbrine Spectral Current',
  'Outer Rothlyt Sound',
  'Rothlyt Spectral Current'
]

const data = {}

;(async () => {
  for (const fishingSpot of FISHING_SPOTS) {
    // Find the cell contain the `fishingSpot` text
    data[fishingSpot] = []
    let tr = $('table.waffle tr').filter((_, elem) => $(elem).text().includes(fishingSpot)).eq(0)
    tr = tr.next()

    // Loop over the 10 rows after it
    for (let i = 0; i < 10; ++i) {
      tr = tr.next()
      data[fishingSpot].push({
        name: tr.find('td:nth-child(3)').text().trim(),
        bait: (() => {
          if ([
            'Aetheric Seadragon',
            'Coral Manta',
            'Elasmosaurus',
            'Elder Dinichthys',
            'Gladius',
            'Great Grandmarlin',
            'Hafgufa',
            'Placodus',
            'Roguesaurus',
            'Seafaring Toad',
            'Sothis',
            'Stonescale',
            'Trollfish'
          ].includes(tr.find('td:nth-child(3)').text().trim())) {
            return null
          }
          if (isBlue(tr.find('td:nth-child(4)'))) return 'Ragworm'
          if (isBlue(tr.find('td:nth-child(5)'))) return 'Krill'
          if (isBlue(tr.find('td:nth-child(6)'))) return 'Plump Worm'
          console.log('UNKNOWN BAIT FOR:', tr.find('td:nth-child(3)').text().trim())
        })(),
        points: parsePoints(tr.find('td:nth-child(8)').text().trim()),
        doubleHook: parseDoubleHook(tr.find('td:nth-child(9)').text().trim()),
        mooch: parseMooch(tr.find('td:nth-child(10)').text().trim()),
        tug: parseTug(tr.find('td:nth-child(11)').text().trim()),
        time: parseTime(tr.find('td:nth-child(14)').text().trim()),
        weathers: parseWeathers(tr.find('td:nth-child(15)').text().trim()),
        stars: parseStars(tr.find('td:nth-child(17)').text().trim())
      })
    }
  }

  function isBlue (elem: Cheerio): boolean {
    // These are the classNames of blue cells indicating desynth baits
    for (const className of ['s36', 's45', 's46', 's73']) {
      if (elem.hasClass(className) as boolean) {
        return true
      }
    }
    return false
  }

  function parsePoints (str: string): number | null {
    if (/^\d+$/.test(str)) {
      return Number(str)
    }
    console.log('UNKNOWN POINTS:', str)
    return null
  }

  function parseDoubleHook (str: string): number | number[] | null {
    if (/^\d+$/.test(str)) {
      return Number(str)
    }
    if (/^\d+ or \d+$/.test(str)) {
      return str.split(' or ').map(Number)
    }
    if (/^\d+ Assumed$/.test(str)) {
      return Number((str.match(/\d+/) as RegExpMatchArray)[0])
    }
    console.log('UNKNOWN DOUBLE HOOK:', str)
    return null
  }

  function parseMooch (str: string): string | null {
    if (!/^mooch bait$/i.test(str)) {
      return str !== '' ? str : null
    }
    return null
  }

  function parseTug (str: string): number | null {
    if (/^!+$/.test(str)) {
      return str.length
    }
    console.log('UNKNOWN TUG:', str)
    return null
  }

  function parseTime (str: string): string | null {
    if (/^all$/i.test(str)) {
      return 'DSN'
    }
    let time = ''
    for (const val of ['Day', 'Sunset', 'Night']) {
      if ((new RegExp(val, 'i')).test(str)) {
        time += val.charAt(0)
      }
    }
    if (time.length > 0) {
      return time
    }

    return null
  }

  function parseWeathers (str: string): { type: 'ALL' } | { type: 'OK', list: string[] } | { type: 'NOT OK', list: string[] } | null {
    if (str === '') {
      return null
    }
    if (/^all$/i.test(str)) {
      return { type: 'ALL' }
    }
    if (/^(restricted|not all), [a-z/]+ OK$/i.test(str)) {
      return {
        type: 'OK',
        list: parseWeatherNames((str.match(/^(?:restricted|not all), ([a-z /]+) OK$/i) as RegExpMatchArray)[1].split('/')) as string[]
      }
    }
    if (/^restricted from [a-z /]+$/i.test(str)) {
      return {
        type: 'NOT OK',
        list: parseWeatherNames((str.match(/^restricted from ([a-z /]+)$/i) as RegExpMatchArray)[1].split('/')) as string[]
      }
    }
    if (/^restricted \(likely just from clear\)$/i.test(str)) {
      return {
        type: 'NOT OK',
        list: ['ClearSkies']
      }
    }
    if (str.includes('/')) {
      return {
        type: 'OK',
        list: parseWeatherNames(str.split('/')) as string[]
      }
    }
    console.log('UNKNOWN WEATHERS:', str)
    return null
  }

  function parseWeatherNames (weathers: string[]): Array<string | null> {
    const map: Array<[string, string[]]> = [
      ['Blizzards', ['blizzard']],
      ['ClearSkies', ['clear']],
      ['Clouds', ['clouds']],
      ['DustStorms', ['dust']],
      ['FairSkies', ['fair']],
      ['Fog', ['fog']],
      ['Gales', ['gales']],
      ['HeatWaves', ['heat', 'heat waves']],
      ['Rain', ['rain']],
      ['Showers', ['showers']],
      ['Snow', ['snow']],
      ['Thunder', ['thunder']],
      ['Thunderstorms', ['thunderstorms', 'storms']],
      ['Wind', ['wind']]
    ]
    return weathers.map(alias => {
      for (const [weather, aliases] of map) {
        if (aliases.includes(alias.toLowerCase())) {
          return weather
        }
      }
      console.log('UNKNOWN WEATHER NAME:', alias)
      return null
    }).filter(x => x)
  }

  function parseStars (str: string): number | null {
    if (/^\d+$/.test(str)) {
      return Number(str)
    }
    console.log('UNKNOWN STARS:', str)
    return null
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(data, null, 2))

  console.log('Done!')
})().then(null, null)
