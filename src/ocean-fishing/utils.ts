import { timeUntil as genericTimeUntil } from '../utils'
import { fishingSpots, fishes } from './gists/data'
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
      return (fishingSpots[fishingSpotId + 1].fishes)
        .filter(fishId => {
          const fishInfo = fishes[fishId].spreadsheet_data
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

export function getBlueFish (destinationCode: maps.DestinationStopTime): number[] {
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
  console.log(fishInfo)
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
  const biteTime = fishes[fishId].spreadsheet_data.bite_time
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
