import React from 'react'
import { useTranslation } from 'next-i18next'
import { SxProps, Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import { Weather } from './ffxiv-skywatcher/src/types'
import translateWeather from './ffxiv-skywatcher/src/translate-weather'
import ICONS from './ffxiv-skywatcher/data/weather-icons-map.json'

const ICON_SIZE = 32

interface Props {
  weather: Weather
  sx?: SxProps<Theme>
}

const WeatherIcon = ({ weather, sx = [] }: Props): React.ReactElement => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  return (
    <Tooltip title={translateWeather(weather, locale)}>
      <Box
        sx={[{
          display: 'inline-block',
          width: ICON_SIZE,
          height: ICON_SIZE,
          verticalAlign: 'middle',
          backgroundImage: 'url("/images/skywatcher/weather-icons.png")',
          backgroundSize: `${ICONS.length * 100}% 100%`
        }, ...(Array.isArray(sx) ? sx : [sx])]}
        style={{
          backgroundPosition: `${ICONS.indexOf(weather) * -100}% 0%`
        }}
      />
    </Tooltip>
  )
}

export default React.memo(WeatherIcon)
