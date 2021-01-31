import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Section from '../Section'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import RouteInformationIntuition from './RouteInformationIntuition'
import RouteInformationTimeSensitive from './RouteInformationTimeSensitive'
import RouteInformationPoints from './RouteInformationPoints'
import RouteInformationAll from './RouteInformationAll'
import { fishingSpots, placeNames } from './ffxiv-ocean-fishing/data'
import { calculateVoyages, getStopTimes, Dest, Time, DestTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { timeUntil, upperFirst } from './utils'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  headerSub: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      display: 'block'
    }
  },
  headerTime: {
    position: 'relative',
    top: '-0.2em',
    marginLeft: '0.25em'
  },
  fishFilterSelect: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      textAlign: 'right'
    }
  },
  fishTab: {
    textTransform: 'none'
  }
}))

enum FishFilter {
  Intuition,
  TimeSensitive,
  Points,
  All
}

type Props = {
  now: Date,
  route: DestTime
}

const RouteInformation = ({ now, route }: Props) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('ocean-fishing')
  const [fishFilter, setFishFilter] = useState(FishFilter.Intuition)
  const stopTimes = getStopTimes(route)
  const next = calculateVoyages(now, 1, [route])[0].date
  const locale = i18n.language

  const handleSelectFishFilter = (event: React.ChangeEvent<{ value: FishFilter }>) => {
    setFishFilter(event.target.value)
  }

  return (
    <Section
      title={
        <Grid container alignItems='flex-end'>
          <Grid item xs={12} md={8}>
            {upperFirst(translate(locale, placeNames[fishingSpots[maps.STOP_MAP[route[0] as Dest]].placeName_sub], 'name_noArticle', 'name'))}
            <span className={classes.headerTime}>{maps.TIME_MAP[route[1] as Time]}</span>
            <Typography display='inline' className={classes.headerSub}>
              {timeUntil(now, next, { t, full: true, locale: locale })}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.fishFilterSelect}>
              <Select value={fishFilter} onChange={handleSelectFishFilter}>
                <MenuItem value={FishFilter.Intuition}>{t('showIntuitionFish')}</MenuItem>
                <MenuItem value={FishFilter.TimeSensitive}>{t('showTimeFish')}</MenuItem>
                <MenuItem value={FishFilter.Points}>{t('showPointsFish')}</MenuItem>
                <MenuItem value={FishFilter.All}>{t('showAllFish')}</MenuItem>
              </Select>
            </div>
          </Grid>
        </Grid>
      }
    >
      {(() => {
        switch (fishFilter) {
          case FishFilter.Intuition:
            return <RouteInformationIntuition stopTimes={stopTimes} />
          case FishFilter.TimeSensitive:
            return <RouteInformationTimeSensitive stopTimes={stopTimes} />
          case FishFilter.Points:
            return <RouteInformationPoints stopTimes={stopTimes} />
          case FishFilter.All:
            return <RouteInformationAll stopTimes={stopTimes} />
        }
      })()}
    </Section>
  )
}

export default RouteInformation
