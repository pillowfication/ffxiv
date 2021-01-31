import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import RouteCardContainer from './RouteCardContainer'
import RouteCard from './RouteCard'
import BaitList from './BaitList'
import { fishingSpots, fishes } from './ffxiv-ocean-fishing/data'
import { Time, StopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { getBaitGroup } from './utils'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

function getTimeSensitiveFish (stopTimes: StopTime[]): number[][] {
  return stopTimes
    .map((destinationStopTime, index) => {
      const fishingSpotId = maps.STOP_MAP[destinationStopTime[0]]
      const time = stopTimes[index][1] as Time
      return (fishingSpots[fishingSpotId + 1].fishes)
        .filter(fishId => {
          const spreadsheetData = fishes[fishId].spreadsheetData
          return spreadsheetData.time && spreadsheetData.time.length !== 3 && spreadsheetData.time.includes(time)
        })
    })
}

type Props = {
  stopTimes: [StopTime, StopTime, StopTime]
}

const RouteInformationTimeSensitive = ({ stopTimes }: Props) => {
  const { i18n } = useTranslation('ocean-fishing')
  const locale = i18n.language

  return (
    <RouteCardContainer>
      {stopTimes.map((stopTime, index) =>
        <RouteCard key={stopTime} index={index} stopTime={stopTime}>
          <CardContent>
            <BaitList baitGroups={
              [
                maps.SPECTRAL_FISH_MAP[stopTime[0]],
                ...getTimeSensitiveFish(stopTimes)[index]
              ]
                .filter(x => x)
                .map(fishId => ({
                  header: translate(locale, fishes[fishId], 'name'),
                  baitGroupProps: getBaitGroup(fishId)
                }))
            } />
          </CardContent>
        </RouteCard>
      )}
    </RouteCardContainer>
  )
}

export default RouteInformationTimeSensitive
