import React, { useState } from 'react'
import NoSsr from '@mui/material/NoSsr'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputLabel from '@mui/material/InputLabel'
import Checkbox from '@mui/material/Checkbox'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
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

interface Props {
  now: Date
}

const UpcomingWeather = ({ now }: Props): React.ReactElement => {
  const { t, i18n } = useTranslation('skywatcher')
  const [filter, setFilter] = useState<Place | null>(null)
  const [showLabels, setShowLabels] = useState(true)
  const [showLocalTime, setShowLocalTime] = useState(false)
  const [showAllPlaces, setShowAllPlaces] = useState(false)
  const locale = i18n.language

  const handleSelectFilter = (event: SelectChangeEvent<'none' | Place>): void => {
    setFilter(event.target.value === 'none' ? null : (event.target.value as Place))
  }
  const handleToggleLabels = (): void => { setShowLabels(!showLabels) }
  const handleToggleLocalTime = (): void => { setShowLocalTime(!showLocalTime) }
  const handleToggleShowAllPlaces = (): void => { setShowAllPlaces(!showAllPlaces) }

  return (
    <Section title={t('upcomingWeather')}>
      <Box mb={2}>
        <FormControl variant='filled' fullWidth margin='dense'>
          <InputLabel>{t('selectRegion')}</InputLabel>
          <NoSsr>
            <Select onChange={handleSelectFilter} value={filter ?? 'none'}>
              <MenuItem value='none'>{t('showAllRegions')}</MenuItem>
              {REGIONS.map(region =>
                <MenuItem key={region} value={region}>{translatePlace(region, locale)}</MenuItem>
              )}
            </Select>
          </NoSsr>
        </FormControl>
        <FormControlLabel
          control={<Checkbox color='primary' checked={showLabels} onChange={handleToggleLabels} />}
          label={t('showLabels')}
        />
        <FormControlLabel
          control={<Checkbox color='primary' checked={showLocalTime} onChange={handleToggleLocalTime} />}
          label={t('showLocalTimes')}
        />
        <Tooltip
          placement='top'
          arrow
          enterDelay={200}
          disableInteractive
          title={<Typography variant='caption'>Include places with only 1 possible weather</Typography>}
        >
          <FormControlLabel
            control={<Checkbox color='primary' checked={showAllPlaces} onChange={handleToggleShowAllPlaces} />}
            label={t('showAllPlaces')}
          />
        </Tooltip>
      </Box>
      <NoSsr>
        {(filter !== null ? [filter] : REGIONS).map(region => {
          const places = getPlaces(region)
            .flatMap(place => getWeatherRates(place).map((_: any, index) => ({ place, weatherRateIndex: index })))
          return (
            <Section key={region}>
              <Typography variant='h6'>{translatePlace(region, locale)}</Typography>
              <UpcomingWeatherTable
                now={now}
                places={showAllPlaces
                  ? places
                  : places.filter(({ place, weatherRateIndex }) => getPossibleWeathers(place, weatherRateIndex).length > 1)}
                showLabels={showLabels}
                showLocalTime={showLocalTime}
              />
            </Section>
          )
        })}
      </NoSsr>
    </Section>
  )
}

export default UpcomingWeather
