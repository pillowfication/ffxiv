import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import WeatherIcon from './WeatherIcon'
import { Weather } from './ffxiv-skywatcher'
import { toTimeString, timeUntil } from '../utils'
import { useTranslation } from '../i18n'

const DATE_FORMAT = { month: '2-digit', day: '2-digit' }
const WEATHER_CELL_WIDTH = 75

const useStyles = makeStyles(theme => ({
  dateCell: {
    width: '150px'
  },
  forecastCell: {
    whiteSpace: 'nowrap'
  },
  bellCell: {
    width: 50,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5)
  },
  weatherCell: {
    width: WEATHER_CELL_WIDTH + theme.spacing(1),
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    verticalAlign: 'top',
    lineHeight: 1,
    '& span': {
      display: 'inline-block',
      width: WEATHER_CELL_WIDTH,
      lineHeight: 1.1
    },
    '&:last-child': {
      paddingRight: theme.spacing(5),
      width: WEATHER_CELL_WIDTH + theme.spacing(5.5)
    }
  },
  transitionCell: {
    width: 50,
    padding: theme.spacing(1),
    textAlign: 'center'
  }
}))

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
  const classes = useStyles()
  const { i18n } = useTranslation('ocean-fishing')
  const locale = i18n.language

  return (
    <TableContainer>
      <Table size='small'>
        <TableBody>
          {(() => {
            let previousDate: string

            return forecast.map(({ prevWeather, currWeather, seed, date }, index) => {
              const dateString = date.toLocaleDateString(locale, DATE_FORMAT)
              return (
                <TableRow key={index} hover>
                  <TableCell className={classes.dateCell} align='right'>
                    <Typography>{previousDate !== (previousDate = dateString) && dateString}</Typography>
                  </TableCell>
                  <TableCell className={classes.dateCell}>
                    <Typography>{toTimeString(date, { padded: true, locale })}</Typography>
                  </TableCell>
                  <TableCell className={classes.forecastCell}>
                    <Typography>{timeUntil(now, date, { locale })}</Typography>
                  </TableCell>
                  <TableCell align='right' className={classes.bellCell}>
                    <Typography>{displayBell(seed - 1)}</Typography>
                  </TableCell>
                  <TableCell align='center' className={classes.weatherCell}>
                    <WeatherIcon weather={prevWeather} showLabel />
                  </TableCell>
                  <TableCell className={classes.transitionCell}>
                    <ArrowForwardIcon />
                  </TableCell>
                  <TableCell align='right' className={classes.bellCell}>
                    <Typography>{displayBell(seed)}</Typography>
                  </TableCell>
                  <TableCell align='center' className={classes.weatherCell}>
                    <WeatherIcon weather={currWeather} showLabel />
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
