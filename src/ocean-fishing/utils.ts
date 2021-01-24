import { timeUntil as genericTimeUntil } from '../utils'
import { fishingSpots, fishes } from './ocean-fishing/data'
import { getStops, Time, DestinationStopTime } from './ocean-fishing'
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
      const time = stopTimes[index][1]
      return (fishingSpots[fishingSpotId + 1].fishes)
        .filter(fishId => {
          const fishInfo = fishes[fishId].spreadsheet_data
          return fishInfo.time && fishInfo.time !== 'DSN' && fishInfo.time.indexOf(time) > -1
        })
    })
}

export function getPointsFish (destinationCode: DestinationStopTime): number[][] {
  const stopTimes = getStops(destinationCode)
  return stopTimes
    .map((destinationStopTime, index) => {
      const fishingSpotId = maps.STOP_MAP[destinationStopTime[0]]
      const time = stopTimes[index][1]

      let highestPointsFish: { fishId: number, points: number }[] = []
      const pointsFish = (fishingSpots[fishingSpotId + 1].fishes)
        .filter(fishId => {
          const fishInfo = fishes[fishId].spreadsheet_data
          if (fishInfo.time && fishInfo.time.indexOf(time) === -1) {
            return false
          } else if (fishInfo.intuition) {
            return false
          } else if (!fishInfo.points || !fishInfo.double_hook) {
            return false
          } else {
            const points = (Array.isArray(fishInfo.double_hook) ? fishInfo.double_hook[1] : fishInfo.double_hook) * fishInfo.points
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
      const time = stopTimes[index][1]
      const fishInfo = fishes[fishId].spreadsheet_data
      return fishInfo.time && fishInfo.time.indexOf(time) > -1 ? fishId : null
    })
}

export const getBaitChain = memoize(function _getBaitChain (fishId: number): BaitChainProp[] {
  const fishInfo = fishes[fishId].spreadsheet_data
  return fishInfo.bait
    ? [{ id: fishInfo.bait }, { id: fishId, tug: fishInfo.tug }]
    : [..._getBaitChain(fishInfo.mooch), { id: fishId, tug: fishInfo.tug }]
})

export const getBaitGroup = memoize(
  (fishId: number): { baits: BaitChainProp[], intuitionFishes?: { baits: BaitChainProp[], count: number }[] } => {
    const fishInfo = fishes[fishId].spreadsheet_data
    return {
      baits: getBaitChain(fishId),
      intuitionFishes: fishInfo.intuition && fishInfo.intuition.map(({ id, count }) => ({ baits: getBaitChain(id), count }))
    }
  }
)

export function subtextDH (fishId: number) {
  const doubleHook = fishes[fishId].spreadsheet_data.double_hook
  return doubleHook ? `DH: ${Array.isArray(doubleHook) ? doubleHook.join('-') : doubleHook}` : 'DH: ?'
}

export function subtextBiteTime (fishId: number) {
  const biteTime = fishes[fishId].spreadsheet_data.bite_time.all
  return biteTime ? `${biteTime[0] === biteTime[1] ? biteTime[0] : biteTime.join('-')}s` : '?s'
}

export function translate (locale: string = 'en', obj: any, ...keys: string[]): string {
  for (let i = keys.length; i > 0; --i) {
    const key = `${keys.slice(0, i).join('_')}_${locale}`
    if (obj[key]) return obj[key]
  }
  return `{${obj.name || obj.id}.${keys.join('_')}}`
}

export function upperFirst (str: string) {
  return str[0].toUpperCase() + str.slice(1)
}

export function getBlindDHRanges (fishId: number, baitId: number, time: Time) {
  const fishInfo = fishes[fishId].spreadsheet_data
  if (time && fishInfo.time && fishInfo.time.indexOf(time) === -1) return null
  if (!fishInfo.bite_time[baitId]) return null

  const blindDHRanges = [fishInfo.bite_time[baitId]]
  for (const otherFishId of fishingSpots[fishes[fishId].fishing_spot].fishes) {
    if (otherFishId === fishId) continue
    const otherFishInfo = fishes[otherFishId].spreadsheet_data

    if (otherFishInfo.tug !== fishInfo.tug) continue
    if (time && otherFishInfo.time && otherFishInfo.time.indexOf(time) === -1) continue
    if (!otherFishInfo.bite_time[baitId]) continue
    const otherRange = otherFishInfo.bite_time[baitId]

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
