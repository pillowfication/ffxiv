import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import REGIONS from './weather/regions'
import { getDate, translateId, getPossibleWeathers, forecastWeathers } from './weather'
import { toTimeString, timeUntil } from '../utils'
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
import Section from '../Section'
import WeatherIcon from './WeatherIcon'

const DATE_FORMAT = { month: '2-digit', day: '2-digit' }

const ZONES = []
for (const { regionId, zones } of REGIONS) {
  for (const zoneId of zones) {
    ZONES.push({ regionId, zoneId })
  }
}

const WEATHER_CELL_WIDTH = 75
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

function displayBell (seed) {
  switch (seed % 3) {
    case 0: return '00:00'
    case 1: return '08:00'
    case 2: return '16:00'
  }
}

const Forecaster = ({ now }) => {
  const [zone, setZone] = useState(null)
  const [transitionWeather, setTransitionWeather] = useState('none')
  const [targetWeather, setTargetWeather] = useState('none')
  const [times, setTimes] = useState({ 0: true, 8: true, 16: true })
  const classes = useStyles()

  const possibleWeathers = zone && getPossibleWeathers(zone.zoneId)
  const hasTime = times[0] || times[8] || times[16]
  const forecast = (zone && hasTime) &&
    forecastWeathers(zone.zoneId, (previousWeather, currentWeather, seed) => {
      if (transitionWeather !== 'none' && transitionWeather !== previousWeather) return false
      if (targetWeather !== 'none' && targetWeather !== currentWeather) return false
      if (!times[0] && seed % 3 === 0) return false
      if (!times[8] && seed % 3 === 1) return false
      if (!times[16] && seed % 3 === 2) return false
      return true
    })

  const handleSelectZone = (event, newZone) => {
    setZone(newZone)
    setTransitionWeather('none')
    setTargetWeather('none')
  }

  const handleSelectTransitionWeather = (event) => {
    setTransitionWeather(event.target.value)
  }

  const handleSelectTargetWeather = (event) => {
    setTargetWeather(event.target.value)
  }

  const handleSelectTimes = (timeSlot) => {
    setTimes({ ...times, [timeSlot]: !times[timeSlot] })
  }

  return (
    <Section title='Forecaster'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Autocomplete
            options={ZONES}
            groupBy={(zone) => translateId(zone.regionId)}
            getOptionLabel={(option) => translateId(option.zoneId)}
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
                <MenuItem key={weather} value={weather}>{translateId(weather)}</MenuItem>
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
                <MenuItem key={weather} value={weather}>{translateId(weather)}</MenuItem>
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
                    let previousDate

                    return forecast.map(({ previousWeather, currentWeather, seed }, index) => {
                      const time = getDate(seed)
                      const dateString = time.toLocaleDateString(undefined, DATE_FORMAT)
                      const timeString = toTimeString(time, true)

                      return (
                        <TableRow key={index} hover>
                          <TableCell className={classes.dateCell} align='right'>
                            <Typography>{previousDate !== (previousDate = dateString) && dateString}</Typography>
                          </TableCell>
                          <TableCell className={classes.dateCell}>
                            <Typography>{timeString}</Typography>
                          </TableCell>
                          <TableCell className={classes.forecastCell}>
                            <Typography>{timeUntil(now, time)}</Typography>
                          </TableCell>
                          <TableCell align='right' className={classes.bellCell}>
                            <Typography>{displayBell(seed - 1)}</Typography>
                          </TableCell>
                          <TableCell align='center' className={classes.weatherCell}>
                            <WeatherIcon weatherId={previousWeather} />
                          </TableCell>
                          <TableCell className={classes.transitionCell}>
                            <ArrowForwardIcon />
                          </TableCell>
                          <TableCell align='right' className={classes.bellCell}>
                            <Typography>{displayBell(seed)}</Typography>
                          </TableCell>
                          <TableCell align='center' className={classes.weatherCell}>
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

export default Forecaster
