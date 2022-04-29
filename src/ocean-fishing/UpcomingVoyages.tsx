import React, { useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useQueryState } from 'next-usequerystate'
import NoSsr from '@mui/material/NoSsr'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import ListSubheader from '@mui/material/ListSubheader'
import MenuItem from '@mui/material/MenuItem'
import Section from '../Section'
import UpcomingVoyagesTable from './UpcomingVoyagesTable'
import { fishingSpots, fishes, achievements } from './ffxiv-ocean-fishing/data'
import { calculateVoyages, DestTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { upperFirst, isUncaughtRoute } from './utils'
import translate from '../translate'

// `filter` is one of
//  - `null` for no filter
//  - a key in maps.FILTER_MAP for some predefined filter
//  - 'uncaught' for a dynamic filter for uncaught fish
//  - comma separated list of DestTimes
function getFilter (filter: string | null, checklist?: number[]): DestTime[] | undefined {
  if (filter === null) {
    return undefined
  } else if (filter in maps.FILTER_MAP) {
    return maps.FILTER_MAP[filter]
  } else if (filter === 'uncaught') {
    return (['BD', 'BS', 'BN', 'ND', 'NS', 'NN', 'RD', 'RS', 'RN', 'TD', 'TS', 'TN'] as DestTime[])
      .filter(destTime => isUncaughtRoute(destTime, checklist ?? []))
  } else {
    return filter.split(',')
      .filter(destTime =>
        destTime.length === 2 &&
          'BNRT'.includes(destTime[0]) &&
          'DSN'.includes(destTime[1])
      ) as DestTime[]
  }
}

interface Props {
  now: Date
  onSelectRoute: (route: DestTime) => void
  checklist: number[]
}

const UpcomingVoyages = ({ now, onSelectRoute, checklist }: Props): React.ReactElement => {
  const { t, i18n } = useTranslation('ocean-fishing')
  const [numRows, setNumRows] = useState(10)
  const [filter, setFilter] = useQueryState('filter')
  const _filter = getFilter(filter, checklist)
  const isCustomFilter = filter !== null && filter !== 'uncaught' && maps.FILTER_MAP[filter] === undefined
  const locale = i18n.language

  useEffect(() => {
    onSelectRoute(
      calculateVoyages(now, 1, _filter !== undefined && _filter.length > 0 ? _filter : undefined)[0].destTime
    )
  }, [filter])

  const handleInputNumRows = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNumRows(Number(event.target.value))
  }
  const handleBlurNumRows = (event: React.FocusEvent<HTMLInputElement>): void => {
    const numRows = Number(event.target.value)
    if (!isFinite(numRows)) {
      setNumRows(10)
    } else {
      setNumRows(Math.min(Math.max(Math.floor(numRows), 1), 50))
    }
  }
  const handleSelectFilter = (event: SelectChangeEvent): void => {
    const filter = event.target.value === 'none' ? null : event.target.value
    setFilter(filter)
  }

  return (
    <Section title={t('upcomingVoyages')}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              variant='filled'
              label={t('numberOfRows')}
              type='number'
              value={numRows}
              onChange={handleInputNumRows}
              onBlur={handleBlurNumRows}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant='filled'>
            <InputLabel>{t('filterRoute')}</InputLabel>
            <NoSsr>
              <Select
                value={filter !== null ? isCustomFilter ? 'custom' : filter : 'none'}
                onChange={handleSelectFilter}
              >
                <MenuItem value='none'>{t('noFilter')}</MenuItem>
                <MenuItem value='uncaught'>Uncaught Fish</MenuItem>
                {isCustomFilter && (
                  <MenuItem value='custom' disabled>Custom Filter: {_filter != null && _filter.length > 0 ? _filter.join(', ') : '(none)'}</MenuItem>
                )}
                <ListSubheader disableSticky className={'classes.listSubheader'}>{t('blueFish')}</ListSubheader>
                <MenuItem value='sothis'>{translate(locale, fishes[29788], 'name')}</MenuItem>
                <MenuItem value='coral_manta'>{translate(locale, fishes[29789], 'name')}</MenuItem>
                <MenuItem value='stonescale'>{translate(locale, fishes[29790], 'name')}</MenuItem>
                <MenuItem value='elasmosaurus'>{translate(locale, fishes[29791], 'name')}</MenuItem>
                <MenuItem value='hafgufa'>{translate(locale, fishes[32074], 'name')}</MenuItem>,
                <MenuItem value='seafaring_toad'>{translate(locale, fishes[32094], 'name')}</MenuItem>,
                <MenuItem value='placodus'>{translate(locale, fishes[32114], 'name')}</MenuItem>
                <ListSubheader disableSticky className={'classes.listSubheader'}>{t('achievements')}</ListSubheader>
                <MenuItem value='octopodes'>{translate(locale, achievements[2563], 'name')}</MenuItem>
                <MenuItem value='sharks'>{translate(locale, achievements[2564], 'name')}</MenuItem>
                <MenuItem value='jellyfish'>{translate(locale, achievements[2565], 'name')}</MenuItem>
                <MenuItem value='seadragons'>{translate(locale, achievements[2566], 'name')}</MenuItem>
                <MenuItem value='balloons'>{translate(locale, achievements[2754], 'name')}</MenuItem>,
                <MenuItem value='crabs'>{translate(locale, achievements[2755], 'name')}</MenuItem>,
                <MenuItem value='mantas'>{translate(locale, achievements[2756], 'name')}</MenuItem>
                <ListSubheader disableSticky className={'classes.listSubheader'}>{upperFirst(translate(locale, fishingSpots[241].placeName_sub, 'name_noArticle', 'name'))}</ListSubheader>
                <MenuItem value='R'>{upperFirst(translate(locale, fishingSpots[241].placeName_sub, 'name_noArticle', 'name'))}</MenuItem>
                <MenuItem value='RD'>{upperFirst(translate(locale, fishingSpots[241].placeName_sub, 'name_noArticle', 'name'))} - {t('time.day')}</MenuItem>
                <MenuItem value='RS'>{upperFirst(translate(locale, fishingSpots[241].placeName_sub, 'name_noArticle', 'name'))} - {t('time.sunset')}</MenuItem>
                <MenuItem value='RN'>{upperFirst(translate(locale, fishingSpots[241].placeName_sub, 'name_noArticle', 'name'))} - {t('time.night')}</MenuItem>
                <ListSubheader disableSticky className={'classes.listSubheader'}>{upperFirst(translate(locale, fishingSpots[243].placeName_sub, 'name_noArticle', 'name'))}</ListSubheader>
                <MenuItem value='N'>{upperFirst(translate(locale, fishingSpots[243].placeName_sub, 'name_noArticle', 'name'))}</MenuItem>
                <MenuItem value='ND'>{upperFirst(translate(locale, fishingSpots[243].placeName_sub, 'name_noArticle', 'name'))} - {t('time.day')}</MenuItem>
                <MenuItem value='NS'>{upperFirst(translate(locale, fishingSpots[243].placeName_sub, 'name_noArticle', 'name'))} - {t('time.sunset')}</MenuItem>
                <MenuItem value='NN'>{upperFirst(translate(locale, fishingSpots[243].placeName_sub, 'name_noArticle', 'name'))} - {t('time.night')}</MenuItem>
                <ListSubheader disableSticky className={'classes.listSubheader'}>{upperFirst(translate(locale, fishingSpots[248].placeName_sub, 'name_noArticle', 'name'))}</ListSubheader>,
                <MenuItem value='B'>{upperFirst(translate(locale, fishingSpots[248].placeName_sub, 'name_noArticle', 'name'))}</MenuItem>,
                <MenuItem value='BD'>{upperFirst(translate(locale, fishingSpots[248].placeName_sub, 'name_noArticle', 'name'))} - {t('time.day')}</MenuItem>,
                <MenuItem value='BS'>{upperFirst(translate(locale, fishingSpots[248].placeName_sub, 'name_noArticle', 'name'))} - {t('time.sunset')}</MenuItem>,
                <MenuItem value='BN'>{upperFirst(translate(locale, fishingSpots[248].placeName_sub, 'name_noArticle', 'name'))} - {t('time.night')}</MenuItem>,
                <ListSubheader disableSticky className={'classes.listSubheader'}>{upperFirst(translate(locale, fishingSpots[250].placeName_sub, 'name_noArticle', 'name'))}</ListSubheader>,
                <MenuItem value='T'>{upperFirst(translate(locale, fishingSpots[250].placeName_sub, 'name_noArticle', 'name'))}</MenuItem>,
                <MenuItem value='TD'>{upperFirst(translate(locale, fishingSpots[250].placeName_sub, 'name_noArticle', 'name'))} - {t('time.day')}</MenuItem>,
                <MenuItem value='TS'>{upperFirst(translate(locale, fishingSpots[250].placeName_sub, 'name_noArticle', 'name'))} - {t('time.sunset')}</MenuItem>,
                <MenuItem value='TN'>{upperFirst(translate(locale, fishingSpots[250].placeName_sub, 'name_noArticle', 'name'))} - {t('time.night')}</MenuItem>
              </Select>
            </NoSsr>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <NoSsr>
            <UpcomingVoyagesTable
              now={now}
              numRows={numRows}
              filter={_filter}
              onSelectRoute={onSelectRoute}
            />
          </NoSsr>
        </Grid>
      </Grid>
    </Section>
  )
}

export default UpcomingVoyages
