import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Section from '../Section'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import RouteCardContainer from './RouteCardContainer'
import RouteCard from './RouteCard'
import FishPanel from './FishPanel'
import BaitList from './BaitList'
import { fishingSpots, fishes } from './ocean-fishing/data'
import { calculateVoyages, getStops, DestinationStopTime } from './ocean-fishing'
import * as maps from './maps'
import {
  timeUntil,
  getTimeSensitiveFish,
  getPointsFish,
  getBlueFish,
  getBaitGroup,
  translate,
  upperFirst
} from './utils'
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
  selectedRoute: DestinationStopTime
}

const RouteInformation = ({ now, selectedRoute }: Props) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('ocean-fishing')
  const [fishFilter, setFishFilter] = useState(FishFilter.Intuition)
  const [tab, setTab] = useState(0)
  const stops = getStops(selectedRoute)
  const next = calculateVoyages(now, 1, [selectedRoute])[0].time
  const locale = i18n.language

  useEffect(() => {
    setTab(0)
  }, [selectedRoute])

  const handleSelectFishFilter = (event: React.ChangeEvent<{ value: FishFilter }>) => {
    setFishFilter(event.target.value)
  }

  const handleChangeTab = (_: any, value: number) => {
    setTab(value)
  }

  return (
    <Section
      title={
        <Grid container alignItems='flex-end'>
          <Grid item xs={12} md={8}>
            {upperFirst(translate(locale, fishingSpots[maps.STOP_MAP[selectedRoute[0]]], 'place_name_sub', 'no_article'))}
            <span className={classes.headerTime}>{maps.TIME_MAP[selectedRoute[1]]}</span>
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
            return (
              <RouteCardContainer>
                {stops.map((stop, index) =>
                  <RouteCard key={stop} index={index} stop={stop}>
                    <CardContent>
                      <BaitList baitGroups={
                        [
                          maps.SPECTRAL_FISH_MAP[stop[0]],
                          maps.GREEN_FISH_MAP[stop[0]],
                          getBlueFish(selectedRoute)[index]
                        ]
                          .filter(x => x)
                          .map(fishId => ({
                            header: translate(locale, fishes[fishId], 'name'),
                            baitGroupProps: getBaitGroup(fishId)
                          }))
                      } />
                    </CardContent>
                  </RouteCard>
                )}
              </RouteCardContainer>
            )
          case FishFilter.TimeSensitive:
            return (
              <RouteCardContainer>
                {stops.map((stop, index) =>
                  <RouteCard key={stop} index={index} stop={stop}>
                    <CardContent>
                      <BaitList baitGroups={
                        [
                          maps.SPECTRAL_FISH_MAP[stop[0]],
                          ...getTimeSensitiveFish(selectedRoute)[index]
                        ]
                          .filter(x => x)
                          .map(fishId => ({
                            header: translate(locale, fishes[fishId], 'name'),
                            baitGroupProps: getBaitGroup(fishId)
                          }))
                      } />
                    </CardContent>
                  </RouteCard>
                )}
              </RouteCardContainer>
            )
          case FishFilter.Points:
            return (
              <RouteCardContainer>
                {stops.map((stop, index) =>
                  <RouteCard key={stop} index={index} stop={stop}>
                    <CardContent>
                      <BaitList baitGroups={
                        [
                          maps.SPECTRAL_FISH_MAP[stop[0]],
                          maps.GREEN_FISH_MAP[stop[0]],
                          ...getPointsFish(selectedRoute)[index],
                          getBlueFish(selectedRoute)[index]
                        ]
                          .filter(x => x)
                          .map((fishId, index) => {
                            const fishInfo = fishes[fishId].spreadsheet_data
                            return {
                            header: translate(locale, fishes[fishId], 'name'),
                            baitGroupProps: {
                              ...getBaitGroup(fishId),
                              subtext: index === 0 ? '' : (
                                `DH: ×${Array.isArray(fishInfo.double_hook) ? fishInfo.double_hook.join('-') : fishInfo.double_hook}` +
                                ` = ${(Array.isArray(fishInfo.double_hook) ? fishInfo.double_hook[1] : fishInfo.double_hook) * fishInfo.points}`
                              ),
                              mainOnly: true
                            }
                          }
                        })
                      } />
                    </CardContent>
                  </RouteCard>
                )}
              </RouteCardContainer>
            )
          case FishFilter.All:
            return (
              <Card variant='outlined'>
                <Tabs variant='fullWidth' value={tab} onChange={handleChangeTab}>
                  {stops.map((stop, index) =>
                    <Tab key={stop} label={<>{index + 1}. {translate(locale, fishingSpots[maps.STOP_MAP[stop[0]]], 'place_name_sub')} {maps.TIME_MAP[stop[1]]}</>} />
                  )}
                </Tabs>
                {stops.map((stop, index) =>
                  <FishPanel key={stop} tab={tab} index={index} stop={stop} />
                )}
              </Card>
            )
        }
      })()}
    </Section>
  )
}

export default RouteInformation
