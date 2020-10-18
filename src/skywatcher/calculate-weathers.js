import EorzeaWeather from '@pillowfication/eorzea-weather'

const eorzeaWeather = new EorzeaWeather()
console.log(eorzeaWeather)
const _8HR = 8 * 175 * 1000

function calculateWeathers (zoneIds, count = 1, now = Date.now()) {
  const startTime = now - _8HR
  const weathers = {}
  const weatherChances = []

  zoneIds.forEach(zoneId => {
    const zoneWeathers = []
    for (let i = 0, date = startTime; i <= count; ++i, date += _8HR) {
      zoneWeathers.push(eorzeaWeather._getWeather(zoneId, date))
    }
    weathers[zoneId] = zoneWeathers
  })

  for (let i = 0, date = startTime; i <= count; ++i, date += _8HR) {
    weatherChances.push(eorzeaWeather.getWeatherChance(date))
  }

  return { weathers, weatherChances }
}

export default calculateWeathers
