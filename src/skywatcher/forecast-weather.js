import EorzeaWeather from '@pillowfication/eorzea-weather'

const EORZEAN_RATIO = 1440 / 70
const _8HR = 8 * 3600 * 1000 / EORZEAN_RATIO
const eorzeaWeather = new EorzeaWeather()

function forecastWeather (
  zoneId,
  now = new Date(),
  transitionWeather,
  targetWeather,
  timeChunks = { 0: true, 8: true, 16: true }
) {
  let timeChunk = (now.getTime() / _8HR | 0) - 1
  const occurences = []
  let previousWeather
  let currentWeather = eorzeaWeather._getWeather(zoneId, timeChunk * _8HR)

  while (occurences.length < 10) {
    const date = ++timeChunk * _8HR
    previousWeather = currentWeather
    currentWeather = eorzeaWeather._getWeather(zoneId, ++timeChunk * _8HR)
    const transitionMatch = !transitionWeather || previousWeather === transitionWeather
    const targetMatch = !targetWeather || currentWeather === targetWeather

    if (transitionMatch && targetMatch) {
      const currTimeChunk = (timeChunk % 3) * 8
      if (timeChunks[currTimeChunk]) {
        occurences.push({
          date: new Date(date),
          timeChunk: currTimeChunk,
          previousWeather,
          currentWeather
        })
      }
    }
  }

  return occurences
}

export default forecastWeather
