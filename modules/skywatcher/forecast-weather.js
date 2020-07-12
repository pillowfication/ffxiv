import EorzeaWeather from 'eorzea-weather'

const EORZEAN_RATIO = 1440 / 70
const _8HR = 8 * 60 * 60 * 1000

export default function forecastWeather (
  zoneId,
  now,
  transitionWeather = 'none',
  targetWeather = 'none',
  bells = []
) {
  let bell = ((now.getTime() * EORZEAN_RATIO) / _8HR | 0) - 1
  const occurences = []
  const eorzeaWeather = new EorzeaWeather(zoneId)
  transitionWeather = transitionWeather === 'none' ? null : transitionWeather
  targetWeather = targetWeather === 'none' ? null : targetWeather

  let previousWeather
  let currentWeather = eorzeaWeather.getWeather(new Date(bell * _8HR / EORZEAN_RATIO))
  while (occurences.length < 10) {
    const date = new Date(++bell * _8HR / EORZEAN_RATIO)
    previousWeather = currentWeather
    currentWeather = eorzeaWeather.getWeather(date)
    if ((!transitionWeather || previousWeather === transitionWeather) &&
      (!targetWeather || currentWeather === targetWeather)) {
      const currBell = (bell % 3) * 8
      if (bells[currBell]) {
        occurences.push({
          date,
          bell: currBell,
          previousWeather,
          currentWeather
        })
      }
    }
  }
  return occurences
}

typeof window !== 'undefined' && (window.asdf = forecastWeather)
