import { Weather } from './types/weathers'
import { Region } from './types/regions'
import { Zone } from './types/zones'
import weathers from './data/weathers.json'
import CHANCES from './chances'
import en from './locales/en.json'
import de from './locales/de.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
import softHyphens from './locales/soft-hyphens'

const LOCALES = { en, de, fr, ja }

export { Weather }
export { Region }
export { Zone }

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

export function getNextWeathers (seed = getSeed(), count = 10) {
  const weathers = []
  for (let index = 0; index < count; ++index) {
    weathers.push(hashSeed(seed + index))
  }
  return weathers
}

export function getZoneWeather (zone: Zone, hash: number) {
  for (const [chance, weather] of CHANCES[zone]) {
    if (chance > hash) {
      return weather
    }
  }
}

export function getPossibleWeathers (zone: Zone) {
  return CHANCES[zone].map(([, weather]) => weather)
}

export function forecastWeathers (
  zone: Zone,
  filter?: (prevWeather: Weather, currWeather: Weather, seed: number) => boolean,
  seed = getSeed(),
  count = 10
) {
  const results: { prevWeather: Weather, currWeather: Weather, seed: number, date: Date }[] = []
  let prevHash = hashSeed(seed - 1)
  let prevWeather = getZoneWeather(zone, prevHash)

  while (results.length < count) {
    const currHash = hashSeed(seed)
    const currWeather = getZoneWeather(zone, currHash)

    if (!filter || filter(prevWeather, currWeather, seed)) {
      results.push({ prevWeather, currWeather, seed, date: getDate(seed) })
    }

    prevHash = currHash
    prevWeather = currWeather
    ++seed
  }

  return results
}

export function translate (type: 'region' | 'zone', id: string, locale: string = 'en') {
  const translation = (LOCALES[locale] && LOCALES[locale][type][id]) || id
  return softHyphens[translation] || translation
}

export function translateWeather (weather: Weather, locale: string = 'en') {
  return weathers[weather][`Name_${locale}`]
}
