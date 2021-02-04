import React from 'react'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Highlight from '../Highlight'
import AchievementInformation from './AchievementInformation'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import Tug from './Tug'
import { getStopTimes, DestTime } from './ffxiv-ocean-fishing'
import { getBaitGroup, subtextDH } from './utils'
import jellyfishMacro from './macros/jellyfish.ffmacro'

interface Props {
  route: DestTime
}

const AchievementJellyfish = ({ route }: Props): React.ReactElement => {
  const stopTimes = getStopTimes(route)

  return (
    <AchievementInformation achievement={2565}>
      <StopCardsContainer>
        <StopCard index={0} stopTime={stopTimes[0]}>
          <CardContent>
            <Typography paragraph>
              No jellyfish here.
            </Typography>
          </CardContent>
        </StopCard>
        <StopCard index={1} stopTime={stopTimes[1]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'DH at <5s',
                baitGroupProps: { ...getBaitGroup(29739), subtext: subtextDH }
              }, {
                header: 'IC–DH at 4-7s',
                baitGroupProps: { ...getBaitGroup(29757), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography paragraph>
              You may opt for no spectral here for an extended one in the next zone.
            </Typography>
            <Typography variant='overline'>Non-spectral</Typography>
            <Typography paragraph>
              Blind DH all <Tug strength={1} /> before 5s, and recast after 5s. IC is not necessary.
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              It is possible to blind DH Sea Nettles at ≥6s.
            </Typography>
          </CardContent>
        </StopCard>
        <StopCard index={2} stopTime={stopTimes[2]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'DH–IC–DH at 6-10s',
                baitGroupProps: { ...getBaitGroup(29762), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Nothing to say here.
            </Typography>
          </CardContent>
        </StopCard>
      </StopCardsContainer>
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
