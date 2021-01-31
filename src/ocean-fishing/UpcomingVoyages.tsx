import React, { useState, useEffect } from 'react'
import { useQueryState } from 'next-usequerystate'
import { makeStyles } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import ListSubheader from '@material-ui/core/ListSubheader'
import MenuItem from '@material-ui/core/MenuItem'
import Section from '../Section'
import UpcomingVoyagesTable from './UpcomingVoyagesTable'
import { fishingSpots, placeNames, fishes, achievements } from './ffxiv-ocean-fishing/data'
import { calculateVoyages, DestinationStopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { upperFirst } from './utils'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  listSubheader: {
    paddingTop: theme.spacing(2)
  }
}))

type Props = {
  now: Date,
  onSelectRoute: (route: DestinationStopTime) => void
}

const UpcomingVoyages = ({ now, onSelectRoute }: Props) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('ocean-fishing')
  const [numRows, setNumRows] = useState(10)
  const [filter, setFilter] = useQueryState<string | null>(
    'filter',
    { parse: query => query && maps.FILTER_MAP[query] ? query : null }
  )
  const locale = i18n.language

  useEffect(() => {
    onSelectRoute(calculateVoyages(now, 1, filter && maps.FILTER_MAP[filter])[0].destinationCode)
  }, [])

  const handleInputNumRows = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumRows(Number(event.target.value))
  }

  const handleBlurNumRows = (event: React.FocusEvent<HTMLInputElement>) => {
    const numRows = Number(event.target.value)
    if (!numRows) {
      setNumRows(10)
    } else {
      setNumRows(Math.min(Math.max(numRows, 1), 50))
    }
  }

  const handleSelectFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
                value={filter || 'none'}
                onChange={handleSelectFilter}
              >
                <MenuItem value='none'>{t('noFilter')}</MenuItem>
                <ListSubheader disableSticky className={classes.listSubheader}>{t('blueFish')}</ListSubheader>
                <MenuItem value='sothis'>{translate(locale, fishes[29788], 'name')}</MenuItem>
                <MenuItem value='coral_manta'>{translate(locale, fishes[29789], 'name')}</MenuItem>
                <MenuItem value='stonescale'>{translate(locale, fishes[29790], 'name')}</MenuItem>
                <MenuItem value='elasmosaurus'>{translate(locale, fishes[29791], 'name')}</MenuItem>
                <MenuItem value='hafgufa'>{translate(locale, fishes[32074], 'name')}</MenuItem>
                <MenuItem value='seafaring_toad'>{translate(locale, fishes[32094], 'name')}</MenuItem>
                <MenuItem value='placodus'>{translate(locale, fishes[32114], 'name')}</MenuItem>
                <ListSubheader disableSticky className={classes.listSubheader}>{t('achievements')}</ListSubheader>
                <MenuItem value='octopodes'>{translate(locale, achievements[2563], 'name')}</MenuItem>
                <MenuItem value='sharks'>{translate(locale, achievements[2564], 'name')}</MenuItem>
                <MenuItem value='jellyfish'>{translate(locale, achievements[2565], 'name')}</MenuItem>
                <MenuItem value='seadragons'>{translate(locale, achievements[2566], 'name')}</MenuItem>
                <MenuItem value='balloons'>{translate(locale, achievements[2754], 'name')}</MenuItem>
                <MenuItem value='crabs'>{translate(locale, achievements[2755], 'name')}</MenuItem>
                <MenuItem value='mantas'>{translate(locale, achievements[2756], 'name')}</MenuItem>
                <ListSubheader disableSticky className={classes.listSubheader}>{upperFirst(translate(locale, placeNames[fishingSpots[241].placeName_sub], 'name_noArticle', 'name'))}</ListSubheader>
                <MenuItem value='R'>{upperFirst(translate(locale, placeNames[fishingSpots[241].placeName_sub], 'name_noArticle', 'name'))}</MenuItem>
                <MenuItem value='RD'>{upperFirst(translate(locale, placeNames[fishingSpots[241].placeName_sub], 'name_noArticle', 'name'))} - {t('time.day')}</MenuItem>
                <MenuItem value='RS'>{upperFirst(translate(locale, placeNames[fishingSpots[241].placeName_sub], 'name_noArticle', 'name'))} - {t('time.sunset')}</MenuItem>
                <MenuItem value='RN'>{upperFirst(translate(locale, placeNames[fishingSpots[241].placeName_sub], 'name_noArticle', 'name'))} - {t('time.night')}</MenuItem>
                <ListSubheader disableSticky className={classes.listSubheader}>{upperFirst(translate(locale, placeNames[fishingSpots[243].placeName_sub], 'name_noArticle', 'name'))}</ListSubheader>
                <MenuItem value='N'>{upperFirst(translate(locale, placeNames[fishingSpots[243].placeName_sub], 'name_noArticle', 'name'))}</MenuItem>
                <MenuItem value='ND'>{upperFirst(translate(locale, placeNames[fishingSpots[243].placeName_sub], 'name_noArticle', 'name'))} - {t('time.day')}</MenuItem>
                <MenuItem value='NS'>{upperFirst(translate(locale, placeNames[fishingSpots[243].placeName_sub], 'name_noArticle', 'name'))} - {t('time.sunset')}</MenuItem>
                <MenuItem value='NN'>{upperFirst(translate(locale, placeNames[fishingSpots[243].placeName_sub], 'name_noArticle', 'name'))} - {t('time.night')}</MenuItem>
                <ListSubheader disableSticky className={classes.listSubheader}>{upperFirst(translate(locale, placeNames[fishingSpots[248].placeName_sub], 'name_noArticle', 'name'))}</ListSubheader>
                <MenuItem value='B'>{upperFirst(translate(locale, placeNames[fishingSpots[248].placeName_sub], 'name_noArticle', 'name'))}</MenuItem>
                <MenuItem value='BD'>{upperFirst(translate(locale, placeNames[fishingSpots[248].placeName_sub], 'name_noArticle', 'name'))} - {t('time.day')}</MenuItem>
                <MenuItem value='BS'>{upperFirst(translate(locale, placeNames[fishingSpots[248].placeName_sub], 'name_noArticle', 'name'))} - {t('time.sunset')}</MenuItem>
                <MenuItem value='BN'>{upperFirst(translate(locale, placeNames[fishingSpots[248].placeName_sub], 'name_noArticle', 'name'))} - {t('time.night')}</MenuItem>
                <ListSubheader disableSticky className={classes.listSubheader}>{upperFirst(translate(locale, placeNames[fishingSpots[250].placeName_sub], 'name_noArticle', 'name'))}</ListSubheader>
                <MenuItem value='T'>{upperFirst(translate(locale, placeNames[fishingSpots[250].placeName_sub], 'name_noArticle', 'name'))}</MenuItem>
                <MenuItem value='TD'>{upperFirst(translate(locale, placeNames[fishingSpots[250].placeName_sub], 'name_noArticle', 'name'))} - {t('time.day')}</MenuItem>
                <MenuItem value='TS'>{upperFirst(translate(locale, placeNames[fishingSpots[250].placeName_sub], 'name_noArticle', 'name'))} - {t('time.sunset')}</MenuItem>
                <MenuItem value='TN'>{upperFirst(translate(locale, placeNames[fishingSpots[250].placeName_sub], 'name_noArticle', 'name'))} - {t('time.night')}</MenuItem>
              </Select>
            </NoSsr>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <NoSsr>
            <UpcomingVoyagesTable now={now} numRows={numRows} filter={maps.FILTER_MAP[filter]} onSelectRoute={onSelectRoute} />
          </NoSsr>
        </Grid>
      </Grid>
    </Section>
  )
}

export default UpcomingVoyages
