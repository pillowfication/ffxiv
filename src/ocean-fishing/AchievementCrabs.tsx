import React from 'react'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import AchievementInformation from './AchievementInformation'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import { getStopTimes, DestTime } from './ffxiv-ocean-fishing'
import { getBaitGroup, subtextDH } from './utils'

interface Props {
  route: DestTime
}

const AchievementCrabs = ({ route }: Props): React.ReactElement => {
  const stopTimes = getStopTimes(route)

  return (
    <AchievementInformation achievement={2755}>
      <StopCardsContainer>
        <StopCard index={0} stopTime={stopTimes[0]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'IC–DH at 5-11s',
                baitGroupProps: { ...getBaitGroup(32055), subtext: subtextDH }
              }, {
                header: 'IC–DH at 2-5s',
                baitGroupProps: { ...getBaitGroup(32065), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Non-spectral</Typography>
            <Typography paragraph>
              In general, IC–DH when possible and don’t rely heavily on spectrals. Tortoiseshell Crab is also a blind DH at &lt;12s.
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Can blind DH Titanshell Crabs at &lt;3s.
            </Typography>
          </CardContent>
        </StopCard>
        <StopCard index={1} stopTime={stopTimes[1]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'IC–DH at 8-20s',
                baitGroupProps: { ...getBaitGroup(29741), subtext: subtextDH }
              }, {
                header: 'IC–DH at 4-5s',
                baitGroupProps: { ...getBaitGroup(29777), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography paragraph>
              You may opt for no spectral here for an extended one in the next zone.
            </Typography>
          </CardContent>
        </StopCard>
        <StopCard index={2} stopTime={stopTimes[2]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'No buffs at 3-7s',
                baitGroupProps: { ...getBaitGroup(32075), subtext: subtextDH }
              }, {
                header: 'DH at ≥13s',
                baitGroupProps: { ...getBaitGroup(32079), subtext: subtextDH }
              }, {
                header: 'No Buffs at <3s',
                baitGroupProps: { ...getBaitGroup(32085), subtext: subtextDH }
              }, {
                header: 'IC–DH at 4-7s',
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
              Can blind DH Exterminators at ≥4s.
            </Typography>
          </CardContent>
        </StopCard>
      </StopCardsContainer>
    </AchievementInformation>
  )
}

export default AchievementCrabs
