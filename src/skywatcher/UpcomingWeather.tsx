import React, { useState } from 'react'
import { useQueryState } from 'next-usequerystate'
import { makeStyles } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Section from '../Section'
import UpcomingWeatherTable from './UpcomingWeatherTable'
import {
  getRegions,
  getPlaces,
  getWeatherRates,
  getPossibleWeathers,
  translatePlace,
  Place
} from './ffxiv-skywatcher'
import { useTranslation } from '../i18n'

const REGIONS = getRegions()

const useStyles = makeStyles(theme => ({
  options: {
    marginBottom: theme.spacing(2)
  }
}))

type Props = {
  now: Date
}

const UpcomingWeather = ({ now }: Props) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('skywatcher')
  const [filter, setFilter] = useQueryState<Place | null>(
    'filter',
    { parse: query => query && REGIONS.includes(Number(query)) ? Number(query) : null }
  )
  const [showLabels, setShowLabels] = useState(true)
  const [showLocalTime, setShowLocalTime] = useState(false)
  const [showAllPlaces, setShowAllPlaces] = useState(false)
  const [showWeatherChance, setShowWeatherChance] = useState(false)
  const locale = i18n.language

  const handleSelectFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = event.target.value === 'none' ? null : (+event.target.value as Place)
    setFilter(filter)
  }

  const handleToggleLabels = () => { setShowLabels(!showLabels) }
  const handleToggleLocalTime = () => { setShowLocalTime(!showLocalTime) }
  const handleToggleShowAllPlaces = () => { setShowAllPlaces(!showAllPlaces) }
  const handleToggleWeatherChance = () => { setShowWeatherChance(!showWeatherChance) }

  return (
    <Section title={t('upcomingWeather')}>
      <Grid container spacing={1} className={classes.options}>
        <Grid item xs={12}>
          <FormControl variant='filled' fullWidth margin='dense'>
            <InputLabel>{t('selectRegion')}</InputLabel>
            <NoSsr>
              <Select onChange={handleSelectFilter} value={filter || 'none'}>
                <MenuItem value='none'>{t('showAllRegions')}</MenuItem>
                {REGIONS.map(region =>
                  <MenuItem key={region} value={region}>{translatePlace(region, locale)}</MenuItem>
                )}
              </Select>
            </NoSsr>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={showLabels}
                onChange={handleToggleLabels}
                color='primary'
              />
            }
            label={t('showLabels')}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={showLocalTime}
                onChange={handleToggleLocalTime}
                color='primary'
              />
            }
            label={t('showLocalTimes')}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={showAllPlaces}
                onChange={handleToggleShowAllPlaces}
                color='primary'
              />
            }
            label={t('showAllPlaces')}
          />
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
        {(filter ? [filter] : REGIONS)
          .map(region => {
            const places = getPlaces(region)
              .flatMap(place => getWeatherRates(place).map((_: any, index) => ({ place, weatherRateIndex: index })))

            return (
              <Section key={region}>
                <Typography variant='h6' gutterBottom>{translatePlace(region, locale)}</Typography>
                <UpcomingWeatherTable
                  now={now}
                  places={showAllPlaces ? places : places.filter(({ place, weatherRateIndex }) => getPossibleWeathers(place, weatherRateIndex).length > 1)}
                  showLabels={showLabels}
                  showLocalTime={showLocalTime}
                  showWeatherChance={showWeatherChance}
                />
              </Section>
            )
          })
        }
      </NoSsr>
    </Section>
  )
}

export default UpcomingWeather
