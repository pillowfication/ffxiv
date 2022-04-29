import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import NoSsr from '@mui/material/NoSsr'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import MenuItem from '@mui/material/MenuItem'
import Alert from '@mui/material/Alert'
import Autocomplete from '@mui/material/Autocomplete'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
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

interface Props {
  now: Date
}

const Forecaster = ({ now }: Props): React.ReactElement => {
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

  const handleSelectPlace = (_: any, placeOption: PlaceOption | null): void => {
    setPlaceOption(placeOption)
    setTransitionWeather(null)
    setTargetWeather(null)
  }
  const handleSelectTransitionWeather = (event: SelectChangeEvent<Weather | 'none'>): void => {
    setTransitionWeather(event.target.value === 'none' ? null : (+event.target.value as Weather))
  }
  const handleSelectTargetWeather = (event: SelectChangeEvent<Weather | 'none'>): void => {
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
            groupBy={({ region }) =>
              translatePlace(region, locale)}
            getOptionLabel={({ place, weatherRateIndex }) =>
              removeTags(translatePlace(place, locale)) + (weatherRateIndex > 0 ? ` (alt. ${weatherRateIndex})` : '')}
            renderInput={params =>
              <TextField
                {...params}
                variant='standard'
                label={t('place')}
                placeholder={t('selectPlace')}
                InputLabelProps={{ shrink: true }}
              />
            }
            value={placeOption}
            onChange={handleSelectPlace}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant='standard' fullWidth>
            <InputLabel>{t('transitionWeather')}</InputLabel>
            <Select
              value={transitionWeather !== null ? transitionWeather : 'none'}
              disabled={placeOption === null}
              onChange={handleSelectTransitionWeather}
            >
              <MenuItem value='none'>{t(possibleWeathers !== null ? 'anyWeather' : 'selectPlaceFirst')}</MenuItem>
              {possibleWeathers?.map(weather =>
                <MenuItem key={weather} value={String(weather)}>{translateWeather(weather, locale)}</MenuItem>
              )}
            </Select>
          </FormControl>
          <Box textAlign='center' p={1}>
            <ArrowDownwardIcon />
          </Box>
          <FormControl variant='standard' fullWidth>
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
