import { timeUntil as genericTimeUntil } from '../utils'
import { fishingSpots, baits, fishes, Fish, Bait } from './ffxiv-ocean-fishing/data'
import { getStopTimes, Stop, Time, StopTime, DestTime } from './ffxiv-ocean-fishing'
import { BaitLink, FishLink } from './BaitChain'
import * as maps from './maps'
import { TFunction } from 'next-i18next'

function memoize<T, R> (func: (arg: T) => R, getKey: (arg: T) => string): { (arg: T): R, cache: { [key: string]: R } } {
  const cache: { [key: string]: R } = {}
  const _func = (arg: T): R => {
    const key = getKey(arg)
    const cache = _func.cache
    return cache[key] !== undefined ? cache[key] : (cache[key] = func(arg))
  }
  _func.cache = cache
  return _func
}

export function timeUntil (now: Date, then: Date, options: { t: TFunction, full?: boolean, locale?: string }): string {
  const diff = then.getTime() - now.getTime()
  if (diff < -900000) {
    return options.t('routeInfo.enRoute')
  } else if (diff < 0) {
    return options.t('routeInfo.boardingNow')
  } else {
    return genericTimeUntil(now, then, options)
  }
}

export function getBlueFish (stopTime: StopTime): Fish | null {
  const blueFish = maps.BLUE_FISH_MAP[stopTime[0] as Stop]
  const spreadsheetData = blueFish.spreadsheetData
  if (spreadsheetData.time !== null) {
    if (spreadsheetData.time.includes(stopTime[1] as Time)) {
      return blueFish
    }
  }
  return null
}

export function isBaitRequired (fish: Fish, bait: Bait): boolean {
  for (const otherBaitId of Object.keys(fish.biteTimes)) {
    if (otherBaitId === 'all' || +otherBaitId === bait.id || +otherBaitId === 29717) {
      continue
    } else {
      return false
    }
  }
  return true
}

export const getBaitChain = memoize(
  function _getBaitChain (fish: Fish): Array<BaitLink | FishLink> {
    const { bestBait: bait, mooch, tug } = fish.spreadsheetData
    if (bait === null && mooch === null) {
      return [{ bait: baits[29717] }, { fish, tug }] // Versatile Lure as fallback
    } else {
      return bait !== null ? [{ bait }, { fish, tug }] : [..._getBaitChain(mooch as Fish), { fish, tug }]
    }
  },
  (fish: Fish) => String(fish.id)
)

export const getBaitGroup = memoize(
  (fish: Fish): {
    baits: Array<BaitLink | FishLink>
    baitIsRequired: boolean
    intuitionFishes?: Array<{ baits: Array<BaitLink | FishLink>, baitIsRequired: boolean, count: number }>
  } => {
    const { intuition } = fish.spreadsheetData
    const baitChain = getBaitChain(fish)
    return {
      baits: baitChain,
      baitIsRequired: isBaitRequired(fish, (baitChain[0] as BaitLink).bait),
      intuitionFishes: intuition !== null
        ? intuition.map(({ fish, count }) => {
          const baitChain = getBaitChain(fish)
          return {
            baits: baitChain,
            baitIsRequired: isBaitRequired(fish, (baitChain[0] as BaitLink).bait),
            count
          }
        })
        : undefined
    }
  },
  (fish: Fish) => String(fish.id)
)

// See https://discord.com/channels/327124808217395200/679407580430467092/864238268514041917
getBaitGroup.cache = {
  // Stonescale
  29790: {
    baits: getBaitChain(fishes[29790]),
    baitIsRequired: true,
    intuitionFishes: [{
      baits: [{ bait: baits[2591] }, { fish: fishes[29769], tug: 2 }],
      baitIsRequired: false,
      count: 1
    }, {
      baits: [{ bait: baits[29714] }, { fish: fishes[29768], tug: 1 }],
      baitIsRequired: false,
      count: 1
    }]
  },
  // Hafgufa
  32074: {
    baits: getBaitChain(fishes[32074]),
    baitIsRequired: true,
    intuitionFishes: [{
      baits: [{ bait: baits[29716] }, { fish: fishes[32070], tug: 3 }],
      baitIsRequired: false,
      count: 2
    }, {
      baits: [{ bait: baits[27590] }, { fish: fishes[32067], tug: 2 }],
      baitIsRequired: false,
      count: 1
    }]
  },
  // Seafaring Toad
  32094: {
    baits: getBaitChain(fishes[32094]),
    baitIsRequired: true,
    intuitionFishes: [{
      baits: [{ bait: baits[2587] }, { fish: fishes[32089], tug: 2 }],
      baitIsRequired: false,
      count: 3
    }]
  }
}

if (typeof window !== 'undefined') {
  Object.assign(window, {
    BaitCache1: getBaitChain.cache,
    BaitCache2: getBaitGroup.cache
  })
}

export function subtextDH (fish: Fish): string {
  const doubleHook = fish.spreadsheetData.doubleHook
  return doubleHook !== null
    ? `DH: ${Array.isArray(doubleHook) ? doubleHook.join('-') : doubleHook}`
    : 'DH: ?'
}

export function subtextBiteTime (fish: Fish): string {
  const biteTimeAll = fish.biteTimes.all
  return biteTimeAll !== null
    ? `${biteTimeAll[0] === biteTimeAll[1] ? biteTimeAll[0] : biteTimeAll.join('-')}s`
    : '?s'
}

export function upperFirst (str: string): string {
  return str.length === 0 ? '' : str[0].toUpperCase() + str.slice(1)
}

export function cleanObjective (objective: string): string {
  return objective.replace(/<[^<>]*?\/>/g, '')
}

export function cleanRequirement (requirement: string): string {
  return upperFirst(requirement.replace(/^(Requirement:|Bedingung:|Condition :|達成条件：|达成条件：|달성 조건: )/, '').trim())
}

export function isUncaughtRoute (destTime: DestTime, checklist: number[]) {
  for (const stopTime of getStopTimes(destTime)) {
    const nonSpectralFishingSpot = maps.STOP_MAP[stopTime[0] as Stop]
    for (const fish of nonSpectralFishingSpot.fishes) {
      if (!checklist.includes(fish.id)) {
        return true
      }
    }
    const spectralFishingSpot = fishingSpots[nonSpectralFishingSpot.id + 1]
    for (const fish of spectralFishingSpot.fishes) {
      if (fish.spreadsheetData.time !== null && !fish.spreadsheetData.time.includes(stopTime[1] as Time)) {
        continue
      }
      if (!checklist.includes(fish.id)) {
        return true
      }
    }
  }
  return false
}
