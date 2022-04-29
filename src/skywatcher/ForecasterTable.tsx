import React from 'react'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import WeatherIcon from './WeatherIcon'
import { translateWeather, Weather } from './ffxiv-skywatcher'
import { toTimeString, timeUntil } from '../utils'
import softHyphens from './soft-hyphens'

const DATE_FORMAT = { month: '2-digit' as const, day: '2-digit' as const }

function displayBell (seed: number): string {
  switch (seed % 3) {
    case 0: return '00:00'
    case 1: return '08:00'
    case 2: return '16:00'
    default: return '??:??'
  }
}

interface Props {
  now: Date
  forecast: Array<{ prevWeather: Weather, currWeather: Weather, seed: number, date: Date }>
}

const Forecaster = ({ now, forecast }: Props): React.ReactElement => {
  const { i18n } = useTranslation('ocean-fishing')
  const locale = i18n.language

  return (
    <TableContainer sx={{ mb: 2 }}>
      <Table size='small'>
        <TableBody>
          {(() => {
            let previousDate: string

            return forecast.map(({ prevWeather, currWeather, seed, date }, index) => {
              const dateString = date.toLocaleDateString(locale, DATE_FORMAT)
              return (
                <TableRow key={index} hover>
                  <TableCell align='right' sx={{ width: 100 }}>
                    <Typography>{previousDate !== (previousDate = dateString) && dateString}</Typography>
                  </TableCell>
                  <TableCell align='right' sx={{ width: 150 }}>
                    <Typography>{toTimeString(date, { padded: true, locale })}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{timeUntil(now, date, { locale })}</Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography>{displayBell(seed - 1)}</Typography>
                  </TableCell>
                  <TableCell align='center' sx={{ width: 100, verticalAlign: 'top' }}>
                    <WeatherIcon weather={prevWeather} />
                    <Typography component='div' variant='caption' sx={{ lineHeight: '110%' }}>
                      {softHyphens(translateWeather(prevWeather, locale))}
                    </Typography>
                  </TableCell>
                  <TableCell align='center' sx={{ width: 0 }}>
                    <ArrowForwardIcon />
                  </TableCell>
                  <TableCell align='right' sx={{ width: 0 }}>
                    <Typography>{displayBell(seed)}</Typography>
                  </TableCell>
                  <TableCell align='center' sx={{ width: 100, verticalAlign: 'top' }}>
                    <WeatherIcon weather={currWeather} />
                    <Typography component='div' variant='caption' sx={{ lineHeight: '110%' }}>
                      {softHyphens(translateWeather(currWeather, locale))}
                    </Typography>
                  </TableCell>
                </TableRow>
              )
            })
          })()}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Forecaster
