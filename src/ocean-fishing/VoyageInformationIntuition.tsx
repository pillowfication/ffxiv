import React from 'react'
import { useTranslation } from 'next-i18next'
import CardContent from '@mui/material/CardContent'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import { Fish } from './ffxiv-ocean-fishing/data'
import { Stop, Time } from './ffxiv-ocean-fishing'
import { SPECTRAL_FISH_MAP, GREEN_FISH_MAP } from './maps'
import { getBlueFish, getBaitGroup } from './utils'
import translate from '../translate'

interface Props {
    itinerary: Array<{ stop: Stop, time: Time }>
}

const RouteInformationIntuition = ({ itinerary }: Props): React.ReactElement => {
    const { i18n } = useTranslation('ocean-fishing')
    const locale = i18n.language

    return (
        <StopCardsContainer>
            {itinerary.map(({ stop, time }, index) => {
                const fishes: Array<Fish | 'hr'> = [
                    SPECTRAL_FISH_MAP[stop],
                    GREEN_FISH_MAP[stop]
                ]

                const blueFish = getBlueFish(stop, time)
                if (blueFish !== null) {
                    fishes.push('hr')
                    fishes.push(blueFish)
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

export default RouteInformationIntuition
