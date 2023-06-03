import React from 'react'
import { useTranslation } from 'next-i18next'
import CardContent from '@mui/material/CardContent'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import { fishingSpots, Fish } from './ffxiv-ocean-fishing/data'
import { Stop, Time } from './ffxiv-ocean-fishing'
import { STOP_MAP, SPECTRAL_FISH_MAP, GREEN_FISH_MAP } from './maps'
import { getBlueFish, getBaitGroup } from './utils'
import translate from '../translate'

const POINTS_THRESHOLD = 700

function getPointsFishes(stop: Stop, time: Time): Fish[] {
    const fishingSpot = STOP_MAP[stop]
    const spectralFishingSpot = fishingSpots[fishingSpot.id + 1]

    // Find all fish that exceed the threshold, while keeping track of the highest value fish(es)
    const highestPointsFishes: Array<{ fish: Fish, points: number }> = []
    const thresholdPointsFishes: Array<{ fish: Fish, points: number }> = []

    for (const fish of spectralFishingSpot.fishes) {
        const spreadsheetData = fish.spreadsheetData

        // Not enough known data on this fish
        if (spreadsheetData == null || spreadsheetData.points == null || spreadsheetData.tripleHook == null)
            continue

        // Check to see if this fish is catchable
        if (spreadsheetData.timeAvailability != null && !spreadsheetData.timeAvailability.includes(time))
            continue

        // Ignore blue fish so that the highest non-blue fish will be found
        if (spreadsheetData.intuition === true)
            continue

        // Check what this fish is worth
        const maxPoints = spreadsheetData.points * spreadsheetData.tripleHook[1]
        if (highestPointsFishes.length === 0)
            highestPointsFishes.push({ fish, points: maxPoints })
        else if (maxPoints === highestPointsFishes[0].points)
            highestPointsFishes.push({ fish, points: maxPoints })
        else if (maxPoints > highestPointsFishes[0].points)
            highestPointsFishes.splice(0, highestPointsFishes.length, { fish, points: maxPoints })

        if (maxPoints >= POINTS_THRESHOLD)
            thresholdPointsFishes.push({ fish, points: maxPoints })
    }

    // If any fish passed the threshold hold, return all those fish
    if (thresholdPointsFishes.length > 0)
        return thresholdPointsFishes.map(({ fish }) => fish)

    // Otherwise, return whatever the best non-blue fish are
    return highestPointsFishes.map(({ fish }) => fish)
}

interface Props {
    itinerary: Array<{ stop: Stop, time: Time }>
}

const RouteInformationPoints = ({ itinerary }: Props): React.ReactElement => {
    const { i18n } = useTranslation('ocean-fishing')
    const locale = i18n.language

    return (
        <StopCardsContainer>
            {itinerary.map(({ stop, time }, index) =>
                <StopCard key={index} index={index} stop={stop} time={time}>
                    <CardContent>
                        <BaitList baitGroups={
                            [
                                SPECTRAL_FISH_MAP[stop],
                                GREEN_FISH_MAP[stop],
                                'hr' as const,
                                ...getPointsFishes(stop, time),
                                getBlueFish(stop, time)
                            ]
                                .filter(fish => fish != null)
                                .map((fish, index) => {
                                    if (fish === 'hr' || fish == null)
                                        return 'hr'

                                    const tripleHook = fish.spreadsheetData?.tripleHook
                                    const tripleHookString = tripleHook != null ? tripleHook[0] === tripleHook[1] ? tripleHook[0].toString() : tripleHook.join('-') : '?'
                                    const points = fish.spreadsheetData?.points
                                    const pointsString = tripleHook != null && points != null ? (tripleHook[1] * points).toString() : '?'
                                    return {
                                        header: translate(locale, fish, 'name'),
                                        baitGroupProps: {
                                            ...getBaitGroup(fish),
                                            subtext: index === 0 ? '' : `TH: ×${tripleHookString} = ${pointsString}`,
                                            mainOnly: true
                                        }
                                    }
                                })
                        } />
                    </CardContent>
                </StopCard>
            )}
        </StopCardsContainer>
    )
}

export default RouteInformationPoints
