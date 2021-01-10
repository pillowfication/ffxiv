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

const AchievementCrabs = ({ selectedRoute }: Props) => {
  const stops = getStops(selectedRoute)

  return (
    <AchievementInformation achievement={2755}>
      <RouteCardContainer>
        <RouteCard index={0} stop={stops[0]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'IC–DH at 6-14s',
                baitGroupProps: { ...getBaitGroup(32055), subtext: subtextDH }
              }, {
                header: 'DH–IC–DH at 2-5s',
                baitGroupProps: { ...getBaitGroup(32065), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Non-spectral</Typography>
            <Typography paragraph>
              In general, IC–DH when possible and don’t rely heavily on spectrals. Can be blind DH Tortoiseshell Crab before 12s.
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Hook all <Tug strength={2} />, but only the instant <Tug strength={2} /> is a blind DH.
            </Typography>
          </CardContent>
        </RouteCard>
        <RouteCard index={1} stop={stops[1]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'IC–DH at 9-20s',
                baitGroupProps: { ...getBaitGroup(29741), subtext: subtextDH }
              }, {
                header: 'IC–DH at 4-8s',
                baitGroupProps: { ...getBaitGroup(29777), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography paragraph>
              You may opt for no spectral here for an extended one in the next zone.
            </Typography>
          </CardContent>
        </RouteCard>
        <RouteCard index={2} stop={stops[2]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'No buffs at 4-9s',
                baitGroupProps: { ...getBaitGroup(32075), subtext: subtextDH }
              }, {
                header: 'DH at ≥16s',
                baitGroupProps: { ...getBaitGroup(32079), subtext: subtextDH }
              }, {
                header: 'No Buffs',
                baitGroupProps: { ...getBaitGroup(32085), subtext: subtextDH }
              }, {
                header: 'IC-DH at 5-6s',
                baitGroupProps: { ...getBaitGroup(32090), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Non-spectral</Typography>
            <Typography paragraph>
              Save GP when possible to blind DH Bloodpolish Crabs.
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Exterminators are possibly a blind DH.
            </Typography>
          </CardContent>
        </RouteCard>
      </RouteCardContainer>
    </AchievementInformation>
  )
}

export default AchievementCrabs
