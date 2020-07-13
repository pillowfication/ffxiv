import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'classnames'
import PropTypes from 'prop-types'
import EorzeaWeather from '@pillowfication/eorzea-weather'
import Typography from '@material-ui/core/Typography'

const WEATHERS = [
  EorzeaWeather.WEATHER_CLEAR_SKIES,
  EorzeaWeather.WEATHER_FAIR_SKIES,
  EorzeaWeather.WEATHER_CLOUDS,
  EorzeaWeather.WEATHER_WIND,
  EorzeaWeather.WEATHER_GALES,
  EorzeaWeather.WEATHER_FOG,
  EorzeaWeather.WEATHER_RAIN,
  EorzeaWeather.WEATHER_SHOWERS,
  EorzeaWeather.WEATHER_THUNDER,
  EorzeaWeather.WEATHER_THUNDERSTORMS,
  EorzeaWeather.WEATHER_DUST_STORMS,
  'sandstorms', // EorzeaWeather.WEATHER_SANDSTORMS,
  EorzeaWeather.WEATHER_HEAT_WAVES,
  'hotSpells', // EorzeaWeather.WEATHER_HOT_SPELLS,
  EorzeaWeather.WEATHER_SNOW,
  EorzeaWeather.WEATHER_BLIZZARDS,
  EorzeaWeather.WEATHER_GLOOM,
  EorzeaWeather.WEATHER_UMBRAL_STATIC,
  EorzeaWeather.WEATHER_UMBRAL_WIND
]

const WEATHER_THUNDERSTORM = 'Thunder' + String.fromCharCode(173) + 'storms'

const useStyles = makeStyles((theme) => {
  const styles = {
    weatherIcon: {
      display: 'inline-block',
      width: '30px',
      height: '30px',
      backgroundImage: 'url("./images/weather-icons.png")',
      backgroundSize: `${WEATHERS.length * 100}% 100%`
    }
  }
  WEATHERS.forEach((weatherId, index) => {
    styles[weatherId] = {
      backgroundPosition: `${index * -100}% 0%`
    }
  })
  return styles
})

export default function WeatherIcon (props) {
  const { weatherId, locale = 'en' } = props
  const classes = useStyles()
  const weatherString = EorzeaWeather.translateWeather(weatherId, locale)

  return (
    <>
      <div className={cn(classes.weatherIcon, classes[weatherId])} title={weatherString} />
      <br />
      <Typography variant='caption'>
        {weatherString === 'Thunderstorms' ? WEATHER_THUNDERSTORM : weatherString}
      </Typography>
    </>
  )
}

WeatherIcon.propTypes = {
  weatherId: PropTypes.oneOf(WEATHERS).isRequired
}
