import React from 'react'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AchievementInformation from './AchievementInformation'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import { getStopTimes, Destination, Time } from './ffxiv-ocean-fishing'
import { fishes } from './ffxiv-ocean-fishing/data'
import { getBaitGroup, subtextDH } from './utils'

interface Props {
    destination: Destination
    time: Time
}

const AchievementCrabs = ({ destination, time }: Props): React.ReactElement => {
    const stopTimes = getStopTimes(destination, time)

    return (
        <AchievementInformation achievement={2755}>
            <StopCardsContainer>
                <StopCard index={0} stop={stopTimes[0].stop} time={stopTimes[0].time}>
                    <CardContent>
                        <BaitList
                            baitGroups={[{
                                header: 'IC–DH at 6-12s',
                                baitGroupProps: { ...getBaitGroup(fishes[32055]), subtext: subtextDH }
                            }, {
                                header: 'IC–DH at 2-3s',
                                baitGroupProps: { ...getBaitGroup(fishes[32065]), subtext: subtextDH }
                            }]}
                        />
                    </CardContent>
                    <CardContent>
                        <Typography variant='overline'>Non-spectral</Typography>
                        <Typography paragraph>
                            In general, IC–DH when possible and don’t rely heavily on spectrals. Tortoiseshell Crab can be a blind DH.
                        </Typography>
                        <Typography variant='overline'>Spectral</Typography>
                        <Typography paragraph>
                            Can blind DH Titanshell Crabs at &lt;3s.
                        </Typography>
                    </CardContent>
                </StopCard>
                <StopCard index={1} stop={stopTimes[1].stop} time={stopTimes[1].time}>
                    <CardContent>
                        <BaitList
                            baitGroups={[{
                                header: 'IC–DH at 10-16s',
                                baitGroupProps: { ...getBaitGroup(fishes[29741]), subtext: subtextDH }
                            }, {
                                header: 'IC–DH at 5-6s',
                                baitGroupProps: { ...getBaitGroup(fishes[29777]), subtext: subtextDH }
                            }]}
                        />
                    </CardContent>
                    <CardContent>
                        <Typography paragraph>
                            You may opt for no spectral here for an extended one in the next zone.
                        </Typography>
                        <Typography variant='overline'>Spectral</Typography>
                        <Typography paragraph>
                            Bartholomew the Chopper is not generally safe to blind DH.
                        </Typography>
                    </CardContent>
                </StopCard>
                <StopCard index={2} stop={stopTimes[2].stop} time={stopTimes[2].time}>
                    <CardContent>
                        <BaitList
                            baitGroups={[{
                                header: 'No buffs at 3-7s',
                                baitGroupProps: { ...getBaitGroup(fishes[32075]), subtext: subtextDH }
                            }, {
                                header: 'DH at ≥16s',
                                baitGroupProps: { ...getBaitGroup(fishes[32079]), subtext: subtextDH }
                            }, {
                                header: 'No Buffs at <3s',
                                baitGroupProps: { ...getBaitGroup(fishes[32085]), subtext: subtextDH }
                            }, {
                                header: 'IC–DH at ≥5s',
                                baitGroupProps: { ...getBaitGroup(fishes[32090]), subtext: subtextDH }
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
                            Can blind DH Exterminators at ≥5s.
                        </Typography>
                    </CardContent>
                </StopCard>
            </StopCardsContainer>
        </AchievementInformation>
    )
}

export default AchievementCrabs
