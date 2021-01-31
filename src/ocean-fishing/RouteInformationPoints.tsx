import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import RouteCardContainer from './RouteCardContainer'
import RouteCard from './RouteCard'
import BaitList from './BaitList'
import { fishingSpots, fishes } from './ffxiv-ocean-fishing/data'
import { Time, StopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { getBlueFish, getBaitGroup } from './utils'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

export function getPointsFish (stopTimes: [StopTime, StopTime, StopTime]): number[][] {
  return stopTimes
    .map((destinationStopTime, index) => {
      const fishingSpotId = maps.STOP_MAP[destinationStopTime[0]]
      const time = stopTimes[index][1] as Time

      let highestPointsFish: { fishId: number, points: number }[] = []
      const pointsFish = (fishingSpots[fishingSpotId + 1].fishes)
        .filter(fishId => {
          const spreadsheetData = fishes[fishId].spreadsheetData
          if (spreadsheetData.time && !spreadsheetData.time.includes(time)) {
            return false
          } else if (spreadsheetData.intuition) {
            return false
          } else if (!spreadsheetData.points || !spreadsheetData.doubleHook) {
            return false
          } else {
            const points = (Array.isArray(spreadsheetData.doubleHook) ? spreadsheetData.doubleHook[1] : spreadsheetData.doubleHook) * spreadsheetData.points
            if (highestPointsFish.length === 0) {
              highestPointsFish.push({ fishId, points })
            } else if (points === highestPointsFish[0].points) {
              highestPointsFish.push({ fishId, points })
            } else if (points > highestPointsFish[0].points) {
              highestPointsFish = [{ fishId, points }]
            }
            return points >= 400
          }
        })

      return pointsFish.length > 0 ? pointsFish : highestPointsFish.map(({ fishId }) => fishId)
    })
}

type Props = {
  stopTimes: [StopTime, StopTime, StopTime]
}

const RouteInformationPoints = ({ stopTimes }: Props) => {
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
                maps.GREEN_FISH_MAP[stopTime[0]],
                ...getPointsFish(stopTimes[2] as any)[index],
                getBlueFish(stopTimes[2] as any)[index]
              ]
                .filter(x => x)
                .map((fishId, index) => {
                  const spreadsheetData = fishes[fishId].spreadsheetData
                  return {
                  header: translate(locale, fishes[fishId], 'name'),
                  baitGroupProps: {
                    ...getBaitGroup(fishId),
                    subtext: index === 0 ? '' : (
                      `DH: ×${Array.isArray(spreadsheetData.doubleHook) ? spreadsheetData.doubleHook.join('-') : spreadsheetData.doubleHook}` +
                      ` = ${(Array.isArray(spreadsheetData.doubleHook) ? spreadsheetData.doubleHook[1] : spreadsheetData.doubleHook) * spreadsheetData.points}`
                    ),
                    mainOnly: true
                  }
                }
              })
            } />
          </CardContent>
        </RouteCard>
      )}
    </RouteCardContainer>
  )
}

export default RouteInformationPoints
