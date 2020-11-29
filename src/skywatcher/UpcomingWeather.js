import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { getSeed, getNextWeathers, getZoneWeather, translateId } from './weather'
import REGIONS from './weather/regions'
import { paddedZero, formatTime } from '../utils'
import Section from '../Section'
import Typography from '@material-ui/core/Typography'
import NoSsr from '@material-ui/core/NoSsr'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import WeatherIcon from './WeatherIcon'

const WEATHER_CELL_WIDTH = 75

const useStyles = makeStyles((theme) => ({
  options: {
    marginBottom: theme.spacing(2)
  },
  weatherTable: {
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

const UpcomingWeather = ({ now }) => {
  const [filter, setFilter] = useState('none')
  const [showLabels, setShowLabels] = useState(true)
  const [showLocalTime, setShowLocalTime] = useState(false)
  const [showWeatherChance, setShowWeatherChance] = useState(false)
  const classes = useStyles()
  const router = useRouter()

  useEffect(() => {
    const queryFilter = REGIONS.find((region) => region.query === router.query.filter)
      ? router.query.filter
      : 'none'
    console.log(queryFilter)
    setFilter(queryFilter)
  }, [router.query.filter])

  const handleSelectFilter = (event) => {
    const filter = event.target.value
    router.push({
      pathname: router.pathname,
      query: filter === 'none' ? null : { filter }
    })
  }

  const handleToggleLabels = () => {
    setShowLabels(!showLabels)
  }

  const handleToggleLocalTime = () => {
    setShowLocalTime(!showLocalTime)
  }

  const handleToggleWeatherChance = () => {
    setShowWeatherChance(!showWeatherChance)
  }

  return (
    <Section title='Upcoming Weather'>
      <Grid container spacing={1} className={classes.options}>
        <Grid item xs={12}>
          <FormControl variant='filled' fullWidth margin='dense'>
            <InputLabel>Select a region</InputLabel>
            <Select onChange={handleSelectFilter} value={filter}>
              <MenuItem value='none'>Show all regions</MenuItem>
              {REGIONS.map(({ regionId, query }) =>
                <MenuItem key={query} value={query}>{translateId(regionId)}</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={showLabels}
                onChange={handleToggleLabels}
                color='primary'
              />
            }
            label='Show Labels'
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={showLocalTime}
                onChange={handleToggleLocalTime}
                color='primary'
              />
            }
            label='Show local times'
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={showWeatherChance}
                onChange={handleToggleWeatherChance}
                color='primary'
              />
            }
            label={<>Show <code>weatherChance</code></>}
          />
        </Grid>
      </Grid>
      <NoSsr>
        {(() => {
          if (!now) return null

          const currentSeed = getSeed()
          const hashes = getNextWeathers(currentSeed - 1, 10)
          const filteredRegion = filter !== 'none' && REGIONS.find((region) => region.query === filter)

          return (filteredRegion ? [filteredRegion] : REGIONS).map(({ regionId, zones }) =>
            <React.Fragment key={regionId}>
              <Typography variant='h6' gutterBottom>{translateId(regionId)}</Typography>
              <TableContainer>
                <Table size='small' className={classes.weatherTable}>
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      {hashes.map((hash, index) => {
                        const eorzeanTime = new Date((currentSeed - 1 + index) * 28800000)
                        const localTime = new Date(eorzeanTime.getTime() / (1440 / 70))
                        return (
                          <TableCell key={index} className={cn(classes.weatherTime, index === 1 && classes.current)}>
                            {showLocalTime ? (
                              index === 1 ? (
                                <>
                                  {formatTime(new Date(now.getTime() * (1440 / 70)))} ET
                                  <br />
                                  {formatTime(now)} LT
                                </>
                              ) : (
                                <>
                                  {formatTime(eorzeanTime)} ET
                                  <br />
                                  {formatTime(localTime)} LT
                                </>
                              )
                            ) : (
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
                    {zones.map((zoneId) =>
                      <TableRow key={zoneId} hover>
                        <TableCell component='th' scope='row' className={classes.regionCell}>
                          <Typography>{translateId(zoneId)}</Typography>
                        </TableCell>
                        {hashes.map((hash, index) =>
                          <TableCell
                            key={index}
                            className={cn(classes.weatherCell, index === 1 && classes.current)}
                          >
                            <WeatherIcon weatherId={getZoneWeather(zoneId, hash)} showLabel={showLabels} />
                          </TableCell>
                        )}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </React.Fragment>)
        })()}
      </NoSsr>
    </Section>
  )
}

UpcomingWeather.propTypes = {
  now: PropTypes.object
}

export default UpcomingWeather
