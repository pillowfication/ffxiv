import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import { fishingSpots, Fish } from './ffxiv-ocean-fishing/data'
import { Stop, Time, StopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { getBaitGroup } from './utils'
import translate from '../translate'
import { useTranslation } from '../i18n'

function getTimeSensitiveFishes (stopTime: StopTime): Fish[] {
  const fishingSpot = maps.STOP_MAP[stopTime[0] as Stop]
  const spectralFishingSpot = fishingSpots[fishingSpot.id + 1]
  const time = stopTime[1] as Time

  return spectralFishingSpot.fishes.filter(fish => {
    const { time: fishTime } = fish.spreadsheetData
    return fishTime !== null && fishTime.length < 3 && fishTime.includes(time)
  })
}

interface Props {
  stopTimes: [StopTime, StopTime, StopTime]
}

const RouteInformationTimeSensitive = ({ stopTimes }: Props): React.ReactElement => {
  const { i18n } = useTranslation('ocean-fishing')
  const locale = i18n.language

  return (
    <StopCardsContainer>
      {stopTimes.map((stopTime, index) => {
        const fishes: Array<Fish | 'hr'> = [
          maps.SPECTRAL_FISH_MAP[stopTime[0] as Stop]
        ]

        const timeFishes = getTimeSensitiveFishes(stopTime)
        if (timeFishes.length > 0) {
          fishes.push('hr', ...timeFishes)
        }

        return (
          <StopCard key={stopTime} index={index} stopTime={stopTime}>
            <CardContent>
              <BaitList baitGroups={fishes.map(fish =>
                fish === 'hr'
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
