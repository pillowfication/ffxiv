import EorzeaWeather from '@pillowfication/eorzea-weather'

const eorzeaWeather = new EorzeaWeather()

const EORZEAN_RATIO = 1440 / 70
const _8HR = 8 * 60 * 60 * 1000 / EORZEAN_RATIO

export default function forecastWeather (
  zoneId,
  now,
  transitionWeather = 'none',
  targetWeather = 'none',
  bells = []
) {
  let bell = (now.getTime() / _8HR | 0) - 1
  const occurences = []
  transitionWeather = transitionWeather === 'none' ? null : transitionWeather
  targetWeather = targetWeather === 'none' ? null : targetWeather

  let previousWeather
  let currentWeather = eorzeaWeather._getWeather(zoneId, bell * _8HR)
  while (occurences.length < 10) {
    const date = ++bell * _8HR
    previousWeather = currentWeather
    currentWeather = eorzeaWeather._getWeather(zoneId, ++bell * _8HR)
    if ((!transitionWeather || previousWeather === transitionWeather) &&
      (!targetWeather || currentWeather === targetWeather)) {
      const currBell = (bell % 3) * 8
      if (bells[currBell]) {
        occurences.push({
          date: new Date(date),
          bell: currBell,
          previousWeather,
          currentWeather
        })
      }
    }
  }

  return occurences
}
