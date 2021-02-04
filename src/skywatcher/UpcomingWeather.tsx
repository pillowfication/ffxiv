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
import Tooltip from '@material-ui/core/Tooltip'
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

interface Props {
  now: Date
}

const UpcomingWeather = ({ now }: Props): React.ReactElement => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('skywatcher')
  const [filter, setFilter] = useQueryState<Place | null>(
    'filter',
    { parse: query => query !== '' && REGIONS.includes(Number(query)) ? Number(query) as Place : null }
  )
  const [showLabels, setShowLabels] = useState(true)
  const [showLocalTime, setShowLocalTime] = useState(false)
  const [showAllPlaces, setShowAllPlaces] = useState(false)
  const locale = i18n.language

  const handleSelectFilter = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const filter = event.target.value === 'none' ? null : (+event.target.value as Place)
    setFilter(filter)
  }

  const handleToggleLabels = (): void => { setShowLabels(!showLabels) }
  const handleToggleLocalTime = (): void => { setShowLocalTime(!showLocalTime) }
  const handleToggleShowAllPlaces = (): void => { setShowAllPlaces(!showAllPlaces) }

  return (
    <Section title={t('upcomingWeather')}>
      <Grid container spacing={1} className={classes.options}>
        <Grid item xs={12}>
          <FormControl variant='filled' fullWidth margin='dense'>
            <InputLabel>{t('selectRegion')}</InputLabel>
            <NoSsr>
              <Select onChange={handleSelectFilter} value={filter !== null ? filter : 'none'}>
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
          <Tooltip enterDelay={200} title={<Typography variant='caption'>Include places with only 1 possible weather</Typography>}>
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
          </Tooltip>
        </Grid>
      </Grid>
      <NoSsr>
        {(filter !== null ? [filter] : REGIONS)
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
