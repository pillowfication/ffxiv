import React from 'react'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Highlight from '../Highlight'
import AchievementInformation from './AchievementInformation'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import Tug from './Tug'
import { getStopTimes, Destination, Time } from './ffxiv-ocean-fishing'
import { fishes } from './ffxiv-ocean-fishing/data'
import { getBaitGroup, subtextDH } from './utils'
import octopodesMacro from './macros/octopodes.ffmacro'

interface Props {
    destination: Destination
    time: Time
}

const AchievementOctopodes = ({ destination, time }: Props): React.ReactElement => {
    const stopTimes = getStopTimes(destination, time)

    return (
        <AchievementInformation achievement={2563}>
            <StopCardsContainer>
                <StopCard index={0} stop={stopTimes[0].stop} time={stopTimes[0].time}>
                    <CardContent>
                        <Typography paragraph>
                            No octopodes here. Collect some Angler’s Art!
                        </Typography>
                        <Typography paragraph>
                            You may opt for no spectral here for an extended one in the next zone.
                        </Typography>
                    </CardContent>
                </StopCard>
                <StopCard index={1} stop={stopTimes[1].stop} time={stopTimes[1].time}>
                    <CardContent>
                        <BaitList
                            baitGroups={[{
                                header: 'IC–DH at 17-28s',
                                baitGroupProps: { ...getBaitGroup(fishes[29734]), subtext: subtextDH }
                            }, {
                                header: 'DH at <3s',
                                baitGroupProps: { ...getBaitGroup(fishes[29766]), subtext: subtextDH }
                            }]}
                        />
                    </CardContent>
                    <CardContent>
                        <Typography variant='overline'>Non-spectral</Typography>
                        <Typography paragraph>
                            Can blind DH the Cyan Octopodes at ≥20s, or at ≥12s with a SS’d Jasperhead. Clouds/Fog weather will also remove Jasperheads.
                        </Typography>
                        <Typography variant='overline'>Spectral</Typography>
                        <Typography paragraph>
                            Only the instant <Tug strength={2} /> is Merman’s Mane. Use IC–DH if running out of time.
                        </Typography>
                    </CardContent>
                </StopCard>
                <StopCard index={2} stop={stopTimes[2].stop} time={stopTimes[2].time}>
                    <CardContent>
                        <BaitList
                            baitGroups={[{
                                header: 'DH–IC–DH at ≥5s',
                                baitGroupProps: { ...getBaitGroup(fishes[29773]), subtext: subtextDH }
                            }]}
                        />
                    </CardContent>
                    <CardContent>
                        <Typography variant='overline'>Spectral</Typography>
                        <Typography paragraph>
                            The earlier <Tug strength={2} /> is Coccosteus.
                        </Typography>
                    </CardContent>
                </StopCard>
            </StopCardsContainer>
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
