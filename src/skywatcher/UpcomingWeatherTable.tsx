import React from 'react'
import { useTranslation } from 'next-i18next'
import { alpha } from '@mui/system'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import WeatherIcon from './WeatherIcon'
import renderFfxiv from './render-ffxiv'
import {
  getSeed,
  getHashes,
  getWeather,
  translatePlace,
  translateWeather,
  Place
} from './ffxiv-skywatcher'
import { formatTime, formatTimeUtc } from '../utils'
import softHyphens from './soft-hyphens'

interface Props {
  now: Date
  places: Array<{ place: Place, weatherRateIndex: number }>
  showLabels?: boolean
  showLocalTime?: boolean
  count?: number
  hidePlaceName?: boolean
}

const UpcomingWeatherTable = ({
  now,
  places,
  showLabels = false,
  showLocalTime = false,
  count = 10,
  hidePlaceName = false
}: Props): React.ReactElement => {
  const { i18n } = useTranslation()
  const currentSeed = getSeed(now)
  const hashes = getHashes(currentSeed - 1, count)
  const locale = i18n.language

  return (
    <TableContainer sx={{ mb: 2 }}>
      <Table size='small' sx={{ '& th, & td': { p: 0.5 } }}>
        <TableHead>
          <TableRow>
            {!hidePlaceName && <TableCell />}
            {hashes.map((_, index) => {
              const eorzeanTime = new Date((currentSeed - 1 + index) * 28800000)
              const localTime = new Date(eorzeanTime.getTime() / (1440 / 70))
              return (
                <TableCell key={index} align='center' sx={{
                  fontWeight: index === 1 ? 'bold' : 'normal',
                  backgroundColor: index === 1 ? theme => alpha(theme.palette.primary.light, 0.25) : 'none'
                }}>
                  {showLocalTime
                    ? index === 1
                      ? <>
                          <div>{formatTimeUtc(new Date(now.getTime() * (1440 / 70)))}&nbsp;ET</div>
                          <div>{formatTime(now)}&nbsp;LT</div>
                        </>
                      : <>
                          <div>{formatTimeUtc(eorzeanTime)}&nbsp;ET</div>
                          <div>{formatTime(localTime)}&nbsp;LT</div>
                        </>
                    : index === 1
                      ? <div>{formatTimeUtc(new Date(now.getTime() * (1440 / 70)))}</div>
                      : <div>{formatTimeUtc(eorzeanTime)}</div>
                  }
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {places.map(({ place, weatherRateIndex }) =>
            <TableRow key={`${place}-${weatherRateIndex}`} hover>
              {!hidePlaceName && (
                <TableCell component='th' scope='row' sx={{ minWidth: 200 }}>
                  <Typography sx={{ ml: 1 }}>
                    {renderFfxiv(translatePlace(place, locale))}{weatherRateIndex > 0 && ` (alt. ${weatherRateIndex})`}
                  </Typography>
                </TableCell>
              )}
              {hashes.map((hash, index) => {
                const weather = getWeather(place, weatherRateIndex, hash)
                return (
                  <TableCell key={index} align='center' sx={{
                    width: 80,
                    verticalAlign: 'top',
                    backgroundColor: index === 1 ? theme => alpha(theme.palette.primary.light, 0.25) : 'none'
                  }}>
                    <WeatherIcon weather={weather} />
                    {showLabels && (
                      <Typography component='div' variant='caption' sx={{ lineHeight: '110%' }}>
                        {softHyphens(translateWeather(weather, locale))}
                      </Typography>
                    )}
                  </TableCell>
                )
              })}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UpcomingWeatherTable
