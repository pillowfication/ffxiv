import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import { fishingSpots, Fish } from './ffxiv-ocean-fishing/data'
import { Stop, Time, StopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { getBlueFish, getBaitGroup } from './utils'
import translate from '../translate'
import { useTranslation } from '../i18n'

const POINTS_THRESHOLD = 700

function getPointsFishes (stopTime: StopTime): Fish[] {
  const fishingSpot = maps.STOP_MAP[stopTime[0] as Stop]
  const spectralFishingSpot = fishingSpots[fishingSpot.id + 1]
  const time = stopTime[1] as Time

  // Find all fish that exceed the threshold, while keeping track of the highest value fish(es)
  let highestPointsFishes: Array<{ fish: Fish, points: number }> = []
  const thresholdPointsFishes = spectralFishingSpot.fishes.filter(fish => {
    const { points, tripleHook, time: fishTime, intuition } = fish.spreadsheetData

    // Check to see if this fish is catchable
    if (fishTime !== null && !fishTime.includes(time)) {
      return false

    // Ignore blue fish so that the highest non-blue fish will be found
    } else if (intuition !== null) {
      return false

    // Not enough known data on this fish
    } else if (points === null || tripleHook === null) {
      return false

    // Check what this fish is worth
    } else {
      const maxPoints = (Array.isArray(tripleHook) ? tripleHook[1] : tripleHook) * points
      if (highestPointsFishes.length === 0) {
        highestPointsFishes.push({ fish, points: maxPoints })
      } else if (maxPoints === highestPointsFishes[0].points) {
        highestPointsFishes.push({ fish, points: maxPoints })
      } else if (maxPoints > highestPointsFishes[0].points) {
        highestPointsFishes = [{ fish, points: maxPoints }]
      }
      return maxPoints >= POINTS_THRESHOLD
    }
  })

  // If any fish passed the threshold hold, return all those fish
  if (thresholdPointsFishes.length > 0) {
    return thresholdPointsFishes

  // Otherwise, return whatever the best non-blue fish are
  } else {
    return highestPointsFishes.map(({ fish }) => fish)
  }
}

interface Props {
  stopTimes: [StopTime, StopTime, StopTime]
}

const RouteInformationPoints = ({ stopTimes }: Props): React.ReactElement => {
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
                maps.GREEN_FISH_MAP[stopTime[0] as Stop],
                'hr' as const,
                ...getPointsFishes(stopTime),
                getBlueFish(stopTime)
              ]
                .filter(fish => fish !== null)
                .map((fish: Fish | 'hr', index) => {
                  if (fish === 'hr') {
                    return 'hr'
                  } else {
                    const { points, tripleHook } = fish.spreadsheetData
                    const tripleHookString = tripleHook !== null
                      ? Array.isArray(tripleHook) ? tripleHook.join('-') : tripleHook
                      : '?'
                    const pointsString = tripleHook !== null && points !== null
                      ? (Array.isArray(tripleHook) ? tripleHook[1] : tripleHook) * points
                      : '?'
                    return {
                      header: translate(locale, fish, 'name'),
                      baitGroupProps: {
                        ...getBaitGroup(fish),
                        subtext: index === 0 ? '' : `TH: ×${tripleHookString} = ${pointsString}`,
                        mainOnly: true
                      }
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
