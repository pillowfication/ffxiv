import React, { useState } from 'react'
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
import { timeUntil, getStops, getBlueFish, getBaitGroup, translate } from './utils'

const useStyles = makeStyles((theme) => ({
  headerSub: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      display: 'block'
    }
  },
  headerTime: {
    position: 'relative',
    top: '-0.2em'
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
            {translate(fishingSpots[maps.STOP_MAP[selectedRoute[0]]], 'name', locale)}
            <span className={classes.headerTime}>{maps.TIME_MAP[selectedRoute[1]]}</span>
            <Typography display='inline' className={classes.headerSub}>{timeUntil(now, next, true)}</Typography>
          </Grid>
          {/* @ts-ignore */}
          <Grid item xs={12} lg={4} align='right'>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showAllFish}
                  onChange={handleToggleShowAllFish}
                  color='primary'
                />
              }
              label='Show all fish'
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
                  <Tab key={stop} label={<>{index + 1}. {translate(fishingSpots[maps.STOP_MAP[stop[0]]], 'name', locale)} {maps.TIME_MAP[stop[1]]}</>} />
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
                          header: fishes[fishId].name_en,
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
