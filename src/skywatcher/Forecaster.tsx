import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { getPossibleWeathers, forecastWeathers, translate } from './weather'
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
import Alert from '@material-ui/lab/Alert'
import Autocomplete from '@material-ui/lab/Autocomplete'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Section from '../Section'
import WeatherIcon from './WeatherIcon'
import { Weather, Region, Zone } from './weather/consts'
import PARTITION from './weather/regions-partition'
import i18n from '../i18n'
import { I18n, TFunction } from 'next-i18next'

const REGIONS = [
  Region.LaNoscea,
  Region.TheBlackShroud,
  Region.Thanalan,
  Region.IshgardAndSurroundingAreas,
  Region.GyrAbania,
  Region.TheFarEast,
  Region.Norvrandt,
  Region.Others
]
const DATE_FORMAT = { month: '2-digit', day: '2-digit' }
const WEATHER_CELL_WIDTH = 75

type ZoneOption = {
  region: Region,
  zone: Zone
}
const ZONES_OPTIONS: ZoneOption[] = []
for (const region of REGIONS) {
  for (const zone of PARTITION[region]) {
    ZONES_OPTIONS.push({ region, zone })
  }
}

const useStyles = makeStyles(theme => ({
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

function displayBell (seed: number) {
  switch (seed % 3) {
    case 0: return '00:00'
    case 1: return '08:00'
    case 2: return '16:00'
  }
}

type Props = {
  now?: Date,
  t: TFunction,
  i18n: I18n
}

const Forecaster = ({ now, t, i18n }: Props) => {
  const classes = useStyles()
  const [zoneOption, setZoneOption] = useState<ZoneOption | null>(null)
  const [transitionWeather, setTransitionWeather] = useState<Weather | null>(null)
  const [targetWeather, setTargetWeather] = useState<Weather | null>(null)
  const [times, setTimes] = useState({ 0: true, 8: true, 16: true })
  const possibleWeathers = zoneOption && getPossibleWeathers(zoneOption.zone)
  const hasTime = times[0] || times[8] || times[16]
  const forecast = (zoneOption && hasTime) &&
    forecastWeathers(zoneOption.zone, (prevWeather, currWeather, seed) => {
      if (transitionWeather && transitionWeather !== prevWeather) return false
      if (targetWeather && targetWeather !== currWeather) return false
      if (!times[0] && seed % 3 === 0) return false
      if (!times[8] && seed % 3 === 1) return false
      if (!times[16] && seed % 3 === 2) return false
      return true
    })
  const locale = i18n.language

  const handleSelectZone = (_: any, zoneOption: ZoneOption) => {
    setZoneOption(zoneOption)
    setTransitionWeather(null)
    setTargetWeather(null)
  }

  const handleSelectTransitionWeather = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTransitionWeather(event.target.value === 'none' ? null : (event.target.value as Weather))
  }

  const handleSelectTargetWeather = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetWeather(event.target.value === 'none' ? null : (event.target.value as Weather))
  }

  const handleSelectTimes = (timeSlot: 0 | 8 | 16) => {
    setTimes({ ...times, [timeSlot]: !times[timeSlot] })
  }

  return (
    <Section title={t('forecaster')}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Autocomplete
            options={ZONES_OPTIONS}
            groupBy={({ region }) => translate('region', region, locale)}
            getOptionLabel={({ zone }) => translate('zone', zone, locale)}
            renderInput={params => <TextField {...params} label={t('selectZone')} />}
            value={zoneOption}
            getOptionSelected={(option, value) => option.zone === value.zone}
            onChange={handleSelectZone}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth className={classes.transitionWeather}>
            <InputLabel>{t('transitionWeather')}</InputLabel>
            <Select
              value={transitionWeather || 'none'}
              disabled={!zoneOption}
              onChange={handleSelectTransitionWeather}
            >
              <MenuItem value='none'>{t(possibleWeathers ? 'anyWeather' : 'selectZoneFirst')}</MenuItem>
              {possibleWeathers && (
                possibleWeathers.map(weather =>
                  <MenuItem key={weather} value={weather}>{translate('weather', weather, locale)}</MenuItem>
                )
              )}
            </Select>
          </FormControl>
          <ArrowDownwardIcon className={classes.transitionArrow} />
          <FormControl fullWidth>
            <InputLabel>{t('targetWeather')}</InputLabel>
            <Select
              value={targetWeather || 'none'}
              disabled={!zoneOption}
              onChange={handleSelectTargetWeather}
            >
              <MenuItem value='none'>{t(possibleWeathers ? 'anyWeather' : 'selectZoneFirst')}</MenuItem>
              {possibleWeathers && (
                possibleWeathers.map(weather =>
                  <MenuItem key={weather} value={weather}>{translate('weather', weather, locale)}</MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>{t('selectTimes')}</FormLabel>
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
        {zoneOption && !hasTime && (
          <Grid item xs={12}>
            <Alert variant='outlined' severity='error'>{t('noTimeSelected')}</Alert>
          </Grid>
        )}
        {forecast && (
          <Grid item xs={12}>
            <TableContainer>
              <Table size='small'>
                <TableBody>
                  {(() => {
                    let previousDate: string

                    return forecast.map(({ prevWeather, currWeather, seed, date }, index) => {
                      const dateString = date.toLocaleDateString(undefined, DATE_FORMAT)
                      const timeString = toTimeString(date, { padded: true })

                      return (
                        <TableRow key={index} hover>
                          <TableCell className={classes.dateCell} align='right'>
                            <Typography>{previousDate !== (previousDate = dateString) && dateString}</Typography>
                          </TableCell>
                          <TableCell className={classes.dateCell}>
                            <Typography>{timeString}</Typography>
                          </TableCell>
                          <TableCell className={classes.forecastCell}>
                            <Typography>{timeUntil(now, date)}</Typography>
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
          </Grid>
        )}
      </Grid>
    </Section>
  )
}

export default i18n.withTranslation('skywatcher')(Forecaster)
