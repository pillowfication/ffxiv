import { Weather, Place } from './src/types'
import { weatherRates, partition } from './data'

export { Weather, Place }
export { default as translateWeather } from './src/translate-weather'
export { default as translatePlace } from './src/translate-place'

export function getRegions (): Place[] {
  return Object.keys(partition.placeNames)
    .map(key => Number(key) as Place)
    .sort((a, b) => a - b)
}

export function getPlaces (region: Place): Place[] {
  return (partition.placeNames[region] as Place[])
    .sort((a, b) => a - b)
}

export function getSeed (date = new Date()): number {
  return Math.floor(date.getTime() / 1400000)
}

export function getDate (seed = getSeed()): Date {
  return new Date(seed * 1400000)
}

export function hashSeed (seed = getSeed()): number {
  const base = Math.floor(seed / 3) * 100 + ((seed + 1) % 3) * 8
  const step1 = ((base << 11) ^ base) >>> 0
  const step2 = ((step1 >>> 8) ^ step1) >>> 0
  return step2 % 100
}

export function getHashes (seed = getSeed(), count = 10): number[] {
  const hashes: number[] = []
  for (let index = 0; index < count; ++index) {
    hashes.push(hashSeed(seed + index))
  }
  return hashes
}

export function getWeather (place: Place, weatherRateIndex = 0, hash = hashSeed()): Weather {
  const rates = weatherRates[partition.weatherRates[place][weatherRateIndex]].rates
  let cumChance = 0
  for (const [weather, chance] of rates) {
    if ((cumChance += chance) > hash) {
      return weather.id
    }
  }
  return Weather.DEFAULT
}

export function getWeatherRates (place: Place): number[] {
  return partition.weatherRates[place]
}

export function getPossibleWeathers (place: Place, weatherRateIndex = 0): Weather[] {
  const rates = weatherRates[partition.weatherRates[place][weatherRateIndex]].rates
  return rates.map(([weather]) => weather.id)
    .sort((a, b) => a - b)
    .filter((weather, index, array) => weather !== array[index + 1])
}

export function forecastWeathers (
  place: Place,
  weatherRateIndex = 0,
  filter?: (prevWeather: Weather, currWeather: Weather, seed: number) => boolean,
  seed = getSeed(),
  count = 10
): Array<{ prevWeather: Weather, currWeather: Weather, seed: number, date: Date }> {
  const results: Array<{ prevWeather: Weather, currWeather: Weather, seed: number, date: Date }> = []
  let prevHash = hashSeed(seed - 1)
  let prevWeather = getWeather(place, weatherRateIndex, prevHash)

  for (let i = 0; results.length < count && i < 100000; ++i) {
    const currHash = hashSeed(seed)
    const currWeather = getWeather(place, weatherRateIndex, currHash)

    if (filter === undefined || filter(prevWeather, currWeather, seed)) {
      results.push({ prevWeather, currWeather, seed, date: getDate(seed) })
    }

    prevHash = currHash
    prevWeather = currWeather
    ++seed
  }

  return results
}
