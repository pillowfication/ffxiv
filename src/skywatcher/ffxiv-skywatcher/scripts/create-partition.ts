import fs from 'fs'
import path from 'path'
import territories from '../data/territories.json'

const OUTPUT = path.resolve(__dirname, '../data/partition.json')
const placeNames: Record<number, number[]> = {}
const weatherRates: Record<number, number[]> = {}

for (const territory of Object.values(territories)) {
  const region = placeNames[territory.placeName_region] !== undefined
    ? placeNames[territory.placeName_region]
    : (placeNames[territory.placeName_region] = [])
  if (!region.includes(territory.placeName)) {
    region.push(territory.placeName)
  }
  weatherRates[territory.placeName] = Object.values(territories)
    .filter(({ placeName }) => placeName === territory.placeName)
    .map(({ weatherRate }) => weatherRate)
    .sort((a, b) => a - b)
    .filter((territory, index, array) => territory !== array[index + 1])
}

fs.writeFileSync(OUTPUT, JSON.stringify({ placeNames, weatherRates }))

console.log('Done!')
