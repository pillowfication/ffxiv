import React from 'react'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Highlight from '../Highlight'
import AchievementInformation from './AchievementInformation'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import { getStopTimes, DestTime } from './ffxiv-ocean-fishing'
import { fishes } from './ffxiv-ocean-fishing/data'
import { getBaitGroup, subtextDH } from './utils'
import seadragonsMacro from './macros/seadragons.ffmacro'

interface Props {
  route: DestTime
}

const AchievementSeadragons = ({ route }: Props): React.ReactElement => {
  const stopTimes = getStopTimes(route)

  return (
    <AchievementInformation achievement={2566}>
      <StopCardsContainer>
        <StopCard index={0} stopTime={stopTimes[0]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'IC–DH at 9-16s',
                baitGroupProps: { ...getBaitGroup(fishes[29740]), subtext: subtextDH }
              }, {
                header: 'No buffs',
                baitGroupProps: { ...getBaitGroup(fishes[29763]), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Non-spectral</Typography>
            <Typography paragraph>
              Clouds and Fog weather will remove Shaggy Seadragons.
            </Typography>
            <Typography variant='body2' paragraph>
              Note: with Ragworm, blind DH at 10-16s is possible.
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Spectral is bad. Sit on IC if you have it going into spectral instead of catching Aetheric Seadragons.
            </Typography>
          </CardContent>
        </StopCard>
        <StopCard index={1} stopTime={stopTimes[1]}>
          <CardContent>
            <Typography paragraph>
              No seadragons here. Collect some Angler’s Art!
            </Typography>
            <Typography paragraph>
              You may opt for no spectral here for an extended one in the next zone.
            </Typography>
          </CardContent>
        </StopCard>
        <StopCard index={2} stopTime={stopTimes[2]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'DH–IC–DH at ≥7s',
                baitGroupProps: { ...getBaitGroup(fishes[29764]), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              You can go for the safer IC–DH instead.
            </Typography>
          </CardContent>
        </StopCard>
      </StopCardsContainer>
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
