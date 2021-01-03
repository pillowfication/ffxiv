import React from 'react'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Highlight from '../Highlight'
import AchievementInformation from './AchievementInformation'
import RouteCardContainer from './RouteCardContainer'
import RouteCard from './RouteCard'
import BaitList from './BaitList'
import { getStops, getBaitGroup } from './utils'
import * as maps from './maps'
import seadragonsMacro from './macros/seadragons.ffmacro'

type Props = {
  selectedRoute: maps.DestinationStopTime
}

const AchievementSeadragons = ({ selectedRoute }: Props) => {
  const stops = getStops(selectedRoute)

  return (
    <AchievementInformation achievement={2566} subtitle='catch 100 seadragons (12.5 each)'>
      <RouteCardContainer>
        <RouteCard index={0} stop={stops[0]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'IC–DH at 9-21s',
                baitGroupProps: { showDH: true, ...getBaitGroup(29740) }
              }, {
                header: 'No buffs',
                baitGroupProps: { showDH: true, ...getBaitGroup(29763) }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Non-spectral</Typography>
            <Typography paragraph>
              Clouds and Fog weather will remove Shaggy Seadragons.
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Spectral is bad. Sit on IC if you have it going into spectral instead of catching Aetheric Seadragons.
            </Typography>
          </CardContent>
        </RouteCard>
        <RouteCard index={1} stop={stops[1]}>
          <CardContent>
            <Typography paragraph>
              No seadragons here.
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
                header: 'IC–DH',
                baitGroupProps: { showDH: true, ...getBaitGroup(29764) }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Nothing to say about this.
            </Typography>
          </CardContent>
        </RouteCard>
      </RouteCardContainer>
      <Typography paragraph>
        Sample seadragons macro
      </Typography>
      <Highlight language='plaintext'>
        {seadragonsMacro}
      </Highlight>
    </AchievementInformation>
  )
}

export default AchievementSeadragons