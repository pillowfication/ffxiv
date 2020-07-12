import React, { useState } from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import EorzeaWeather from 'eorzea-weather'
import getPossibleWeathers from './get-possible-weathers'
import forecastWeather from './forecast-weather'
import { REGIONS_LIST } from './regions'
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
for (const region of REGIONS_LIST) {
  for (const zone of region.zones) {
    ZONES.push({ zoneId: zone, region: region.name })
  }
}

const WEATHER_CELL_WIDTH = 75
const translateZone = EorzeaWeather.prototype.translate.bind({ locale: 'en' })

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
      paddingRight: theme.spacing(1),
      width: WEATHER_CELL_WIDTH + theme.spacing(1.5)
    }
  },
  transitionCell: {
    width: 50,
    textAlign: 'center'
  }
}))

export default function WeatherForecaster (props) {
  const [zone, setZone] = useState(null)
  const [transitionWeather, setTransitionWeather] = useState('none')
  const [targetWeather, setTargetWeather] = useState('none')
  const [times, setTimes] = useState({ 0: true, 8: true, 16: true })
  const classes = useStyles()
  const possibleWeathers = zone && getPossibleWeathers(zone.zoneId)
  const forecast = zone && (times[0] || times[8] || times[16]) && forecastWeather(
    zone.zoneId,
    new Date(),
    transitionWeather,
    targetWeather,
    times
  )

  const handleSelectZone = (event, newZone) => {
    setZone(newZone)
    setTransitionWeather('none')
    setTargetWeather('none')
  }

  const handleSelectTimes = (timeSlot) => {
    setTimes({ ...times, [timeSlot]: !times[timeSlot] })
  }

  return (
    <section>
      <Typography variant='h5' gutterBottom>Forecaster</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Autocomplete
            options={ZONES}
            groupBy={(option) => option.region}
            getOptionLabel={(option) => translateZone('zones.' + option.zoneId)}
            renderInput={
              (params) => <TextField {...params} label='Select a zone' />
            }
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
              onChange={(event) => { setTransitionWeather(event.target.value) }}
            >
              <MenuItem value='none'>{possibleWeathers ? 'Any weather' : 'Select a zone first'}</MenuItem>
              {possibleWeathers && possibleWeathers.map((weather) =>
                <MenuItem key={weather} value={weather}>{weather}</MenuItem>
              )}
            </Select>
          </FormControl>
          <ArrowDownwardIcon className={classes.transitionArrow} />
          <FormControl fullWidth>
            <InputLabel>Target weather</InputLabel>
            <Select
              value={targetWeather}
              disabled={!zone}
              onChange={(event) => { setTargetWeather(event.target.value) }}
            >
              <MenuItem value='none'>{possibleWeathers ? 'Any weather' : 'Select a zone first'}</MenuItem>
              {possibleWeathers && possibleWeathers.map((weather) =>
                <MenuItem key={weather} value={weather}>{weather}</MenuItem>
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
        {forecast &&
          <Grid item xs={12}>
            <Typography variant='h6' gutterBottom>Next 10 matches</Typography>
            <TableContainer>
              <Table size='small' className={classes.weatherTable}>
                <TableBody>
                  {forecast.map(({ date, bell, previousWeather, currentWeather }, index) =>
                    <TableRow key={index} hover>
                      <TableCell className={classes.forecastCell}>
                        {moment(date).format('MM/DD')} at {moment(date).format('HH:mm')} -  {moment.duration(moment(date).diff()).humanize(true)}
                      </TableCell>
                      <TableCell className={classes.bellCell}>{displayBell((bell + 16) % 24)}</TableCell>
                      <TableCell className={classes.weatherCell}><WeatherIcon name={previousWeather} /></TableCell>
                      <TableCell className={classes.transitionCell}><ArrowForwardIcon /></TableCell>
                      <TableCell className={classes.bellCell}>{displayBell(bell)}</TableCell>
                      <TableCell className={classes.weatherCell}><WeatherIcon name={currentWeather} /></TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>}
      </Grid>
    </section>
  )
}

WeatherForecaster.propTypes = {
  now: PropTypes.object
}
