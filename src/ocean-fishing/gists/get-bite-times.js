const fs = require('fs')
const path = require('path')
const { fishes } = require('./data/ocean-fish-data.json')

const DATA = [
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
].flatMap((region) =>
  require(`./tc-data/${region}.json`).data.biteTimes
)
const CUTOFF = 0.1
const OUTPUT = path.resolve(__dirname, './data/ocean-fish-bite-times.json')

function getBiteTime (fishId) {
  const times = DATA
    .filter((datum) => datum.itemId === fishId)
    .sort((a, b) => a.biteTime - b.biteTime)

  if (times.length === 0) {
    return null
  } else {
    const totalOccurrences = times.reduce((acc, curr) => acc + curr.occurences, 0)
    const cutOff = Math.floor(totalOccurrences * CUTOFF)
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
    return [minTime, maxTime]
  }
}

const biteTimes = {}
for (const fish of Object.values(fishes)) {
  biteTimes[fish.id] = getBiteTime(fish.id)
}

fs.writeFileSync(OUTPUT, JSON.stringify(biteTimes))
