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

const DATA: any = { biteTimes: [], baitPercentages: [] }
for (const fishingSpot of Object.values(fishingSpots)) {
  if (fishingSpot.id !== 0) {
    DATA.biteTimes.push(...require(`../data/tc/spot-${fishingSpot.id}_bite-times.json`))
    DATA.baitPercentages.push(
      ...require(`../data/tc/spot-${fishingSpot.id}_bait-percentages.json`) // eslint-disable-line @typescript-eslint/no-var-requires
        .map((datum: any) => Object.assign(datum, { spotId: fishingSpot.id }))
    )
  }
}

const biteTimes = {}

console.log('Computing bite times...')
function getBiteTime (fishId: number, baitId?: number): [number, number] | null {
  const times = DATA.biteTimes
    .filter((datum: any) => datum.itemId === fishId && (baitId === undefined || datum.baitId === baitId))
    .sort((a: any, b: any) => a.biteTime - b.biteTime)
  const totalOccurrences = times.reduce((acc: any, curr: any) => (acc as number) + (curr.occurrences as number), 0)

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

console.log('Compute best baits...')
function getPercentage (fishId: number, baitId: number): number {
  // First find any data on the fish, to get the fishingSpot ID that it is found in
  const someDatum = DATA.baitPercentages.find((datum: any) => datum.itemId === fishId)
  if (someDatum === undefined) {
    if (fishId !== 0) {
      console.log('No data found for `fishId`:', fishId)
    }
    return 0
  }

  const spotId = someDatum.spotId
  const totalCasts = DATA.baitPercentages
    .filter((datum: any) => datum.spotId === spotId && datum.baitId === baitId)
    .reduce((acc: any, curr: any) => (acc as number) + (curr.occurrences as number), 0)
  const totalCatches = DATA.baitPercentages
    .filter((datum: any) => datum.spotId === spotId && datum.baitId === baitId && datum.itemId === fishId)
    .reduce((acc: any, curr: any) => (acc as number) + (curr.occurrences as number), 0)

  if (totalCatches < 10) {
    // Too few reports for meaningful data
    return 0
  } else {
    return totalCatches / totalCasts
  }
}

function getBestBait (fishId: number): number | null {
  const percentages = Object.keys(baits).map(Number)
    .map(baitId => ({
      baitId,
      percentage: getPercentage(fishId, baitId)
    }))
    .sort((a, b) => b.percentage - a.percentage)

  if (percentages[0].percentage === 0) {
    return null
  } else {
    return percentages[0].baitId
  }
}

for (const fish of Object.values(fishes)) {
  biteTimes[fish.id].bestBait = getBestBait(fish.id)
}

fs.writeFileSync(OUTPUT, JSON.stringify(biteTimes))

// Create CSV
const CSV_OUTPUT = path.resolve(__dirname, '../data/bite-times.csv')

function _getBaitName (baitId: number): string {
  return baits[baitId]?.name.en ?? fishes[baitId]?.name.en ?? ''
}

function _getBiteTime (fishId: number, baitId: number): string {
  return biteTimes[fishId]?.[baitId]?.join('-') ?? ''
}

function _getBestBait (fishId: number): string {
  return biteTimes[fishId]?.bestBait !== null ? baits[biteTimes[fishId].bestBait].name.en : ''
}

console.log('Writing to csv...')
const csv = csvStringify(
  Object.values(fishes)
    .filter(fish => fish.id !== 0)
    .map(fish => {
      const row: any = {}
      row.ID = fish.id
      row.Name = fish.name.en
      row['Best Bait'] = _getBestBait(fish.id)
      BAIT_IDS.forEach(baitId => {
        row[_getBaitName(baitId)] = _getBiteTime(fish.id, baitId)
      })
      return row
    }),
  {
    header: true,
    columns: ['ID', 'Name', 'Best Bait', ...BAIT_IDS.map(_getBaitName)]
  }
)
fs.writeFileSync(CSV_OUTPUT, csv)

console.log('Done!')

// The following code may be used to check differences in bait suggestions
/*
const baits = require('./data/baits.json')
const fishes = require('./data/fishes.json')
const biteTimes = require('./data/bite-times.json')
const spreadsheetData = require('./data/spreadsheet-data.json')

for (const datum of Object.values(spreadsheetData).flat()) {
  const oldBait = datum.desynthesisBait
  const fishId = Object.values(fishes).find(fish => fish.name.en === datum.name).id
  const newBait = biteTimes[fishId].bestBait ? baits[biteTimes[fishId].bestBait].name.en : null

  if (oldBait !== newBait) {
    console.log(`${datum.name}: ${oldBait} -> ${newBait}`)
  }
}
*/
