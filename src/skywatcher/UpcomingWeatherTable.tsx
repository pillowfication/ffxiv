import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { getSeed, getHashes, getWeather, translatePlace } from './weather'
import { paddedZero, formatTime } from '../utils'
import Typography from '@material-ui/core/Typography'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import WeatherIcon from './WeatherIcon'
import { Place } from './weather'
import { useTranslation } from '../i18n'

const WEATHER_CELL_WIDTH = 75

const useStyles = makeStyles(theme => ({
  weatherTable: {
    overflow: 'hidden',
    '& thead th': {
      fontWeight: 'normal',
      '&$current': {
        fontWeight: 'bold'
      }
    },
    ':not(:last-child) > &': {
      marginBottom: theme.spacing(4)
    }
  },
  weatherTime: {
    textAlign: 'center',
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    '&:last-child': {
      paddingRight: theme.spacing(1),
      width: WEATHER_CELL_WIDTH + theme.spacing(1.5)
    }
  },
  regionCell: {
    minWidth: 200
  },
  weatherCell: {
    width: WEATHER_CELL_WIDTH + theme.spacing(1),
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    textAlign: 'center',
    verticalAlign: 'top',
    lineHeight: 1,
    '& span': {
      display: 'inline-block',
      width: WEATHER_CELL_WIDTH,
      lineHeight: 1.1
    },
    '&:last-child': {
      paddingRight: theme.spacing(1),
      width: WEATHER_CELL_WIDTH + theme.spacing(1.5)
    }
  },
  current: {
    position: 'relative',
    backgroundColor: theme.palette.action.hover
  }
}))

type Props = {
  now: Date,
  places: Place[],
  showLabels?: boolean,
  showLocalTime?: boolean,
  showWeatherChance?: boolean
}

const UpcomingWeatherTable = ({ now, places, showLabels, showLocalTime, showWeatherChance }: Props) => {
  const classes = useStyles()
  const { i18n } = useTranslation()
  const currentSeed = getSeed(now)
  const hashes = getHashes(currentSeed - 1, 10)
  const locale = i18n.language

  return (
    <TableContainer>
      <Table size='small' className={classes.weatherTable}>
        <TableHead>
          <TableRow>
            <TableCell />
            {hashes.map((hash, index) => {
              const eorzeanTime = new Date((currentSeed - 1 + index) * 28800000)
              const localTime = new Date(eorzeanTime.getTime() / (1440 / 70))
              return (
                <TableCell key={index} className={clsx(classes.weatherTime, index === 1 && classes.current)}>
                  {showLocalTime
                    ? index === 1
                        ? (
                          <>
                            {formatTime(new Date(now.getTime() * (1440 / 70)))} ET
                            <br />
                            {formatTime(now)} LT
                          </>
                          )
                        : (
                          <>
                            {formatTime(eorzeanTime)} ET
                            <br />
                            {formatTime(localTime)} LT
                          </>
                          )
                    : (
                        index === 1
                          ? formatTime(new Date(now.getTime() * (1440 / 70)))
                          : formatTime(eorzeanTime)
                      )}
                  {showWeatherChance && (
                    <>
                      <br />
                      {paddedZero(hash)}
                    </>
                  )}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {places.map(place =>
            <TableRow key={place} hover>
              <TableCell component='th' scope='row' className={classes.regionCell}>
                <Typography>{translatePlace(place, locale)}</Typography>
              </TableCell>
              {hashes.map((hash, index) =>
                <TableCell
                  key={index}
                  className={clsx(classes.weatherCell, index === 1 && classes.current)}
                >
                  <WeatherIcon weather={getWeather(place, 0, hash)} showLabel={showLabels} />
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UpcomingWeatherTable
