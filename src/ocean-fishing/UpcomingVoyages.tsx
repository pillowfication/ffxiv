import React, { useState, useEffect } from 'react'
import { useQueryState } from 'next-usequerystate'
import { makeStyles } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import ListSubheader from '@material-ui/core/ListSubheader'
import Tooltip from '@material-ui/core/Tooltip'
import MenuItem from '@material-ui/core/MenuItem'
import Section from '../Section'
import UpcomingVoyagesTable from './UpcomingVoyagesTable'
import { fishingSpots, fishes, achievements } from './ffxiv-ocean-fishing/data'
import { calculateVoyages, calculateVoyagesOld, DestTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { upperFirst } from './utils'
import translate from '../translate'
import { useTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  listSubheader: {
    paddingTop: theme.spacing(2)
  },
  useOld: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      textAlign: 'right'
    }
  },
  checkbox: {
    padding: 0,
    margin: theme.spacing(0, 1)
  }
}))

interface Props {
  now: Date
  onSelectRoute: (route: DestTime) => void
}

const UpcomingVoyages = ({ now, onSelectRoute }: Props): React.ReactElement => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('ocean-fishing')
  const [numRows, setNumRows] = useState(10)
  const [useOld, setUseOld] = useQueryState<true | null>(
    'old',
    { parse: query => query === 'true' ? true : null }
  )
  const [filter, setFilter] = useQueryState<string | null>(
    'filter',
    { parse: query => maps.FILTER_MAP[query] !== undefined ? query : null }
  )
  const locale = i18n.language

  useEffect(() => {
    onSelectRoute((useOld === true ? calculateVoyagesOld : calculateVoyages)(now, 1, filter !== null ? maps.FILTER_MAP[filter] : undefined)[0].destTime)
  }, [filter])

  const handleToggleUseOld = (): void => {
    setUseOld(useOld === true ? null : true)
  }

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

  const handleSelectFilter = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const filter = event.target.value === 'none' ? null : event.target.value
    setFilter(filter)
  }

  return (
    <Section
      title={
        <Grid container alignItems='flex-end'>
          <Grid item xs={12} md={8}>
            {t('upcomingVoyages')}
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.useOld}>
              <NoSsr>
                <Tooltip
                  placement='top'
                  title={<Typography>Select this for clients without the newest routes yet (KO clients)</Typography>}
                >
                    <FormControlLabel
                      control={<Checkbox checked={useOld === true} onChange={handleToggleUseOld} className={classes.checkbox} />}
                      label='Use old routes'
                    />
                </Tooltip>
              </NoSsr>
            </div>
          </Grid>
        </Grid>
      }
    >
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
                value={filter !== null ? filter : 'none'}
                onChange={handleSelectFilter}
              >
                <MenuItem value='none'>{t('noFilter')}</MenuItem>
                <ListSubheader disableSticky className={classes.listSubheader}>{t('blueFish')}</ListSubheader>
                <MenuItem value='sothis'>{translate(locale, fishes[29788], 'name')}</MenuItem>
                <MenuItem value='coral_manta'>{translate(locale, fishes[29789], 'name')}</MenuItem>
                <MenuItem value='stonescale'>{translate(locale, fishes[29790], 'name')}</MenuItem>
                <MenuItem value='elasmosaurus'>{translate(locale, fishes[29791], 'name')}</MenuItem>
                {useOld === null && [
                  <MenuItem key='hafgufa' value='hafgufa'>{translate(locale, fishes[32074], 'name')}</MenuItem>,
                  <MenuItem key='seafaring_toad' value='seafaring_toad'>{translate(locale, fishes[32094], 'name')}</MenuItem>,
                  <MenuItem key='placodus' value='placodus'>{translate(locale, fishes[32114], 'name')}</MenuItem>
                ]}
                <ListSubheader disableSticky className={classes.listSubheader}>{t('achievements')}</ListSubheader>
                <MenuItem value='octopodes'>{translate(locale, achievements[2563], 'name')}</MenuItem>
                <MenuItem value='sharks'>{translate(locale, achievements[2564], 'name')}</MenuItem>
                <MenuItem value='jellyfish'>{translate(locale, achievements[2565], 'name')}</MenuItem>
                <MenuItem value='seadragons'>{translate(locale, achievements[2566], 'name')}</MenuItem>
                {useOld === null && [
                  <MenuItem key='balloons' value='balloons'>{translate(locale, achievements[2754], 'name')}</MenuItem>,
                  <MenuItem key='crabs' value='crabs'>{translate(locale, achievements[2755], 'name')}</MenuItem>,
                  <MenuItem key='mantas' value='mantas'>{translate(locale, achievements[2756], 'name')}</MenuItem>
                ]}
                <ListSubheader disableSticky className={classes.listSubheader}>{upperFirst(translate(locale, fishingSpots[241].placeName_sub, 'name_noArticle', 'name'))}</ListSubheader>
                <MenuItem value='R'>{upperFirst(translate(locale, fishingSpots[241].placeName_sub, 'name_noArticle', 'name'))}</MenuItem>
                <MenuItem value='RD'>{upperFirst(translate(locale, fishingSpots[241].placeName_sub, 'name_noArticle', 'name'))} - {t('time.day')}</MenuItem>
                <MenuItem value='RS'>{upperFirst(translate(locale, fishingSpots[241].placeName_sub, 'name_noArticle', 'name'))} - {t('time.sunset')}</MenuItem>
                <MenuItem value='RN'>{upperFirst(translate(locale, fishingSpots[241].placeName_sub, 'name_noArticle', 'name'))} - {t('time.night')}</MenuItem>
                <ListSubheader disableSticky className={classes.listSubheader}>{upperFirst(translate(locale, fishingSpots[243].placeName_sub, 'name_noArticle', 'name'))}</ListSubheader>
                <MenuItem value='N'>{upperFirst(translate(locale, fishingSpots[243].placeName_sub, 'name_noArticle', 'name'))}</MenuItem>
                <MenuItem value='ND'>{upperFirst(translate(locale, fishingSpots[243].placeName_sub, 'name_noArticle', 'name'))} - {t('time.day')}</MenuItem>
                <MenuItem value='NS'>{upperFirst(translate(locale, fishingSpots[243].placeName_sub, 'name_noArticle', 'name'))} - {t('time.sunset')}</MenuItem>
                <MenuItem value='NN'>{upperFirst(translate(locale, fishingSpots[243].placeName_sub, 'name_noArticle', 'name'))} - {t('time.night')}</MenuItem>
                {useOld === null && [
                  <ListSubheader key='1' disableSticky className={classes.listSubheader}>{upperFirst(translate(locale, fishingSpots[248].placeName_sub, 'name_noArticle', 'name'))}</ListSubheader>,
                  <MenuItem key='B' value='B'>{upperFirst(translate(locale, fishingSpots[248].placeName_sub, 'name_noArticle', 'name'))}</MenuItem>,
                  <MenuItem key='BD' value='BD'>{upperFirst(translate(locale, fishingSpots[248].placeName_sub, 'name_noArticle', 'name'))} - {t('time.day')}</MenuItem>,
                  <MenuItem key='BS' value='BS'>{upperFirst(translate(locale, fishingSpots[248].placeName_sub, 'name_noArticle', 'name'))} - {t('time.sunset')}</MenuItem>,
                  <MenuItem key='BN' value='BN'>{upperFirst(translate(locale, fishingSpots[248].placeName_sub, 'name_noArticle', 'name'))} - {t('time.night')}</MenuItem>,
                  <ListSubheader key='2' disableSticky className={classes.listSubheader}>{upperFirst(translate(locale, fishingSpots[250].placeName_sub, 'name_noArticle', 'name'))}</ListSubheader>,
                  <MenuItem key='T' value='T'>{upperFirst(translate(locale, fishingSpots[250].placeName_sub, 'name_noArticle', 'name'))}</MenuItem>,
                  <MenuItem key='TD' value='TD'>{upperFirst(translate(locale, fishingSpots[250].placeName_sub, 'name_noArticle', 'name'))} - {t('time.day')}</MenuItem>,
                  <MenuItem key='TS' value='TS'>{upperFirst(translate(locale, fishingSpots[250].placeName_sub, 'name_noArticle', 'name'))} - {t('time.sunset')}</MenuItem>,
                  <MenuItem key='TN' value='TN'>{upperFirst(translate(locale, fishingSpots[250].placeName_sub, 'name_noArticle', 'name'))} - {t('time.night')}</MenuItem>
                ]}
              </Select>
            </NoSsr>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <NoSsr>
            <UpcomingVoyagesTable
              now={now}
              numRows={numRows}
              useOld={useOld === true}
              filter={filter !== null ? maps.FILTER_MAP[filter] : undefined}
              onSelectRoute={onSelectRoute}
            />
          </NoSsr>
        </Grid>
      </Grid>
    </Section>
  )
}

export default UpcomingVoyages
