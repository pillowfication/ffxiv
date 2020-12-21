import CHANCES from './chances'

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
  return Array(count).fill().map((_, index) => hashSeed(seed + index))
}

export function getZoneWeather (zone, hash) {
  const chances = CHANCES[zone]
  for (let index = 0; ; ++index) {
    if (chances[index] > hash) {
      return chances[index + 1]
    }
  }
}

export function getPossibleWeathers (zone) {
  const chances = CHANCES[zone]
  return chances.filter((_, index) => index % 2 === 1)
}

export function forecastWeathers (zone, filter, seed = getSeed(), count = 10) {
  const results = []
  let previousHash = hashSeed(seed - 1)

  while (results.length < count) {
    const currentHash = hashSeed(seed)
    const previousWeather = getZoneWeather(zone, previousHash)
    const currentWeather = getZoneWeather(zone, currentHash)

    if (filter(previousWeather, currentWeather, seed)) {
      results.push({ previousWeather, currentWeather, seed })
    }

    previousHash = currentHash
    ++seed
  }

  return results
}

const cache = {}
export function translateId (id) {
  return cache[id] || (cache[id] = (id[0].toUpperCase() + id.slice(1)).split(/(?=[A-Z])/).join(' '))
}
