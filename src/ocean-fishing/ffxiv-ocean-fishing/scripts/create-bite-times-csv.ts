import fs from 'fs'
import path from 'path'
import csvStringify from 'csv-stringify/lib/sync'
import oceanFishingFishes from '../data/ocean-fishing-fishes.json'
import oceanFishingBaits from '../data/ocean-fishing-baits.json'
import oceanFishingBiteTimes from '../data/ocean-fishing-bite-times.json'

const OUTPUT = path.resolve(__dirname, '../data/bite-times.csv')

function getBiteTime (fishId: number, baitId: number) {
  return oceanFishingBiteTimes[fishId]
    && oceanFishingBiteTimes[fishId][baitId]
    && oceanFishingBiteTimes[fishId][baitId].join('-')
    || undefined
}

const csv = csvStringify(
  Object.values(oceanFishingFishes)
    .map(fish => Object.values(oceanFishingBaits).reduce((acc, bait) => (
      acc[bait.name_en] = getBiteTime(fish.id, bait.id), acc
    ), { name: fish.name_en })),
  {
    header: true,
    columns: ['name', ...Object.values(oceanFishingBaits).map(bait => bait.name_en)]
  }
)
fs.writeFileSync(OUTPUT, csv)
