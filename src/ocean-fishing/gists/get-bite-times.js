const fs = require('fs')
const path = require('path')
const bent = require('bent')

let cacheIds
try {
  cacheIds = require('./data/fish-ids.json')
} catch (e) {
  console.log('No IDs')
}

const REGIONS = [
  'outer-galadion-bay',
  'galadion-spectral-current',
  'the-southern-strait-of-merlthor',
  'southern-merlthor-spectral-current',
  'the-northern-strait-of-merlthor',
  'northern-merlthor-spectral-current',
  'open-rhotano-sea',
  'rhotano-spectral-current',
  'cieldalaes-margin',
  'cieldalaes-spectral-current',
  'open-bloodbrine-sea',
  'bloodbrine-spectral-current',
  'outer-rothlyt-sound',
  'rothlyt-spectral-current'
]
const DATA = REGIONS.flatMap((region) => {
  const json = require(`./tc-data/${region}.json`)
  return json.data.biteTimes
})

const getJSON = bent('json')
const XIVAPI = 'https://xivapi.com'

const overrides = {
  'Beatific Vision': 32089,
  Executioner: 29770,
  Exterminator: 32090,
  Fishmonger: 29754,
  Gladius: 29727,
  'Prodigal Son': 29780,
  Prowler: 29778,
  Sabaton: 29746,
  'Shooting Star': 29747,
  Silencer: 29768,
  Sweeper: 29767
}

const ids = {}
async function getId (fish) {
  if (cacheIds) {
    return cacheIds[fish]
  } else {
    console.log(fish)
    const id = overrides[fish] ||
      (await getJSON(`${XIVAPI}/search?string=${encodeURIComponent(fish)}`))
        .Results[0].ID
    ids[fish] = id
    return id
  }
}

module.exports = async function getBiteTimes (fishes) {
  const results = []
  for (const fish of fishes) {
    const id = await getId(fish)
    const times = DATA.filter((datum) => datum.itemId === id).sort((a, b) => a.biteTime - b.biteTime)
    if (times.length === 0) {
      results.push(null)
    } else {
      const totalOccurrences = times.reduce((acc, curr) => acc + curr.occurences, 0)
      const cutOff = Math.floor(totalOccurrences * 0.01)
      let minTime, maxTime
      for (let count = 0, index = 0; index < times.length; ++index) {
        count += times[index].occurences
        if (minTime === undefined && count >= cutOff) {
          minTime = times[index].biteTime
        }
        if (maxTime === undefined && count >= totalOccurrences - cutOff) {
          maxTime = times[index].biteTime
        }
      }
      // if (minTime !== times[0].biteTime || maxTime !== times[times.length - 1].biteTime) {
      //   console.log(`Changed ${fish}`, [times[0].biteTime, times[times.length - 1].biteTime], [minTime, maxTime])
      // }
      results.push({
        all: [times[0].biteTime, times[times.length - 1].biteTime],
        removed: [minTime, maxTime],
        samples: totalOccurrences
      })
    }
  }
  if (!cacheIds) {
    fs.writeFileSync(path.resolve(__dirname, './data/fish-ids.json'), JSON.stringify(ids))
  }
  return results
}
