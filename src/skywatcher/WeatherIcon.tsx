import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import { Weather } from './ffxiv-skywatcher/src/types/weather'
import translateWeather from './ffxiv-skywatcher/src/translate-weather'
import ICONS from './ffxiv-skywatcher/data/weather-icons-map.json'
import softHyphens from './soft-hyphens'
import { useTranslation } from '../i18n'

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
    styles[weather] = { backgroundPosition: `${index * -100}% 0%` }
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
  const weatherName = softHyphens(translateWeather(weather, locale))

  return (
    <>
      <Tooltip arrow placement='top' title={weatherName}>
        <div className={clsx(classes.weatherIcon, classes[weather])} />
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
