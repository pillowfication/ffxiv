import React, { useState } from 'react'
import PropTypes from 'prop-types'
import calculateVoyages from './calculate-voyages'
import { DEST_MAP, TIME_MAP, ROUTE_MAP, FISH_MAP, BLUE_FISH_MAP } from './maps'
import { timeUntil, getBaitChain } from './utils'
import { makeStyles } from '@material-ui/core/styles'
import Section from '../Section'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import RouteCardContainer from './RouteCardContainer'
import RouteCard from './RouteCard'
import FishPanel from './FishPanel'
import BaitList from './BaitList'
import BaitGroup from './BaitGroup'

const TIMES = 'DSN'

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

const RouteInformation = ({ now, selectedRoute, checklist, setChecklist }) => {
  if (!now || !selectedRoute) return null

  const classes = useStyles()
  const [name, time] = selectedRoute
  const timeIndex = TIMES.indexOf(time)
  const routeStops = ROUTE_MAP[name]
    .map((dest, index) => dest + TIMES[(timeIndex + index + 1) % 3])
  const next = calculateVoyages(now, 1, selectedRoute)[0]
  const [showAllFish, setShowAllFish] = useState(false)
  const [tab, setTab] = useState(0)

  const handleToggleShowAllFish = () => {
    setShowAllFish(!showAllFish)
  }
  const handleChangeTab = (event, value) => {
    setTab(value)
  }

  return (
    <Section
      title={
        <Grid container>
          <Grid item xs={12} lg={8}>
            {DEST_MAP[name]} <span className={classes.headerTime}>{TIME_MAP[time]}</span>
            <Typography display='inline' className={classes.headerSub}>
              {timeUntil(now, next.time, true)}
            </Typography>
          </Grid>
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
                {routeStops.map((stop, index) =>
                  <Tab key={index} label={<>{index + 1}. {DEST_MAP[stop[0]]} {TIME_MAP[stop[1]]}</>} />
                )}
              </Tabs>
              {routeStops.map((stop, index) =>
                <FishPanel key={index} tab={tab} index={index} stop={stop} checklist={checklist} setChecklist={setChecklist} />
              )}
            </Card>
          )
        } else {
          return (
            <RouteCardContainer>
              {routeStops.map((stop, index) =>
                <RouteCard key={index}>
                  <CardHeader
                    title={
                      <Typography variant='h6'>{index + 1}. {DEST_MAP[stop[0]]} {TIME_MAP[stop[1]]}</Typography>
                    }
                    disableTypography
                  />
                  <CardContent>
                    {(() => {
                      const fishes = FISH_MAP[stop[0]].slice()
                      if (BLUE_FISH_MAP[stop]) {
                        fishes.push(BLUE_FISH_MAP[stop])
                      }

                      return (
                        <BaitList baitGroups={fishes.map((fish) => {
                          const baitChain = getBaitChain(fish)
                          return {
                            header: fish,
                            hasIntuition: baitChain.intuitionFishes !== undefined,
                            baitGroup: <BaitGroup {...baitChain} />
                          }
                        })}
                        />
                      )
                    })()}
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

RouteInformation.propTypes = {
  now: PropTypes.object,
  selectedRoute: PropTypes.oneOf(['BD', 'BN', 'BS', 'ND', 'NN', 'NS', 'RD', 'RN', 'RS', 'TD', 'TN', 'TS'])
}

export default RouteInformation
