import { Weather } from './src/types/weather'
import { Place } from './src/types/place'
import partition from './data/partition.json'
import weatherRates from './data/weather-rates.json'

export { Weather }
export { Place }
export { default as translateWeather } from './src/translate-weather'
export { default as translatePlace } from './src/translate-place'

// Having these two functions is so ugly
export function getRegions (): Place[] {
  return Object.keys(partition.partition)
    .map(key => Number(key))
    .sort((a, b) => a - b)
}

export function getPlaces (region: Place): Place[] {
  return (partition.partition[region] as Place[])
    .sort((a, b) => a - b)
}

export function getSeed (date = new Date()) {
  return Math.floor(date.getTime() / 1400000)
}

export function getDate (seed = getSeed()) {
  return new Date(seed * 1400000)
}

export function hashSeed (seed = getSeed()) {
  const base = Math.floor(seed / 3) * 100 + ((seed + 1) % 3) * 8
  const step1 = ((base << 11) ^ base) >>> 0
  const step2 = ((step1 >>> 8) ^ step1) >>> 0
  return step2 % 100
}

export function getHashes (seed = getSeed(), count = 10): number[] {
  const hashes = []
  for (let index = 0; index < count; ++index) {
    hashes.push(hashSeed(seed + index))
  }
  return hashes
}

export function getWeather (place: Place, weatherRateIndex = 0, hash = hashSeed()): Weather {
  const rates = weatherRates[partition.weatherRates[place][weatherRateIndex]].Rates
  for (const [chance, weather] of rates) {
    if (chance > hash) {
      return weather
    }
  }
}

export function getPossibleWeathers (place: Place, weatherRateIndex = 0): Weather[] {
  const rates = weatherRates[partition.weatherRates[place][weatherRateIndex]].Rates
  return rates.map(([, weather]) => weather)
}

export function forecastWeathers (
  place: Place,
  weatherRateIndex = 0,
  filter?: (prevWeather: Weather, currWeather: Weather, seed: number) => boolean,
  seed = getSeed(),
  count = 10
) {
  const results: { prevWeather: Weather, currWeather: Weather, seed: number, date: Date }[] = []
  let prevHash = hashSeed(seed - 1)
  let prevWeather = getWeather(place, weatherRateIndex, prevHash)

  for (let i = 0; results.length < count && i < 100000; ++i) {
    const currHash = hashSeed(seed)
    const currWeather = getWeather(place, weatherRateIndex, currHash)

    if (!filter || filter(prevWeather, currWeather, seed)) {
      results.push({ prevWeather, currWeather, seed, date: getDate(seed) })
    }

    prevHash = currHash
    prevWeather = currWeather
    ++seed
  }

  return results
}
