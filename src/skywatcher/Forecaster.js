import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import EorzeaWeather, { chances } from '@pillowfication/eorzea-weather'
import forecastWeather from './forecast-weather'
import REGIONS from './regions'
import getEorzeanTime from './get-eorzean-time'
import Section from '../Section'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import MenuItem from '@material-ui/core/MenuItem'
import Autocomplete from '@material-ui/lab/Autocomplete'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import WeatherIcon from './WeatherIcon'

const ZONES = []
for (const { regionId, zones } of REGIONS) {
  for (const zoneId of zones) {
    ZONES.push({ regionId, zoneId })
  }
}

const WEATHER_CELL_WIDTH = 75
const eorzeaWeather = new EorzeaWeather({ locale: 'en' })

function displayBell (bell) {
  return bell > 9 ? bell + ':00' : '0' + bell + ':00'
}

const useStyles = makeStyles((theme) => ({
  transitionWeather: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2)
    }
  },
  transitionArrow: {
    display: 'block',
    margin: `${theme.spacing(0.5)}px auto`,
    fontSize: '2em',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  dateCell: {
    width: '100px',
    textAlign: 'right'
  },
  forecastCell: {
    whiteSpace: 'nowrap'
  },
  bellCell: {
    width: 50,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    textAlign: 'right'
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

export default function Forecaster (props) {
  const { now } = props
  const [zone, setZone] = useState(null)
  const [transitionWeather, setTransitionWeather] = useState('none')
  const [targetWeather, setTargetWeather] = useState('none')
  const [times, setTimes] = useState({ 0: true, 8: true, 16: true })
  const classes = useStyles()
  const cachedForecast = useRef(null)

  useEffect(() => {
    if (!now || getEorzeanTime(now).getUTCMinutes() === 0) {
      cachedForecast.current = null
    }
  })

  const possibleWeathers = zone && chances[zone.zoneId].map(({ w: weatherId }) => weatherId)
  const hasTime = times[0] || times[8] || times[16]
  const forecast = zone && hasTime &&
    (cachedForecast.current || (cachedForecast.current = forecastWeather(
      zone.zoneId,
      now,
      transitionWeather === 'none' ? null : transitionWeather,
      targetWeather === 'none' ? null : targetWeather,
      times
    )))

  const handleSelectZone = (event, newZone) => {
    cachedForecast.current = null
    setZone(newZone)
    setTransitionWeather('none')
    setTargetWeather('none')
  }

  const handleSelectTransitionWeather = (event) => {
    cachedForecast.current = null
    setTransitionWeather(event.target.value)
  }

  const handleSelectTargetWeather = (event) => {
    cachedForecast.current = null
    setTransitionWeather(event.target.value)
  }

  const handleSelectTimes = (timeSlot) => {
    cachedForecast.current = null
    setTimes({ ...times, [timeSlot]: !times[timeSlot] })
  }

  return (
    <Section title='Forecaster'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Autocomplete
            options={ZONES}
            groupBy={(zone) => eorzeaWeather.translateRegion(zone.regionId)}
            getOptionLabel={(option) => eorzeaWeather.translateZone(option.zoneId)}
            renderInput={(params) => <TextField {...params} label='Select a zone' />}
            value={zone}
            getOptionSelected={(opt1, opt2) => opt1.zoneId === opt2.zoneId}
            onChange={handleSelectZone}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth className={classes.transitionWeather}>
            <InputLabel>Transition from</InputLabel>
            <Select
              value={transitionWeather}
              disabled={!zone}
              onChange={handleSelectTransitionWeather}
            >
              <MenuItem value='none'>{possibleWeathers ? 'Any weather' : 'Select a zone first'}</MenuItem>
              {possibleWeathers && possibleWeathers.map((weather) =>
                <MenuItem key={weather} value={weather}>{eorzeaWeather.translateWeather(weather)}</MenuItem>
              )}
            </Select>
          </FormControl>
          <ArrowDownwardIcon className={classes.transitionArrow} />
          <FormControl fullWidth>
            <InputLabel>Target weather</InputLabel>
            <Select
              value={targetWeather}
              disabled={!zone}
              onChange={handleSelectTargetWeather}
            >
              <MenuItem value='none'>{possibleWeathers ? 'Any weather' : 'Select a zone first'}</MenuItem>
              {possibleWeathers && possibleWeathers.map((weather) =>
                <MenuItem key={weather} value={weather}>{eorzeaWeather.translateWeather(weather)}</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Select times</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={times[0]} onChange={handleSelectTimes.bind(null, 0)} />}
                label='00:00'
              />
              <FormControlLabel
                control={<Checkbox checked={times[8]} onChange={handleSelectTimes.bind(null, 8)} />}
                label='08:00'
              />
              <FormControlLabel
                control={<Checkbox checked={times[16]} onChange={handleSelectTimes.bind(null, 16)} />}
                label='16:00'
              />
            </FormGroup>
          </FormControl>
        </Grid>
        {zone && !hasTime &&
          <Grid item xs={12}>
            <Typography><strong>Error:</strong> At least one time must be selected.</Typography>
          </Grid>}
        {forecast &&
          <Grid item xs={12}>
            <Typography variant='h6' gutterBottom>Next 10 matches</Typography>
            <TableContainer>
              <Table size='small' className={classes.weatherTable}>
                <TableBody>
                  {(() => {
                    let previousDate = ''
                    return forecast.map(({ date, timeChunk, previousWeather, currentWeather }, index) => {
                      const momentDate = moment(date)
                      const currentDate = momentDate.format('MM/DD')
                      return (
                        <TableRow key={index} hover>
                          <TableCell className={classes.dateCell}>
                            <Typography>{previousDate !== (previousDate = currentDate) ? currentDate : null}</Typography>
                          </TableCell>
                          <TableCell className={classes.dateCell}>
                            <Typography>{momentDate.format('HH:mm')}</Typography>
                          </TableCell>
                          <TableCell className={classes.forecastCell}>
                            <Typography>{moment.duration(momentDate.diff(now)).humanize(true)}</Typography>
                          </TableCell>
                          <TableCell className={classes.bellCell}>
                            <Typography>{displayBell((timeChunk + 16) % 24)}</Typography>
                          </TableCell>
                          <TableCell className={classes.weatherCell}>
                            <WeatherIcon weatherId={previousWeather} />
                          </TableCell>
                          <TableCell className={classes.transitionCell}>
                            <ArrowForwardIcon />
                          </TableCell>
                          <TableCell className={classes.bellCell}>
                            <Typography>{displayBell(timeChunk)}</Typography>
                          </TableCell>
                          <TableCell className={classes.weatherCell}>
                            <WeatherIcon weatherId={currentWeather} />
                          </TableCell>
                        </TableRow>
                      )
                    })
                  })()}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>}
      </Grid>
    </Section>
  )
}

Forecaster.propTypes = {
  now: PropTypes.object
}
