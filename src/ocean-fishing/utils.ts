import { timeUntil as genericTimeUntil } from '../utils'
import { fishes, baits } from './gists/data/ocean-fish-data.json'
import spreadsheet from './gists/data/spreadsheet-data.json'
import biteTimes from './gists/data/ocean-fish-bite-times.json'
import { Fish, FishInfo, Bait } from './gists/data/types'
import { Bait as BaitChainProp } from './BaitChain'
import * as maps from './maps'

function memoize<T, R> (func: (arg: T) => R): (arg: T) => R {
  const cache: { [key: string]: R } = {}
  return (arg: T) => {
    const key = String(arg)
    return cache[key] !== undefined ? cache[key] : (cache[key] = func(arg))
  }
}

export function timeUntil (now: Date, then: Date, full?: boolean) {
  const diff = then.getTime() - now.getTime()
  if (diff < -900000) {
    return 'en route'
  } else if (diff < 0) {
    return 'boarding now'
  } else {
    return genericTimeUntil(now, then, full)
  }
}

export function getStops (destinationCode: maps.DestinationStopTime) {
  const stops: maps.Stop[] = maps.STOPS_SEQUENCE[destinationCode[0]]
  const times: maps.Time[] = maps.TIMES_SEQUENCE[destinationCode[1]]
  return [stops[0] + times[0], stops[1] + times[1], stops[2] + times[2]] as [maps.StopTime, maps.StopTime, maps.StopTime]
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
  // @ts-ignore
  const fishInfo: FishInfo = Object.values(spreadsheet).flat().find(fishInfo =>
    fishInfo.name === fishName
  )
  if (!fishInfo) return null

  const biteTime: [number, number] = biteTimes[getFish(fishName).id]
  if (biteTimes) {
    fishInfo.timer = biteTime
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
    ? [getBait(fishInfo.bait), { id: fishId, tug: fishInfo.tug, doubleHook: fishInfo.doubleHook }]
    : [..._getBaitChain(getFish(fishInfo.mooch).id), { id: fishId, tug: fishInfo.tug, doubleHook: fishInfo.doubleHook }]
})

export const getBaitGroup = memoize(
  (fishId: number): { bait: BaitChainProp[], intuitionFishes?: { bait: BaitChainProp[], count: number }[] } => {
    const fishInfo = getFishInfo(fishes[fishId].name_en)
    return {
      bait: getBaitChain(fishId),
      intuitionFishes: fishInfo.intuition && fishInfo.intuition.map(intuitionFish => ({
        bait: getBaitChain(getFish(intuitionFish.name).id),
        count: intuitionFish.count
      }))
    }
  }
)

export function translate (obj: any, attr: string, locale: string = 'en'): string {
  return obj[`${attr}_${locale}`] || obj[attr] || `{${obj.name || obj.id}.${attr}}`
}
