import React from 'react'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import AchievementInformation from './AchievementInformation'
import RouteCardContainer from './RouteCardContainer'
import RouteCard from './RouteCard'
import BaitList from './BaitList'
import Tug from './Tug'
import { getStops, getBaitGroup, subtextDH } from './utils'
import * as maps from './maps'

type Props = {
  selectedRoute: maps.DestinationStopTime
}

const AchievementSharks = ({ selectedRoute }: Props) => {
  const stops = getStops(selectedRoute)

  return (
    <AchievementInformation achievement={2564}>
      <RouteCardContainer>
        <RouteCard index={0} stop={stops[0]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'IC; DH–IC–DH post-spectral',
                baitGroupProps: { ...getBaitGroup(28942), subtext: subtextDH }
              }, {
                header: 'IC–DH',
                baitGroupProps: { ...getBaitGroup(29750), subtext: subtextDH }
              }, {
                header: 'No buffs',
                baitGroupProps: { ...getBaitGroup(29751), subtext: subtextDH }
              }, {
                header: 'DH–IC–DH',
                baitGroupProps: { ...getBaitGroup(29782), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Pre-spectral</Typography>
            <Typography paragraph>
              Save GP when possible; IC if capped.
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Hook <Tug strength={2} /> and <Tug strength={3} />. IC–DH if you catch a Ghost Shark; <Tug strength={3} /> is a blind DH–IC–DH.
            </Typography>
            <Typography variant='overline'>Post-spectral</Typography>
            <Typography paragraph>
              Spend all remaining GP with blind DH–IC–DH Tarnished Sharks.
            </Typography>
          </CardContent>
        </RouteCard>
        <RouteCard index={1} stop={stops[1]}>
          <CardContent>
            <Typography paragraph>
              No sharks here.
            </Typography>
            <Typography paragraph>
              Try for Coral Manta?<br />(but save GP)
            </Typography>
            <Typography paragraph>
              You may opt for no spectral here for an extended one in the next zone.
            </Typography>
          </CardContent>
        </RouteCard>
        <RouteCard index={2} stop={stops[2]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'IC–DH; DH–IC–DH post-spectral',
                baitGroupProps: { ...getBaitGroup(29735), subtext: subtextDH }
              }, {
                header: 'No buffs',
                baitGroupProps: { ...getBaitGroup(29767), subtext: subtextDH }
              }, {
                header: 'DH–IC–DH',
                baitGroupProps: { ...getBaitGroup(29770), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Pre-spectral</Typography>
            <Typography paragraph>
              Can blind DH Chrome Hammerheads at &lt;22s.
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Hook <Tug strength={2} /> and <Tug strength={3} />. If you catch a Sweeper, can use IC if high on GP. <Tug strength={3} /> is a blind DH.
            </Typography>
            <Typography variant='overline'>Post-spectral</Typography>
            <Typography paragraph>
              Can blind DH Chrome Hammerheads.
            </Typography>
          </CardContent>
        </RouteCard>
      </RouteCardContainer>
    </AchievementInformation>
  )
}

export default AchievementSharks
