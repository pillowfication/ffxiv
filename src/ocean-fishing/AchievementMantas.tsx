import React from 'react'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import AchievementInformation from './AchievementInformation'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import Tug from './Tug'
import { getStopTimes, DestTime } from './ffxiv-ocean-fishing'
import { getBaitGroup, subtextDH } from './utils'

interface Props {
  route: DestTime
}

const AchievementMantas = ({ route }: Props): React.ReactElement => {
  const stopTimes = getStopTimes(route)

  return (
    <AchievementInformation achievement={2756}>
      <StopCardsContainer>
        <StopCard index={0} stopTime={stopTimes[0]}>
          <CardContent>
            <BaitList
              baitGroups={[{
                header: 'DH; DH–IC–DH post-spectral at 11-21s',
                baitGroupProps: { ...getBaitGroup(32058), subtext: subtextDH }
              }, {
                header: 'DH at <3s',
                baitGroupProps: { ...getBaitGroup(32070), subtext: subtextDH }
              }]}
            />
          </CardContent>
          <CardContent>
            <Typography variant='overline'>Pre-spectral</Typography>
            <Typography paragraph>
              IC or blind DH if capped, but save GP for spectral current.
            </Typography>
            <Typography variant='overline'>Spectral</Typography>
            <Typography paragraph>
              Only the instant <Tug strength={3} /> is Jetborne Manta. Callichthyid appears at 4s.
            </Typography>
            <Typography variant='overline'>Post-spectral</Typography>
            <Typography paragraph>
              Spend all remaining GP on mantas.
            </Typography>
          </CardContent>
        </StopCard>
        <StopCard index={1} stopTime={stopTimes[1]}>
          <CardContent>
            <Typography paragraph>
              No mantas here.
            </Typography>
            <Typography paragraph>
              You may opt for no spectral here for an extended one in the next zone.
            </Typography>
          </CardContent>
        </StopCard>
        <StopCard index={2} stopTime={stopTimes[2]}>
          {(() => {
            switch (stopTimes[2]) {
              case 'BN':
                return (
                  <>
                    <CardContent>
                      <BaitList
                        baitGroups={[{
                          header: 'DH at ≥5s',
                          baitGroupProps: { ...getBaitGroup(32087), subtext: subtextDH }
                        }]}
                      />
                    </CardContent>
                    <CardContent>
                      <Typography variant='overline'>Spectral</Typography>
                      <Typography paragraph>
                        Reel any <Tug strength={2} />. Beatific Visions and Gory Tuna go away at 5s. Use IC–DH if it’s all you need, instead of hoping for more blind DHs.
                      </Typography>
                    </CardContent>
                  </>
                )
              case 'TD':
                return (
                  <>
                    <CardContent>
                      <BaitList
                        baitGroups={[{
                          header: 'DH at ≥5s',
                          baitGroupProps: { ...getBaitGroup(32111), subtext: subtextDH }
                        }]}
                      />
                    </CardContent>
                    <CardContent>
                      <Typography variant='overline'>Spectral</Typography>
                      <Typography paragraph>
                        Reel any <Tug strength={2} />. Smooth Jaguars go away at 5s. Use IC–DH if it’s all you need, instead of hoping for more blind DHs.
                      </Typography>
                      <Typography variant='body2' paragraph>
                        Note: It is not worth mooching Rothlyt Mussels for Panoptes if you happen to catch one. Recast instead.
                      </Typography>
                    </CardContent>
                  </>
                )
            }
          })()}
        </StopCard>
      </StopCardsContainer>
    </AchievementInformation>
  )
}

export default AchievementMantas
