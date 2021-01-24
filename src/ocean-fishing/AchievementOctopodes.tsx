import React from 'react'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Highlight from '../Highlight'
import AchievementInformation from './AchievementInformation'
import RouteCardContainer from './RouteCardContainer'
import RouteCard from './RouteCard'
import BaitList from './BaitList'
import Tug from './Tug'
import { getStops, DestinationStopTime } from './ocean-fishing'
import { getBaitGroup, subtextDH } from './utils'
import octopodesMacro from './macros/octopodes.ffmacro'

type Props = {
  selectedRoute: DestinationStopTime
}

const AchievementOctopodes = ({ selectedRoute }: Props) => {
  const stops = getStops(selectedRoute)

  return (
    <AchievementInformation achievement={2563}>
      <RouteCardContainer>
        <RouteCard index={0} stop={stops[0]}>
          <CardContent>
            <Typography paragraph>
              No octopodes here.
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
                header: 'IC–DH at 16-26s',
                baitGroupProps: { ...getBaitGroup(29734), subtext: subtextDH }
              }, {
                header: 'DH–IC–DH at <3s',
                baitGroupProps: { ...getBaitGroup(29766), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Non-spectral</Typography>
            <Typography paragraph>
              Can blind DH the Cyan Octopodes at 24s, or at 16s with a SS’d Jasperhead. Clouds/Fog weather will also remove Jasperheads.
            </Typography>
            <Typography variant='body2' paragraph>
              Note: with Krill, blind DH at 19-26s might be possible
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Only the instant <Tug strength={2} /> is Merman’s Mane.
            </Typography>
          </CardContent>
        </RouteCard>
        <RouteCard index={2} stop={stops[2]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'DH–IC–DH at ≥5s',
                baitGroupProps: { ...getBaitGroup(29773), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              The earlier <Tug strength={2} /> is Coccosteus.
            </Typography>
          </CardContent>
        </RouteCard>
      </RouteCardContainer>
      <Typography paragraph>
        Sample octopodes macro
      </Typography>
      <Highlight language='plaintext'>
        {octopodesMacro}
      </Highlight>
    </AchievementInformation>
  )
}

export default AchievementOctopodes
