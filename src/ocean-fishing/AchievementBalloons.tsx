import React from 'react'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import AchievementInformation from './AchievementInformation'
import RouteCardContainer from './RouteCardContainer'
import RouteCard from './RouteCard'
import BaitList from './BaitList'
import { getStops, getBaitGroup, subtextDH } from './utils'
import * as maps from './maps'

type Props = {
  selectedRoute: maps.DestinationStopTime
}

const AchievementBalloons = ({ selectedRoute }: Props) => {
  const stops = getStops(selectedRoute)

  return (
    <AchievementInformation achievement={2754} subtitle='catch 250 balloons (31.25 each)'>
      <RouteCardContainer>
        <RouteCard index={0} stop={stops[0]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'IC–DH at 5-10s',
                baitGroupProps: { ...getBaitGroup(32057), subtext: subtextDH }
              }, {
                header: 'DH at <5s',
                baitGroupProps: { ...getBaitGroup(32066), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Non-spectral</Typography>
            <Typography paragraph>
              In general, IC–DH when possible and don’t rely heavily on spectrals.
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Anomalocaris Saron appears at 5s.
            </Typography>
          </CardContent>
        </RouteCard>
        <RouteCard index={1} stop={stops[1]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'IC–DH at 10-16s',
                baitGroupProps: { ...getBaitGroup(29732), subtext: subtextDH }
              }, {
                header: 'IC–DH at 2-6s',
                baitGroupProps: { ...getBaitGroup(29768), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography paragraph>
              You may opt for no spectral here for an extended one in the next zone.
            </Typography>
            <Typography variant='overline'>Non-spectral</Typography>
            <Typography paragraph>
              Lampfish can probably be a blind DH.
            </Typography>
          </CardContent>
        </RouteCard>
        <RouteCard index={2} stop={stops[2]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'No buffs at 2-5s',
                baitGroupProps: { ...getBaitGroup(32095), subtext: subtextDH }
              }, {
                header: 'DH at ≥11s',
                baitGroupProps: { ...getBaitGroup(32098), subtext: subtextDH }
              }, {
                header: 'IC–DH',
                baitGroupProps: { ...getBaitGroup(32105), subtext: subtextDH }
              }, {
                header: 'IC–DH',
                baitGroupProps: { ...getBaitGroup(32109), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Non-spectral</Typography>
            <Typography paragraph>
              Save GP when possible to blind DH Honeycomb Fish.
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Switch to Krill to go for both Garum Jugs and Pearl Bombfish.
            </Typography>
          </CardContent>
        </RouteCard>
      </RouteCardContainer>
    </AchievementInformation>
  )
}

export default AchievementBalloons
