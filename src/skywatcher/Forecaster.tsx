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
import {
  getRegions,
  getPlaces,
  getSeed,
  getWeatherRates,
  getPossibleWeathers,
  forecastWeathers,
  translateWeather,
  translatePlace,
  Weather,
  Place
} from './ffxiv-skywatcher'
import { useTranslation } from '../i18n'

interface PlaceOption {
  region: Place
  place: Place
  weatherRateIndex: number
}
const PLACE_OPTIONS: PlaceOption[] = []
for (const region of getRegions()) {
  for (const place of getPlaces(region)) {
    for (let index = 0; index < getWeatherRates(place).length; ++index) {
      PLACE_OPTIONS.push({ region, place, weatherRateIndex: index })
    }
  }
}

function removeTags (markdown: string): string {
  return markdown.replace(/<\/?.+?>/g, '')
}

const useStyles = makeStyles(theme => ({
  transitionWeather: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2)
    }
  },
  transitionArrow: {
    display: 'block',
    margin: theme.spacing(0.5, 'auto'),
    fontSize: '2em',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}))

interface Props {
  now: Date
}

const Forecaster = ({ now }: Props): React.ReactElement => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('skywatcher')
  const [placeOption, setPlaceOption] = useState<PlaceOption | null>(null)
  const [transitionWeather, setTransitionWeather] = useState<Weather | null>(null)
  const [targetWeather, setTargetWeather] = useState<Weather | null>(null)
  const [times, setTimes] = useState({ 0: true, 8: true, 16: true })

  const possibleWeathers = placeOption !== null ? getPossibleWeathers(placeOption.place, placeOption.weatherRateIndex) : null
  const hasTime = times[0] || times[8] || times[16]
  const forecast = (placeOption !== null && hasTime)
    ? forecastWeathers(
      placeOption.place,
      placeOption.weatherRateIndex,
      (prevWeather, currWeather, seed) => {
        if (transitionWeather !== null && transitionWeather !== prevWeather) return false
        if (targetWeather !== null && targetWeather !== currWeather) return false
        if (!times[0] && seed % 3 === 0) return false
        if (!times[8] && seed % 3 === 1) return false
        if (!times[16] && seed % 3 === 2) return false
        return true
      },
      getSeed(now)
    )
    : null
  const locale = i18n.language

  const handleSelectPlace = (_: any, placeOption: PlaceOption): void => {
    setPlaceOption(placeOption)
    setTransitionWeather(null)
    setTargetWeather(null)
  }

  const handleSelectTransitionWeather = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setTransitionWeather(event.target.value === 'none' ? null : (+event.target.value as Weather))
  }

  const handleSelectTargetWeather = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setTargetWeather(event.target.value === 'none' ? null : (+event.target.value as Weather))
  }

  const handleSelectTimes = (timeSlot: 0 | 8 | 16): void => {
    setTimes({ ...times, [timeSlot]: !times[timeSlot] })
  }

  return (
    <Section title={t('forecaster')}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Autocomplete
            options={PLACE_OPTIONS}
            groupBy={({ region }) => translatePlace(region, locale)}
            getOptionLabel={({ place, weatherRateIndex }) => removeTags(translatePlace(place, locale)) + (weatherRateIndex > 0 ? ` (alt. ${weatherRateIndex})` : '')}
            renderInput={params => <TextField {...params} label={t('place')} placeholder={t('selectPlace')} InputLabelProps={{ shrink: true }} />}
            value={placeOption}
            getOptionSelected={(option, value) => option.place === value.place && option.weatherRateIndex === value.weatherRateIndex}
            onChange={handleSelectPlace}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth className={classes.transitionWeather}>
            <InputLabel>{t('transitionWeather')}</InputLabel>
            <Select
              value={transitionWeather !== null ? transitionWeather : 'none'}
              disabled={placeOption === null}
              onChange={handleSelectTransitionWeather}
            >
              <MenuItem value='none'>{t(possibleWeathers !== null ? 'anyWeather' : 'selectPlaceFirst')}</MenuItem>
              {possibleWeathers?.map(weather =>
                <MenuItem key={weather} value={weather}>{translateWeather(weather, locale)}</MenuItem>
              )}
            </Select>
          </FormControl>
          <ArrowDownwardIcon className={classes.transitionArrow} />
          <FormControl fullWidth>
            <InputLabel>{t('targetWeather')}</InputLabel>
            <Select
              value={targetWeather !== null ? targetWeather : 'none'}
              disabled={placeOption === null}
              onChange={handleSelectTargetWeather}
            >
              <MenuItem value='none'>{t(possibleWeathers !== null ? 'anyWeather' : 'selectPlaceFirst')}</MenuItem>
              {possibleWeathers?.map(weather =>
                <MenuItem key={weather} value={weather}>{translateWeather(weather, locale)}</MenuItem>
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
        {placeOption !== null && !hasTime && (
          <Grid item xs={12}>
            <Alert variant='outlined' severity='error'>{t('noTimeSelected')}</Alert>
          </Grid>
        )}
        {forecast !== null && (
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
