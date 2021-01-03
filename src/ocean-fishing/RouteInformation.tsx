import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Section from '../Section'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
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
import { timeUntil, getStops, getBlueFish, getBaitGroup, translate, upperFirst } from './utils'

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
  showAllFish: {
    [theme.breakpoints.up('lg')]: {
      textAlign: 'right'
    }
  },
  showAllFishCheckbox: {
    padding: 0,
    margin: theme.spacing(0, 1)
  }
}))

type Props = {
  now?: Date,
  selectedRoute?: maps.DestinationStopTime,
  checklist: number[],
  setChecklist: (checklist: number[]) => void
}

const RouteInformation = ({ now, selectedRoute, checklist, setChecklist }: Props) => {
  if (!now || !selectedRoute) return null

  const classes = useStyles()
  const router = useRouter()
  const [showAllFish, setShowAllFish] = useState(false)
  const [tab, setTab] = useState(0)
  const locale = router.locale
  const stops = getStops(selectedRoute)
  const next = calculateVoyages(now, 1, [selectedRoute])[0].time

  useEffect(() => {
    setTab(0)
  }, [selectedRoute])

  const handleToggleShowAllFish = () => {
    setShowAllFish(!showAllFish)
  }

  const handleChangeTab = (_: any, value: number) => {
    setTab(value)
  }

  return (
    <Section
      title={
        <Grid container>
          <Grid item xs={12} lg={8}>
            {upperFirst(translate(locale, fishingSpots[maps.STOP_MAP[selectedRoute[0]]], 'place_name_sub', 'no_article'))}
            <span className={classes.headerTime}>{maps.TIME_MAP[selectedRoute[1]]}</span>
            <Typography display='inline' className={classes.headerSub}>{timeUntil(now, next, true)}</Typography>
          </Grid>
          <Grid item xs={12} lg={4}>
            <FormControlLabel
              control={
                <Checkbox
                  className={classes.showAllFishCheckbox}
                  checked={showAllFish}
                  onChange={handleToggleShowAllFish}
                  color='primary'
                />
              }
              label='Show all fish'
              className={classes.showAllFish}
            />
          </Grid>
        </Grid>
      }
    >
      {(() => {
        if (showAllFish) {
          return (
            <Card variant='outlined'>
              <Tabs variant='fullWidth' value={tab} onChange={handleChangeTab}>
                {stops.map((stop, index) =>
                  <Tab key={stop} label={<>{index + 1}. {translate(locale, fishingSpots[maps.STOP_MAP[stop[0]]], 'place_name_sub')} {maps.TIME_MAP[stop[1]]}</>} />
                )}
              </Tabs>
              {stops.map((stop, index) =>
                <FishPanel key={stop} tab={tab} index={index} stop={stop} checklist={checklist} setChecklist={setChecklist} />
              )}
            </Card>
          )
        } else {
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
        }
      })()}
    </Section>
  )
}

export default RouteInformation
