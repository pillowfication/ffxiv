import { timeUntil as genericTimeUntil } from '../utils'
import { fishingSpots, fishes, baits } from './gists/data/ocean-fish-data.json'
import spreadsheet from './gists/data/spreadsheet-data.json'
import biteTimes from './gists/data/ocean-fish-bite-times.json'
import { FishingSpot, Fish, FishInfo, Bait } from './gists/data/types'
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
    return options.t('en-route')
  } else if (diff < 0) {
    return options.t('boarding-now')
  } else {
    return genericTimeUntil(now, then, { full: options.full, locale: options.locale })
  }
}

export function getStops (destinationCode: maps.DestinationStopTime) {
  const stops: maps.Stop[] = maps.STOPS_SEQUENCE[destinationCode[0]]
  const times: maps.Time[] = maps.TIMES_SEQUENCE[destinationCode[1]]
  return [stops[0] + times[0], stops[1] + times[1], stops[2] + times[2]] as [maps.StopTime, maps.StopTime, maps.StopTime]
}

export function getTimeSensitiveFish (destinationCode: maps.DestinationStopTime): number[][] {
  const stopTimes = getStops(destinationCode)
  return stopTimes
    .map((destinationStopTime, index) => {
      const fishingSpotId = maps.STOP_MAP[destinationStopTime[0]]
      const time = stopTimes[index][1]
      return (fishingSpots[fishingSpotId + 1].fishes as FishingSpot['fishes'])
        .filter(fishId => {
          const fishInfo = getFishInfo(fishes[fishId].name_en)
          return fishInfo.time && fishInfo.time !== 'DSN' && fishInfo.time.indexOf(time) > -1
        })
    })
}

export function getPointsFish (destinationCode: maps.DestinationStopTime): number[][] {
  const stopTimes = getStops(destinationCode)
  return stopTimes
    .map((destinationStopTime, index) => {
      const fishingSpotId = maps.STOP_MAP[destinationStopTime[0]]
      const time = stopTimes[index][1]

      let highestPointsFish: { fishId: number, points: number }[] = []
      const pointsFish = (fishingSpots[fishingSpotId + 1].fishes as FishingSpot['fishes'])
        .filter(fishId => {
          const fishInfo = getFishInfo(fishes[fishId].name_en)
          if (fishInfo.time && fishInfo.time.indexOf(time) === -1) {
            return false
          } else if (!fishInfo.points || !fishInfo.doubleHook) {
            return false
          } else {
            const points = (Array.isArray(fishInfo.doubleHook) ? fishInfo.doubleHook[1] : fishInfo.doubleHook) * fishInfo.points
            if (highestPointsFish.length === 0) {
              highestPointsFish.push({ fishId, points })
            } else if (points === highestPointsFish[0].points) {
              highestPointsFish.push({ fishId, points })
            } else if (points > highestPointsFish[0].points) {
              highestPointsFish = [{ fishId, points }]
            }
            return points >= 500
          }
        })

      return pointsFish.length > 0 ? pointsFish : highestPointsFish.map(({ fishId }) => fishId)
    })
}

export function getBlueFish (destinationCode: maps.DestinationStopTime): number[] {
  const stopTimes = getStops(destinationCode)
  return stopTimes
    .map(destinationStopTime => maps.BLUE_FISH_MAP[destinationStopTime[0]])
    .map((fishId, index) => {
      const time = stopTimes[index][1]
      const fishInfo = getFishInfo(fishes[fishId].name_en)
      return fishInfo.time && fishInfo.time.indexOf(time) > -1 ? fishId : null
    })
}

export const getFishInfo = memoize((fishName: string): FishInfo => {
  const fishInfo: FishInfo = Object.values(<unknown>spreadsheet as FishInfo[][])
    .flat()
    .find(fishInfo => (fishInfo as FishInfo).name === fishName)
  if (!fishInfo) return null

  const biteTime: [number, number] = biteTimes[getFish(fishName).id]
  if (biteTimes) {
    fishInfo.biteTime = biteTime
  }
  return fishInfo
})

export const getFish = memoize((fishName: string): Fish =>
  Object.values(fishes).find(fish => fish.name_en === fishName) || null
)

export const getBait = memoize((baitName: string): Bait =>
  Object.values(baits).find(bait => bait.name_en === baitName) || null
)

export const getBaitChain = memoize(function _getBaitChain (fishId: number): BaitChainProp[] {
  const fishInfo = getFishInfo(fishes[fishId].name_en)
  return fishInfo.bait
    ? [getBait(fishInfo.bait), { id: fishId, tug: fishInfo.tug }]
    : [..._getBaitChain(getFish(fishInfo.mooch).id), { id: fishId, tug: fishInfo.tug }]
})

export const getBaitGroup = memoize(
  (fishId: number): { baits: BaitChainProp[], intuitionFishes?: { baits: BaitChainProp[], count: number }[] } => {
    const fishInfo = getFishInfo(fishes[fishId].name_en)
    return {
      baits: getBaitChain(fishId),
      intuitionFishes: fishInfo.intuition && fishInfo.intuition.map(intuitionFish => ({
        baits: getBaitChain(getFish(intuitionFish.name).id),
        count: intuitionFish.count
      }))
    }
  }
)

export function subtextDH (fishId: number) {
  const dh = getFishInfo(fishes[fishId].name_en).doubleHook
  return dh ? `DH: ${Array.isArray(dh) ? dh.join('-') : dh}` : 'DH: ?'
}

export function subtextBiteTime (fishId: number) {
  const biteTime = getFishInfo(fishes[fishId].name_en).biteTime
  return biteTime ? `${biteTime[0] === biteTime[1] ? biteTime[0] : biteTime.join('-')} s` : '? s'
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
