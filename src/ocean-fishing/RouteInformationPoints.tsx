import React from 'react'
import { useTranslation } from 'next-i18next'
import CardContent from '@mui/material/CardContent'
import StopCardsContainer from './StopCardsContainer'
import StopCard from './StopCard'
import BaitList from './BaitList'
import { fishingSpots, Fish } from './ffxiv-ocean-fishing/data'
import { Stop, Time, StopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { getBlueFish, getBaitGroup } from './utils'
import translate from '../translate'

const POINTS_THRESHOLD = 700

function getPointsFishes (stopTime: StopTime): Fish[] {
  const fishingSpot = maps.STOP_MAP[stopTime[0] as Stop]
  const spectralFishingSpot = fishingSpots[fishingSpot.id + 1]
  const time = stopTime[1] as Time

  // Find all fish that exceed the threshold, while keeping track of the highest value fish(es)
  let highestPointsFishes: Array<{ fish: Fish, points: number }> = []
  const thresholdPointsFishes = spectralFishingSpot.fishes.filter(fish => {
    // const { points, tripleHook, time: fishTime, intuition } = fish.spreadsheetData
    const spreadsheetData = fish.spreadsheetData
    if (spreadsheetData == null) {
      return false

    // Check to see if this fish is catchable
    } else if (spreadsheetData.timeAvailability != null && !spreadsheetData.timeAvailability.includes(time)) {
      return false

    // Ignore blue fish so that the highest non-blue fish will be found
    } else if (spreadsheetData.intuition === true) {
      return false

    // Not enough known data on this fish
    } else if (spreadsheetData.points == null || spreadsheetData.tripleHook == null) {
      return false

    // Check what this fish is worth
    } else {
      const maxPoints = spreadsheetData.tripleHook[1] * spreadsheetData.points
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
                .map((fish, index) => {
                  if (fish === 'hr' || fish === null) { // Idk how to tell TS that fish isn't null
                    return 'hr'
                  } else {
                    const points = fish.spreadsheetData?.points
                    const tripleHook = fish.spreadsheetData?.tripleHook

                    const tripleHookString = tripleHook != null
                      ? tripleHook[0] === tripleHook[1] ? tripleHook[0].toString() : tripleHook.join('-')
                      : '?'
                    const pointsString = tripleHook != null && points != null
                      ? (tripleHook[1] * points).toString()
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
