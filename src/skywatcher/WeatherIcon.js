import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'classnames'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { translateId } from './weather'
import * as WEATHERS from './weather/consts/weathers'

const WEATHER_IDS = [
  WEATHERS.CLEAR_SKIES,
  WEATHERS.FAIR_SKIES,
  WEATHERS.CLOUDS,
  WEATHERS.WIND,
  WEATHERS.GALES,
  WEATHERS.FOG,
  WEATHERS.RAIN,
  WEATHERS.SHOWERS,
  WEATHERS.THUNDER,
  WEATHERS.THUNDERSTORMS,
  WEATHERS.DUST_STORMS,
  WEATHERS.SANDSTORMS,
  WEATHERS.HEAT_WAVES,
  WEATHERS.HOT_SPELLS,
  WEATHERS.SNOW,
  WEATHERS.BLIZZARDS,
  WEATHERS.GLOOM,
  WEATHERS.UMBRAL_STATIC,
  WEATHERS.UMBRAL_WIND
]

const useStyles = makeStyles((theme) => {
  const styles = {
    weatherIcon: {
      display: 'inline-block',
      width: '30px',
      height: '30px',
      backgroundImage: 'url("./images/weather-icons.png")',
      backgroundSize: `${WEATHER_IDS.length * 100}% 100%`
    }
  }
  WEATHER_IDS.forEach((weatherId, index) => {
    styles[weatherId] = { backgroundPosition: `${index * -100}% 0%` }
  })
  return styles
})

const WeatherIcon = ({ weatherId, showLabel = true }) => {
  const classes = useStyles()
  const weatherString = translateId(weatherId)

  return (
    <>
      <div className={cn(classes.weatherIcon, classes[weatherId])} title={weatherString} />
      {showLabel && (
        <>
          <br />
          <Typography variant='caption'>{weatherString}</Typography>
        </>
      )}
    </>
  )
}

WeatherIcon.propTypes = {
  weatherId: PropTypes.oneOf(WEATHER_IDS).isRequired,
  showLabel: PropTypes.bool
}

export default React.memo(WeatherIcon)
