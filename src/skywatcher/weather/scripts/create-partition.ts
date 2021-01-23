import fs from 'fs'
import path from 'path'
import maps from '../data/maps.json'

const OUTPUT = path.resolve(__dirname, '../data/partition.json')
const partition: Record<number, number[]> = {}
const weatherRates: Record<number, number> = {}

for (const value of Object.values(maps)) {
  const region = partition[value.PlaceNameRegion] || (partition[value.PlaceNameRegion] = [])
  if (!region.includes(value.PlaceName)) {
    region.push(value.PlaceName)
  }
  weatherRates[value.PlaceName] = value.WeatherRate
}

fs.writeFileSync(OUTPUT, JSON.stringify({ partition, weatherRates }))
