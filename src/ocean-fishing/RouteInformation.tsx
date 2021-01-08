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
import calculateVoyages from './calculate-voyages'
import { fishingSpots, fishes } from './gists/data/ocean-fish-data.json'
import * as maps from './maps'
import {
  timeUntil,
  getStops,
  getFishInfo,
  getTimeSensitiveFish,
  getPointsFish,
  getBlueFish,
  getBaitGroup,
  translate,
  upperFirst
} from './utils'
import i18n from '../../i18n'
import { I18n, TFunction } from 'next-i18next'

const useStyles = makeStyles((theme) => ({
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
  fishViewSelect: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      textAlign: 'right'
    }
  }
}))

enum FishView {
  Intuition,
  TimeSensitive,
  Points,
  All
}

type Props = {
  now?: Date,
  selectedRoute?: maps.DestinationStopTime,
  checklist: number[],
  setChecklist: (checklist: number[]) => void,
  t: TFunction,
  i18n: I18n
}

const RouteInformation = ({ now, selectedRoute, checklist, setChecklist, t, i18n }: Props) => {
  if (!now || !selectedRoute) return null

  const classes = useStyles()
  const [fishView, setFishView] = useState<FishView>(FishView.Intuition)
  const [tab, setTab] = useState(0)
  const stops = getStops(selectedRoute)
  const next = calculateVoyages(now, 1, [selectedRoute])[0].time

  useEffect(() => {
    setTab(0)
  }, [selectedRoute])

  const handleSelectFishView = (event: React.ChangeEvent<{ value: FishView }>) => {
    setFishView(event.target.value)
  }

  const handleChangeTab = (_: any, value: number) => {
    setTab(value)
  }

  return (
    <Section
      title={
        <Grid container alignItems='flex-end'>
          <Grid item xs={12} md={8}>
            {upperFirst(translate(i18n.language, fishingSpots[maps.STOP_MAP[selectedRoute[0]]], 'place_name_sub', 'no_article'))}
            <span className={classes.headerTime}>{maps.TIME_MAP[selectedRoute[1]]}</span>
            <Typography display='inline' className={classes.headerSub}>{timeUntil(now, next, true)}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.fishViewSelect}>
              <Select value={fishView} onChange={handleSelectFishView}>
                <MenuItem value={FishView.Intuition}>{t('show-intuition-fish')}</MenuItem>
                <MenuItem value={FishView.TimeSensitive}>{t('show-time-fish')}</MenuItem>
                <MenuItem value={FishView.Points}>{t('show-points-fish')}</MenuItem>
                <MenuItem value={FishView.All}>{t('show-all-fish')}</MenuItem>
              </Select>
            </div>
          </Grid>
        </Grid>
      }
    >
      {(() => {
        switch (fishView) {
          case FishView.Intuition:
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
                            header: translate(i18n.language, fishes[fishId], 'name'),
                            baitGroupProps: getBaitGroup(fishId)
                          }))
                      } />
                    </CardContent>
                  </RouteCard>
                )}
              </RouteCardContainer>
            )
          case FishView.TimeSensitive:
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
                            header: translate(i18n.language, fishes[fishId], 'name'),
                            baitGroupProps: getBaitGroup(fishId)
                          }))
                      } />
                    </CardContent>
                  </RouteCard>
                )}
              </RouteCardContainer>
            )
          case FishView.Points:
            return (
              <RouteCardContainer>
                {stops.map((stop, index) =>
                  <RouteCard key={stop} index={index} stop={stop}>
                    <CardContent>
                      <BaitList baitGroups={
                        [
                          maps.SPECTRAL_FISH_MAP[stop[0]],
                          maps.GREEN_FISH_MAP[stop[0]],
                          ...getPointsFish(selectedRoute)[index]
                        ]
                          .filter(x => x)
                          .map((fishId, index) => {
                            const fishInfo = getFishInfo(fishes[fishId].name_en)
                            return {
                            header: translate(i18n.language, fishes[fishId], 'name'),
                            baitGroupProps: {
                              ...getBaitGroup(fishId),
                              subtext: index === 0 ? '' : (
                                `DH: ×${Array.isArray(fishInfo.doubleHook) ? fishInfo.doubleHook.join('-') : fishInfo.doubleHook}` +
                                ` = ${(Array.isArray(fishInfo.doubleHook) ? fishInfo.doubleHook[1] : fishInfo.doubleHook) * fishInfo.points}`
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
          case FishView.All:
            return (
              <Card variant='outlined'>
                <Tabs variant='fullWidth' value={tab} onChange={handleChangeTab}>
                  {stops.map((stop, index) =>
                    <Tab key={stop} label={<>{index + 1}. {translate(i18n.language, fishingSpots[maps.STOP_MAP[stop[0]]], 'place_name_sub')} {maps.TIME_MAP[stop[1]]}</>} />
                  )}
                </Tabs>
                {stops.map((stop, index) =>
                  <FishPanel key={stop} tab={tab} index={index} stop={stop} checklist={checklist} setChecklist={setChecklist} />
                )}
              </Card>
            )
        }
      })()}
    </Section>
  )
}

export default i18n.withTranslation('ocean-fishing')(RouteInformation)
