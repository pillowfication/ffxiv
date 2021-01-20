import { Weather } from './types/weather'
import { Place } from './types/place'
import partition from './data/partition.json'
import weathers from './data/weathers.json'
import weatherRates from './data/weather-rates.json'
import placeNames from './data/place-names.json'
import softHyphens from './soft-hyphens'

export { Weather }
export { Place }

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

export function getWeather (place: Place, hash = hashSeed()): Weather {
  const rates = weatherRates[partition.weatherRates[place]].Rates
  for (const [chance, weather] of rates) {
    if (chance > hash) {
      return weather
    }
  }
}

export function getPossibleWeathers (place: Place): Weather[] {
  const rates = weatherRates[partition.weatherRates[place]].Rates
  return rates.map(([, weather]) => weather)
}

export function forecastWeathers (
  place: Place,
  filter?: (prevWeather: Weather, currWeather: Weather, seed: number) => boolean,
  seed = getSeed(),
  count = 10
) {
  const results: { prevWeather: Weather, currWeather: Weather, seed: number, date: Date }[] = []
  let prevHash = hashSeed(seed - 1)
  let prevWeather = getWeather(place, prevHash)

  for (let i = 0; results.length < count && i < 10000; ++i) {
    const currHash = hashSeed(seed)
    const currWeather = getWeather(place, currHash)

    if (!filter || filter(prevWeather, currWeather, seed)) {
      results.push({ prevWeather, currWeather, seed, date: getDate(seed) })
    }

    prevHash = currHash
    prevWeather = currWeather
    ++seed
  }

  return results
}

export function translateWeather (weather: Weather, locale: string = 'en'): string {
  const weatherString = weathers[weather][`Name_${locale}`]
  return softHyphens[weatherString] || weatherString
}

export function translatePlace (place: Place, locale: string = 'en'): string {
  return placeNames[place][`Name_${locale}`]
}
