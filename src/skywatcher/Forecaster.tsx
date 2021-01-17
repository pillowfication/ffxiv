import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
import Grid from '@material-ui/core/Grid'
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
import Section from '../Section'
import ForecasterTable from './ForecasterTable'
import { Weather, Region, Zone } from './weather/consts'
import { getSeed, getPossibleWeathers, forecastWeathers, translate } from './weather'
import PARTITION from './weather/regions-partition'
import { useTranslation } from '../i18n'

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
  }
}))

type Props = {
  now: Date
}

const Forecaster = ({ now }: Props) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('skywatcher')
  const [zoneOption, setZoneOption] = useState<ZoneOption | null>(null)
  const [transitionWeather, setTransitionWeather] = useState<Weather | null>(null)
  const [targetWeather, setTargetWeather] = useState<Weather | null>(null)
  const [times, setTimes] = useState({ 0: true, 8: true, 16: true })
  const possibleWeathers = zoneOption && getPossibleWeathers(zoneOption.zone)
  const hasTime = times[0] || times[8] || times[16]
  const forecast = (zoneOption && hasTime) &&
    forecastWeathers(
      zoneOption.zone,
      (prevWeather, currWeather, seed) => {
        if (transitionWeather && transitionWeather !== prevWeather) return false
        if (targetWeather && targetWeather !== currWeather) return false
        if (!times[0] && seed % 3 === 0) return false
        if (!times[8] && seed % 3 === 1) return false
        if (!times[16] && seed % 3 === 2) return false
        return true
      },
      getSeed(now)
    )
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
            <NoSsr>
              <ForecasterTable now={now} forecast={forecast} />
            </NoSsr>
          </Grid>
        )}
      </Grid>
    </Section>
  )
}

export default Forecaster
