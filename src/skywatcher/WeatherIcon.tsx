import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import { translateWeather, Weather } from './weather'
import { useTranslation } from '../i18n'
import ICONS from './weather/data/weather-icons-map.json'

const ICON_SIZE = 32

const useStyles = makeStyles(() => {
  const styles = {
    weatherIcon: {
      display: 'inline-block',
      width: ICON_SIZE,
      height: ICON_SIZE,
      verticalAlign: 'middle',
      backgroundImage: 'url("/images/weather-icons.png")',
      backgroundSize: `${ICONS.length * 100}% 100%`
    }
  }
  ICONS.forEach((weather, index) => {
    styles[`w${weather}`] = { backgroundPosition: `${index * -100}% 0%` }
  })
  return styles
})

type Props = {
  weather: Weather,
  showLabel?: boolean
}

const WeatherIcon = ({ weather, showLabel = false }: Props) => {
  const classes = useStyles()
  const { i18n } = useTranslation()
  const locale = i18n.language
  const weatherName = translateWeather(weather, locale)

  return (
    <>
      <Tooltip arrow placement='top' title={weatherName}>
        <div className={clsx(classes.weatherIcon, classes[`w${weather}`])} />
      </Tooltip>
      {showLabel && (
        <>
          <br />
          <Typography variant='caption'>{weatherName}</Typography>
        </>
      )}
    </>
  )
}

export default React.memo(WeatherIcon)
