import EorzeaWeather from 'eorzea-weather'

const _8HR = 8 * 175 * 1000

function calculateWeathers (zoneIds, count = 1, now = new Date()) {
  const startTime = now - _8HR
  const weathers = {}

  zoneIds.forEach(zoneId => {
    const eorzeaWeather = new EorzeaWeather(zoneId)
    const zoneWeathers = []

    for (let i = 0, time = startTime; i <= count; ++i, time += _8HR) {
      zoneWeathers.push(eorzeaWeather.getWeather(new Date(time)))
    }

    weathers[zoneId] = zoneWeathers
  })

  return weathers
}

export default calculateWeathers
