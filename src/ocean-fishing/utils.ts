import { timeUntil as genericTimeUntil } from '../utils'
import { fishingSpots, oceanFishes } from './ffxiv-ocean-fishing/data'
import { getStops, Time, DestinationStopTime } from './ffxiv-ocean-fishing'
import { Bait as BaitChainProp } from './BaitChain'
import * as maps from './maps'
import { TFunction } from 'next-i18next'

function memoize<T, R> (func: (arg: T) => R): (arg: T) => R {
  const cache: { [key: string]: R } = {}
  return (arg: T) => {
    const key = String(arg)
    return cache[key] !== undefined ? cache[key] : (cache[key] = func(arg))
  }
}

export function timeUntil (now: Date, then: Date, options: { t: TFunction, full?: boolean, locale?: string }) {
  const diff = then.getTime() - now.getTime()
  if (diff < -900000) {
    return options.t('routeInfo.enRoute')
  } else if (diff < 0) {
    return options.t('routeInfo.boardingNow')
  } else {
    return genericTimeUntil(now, then, { full: options.full, locale: options.locale })
  }
}

export function getTimeSensitiveFish (destinationCode: DestinationStopTime): number[][] {
  const stopTimes = getStops(destinationCode)
  return stopTimes
    .map((destinationStopTime, index) => {
      const fishingSpotId = maps.STOP_MAP[destinationStopTime[0]]
      const time: Time = <any>stopTimes[index][1]
      return (fishingSpots[fishingSpotId + 1].fishes)
        .filter(fishId => {
          const spreadsheetData = oceanFishes[fishId].spreadsheetData
          return spreadsheetData.time && spreadsheetData.time.length !== 3 && spreadsheetData.time.includes(time)
        })
    })
}

export function getPointsFish (destinationCode: DestinationStopTime): number[][] {
  const stopTimes = getStops(destinationCode)
  return stopTimes
    .map((destinationStopTime, index) => {
      const fishingSpotId = maps.STOP_MAP[destinationStopTime[0]]
      const time: Time = <any>stopTimes[index][1]

      let highestPointsFish: { fishId: number, points: number }[] = []
      const pointsFish = (fishingSpots[fishingSpotId + 1].fishes)
        .filter(fishId => {
          const spreadsheetData = oceanFishes[fishId].spreadsheetData
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

export function getBlueFish (destinationCode: DestinationStopTime): number[] {
  const stopTimes = getStops(destinationCode)
  return stopTimes
    .map(destinationStopTime => maps.BLUE_FISH_MAP[destinationStopTime[0]])
    .map((fishId, index) => {
      const time: Time = <any>stopTimes[index][1]
      const spreadsheetData = oceanFishes[fishId].spreadsheetData
      return spreadsheetData.time && spreadsheetData.time.includes(time) ? fishId : null
    })
}

export function isBaitRequired (fishId: number, baitId: number) {
  for (const otherBaitId of Object.keys(oceanFishes[fishId].biteTimes)) {
    if (otherBaitId === 'all' || Number(otherBaitId) === baitId || Number(otherBaitId) === 29717) {
      continue
    } else {
      return false
    }
  }
  return true
}

export const getBaitChain = memoize(function _getBaitChain (fishId: number): BaitChainProp[] {
  const spreadsheetData = oceanFishes[fishId].spreadsheetData
  if (!spreadsheetData.bait && !spreadsheetData.mooch) {
    return [{ id: 29717 }, { id: fishId, tug: spreadsheetData.tug }] // Versatile Lure as fallback
  } else {
    return spreadsheetData.bait
      ? [{ id: spreadsheetData.bait }, { id: fishId, tug: spreadsheetData.tug }]
      : [..._getBaitChain(spreadsheetData.mooch), { id: fishId, tug: spreadsheetData.tug }]
  }
})

export const getBaitGroup = memoize(
  (fishId: number): { baits: BaitChainProp[], baitIsRequired?: boolean, intuitionFishes?: { baits: BaitChainProp[], baitIsRequired?: boolean, count: number }[] } => {
    const spreadsheetData = oceanFishes[fishId].spreadsheetData
    const baitChain = getBaitChain(fishId)
    return {
      baits: baitChain,
      baitIsRequired: isBaitRequired(fishId, baitChain[0].id),
      intuitionFishes: spreadsheetData.intuition && spreadsheetData.intuition.map(({ fishId, count }) => {
        const baitChain = getBaitChain(fishId)
        return {
          baits: baitChain,
          baitIsRequired: isBaitRequired(fishId, baitChain[0].id),
          count
        }
      })
    }
  }
)

export function subtextDH (fishId: number) {
  const doubleHook = oceanFishes[fishId].spreadsheetData.doubleHook
  return doubleHook ? `DH: ${Array.isArray(doubleHook) ? doubleHook.join('-') : doubleHook}` : 'DH: ?'
}

export function subtextBiteTime (fishId: number) {
  const biteTimeAll = oceanFishes[fishId].biteTimes.all
  return biteTimeAll ? `${biteTimeAll[0] === biteTimeAll[1] ? biteTimeAll[0] : biteTimeAll.join('-')}s` : '?s'
}

export function upperFirst (str: string) {
  return str[0].toUpperCase() + str.slice(1)
}

export function getBlindDHRanges (fishId: number, baitId: number, time: Time) {
  const spreadsheetData = oceanFishes[fishId].spreadsheetData
  if (time && spreadsheetData.time && spreadsheetData.time.indexOf(time) === -1) return null
  if (!oceanFishes[fishId].biteTimes[baitId]) return null

  const blindDHRanges = [oceanFishes[fishId].biteTimes[baitId]]
  const fishingSpot = Object.values(fishingSpots).find(fishingSpot => fishingSpot.fishes.includes(fishId))
  for (const otherFishId of fishingSpot.fishes) {
    if (otherFishId === fishId) continue
    const otherSpreadsheetData = oceanFishes[otherFishId].spreadsheetData

    if (otherSpreadsheetData.tug !== spreadsheetData.tug) continue
    if (time && otherSpreadsheetData.time && otherSpreadsheetData.time.indexOf(time) === -1) continue
    if (!oceanFishes[otherFishId].biteTimes[baitId]) continue
    const otherRange = oceanFishes[otherFishId].biteTimes[baitId]

    for (let i = 0; i < blindDHRanges.length;) {
      const currentRange = blindDHRanges[i]
      if (otherRange[1] < currentRange[0] || otherRange[0] > currentRange[1]) {
        // No overlap
        ++i
      } else if (otherRange[0] <= currentRange[0] && otherRange[1] >= currentRange[1]) {
        // Full overlap
        blindDHRanges.splice(i, 1)
      } else if (otherRange[0] > currentRange[0] && otherRange[1] < currentRange[1]) {
        // Splits currentRange into 2
        blindDHRanges.splice(i, 1, [currentRange[0], otherRange[0] - 1], [otherRange[1] + 1, currentRange[1]])
        i += 2
      } else {
        // Partial overlap
        if (currentRange[0] < otherRange[0] && otherRange[0] < currentRange[1]) {
          blindDHRanges.splice(i++, 1, [currentRange[0], otherRange[0] - 1])
        } else if (currentRange[0] < otherRange[1] && otherRange[1] < currentRange[1]) {
          blindDHRanges.splice(i++, 1, [otherRange[1] + 1, currentRange[1]])
        } else {
          console.error('This should never happen')
          i++
        }
      }
    }
  }

  return blindDHRanges
}
