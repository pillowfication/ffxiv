import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import cn from 'classnames'
import PropTypes from 'prop-types'
import EorzeaWeather from '@pillowfication/eorzea-weather'
import REGIONS from './regions'
import getEorzeanTime from './get-eorzean-time'
import calculateWeathers from './calculate-weathers'
import { paddedZero } from '../utils'
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

const ZONES = REGIONS.map(region => region.zones).flat()
const WEATHER_CELL_WIDTH = 75
const eorzeaWeather = new EorzeaWeather({ locale: 'en' })

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
  },
  timeLine: {
    position: 'absolute',
    display: 'block',
    top: 0,
    left: 0,
    bottom: -1,
    width: ({ now }) => {
      if (!now) return 0

      const eorzeanTime = getEorzeanTime(now)
      const hours = eorzeanTime.getUTCHours() % 8
      const minutes = hours * 60 + eorzeanTime.getUTCMinutes()
      return `${minutes / 480 * 100}%`
    },
    borderRight: `2px solid ${fade(theme.palette.action.hover, 0.2)}`
  }
}))

const UpcomingWeather = (props) => {
  const { now } = props
  const [filter, setFilter] = useState('none')
  const [showLabels, setShowLabels] = useState(true)
  const [showLocalTime, setShowLocalTime] = useState(false)
  const classes = useStyles(props)
  const router = useRouter()
  const firstRender = useRef(false)
  const cachedForecast = useRef(null)
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.up('sm'))
  const md = useMediaQuery(theme.breakpoints.up('md'))
  const lg = useMediaQuery(theme.breakpoints.up('lg'))

  useEffect(() => {
    const queryFilter = REGIONS.find((region) => region.query === router.query.filter)
      ? router.query.filter
      : 'none'
    if ((!firstRender.current && now) || filter !== queryFilter) {
      firstRender.current = true
      cachedForecast.current = null
      setFilter(queryFilter)
    }

    if (!now || getEorzeanTime(now).getUTCMinutes() === 0) {
      cachedForecast.current = null
    }
  })

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

  return (
    <Section title='Upcoming Weather'>
      <Grid container spacing={1} className={classes.options}>
        <Grid item xs={12}>
          <FormControl variant='filled' fullWidth margin='dense'>
            <InputLabel>Select a region</InputLabel>
            <Select onChange={handleSelectFilter} value={filter}>
              <MenuItem value='none'>Show all regions</MenuItem>
              {REGIONS.map(({ regionId, query }) =>
                <MenuItem key={query} value={query}>{eorzeaWeather.translateRegion(regionId)}</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
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
        <Grid item xs={6}>
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
      </Grid>
      <NoSsr>
        {(() => {
          if (!now) return null

          const weathersCount = lg ? 9 : md ? 7 : sm ? 6 : 3
          const weathers = cachedForecast.current || (cachedForecast.current = calculateWeathers(ZONES, 9, now))
          const eorzeanTime = getEorzeanTime(now)
          const timeChunk = Math.floor(eorzeanTime.getUTCHours() / 8) * 8
          const filteredRegion = filter !== 'none' && REGIONS.find((region) => region.query === filter)

          return (filteredRegion ? [filteredRegion] : REGIONS).map(({ regionId, zones }) =>
            <React.Fragment key={regionId}>
              <Typography variant='h6' gutterBottom>{eorzeaWeather.translateRegion(regionId)}</Typography>
              <TableContainer>
                <Table size='small' className={classes.weatherTable}>
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      {Array(weathersCount + 1).fill().map((_, index) =>
                        <TableCell key={index} className={cn(classes.weatherTime, index === 1 && classes.current)}>
                          {index === 1
                            ? eorzeanTime.toString()
                            : paddedZero((24 + timeChunk + 8 * (index - 1)) % 24) + ':00'}
                        </TableCell>)}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {zones.map((zoneId) =>
                      <TableRow key={zoneId} hover>
                        <TableCell component='th' scope='row' className={classes.regionCell}>
                          <Typography>{eorzeaWeather.translateZone(zoneId)}</Typography>
                        </TableCell>
                        {weathers[zoneId].slice(0, weathersCount + 1).map((weatherId, index) =>
                          <TableCell
                            key={index}
                            className={cn(classes.weatherCell, {
                              [classes.previous]: index === 0,
                              [classes.current]: index === 1
                            })}
                          >
                            {index === 1 && <div className={classes.timeLine} />}
                            <WeatherIcon weatherId={weatherId} showLabel={showLabels} />
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
