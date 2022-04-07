import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'

const SHEET = path.resolve(__dirname, '../data/Ocean Fishing Data.html')
const OUTPUT = path.resolve(__dirname, '../data/spreadsheet-data-raw.json')
const $ = cheerio.load(fs.readFileSync(SHEET).toString())

type Cheerio = any // I don't know how to get the Cheerio type from cheerio

function getNthTd (tr: Cheerio, nth: Number): Cheerio {
  let currCol = 1
  let td = $(tr).find('th, td').eq(0)

  while (currCol < nth) {
    currCol += td.attr('colspan') === undefined ? 1 : Number(td.attr('colspan'))
    td = td.next()
  }

  return td
}

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
    tr = tr.next() // skip a row

    // Loop over the 10 rows after it
    for (let i = 0; i < 10; ++i) {
      tr = tr.next()
      data[fishingSpot].push({
        name: getNthTd(tr, 3).text().trim(),
        moochable: isYellow(getNthTd(tr, 3)),
        bait: (() => {
          // If this is a mooch-only fish, the name of the mooched fish is added by hand
          if (isOrange(getNthTd(tr, 4))) return '<MOOCH>'

          if (isBlue(getNthTd(tr, 4))) return 'Ragworm'
          if (isBlue(getNthTd(tr, 5))) return 'Krill'
          if (isBlue(getNthTd(tr, 6))) return 'Plump Worm'
          if (isBlue(getNthTd(tr, 7))) {
            console.log('Nonstandard bait for:', getNthTd(tr, 3).text().trim())
          } else {
            console.log('Unknown bait for:', getNthTd(tr, 3).text().trim())
          }
          return null
        })(),
        points: parsePoints(getNthTd(tr, 8).text().trim()),
        doubleHook: parseMultiHook(getNthTd(tr, 9).text().trim()),
        tripleHook: parseMultiHook(getNthTd(tr, 10).text().trim()),
        tug: parseTug(getNthTd(tr, 11).text().trim()),
        hookset: parseHookset(getNthTd(tr, 12)),
        time: null, // This is far too complicated to parse now
        weathers: null, // This is far too complicated to parse now
        stars: parseStars(getNthTd(tr, 19).text().trim()),
        notes: getNthTd(tr, 20).text().trim()
      })
    }
  }

  function isBlue (elem: Cheerio): boolean {
    // These are the classNames of blue cells indicating desynth baits
    // This can randomly change when the sheet is updated
    for (const className of ['s29', 's40', 's44', 's46']) {
      if (elem.hasClass(className) as boolean) {
        return true
      }
    }
    return false
  }

  function isYellow (elem: Cheerio): boolean {
    for (const className of ['s48']) {
      if (elem.hasClass(className) as boolean) {
        return true
      }
    }
    return false
  }

  function isOrange (elem: Cheerio): boolean {
    for (const className of ['s50', 's56']) {
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
    console.log('Unknown points:', str)
    return null
  }

  function parseMultiHook (str: string): number | number[] | null {
    if (/^\d+$/.test(str)) {
      return Number(str)
    }
    if (/^\d+ - \d+$/.test(str)) {
      return str.split(' - ').map(Number)
    }
    console.log('Unknown multi-hook:', str)
    return null
  }

  function parseTug (str: string): number | null {
    if (/^❗+$/.test(str)) {
      return str.length
    }
    console.log('Unknown tug:', str)
    return null
  }

  function parseHookset (td: Cheerio): string | null {
    const imgSrc = $(td).find('img').attr('src')
    if (imgSrc === 'https://lh3.googleusercontent.com/zneQuC8iYxW3u6KJP83JpwLXQFm4EXK8z59GRx8kPr0QyfAqyb5MAEG9ei0ebiOFQRDKJvedFLf9AOydTjeaCcX65ufKzirntbtIu_HuqVVRTvHYq2rEMSB1Vwo_Z77j5JgvB48nMA=w62-h20') {
      return 'Precision'
    }
    if (imgSrc === 'https://lh6.googleusercontent.com/pK2HNOaczHTBya4M_x-MrJvxlAlNuAkFq4cD7H2oMUfcXAUbrEuqz7Ek4HNjw_3yCNlLlYeOEMo6zZocXhTMs4lq9_9tEdig59QUCVtOANld3Q0FoY7vRkrFoScYSWS9f1SRXTyAwA=w62-h20') {
      return 'Powerful'
    }
    console.log('Unknown hookset:', imgSrc)
    return null
  }

  function parseStars (str: string): number | null {
    if (/^\d+$/.test(str)) {
      return Number(str)
    }
    console.log('Unknown stars:', str)
    return null
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(data, null, 2))

  console.log('Done!')
})().then(null, null)
