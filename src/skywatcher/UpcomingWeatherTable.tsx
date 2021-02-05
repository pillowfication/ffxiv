import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import WeatherIcon from './WeatherIcon'
import renderFfxiv from './render-ffxiv'
import { getSeed, getHashes, getWeather, translatePlace, Place } from './ffxiv-skywatcher'
import { formatTime, formatTimeUtc } from '../utils'
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

interface Props {
  now: Date
  places: Array<{ place: Place, weatherRateIndex: number }>
  showLabels?: boolean
  showLocalTime?: boolean
}

const UpcomingWeatherTable = ({ now, places, showLabels = false, showLocalTime = false }: Props): React.ReactElement => {
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
            {hashes.map((_, index) => {
              const eorzeanTime = new Date((currentSeed - 1 + index) * 28800000)
              const localTime = new Date(eorzeanTime.getTime() / (1440 / 70))
              return (
                <TableCell key={index} className={clsx(classes.weatherTime, index === 1 && classes.current)}>
                  {showLocalTime
                    ? index === 1
                      ? <>
                          {formatTimeUtc(new Date(now.getTime() * (1440 / 70)))} ET
                          <br />
                          {formatTime(now)} LT
                        </>
                      : <>
                          {formatTimeUtc(eorzeanTime)} ET
                          <br />
                          {formatTime(localTime)} LT
                        </>
                    : index === 1
                      ? formatTimeUtc(new Date(now.getTime() * (1440 / 70)))
                      : formatTimeUtc(eorzeanTime)
                  }
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {places.map(({ place, weatherRateIndex }) =>
            <TableRow key={`${place}-${weatherRateIndex}`} hover>
              <TableCell component='th' scope='row' className={classes.regionCell}>
                <Typography>{renderFfxiv(translatePlace(place, locale))}{weatherRateIndex > 0 && ` (alt. ${weatherRateIndex})`}</Typography>
              </TableCell>
              {hashes.map((hash, index) =>
                <TableCell
                  key={index}
                  className={clsx(classes.weatherCell, index === 1 && classes.current)}
                >
                  <WeatherIcon weather={getWeather(place, weatherRateIndex, hash)} showLabel={showLabels} />
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
