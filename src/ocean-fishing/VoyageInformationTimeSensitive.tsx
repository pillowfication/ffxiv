import React from 'react'
import { useTranslation } from 'next-i18next'
import CardContent from '@mui/material/CardContent'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import { fishingSpots, Fish } from './ffxiv-ocean-fishing/data'
import { Stop, Time } from './ffxiv-ocean-fishing'
import { STOP_MAP, SPECTRAL_FISH_MAP } from './maps'
import { getBaitGroup } from './utils'
import translate from '../translate'

function getTimeSensitiveFishes(stop: Stop, time: Time): Fish[] {
    const fishingSpot = STOP_MAP[stop]
    const spectralFishingSpot = fishingSpots[fishingSpot.id + 1]
    return spectralFishingSpot.fishes.filter(fish => {
        const timeAvailability = fish.spreadsheetData?.timeAvailability
        return timeAvailability != null && timeAvailability.length < 3 && timeAvailability.includes(time)
    })
}

interface Props {
    itinerary: Array<{ stop: Stop, time: Time }>
}

const RouteInformationTimeSensitive = ({ itinerary }: Props): React.ReactElement => {
    const { i18n } = useTranslation('ocean-fishing')
    const locale = i18n.language

    return (
        <StopCardsContainer>
            {itinerary.map(({ stop, time }, index) => {
                const fishes: Array<Fish | 'hr'> = [
                    SPECTRAL_FISH_MAP[stop]
                ]

                const timeFishes = getTimeSensitiveFishes(stop, time)
                if (timeFishes.length > 0) {
                    fishes.push('hr')
                    fishes.push(...timeFishes)
                }

                return (
                    <StopCard key={index} index={index} stop={stop} time={time}>
                        <CardContent>
                            <BaitList baitGroups={fishes.map(fish => fish === 'hr'
                                ? 'hr'
                                : {
                                    header: translate(locale, fish, 'name'),
                                    baitGroupProps: getBaitGroup(fish)
                                }
                            )} />
                        </CardContent>
                    </StopCard>
                )
            })}
        </StopCardsContainer>
    )
}

export default RouteInformationTimeSensitive
