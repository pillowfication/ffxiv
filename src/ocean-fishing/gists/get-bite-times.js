const fs = require('fs')
const path = require('path')
const { fishingSpots, fishes, baits } = require('./data/ocean-fish-data.json')

const BAITS = [
  ...Object.keys(baits),
  29722, // Ghoul Barracuda
  29761, // Hi-aetherlouse
  29718, // Tossed Dagger
  32107 // Rothlyt Mussel
]

const DATA = []
for (const fishingSpot of Object.keys(fishingSpots)) {
  DATA.push(...require(`./data/tc/spot-${fishingSpot}.json`).data.biteTimes)
}

const CUTOFF = 0.2
const OUTPUT = path.resolve(__dirname, './data/ocean-fish-bite-times.json')

function getBiteTime (fishId, baitId) {
  const times = DATA
    .filter(datum => datum.itemId === fishId && (!baitId || datum.baitId === baitId))
    .sort((a, b) => a.biteTime - b.biteTime)

  if (times.length < 10) {
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
  const biteTimesByBait = {}
  let minBiteTime, maxBiteTime
  BAITS.forEach(baitId => {
    const biteTime = getBiteTime(fish.id, +baitId)
    if (biteTime) {
      minBiteTime = minBiteTime ? Math.min(minBiteTime, biteTime[0]) : biteTime[0]
      maxBiteTime = maxBiteTime ? Math.max(maxBiteTime, biteTime[1]) : biteTime[1]
      biteTimesByBait[baitId] = biteTime
    }
  })
  biteTimes[fish.id] = {
    all: (minBiteTime && maxBiteTime && [minBiteTime, maxBiteTime]) || null,
    ...biteTimesByBait
  }
}

fs.writeFileSync(OUTPUT, JSON.stringify(biteTimes))
