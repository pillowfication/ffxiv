import fs from 'fs'
import path from 'path'
import csvStringify from 'csv-stringify/lib/sync'
import fishingSpots from '../data/fishing-spots.json'
import fishes from '../data/fishes.json'
import baits from '../data/baits.json'

const CUTOFF = 0.02
const OUTPUT = path.resolve(__dirname, '../data/bite-times.json')

const BAIT_IDS = Object.keys(baits).map(Number).filter(baitId => baitId !== 0)
  .concat([
    29722, // Ghoul Barracuda
    29761, // Hi-aetherlouse
    29718, // Tossed Dagger
    32107 // Rothlyt Mussel
  ])

const DATA: any[] = []
for (const fishingSpot of Object.values(fishingSpots)) {
  if (fishingSpot.id !== 0) {
    DATA.push(...require(`../data/tc/spot-${fishingSpot.id}.json`))
  }
}

function getBiteTime (fishId: number, baitId?: number): [number, number] | null {
  const times = DATA
    .filter(datum => datum.itemId === fishId && (baitId === undefined || datum.baitId === baitId))
    .sort((a, b) => a.biteTime - b.biteTime)
  const totalOccurrences = times.reduce((acc, curr) => (acc as number) + (curr.occurrences as number), 0)

  if (totalOccurrences < 10) {
    // Too few reports for meaningful data
    return null
  } else {
    const cutOff = Math.floor(totalOccurrences * CUTOFF)
    let minTime: number = -1
    let maxTime: number = -1
    for (let count = 0, index = 0; index < times.length; ++index) {
      count += times[index].occurrences as number
      if (minTime === -1 && count >= cutOff) {
        minTime = times[index].biteTime
      }
      if (maxTime === -1 && count >= totalOccurrences - cutOff) {
        maxTime = times[index].biteTime
      }
    }
    return [minTime, maxTime]
  }
}

console.log('Computing bite times...')
const biteTimes = {}
for (const fish of Object.values(fishes)) {
  const biteTimesByBait = {}
  let minBiteTime = Infinity
  let maxBiteTime = -Infinity
  BAIT_IDS.forEach(baitId => {
    const biteTime = getBiteTime(fish.id, baitId)
    if (biteTime !== null) {
      if (baitId !== 29717) { // Ignore Versatile Lure
        minBiteTime = Math.min(minBiteTime, biteTime[0])
        maxBiteTime = Math.max(maxBiteTime, biteTime[1])
      }
      biteTimesByBait[baitId] = biteTime
    }
  })
  biteTimes[fish.id] = {
    all: isFinite(minBiteTime) && isFinite(maxBiteTime) ? [minBiteTime, maxBiteTime] : null,
    ...biteTimesByBait
  }
}

fs.writeFileSync(OUTPUT, JSON.stringify(biteTimes))

// Create CSV
const CSV_OUTPUT = path.resolve(__dirname, '../data/bite-times.csv')

function _getBiteTime (fishId: number, baitId: number): [number, number] | undefined {
  return biteTimes[fishId]?.[baitId]?.join('-')
}

console.log('Writing to csv...')
const csv = csvStringify(
  Object.values(fishes)
    .map(fish => Object.values(baits).reduce(
      (acc, bait) => { acc[bait.name_en] = _getBiteTime(fish.id, bait.id); return acc },
      { name: fish.name_en }
    )),
  {
    header: true,
    columns: ['name', ...Object.values(baits).map(bait => bait.name_en)]
  }
)
fs.writeFileSync(CSV_OUTPUT, csv)

console.log('Done!')
