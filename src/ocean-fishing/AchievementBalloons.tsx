import React from 'react'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import AchievementInformation from './AchievementInformation'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import Tug from './Tug'
import { getStopTimes, DestTime } from './ffxiv-ocean-fishing'
import { fishes } from './ffxiv-ocean-fishing/data'
import { getBaitGroup, subtextDH } from './utils'

interface Props {
  route: DestTime
}

const AchievementBalloons = ({ route }: Props): React.ReactElement => {
  const stopTimes = getStopTimes(route)

  return (
    <AchievementInformation achievement={2754}>
      <StopCardsContainer>
        <StopCard index={0} stopTime={stopTimes[0]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'IC–DH at 5-9s',
                baitGroupProps: { ...getBaitGroup(fishes[32057]), subtext: subtextDH }
              }, {
                header: 'DH at <3s',
                baitGroupProps: { ...getBaitGroup(fishes[32066]), subtext: subtextDH }
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
              Only the instant <Tug strength={1} /> is Mythril Boxfish. Anomalocaris Saron appears at 5s.
            </Typography>
          </CardContent>
        </StopCard>
        <StopCard index={1} stopTime={stopTimes[1]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'IC–DH at 10-16s',
                baitGroupProps: { ...getBaitGroup(fishes[29732]), subtext: subtextDH }
              }, {
                header: 'IC–DH at 2-7s',
                baitGroupProps: { ...getBaitGroup(fishes[29768]), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography paragraph>
              You may opt for no spectral here for an extended one in the next zone.
            </Typography>
            <Typography variant='overline'>Non-spectral</Typography>
            <Typography paragraph>
              Lampfish is possibly a blind DH at 10-14s.
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Can blind DH Silencers at &gt;3s. The instant <Tug strength={1} /> are Aronnaxes.
            </Typography>
          </CardContent>
        </StopCard>
        <StopCard index={2} stopTime={stopTimes[2]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'No buffs at 2-5s',
                baitGroupProps: { ...getBaitGroup(fishes[32095]), subtext: subtextDH }
              }, {
                header: 'DH at ≥11s',
                baitGroupProps: { ...getBaitGroup(fishes[32098]), subtext: subtextDH }
              }, {
                header: 'IC–DH at <3s',
                baitGroupProps: { ...getBaitGroup(fishes[32105]), subtext: subtextDH }
              }, {
                header: 'IC–DH at 3-5s',
                baitGroupProps: { ...getBaitGroup(fishes[32109]), subtext: subtextDH }
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
        </StopCard>
      </StopCardsContainer>
    </AchievementInformation>
  )
}

export default AchievementBalloons
