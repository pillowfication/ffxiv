import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import calculateVoyages, { LULU_EPOCH } from './calculate-voyages'
import { DEST_MAP, TIME_MAP, ROUTE_MAP, FISH_MAP, BLUE_FISH_MAP } from './maps'
import BAIT_GROUPS from './bait-groups'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import RouteCardContainer from './RouteCardContainer'
import RouteCard from './RouteCard'
import BaitList from './BaitList'

const TIMES = 'DSN'

const useStyles = makeStyles((theme) => ({
  headerSub: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0',
      display: 'block'
    }
  },
  headerTime: {
    position: 'relative',
    top: '-0.2em'
  }
}))

export default function RouteInformation (props) {
  const { now, selectedRoute } = props
  if (!now || !selectedRoute) {
    return null
  }

  const classes = useStyles()
  const [name, time] = selectedRoute
  const timeIndex = TIMES.indexOf(time)
  const routeStops = ROUTE_MAP[name]
    .map((dest, index) => dest + TIMES[(timeIndex + index + 1) % 3])
  const next = calculateVoyages(now, 1, selectedRoute)[0]
  const nextMoment = LULU_EPOCH.clone()
    .add(next.day, 'days').add(next.hour, 'hours')
    .utcOffset(moment().utcOffset())
  const timeUntil = nextMoment.diff(now)

  return (
    <section>
      <Typography variant='h5' gutterBottom>
        {DEST_MAP[name]} <span className={classes.headerTime}>{TIME_MAP[time]}</span>
        <Typography display='inline' className={classes.headerSub}>
          next is {
            timeUntil <= 0
              ? 'boarding now / en route'
              : `${moment.duration(timeUntil).humanize(true)} at ${nextMoment.format('HH:mm')}`
          }
        </Typography>
      </Typography>
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
    </section>
  )
}

RouteInformation.propTypes = {
  now: PropTypes.object,
  selectedRoute: PropTypes.oneOf(['ND', 'NS', 'NN', 'RD', 'RS', 'RN'])
}
