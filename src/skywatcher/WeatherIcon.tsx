import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import { Weather } from './weather/consts'
import { translate } from './weather'
import i18n from '../i18n'
import { I18n } from 'next-i18next'

const WEATHERS = [
  Weather.ClearSkies,
  Weather.FairSkies,
  Weather.Clouds,
  Weather.Wind,
  Weather.Gales,
  Weather.Fog,
  Weather.Rain,
  Weather.Showers,
  Weather.Thunder,
  Weather.Thunderstorms,
  Weather.DustStorms,
  Weather.Sandstorms,
  Weather.HeatWaves,
  Weather.HotSpells,
  Weather.Snow,
  Weather.Blizzards,
  Weather.Gloom,
  Weather.UmbralStatic,
  Weather.UmbralWind
]

const useStyles = makeStyles(() => {
  const styles = {
    weatherIcon: {
      display: 'inline-block',
      width: '30px',
      height: '30px',
      verticalAlign: 'middle',
      backgroundImage: 'url("/images/weather-icons.png")',
      backgroundSize: `${WEATHERS.length * 100}% 100%`
    },
    label: {
      '-webkit-hyphens': 'auto' as 'auto',
      '-ms-hyphens': 'auto' as 'auto',
      hyphens: 'auto' as 'auto'
    }
  }
  WEATHERS.forEach((weatherId, index) => {
    styles[weatherId] = { backgroundPosition: `${index * -100}% 0%` }
  })
  return styles
})

type Props = {
  weather: Weather,
  showLabel?: boolean,
  i18n: I18n
}

const WeatherIcon = ({ weather, showLabel = false, i18n }: Props) => {
  const classes = useStyles()
  const weatherString = translate('weather', weather, i18n.language)

  return (
    <>
      <Tooltip arrow placement='top' title={weatherString}>
        <div className={clsx(classes.weatherIcon, classes[weather])} />
      </Tooltip>
      {showLabel && (
        <>
          <br />
          <Typography variant='caption' className={classes.label}>{weatherString}</Typography>
        </>
      )}
    </>
  )
}

export default i18n.withTranslation()(WeatherIcon)
