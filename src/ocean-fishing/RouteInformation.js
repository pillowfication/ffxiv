import React, { useState } from 'react'
import PropTypes from 'prop-types'
import calculateVoyages from './calculate-voyages'
import { DEST_MAP, TIME_MAP, ROUTE_MAP, FISH_MAP, BLUE_FISH_MAP } from './maps'
import BAIT_GROUPS from './bait-groups'
import { timeUntil } from './utils'
import { makeStyles } from '@material-ui/core/styles'
import Section from '../Section'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import RouteCardContainer from './RouteCardContainer'
import RouteCard from './RouteCard'
import BaitList from './BaitList'
import OceanFishIcon from './OceanFishIcon'
import Tug from './Tug'
import FISH from './gists/fish.json'

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
  },
  table: {
    '& td': {
      padding: 0
    }
  },
  tableTug: {
    fontSize: '1.5em'
  }
}))

function TabPanel ({ children, tab, index, stop }) {
  const classes = useStyles()

  return (
    <div hidden={tab !== index}>
      {tab === index && (() => {
        let regions
        switch (stop[0]) {
          case 'G': regions = ['Outer Galadion Bay', 'Galadion Spectral Current']; break
          case 'S': regions = ['The Southern Strait of Merlthor', 'Southern Merlthor Spectral Current']; break
          case 'N': regions = ['The Northern Strait of Merlthor', 'Northern Merlthor Spectral Current']; break
          case 'R': regions = ['Open Rhotano Sea', 'Rhotano Spectral Current']; break
          case 'C': regions = ['Cieldalaes Margin', 'Cieldalaes Spectral Current']; break
          case 'B': regions = ['Open Bloodbrine Sea', 'Bloodbrine Spectral Current']; break
          case 'T': regions = ['Outer Rothlyt Sound', 'Rothlyt Spectral Current']; break
        }
        return (
          <div>
            <Table size='small' className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell colspan={2} align='center'>Fish</TableCell>
                  <TableCell align='center'>Bait</TableCell>
                  <TableCell align='center'>Tug</TableCell>
                  <TableCell align='center'>Points</TableCell>
                  <TableCell align='center'>Double Hook</TableCell>
                  <TableCell align='center'>Line Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {FISH[regions[0]].map((fish) =>
                  <TableRow key={fish.name}>
                    <TableCell><OceanFishIcon name={fish.name} /></TableCell>
                    <TableCell><Typography>{fish.name}</Typography></TableCell>
                    <TableCell align='center'><OceanFishIcon name={fish.bait} /></TableCell>
                    <TableCell align='center'><Tug strength={fish.tug} className={classes.tableTug} /></TableCell>
                    <TableCell align='center'><Typography>{fish.points}</Typography></TableCell>
                    <TableCell align='center'><Typography>{Array.isArray(fish.doubleHook) ? fish.doubleHook.join(', ') : fish.doubleHook}</Typography></TableCell>
                    <TableCell align='center'><Typography>{Array.isArray(fish.timer) ? fish.timer.join('-') : fish.timer}</Typography></TableCell>
                  </TableRow>
                )}
              </TableBody>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} align='center'>Fish</TableCell>
                  <TableCell align='center'>Bait</TableCell>
                  <TableCell align='center'>Tug</TableCell>
                  <TableCell align='center'>Points</TableCell>
                  <TableCell align='center'>Double Hook</TableCell>
                  <TableCell align='center'>Line Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {FISH[regions[1]].map((fish) =>
                  <TableRow key={fish.name}>
                    <TableCell><OceanFishIcon name={fish.name} /></TableCell>
                    <TableCell><Typography>{fish.name}</Typography></TableCell>
                    <TableCell align='center'><OceanFishIcon name={fish.bait} /></TableCell>
                    <TableCell align='center'><Tug strength={fish.tug} className={classes.tableTug} /></TableCell>
                    <TableCell align='center'><Typography>{fish.points}</Typography></TableCell>
                    <TableCell align='center'><Typography>{Array.isArray(fish.doubleHook) ? fish.doubleHook.join(', ') : fish.doubleHook}</Typography></TableCell>
                    <TableCell align='center'><Typography>{Array.isArray(fish.timer) ? fish.timer.join('-') : fish.timer}</Typography></TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )
      })()}
    </div>
  )
}

const RouteInformation = ({ now, selectedRoute }) => {
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
          <Grid item xs={12} lg={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showAllFish}
                  onChange={handleToggleShowAllFish}
                  color='primary'
                />
              }
              label='Show all fish (WIP)'
            />
          </Grid>
        </Grid>
      }
    >
      {(() => {
        if (showAllFish) {
          return (
            <>
              <Tabs variant='fullWidth' value={tab} onChange={handleChangeTab}>
                {routeStops.map((stop, index) =>
                  <Tab key={index} label={<>{index + 1}. {DEST_MAP[stop[0]]} {TIME_MAP[stop[1]]}</>} />
                )}
              </Tabs>
              {routeStops.map((stop, index) =>
                <TabPanel key={index} tab={tab} index={index} stop={stop} />
              )}
            </>
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
                      const baitGroups = FISH_MAP[stop[0]].map((fish) => ({
                        header: fish,
                        baitGroup: BAIT_GROUPS[fish]
                      }))
                      const blueFish = BLUE_FISH_MAP[stop]
                      if (blueFish) {
                        baitGroups.push({
                          header: blueFish,
                          baitGroup: BAIT_GROUPS[blueFish]
                        })
                      }
                      return <BaitList baitGroups={baitGroups} />
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
