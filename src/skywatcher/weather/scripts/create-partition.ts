import fs from 'fs'
import path from 'path'
import maps from '../data/maps.json'

const OUTPUT = path.resolve(__dirname, '../data/partition.json')
const partition: Record<number, number[]> = {}
const weatherRates: Record<number, number[]> = {} // Some places have multiple weatherRates

for (const value of Object.values(maps)) {
  const region = partition[value.PlaceNameRegion] || (partition[value.PlaceNameRegion] = [])
  if (!region.includes(value.PlaceName)) {
    region.push(value.PlaceName)
  }
  weatherRates[value.PlaceName] = weatherRates[value.PlaceName] || (
    Object.values(maps)
      .filter(({ PlaceName }) => PlaceName === value.PlaceName)
      .map(({ WeatherRate }) => WeatherRate)
      .filter((value, index, array) => array.indexOf(value, index + 1) === -1)
      .sort((a, b) => a - b)
  )
}

fs.writeFileSync(OUTPUT, JSON.stringify({ partition, weatherRates }))
