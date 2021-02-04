import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import { fishingSpots, fishes } from './ffxiv-ocean-fishing/data'
import { Stop, Time, StopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { getBaitGroup } from './utils'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

function getTimeSensitiveFishes (stopTime: StopTime): number[] {
  const fishingSpotId = maps.STOP_MAP[stopTime[0] as Stop]
  const spectralFishingSpot = fishingSpots[fishingSpotId + 1]
  const time = stopTime[1] as Time

  return spectralFishingSpot.fishes.filter(fishId => {
    const { time: spreadsheetTime } = fishes[fishId].spreadsheetData
    return spreadsheetTime !== undefined && spreadsheetTime.length !== 3 && spreadsheetTime.includes(time)
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
      {stopTimes.map((stopTime, index) =>
        <StopCard key={stopTime} index={index} stopTime={stopTime}>
          <CardContent>
            <BaitList baitGroups={
              [
                maps.SPECTRAL_FISH_MAP[stopTime[0] as Stop],
                ...getTimeSensitiveFishes(stopTime)
              ]
                .map(fishId => ({
                  header: translate(locale, fishes[fishId], 'name'),
                  baitGroupProps: getBaitGroup(fishId)
                }))
            } />
          </CardContent>
        </StopCard>
      )}
    </StopCardsContainer>
  )
}

export default RouteInformationTimeSensitive
