import EorzeaWeather from 'eorzea-weather'

import SEEDS from './seeds.json'

const cache = {}

export default function getPossibleWeathers (zoneId) {
  if (cache[zoneId]) {
    return cache[zoneId]
  }

  const getWeather = (date) => EorzeaWeather.getWeather(zoneId, date)
  const possibleWeathers = []
  let lastWeather
  for (let chance = 0; chance < 100; chance += 5) {
    const nextWeather = getWeather(new Date(SEEDS[chance] * 1000))
    if (nextWeather !== lastWeather) {
      possibleWeathers.push(nextWeather)
      lastWeather = nextWeather
    }
  }
  return (cache[zoneId] = possibleWeathers)
}
