import React from 'react'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Highlight from '../Highlight'
import AchievementInformation from './AchievementInformation'
import RouteCardContainer from './RouteCardContainer'
import RouteCard from './RouteCard'
import BaitList from './BaitList'
import Tug from './Tug'
import { getStops, getBaitGroup, subtextDH } from './utils'
import * as maps from './maps'
import jellyfishMacro from './macros/jellyfish.ffmacro'

type Props = {
  selectedRoute: maps.DestinationStopTime
}

const AchievementJellyfish = ({ selectedRoute }: Props) => {
  const stops = getStops(selectedRoute)

  return (
    <AchievementInformation achievement={2565} subtitle='catch 150 jellyfish (18.75 each)'>
      <RouteCardContainer>
        <RouteCard index={0} stop={stops[0]}>
          <CardContent>
            <Typography paragraph>
              No jellyfish here.
            </Typography>
            <Typography paragraph>
              You may opt for no spectral here for an extended one in the next zone.
            </Typography>
          </CardContent>
        </RouteCard>
        <RouteCard index={1} stop={stops[1]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'DH at <5s',
                baitGroupProps: { ...getBaitGroup(29739), subtext: subtextDH }
              }, {
                header: 'IC–DH at 4-8s',
                baitGroupProps: { ...getBaitGroup(29757), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Non-spectral</Typography>
            <Typography paragraph>
              Blind DH all <Tug strength={1} /> before 5s, and recast after 5s. IC is not necessary.
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              While spectral is not recommended, it won’t kill your run.
            </Typography>
          </CardContent>
        </RouteCard>
        <RouteCard index={2} stop={stops[2]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'IC–DH at 6-10s',
                baitGroupProps: { ...getBaitGroup(29762), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              A blind DH is possible, but it can be risky and unnecessary.
            </Typography>
          </CardContent>
        </RouteCard>
      </RouteCardContainer>
      <Typography paragraph>
        Sample jellyfish macro
      </Typography>
      <Highlight language='plaintext'>
        {jellyfishMacro}
      </Highlight>
    </AchievementInformation>
  )
}

export default AchievementJellyfish
