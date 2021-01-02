const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const cheerio = require('cheerio')
const WEATHERS = require('../../skywatcher/weather/consts/weathers')

const SHEET = fs.readFileSync(path.resolve(__dirname, './data/Ocean Fishing Textual Style.html'))
const OUTPUT = path.resolve(__dirname, './data/spreadsheet-data.json')
const $ = cheerio.load(SHEET.toString())

const REGIONS = [
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
  //
  // Do basic parsing
  //
  for (const region of REGIONS) {
    data[region] = []
    let tr = $('table.waffle tr').filter((_, elem) => $(elem).text().indexOf(region) >= 0).eq(0)
    tr = tr.next()

    for (let i = 0; i < 10; ++i) {
      tr = tr.next()
      data[region].push({
        name: tr.find('td:nth-child(3)').text().trim(),
        bait: (() => {
          if (isBlue(tr.find('td:nth-child(4)'))) {
            return 'Ragworm'
          }
          if (isBlue(tr.find('td:nth-child(5)'))) {
            return 'Krill'
          }
          if (isBlue(tr.find('td:nth-child(6)'))) {
            return 'Plump Worm'
          }
          console.log('UNKNOWN BAIT FOR:', tr.find('td:nth-child(3)').text().trim())
        })(),
        // ragwormTimer: parseTimer(tr.find('td:nth-child(4)').text().trim()),
        // krillTimer: parseTimer(tr.find('td:nth-child(5)').text().trim()),
        // plumpWormTimer: parseTimer(tr.find('td:nth-child(6)').text().trim()),
        // versatileLureTimer: parseTimer(tr.find('td:nth-child(7)').text().trim()),
        points: parsePoints(tr.find('td:nth-child(8)').text().trim()),
        doubleHook: parseDoubleHook(tr.find('td:nth-child(9)').text().trim()),
        mooch: tr.find('td:nth-child(10)').text().trim() || null,
        tug: parseTug(tr.find('td:nth-child(11)').text().trim()),
        // hookset: tr.find('td:nth-child(12)').text().trim(),
        timer: parseTimer(tr.find('td:nth-child(13)').text().trim()),
        time: parseTime(tr.find('td:nth-child(14)').text().trim()),
        weathers: parseWeathers(tr.find('td:nth-child(15)').text().trim()),
        // buff: tr.find('td:nth-child(16)').text().trim(),
        stars: parseStars(tr.find('td:nth-child(17)').text().trim()),
        // canvas: tr.find('td:nth-child(18)').text().trim(),
        category: parseCategory(tr.find('td:nth-child(19)').text().trim())
        // notes: tr.find('td:nth-child(19)').text().trim()
      })
    }
  }

  function isBlue (elem) {
    for (const className of ['s36', 's46', 's73']) {
      if (elem.hasClass(className)) {
        return true
      }
    }
    return false
  }

  function parseTimer (str) {
    str = _.trim(str, '~s')
    if (/^\d+-\d+$/.test(str)) {
      return str.split('-').map(Number)
    }
    if (/^\d+(\.\d+)?$/.test(str)) {
      return [Number(str), Number(str)]
    }
    if (/^.*@.*$/.test(str)) {
      return parseTimer(str.split('@')[1])
    }
    if (/^.*\/.*$/.test(str)) {
      return parseTimer(str.split('/')[1])
    }
    if (/^0 caught$/.test(str)) {
      return -1
    }
    if (str === '') {
      return null
    }
    console.log('UNKNOWN TIMER:', str)
    return null
  }

  function parsePoints (str) {
    if (/^\d+$/.test(str)) {
      return Number(str)
    }
    console.log('UNKNOWN POINTS:', str)
    return null
  }

  function parseDoubleHook (str) {
    if (/^\d+$/.test(str)) {
      return Number(str)
    }
    if (/^\d+ or \d+$/.test(str)) {
      return str.split(' or ').map(Number)
    }
    if (/^\d+ Assumed$/.test(str)) {
      return Number(str.match(/\d+/)[0])
    }
    console.log('UNKNOWN DOUBLE HOOK:', str)
    return null
  }

  function parseTug (str) {
    if (/^!+$/.test(str)) {
      return str.length
    }
    console.log('UNKNOWN TUG:', str)
    return null
  }

  function parseTime (str) {
    if (/^all$/i.test(str)) {
      return 'DSN'
    }
    let time = ''
    for (const val of ['Day', 'Sunset', 'Night']) {
      if ((new RegExp(val, 'i')).test(str)) {
        time += val.charAt(0)
      }
    }
    if (time.length >= 0) {
      return time
    }
    console.log('UNKNOWN TIME:', str)
    return null
  }

  function parseWeathers (str) {
    if (!str) {
      return null
    }
    if (/^all$/i.test(str)) {
      return { type: 'ALL' }
    }
    if (/^(restricted|not all), [a-z/]+ OK$/i.test(str)) {
      return {
        type: 'OK',
        list: parseWeatherNames(str.match(/^(?:restricted|not all), ([a-z /]+) OK$/i)[1].split('/'))
      }
    }
    if (/^restricted from [a-z /]+$/i.test(str)) {
      return {
        type: 'NOT OK',
        list: parseWeatherNames(str.match(/^restricted from ([a-z /]+)$/i)[1].split('/'))
      }
    }
    if (/^restricted \(likely just from clear\)$/i.test(str)) {
      return {
        type: 'NOT OK',
        list: [WEATHERS.CLEAR_SKIES]
      }
    }
    if (str.indexOf('/') !== -1) {
      return {
        type: 'OK',
        list: parseWeatherNames(str.split('/'))
      }
    }
    console.log('UNKNOWN WEATHERS:', str)
    return null
  }

  function parseWeatherNames (weathers) {
    const map = {
      [WEATHERS.BLIZZARDS]: ['blizzard'],
      [WEATHERS.CLEAR_SKIES]: ['clear'],
      [WEATHERS.CLOUDS]: ['clouds'],
      [WEATHERS.DUST_STORMS]: ['dust'],
      [WEATHERS.FAIR_SKIES]: ['fair'],
      [WEATHERS.FOG]: ['fog'],
      [WEATHERS.GALES]: ['gales'],
      [WEATHERS.HEAT_WAVES]: ['heat', 'heat waves'],
      [WEATHERS.RAIN]: ['rain'],
      [WEATHERS.SHOWERS]: ['showers'],
      [WEATHERS.SNOW]: ['snow'],
      [WEATHERS.THUNDER]: ['thunder'],
      [WEATHERS.THUNDERSTORMS]: ['thunderstorms', 'storms'],
      [WEATHERS.WIND]: ['wind']
    }
    return weathers.map((weather) => {
      for (const key in map) {
        if (map[key].includes(weather.toLowerCase())) {
          return key
        }
      }
      console.log('UNKNOWN WEATHER NAME:', weather)
      return null
    }).filter((x) => x)
  }

  function parseStars (str) {
    if (/^\d+$/.test(str)) {
      return Number(str)
    }
    console.log('UNKNOWN STARS:', str)
    return null
  }

  function parseCategory (str) {
    if (/octopus travelers/i.test(str)) {
      return 'octopus'
    }
    if (/certifiable shark hunters/i.test(str)) {
      return 'shark'
    }
    if (/jelled together/i.test(str)) {
      return 'jellyfish'
    }
    if (/maritime dragonslayers/i.test(str)) {
      return 'seadragon'
    }
    if (/balloon catchers/i.test(str)) {
      return 'balloon'
    }
    if (/crab boat crew/i.test(str)) {
      return 'crab'
    }
    if (/sticking it to the manta/i.test(str)) {
      return 'manta'
    }
    return null
  }

  //
  // Overwrite with any other data
  //
  _.merge(data, {
    'Outer Galadion Bay': {
      8: {
        weathers: {
          type: 'NOT OK',
          list: [WEATHERS.CLEAR_SKIES]
        }
      },
      9: {
        intuition: [{
          name: 'Galadion Chovy',
          count: 3
        }]
      }
    },
    'Galadion Spectral Current': {
      9: {
        bait: 'Glowworm',
        intuition: [{
          name: 'Heavenskey',
          count: 2
        }, {
          name: 'Navigator\'s Print',
          count: 1
        }]
      }
    },
    'The Southern Strait of Merlthor': {
      8: {
        weathers: {
          type: 'NOT OK',
          list: [WEATHERS.CLEAR_SKIES]
        }
      },
      9: {
        intuition: [{
          name: 'Gladius',
          count: 1
        }]
      }
    },
    'Southern Merlthor Spectral Current': {
      4: {
        name: 'Hi-aetherlouse'
      },
      9: {
        bait: 'Shrimp Cage Feeder',
        intuition: [{
          name: 'Great Grandmarlin',
          count: 2
        }]
      }
    },
    'The Northern Strait of Merlthor': {
      0: {
        weathers: {
          type: 'OK',
          list: [
            WEATHERS.FAIR_SKIES,
            WEATHERS.FOG,
            WEATHERS.CLEAR_SKIES,
            WEATHERS.CLOUDS
          ]
        }
      },
      8: {
        weathers: {
          type: 'NOT OK',
          list: [WEATHERS.CLEAR_SKIES]
        }
      },
      9: {
        intuition: [{
          name: 'Elder Dinichthys',
          count: 1
        }]
      }
    },
    'Northern Merlthor Spectral Current': {
      9: {
        bait: 'Heavy Steel Jig',
        intuition: [{
          name: 'Gugrusaurus',
          count: 3
        }]
      }
    },
    'Open Rhotano Sea': {
      8: {
        weathers: {
          type: 'NOT OK',
          list: [WEATHERS.CLEAR_SKIES]
        }
      },
      9: {
        intuition: [{
          name: 'Crimson Monkfish',
          count: 2
        }]
      }
    },
    'Rhotano Spectral Current': {
      9: {
        bait: 'Rat Tail',
        intuition: [{
          name: 'Deep-sea Eel',
          count: 1
        }, {
          name: 'Silencer',
          count: 1
        }]
      }
    },
    'Cieldalaes Margin': {
      9: {
        intuition: [{
          name: 'Metallic Boxfish',
          count: 3
        }]
      }
    },
    'Cieldalaes Spectral Current': {
      9: {
        bait: 'Squid Strip',
        intuition: [{
          name: 'Jetborne Manta',
          count: 2
        }, {
          name: 'Mistbeard\'s Cup',
          count: 1
        }]
      }
    },
    'Open Bloodbrine Sea': {
      9: {
        intuition: [{
          name: 'Sunken Mask',
          count: 1
        }]
      }
    },
    'Bloodbrine Spectral Current': {
      9: {
        bait: 'Pill Bug',
        intuition: [{
          name: 'Beatific Vision',
          count: 3
        }]
      }
    },
    'Outer Rothlyt Sound': {
      9: {
        intuition: [{
          name: 'Rothlyt Kelp',
          count: 3
        }]
      }
    },
    'Rothlyt Spectral Current': {
      1: {
        mooch: 'Rothlyt Mussel'
      },
      3: {
        mooch: 'Rothlyt Mussel'
      },
      5: {
        mooch: 'Rothlyt Mussel'
      },
      6: {
        mooch: 'Rothlyt Mussel'
      },
      9: {
        mooch: 'Rothlyt Mussel',
        intuition: [{
          name: 'Trollfish',
          count: 1
        }]
      }
    }
  })

  fs.writeFileSync(OUTPUT, JSON.stringify(data))
})()
