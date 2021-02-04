import { timeUntil as genericTimeUntil } from '../utils'
import { baits, Fish, Bait } from './ffxiv-ocean-fishing/data'
import { Stop, Time, StopTime } from './ffxiv-ocean-fishing'
import { BaitLink, FishLink } from './BaitChain'
import * as maps from './maps'
import { TFunction } from 'next-i18next'

function memoize<T, R> (func: (arg: T) => R): (arg: T) => R {
  // const cache: { [key: string]: R } = {}
  // return (arg: T) => {
  //   const key = String(arg)
  //   return cache[key] !== undefined ? cache[key] : (cache[key] = func(arg))
  // }
  return func
}

export function timeUntil (now: Date, then: Date, options: { t: TFunction, full?: boolean, locale?: string }): string {
  const diff = then.getTime() - now.getTime()
  if (diff < -900000) {
    return options.t('routeInfo.enRoute')
  } else if (diff < 0) {
    return options.t('routeInfo.boardingNow')
  } else {
    return genericTimeUntil(now, then, { full: options.full, locale: options.locale })
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

export const getBaitChain = memoize(function _getBaitChain (fish: Fish): Array<BaitLink | FishLink> {
  const { bait, mooch, tug } = fish.spreadsheetData
  if (bait === null && mooch === null) {
    return [{ bait: baits[29717] }, { fish, tug }] // Versatile Lure as fallback
  } else {
    return bait !== null ? [{ bait }, { fish, tug }] : [..._getBaitChain(mooch as Fish), { fish, tug }]
  }
})

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
  }
)

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
  if (str.length === 0) {
    return str
  } else {
    return str[0].toUpperCase() + str.slice(1)
  }
}

// export function getBlindDHRanges (fishId: number, baitId: number, time: Time) {
//   const spreadsheetData = fishes[fishId].spreadsheetData
//   if (time && spreadsheetData.time && spreadsheetData.time.indexOf(time) === -1) return null
//   if (!fishes[fishId].biteTimes[baitId]) return null
//
//   const blindDHRanges = [fishes[fishId].biteTimes[baitId]]
//   const fishingSpot = Object.values(fishingSpots).find(fishingSpot => fishingSpot.fishes.includes(fishId))
//   for (const otherFishId of fishingSpot.fishes) {
//     if (otherFishId === fishId) continue
//     const otherSpreadsheetData = fishes[otherFishId].spreadsheetData
//
//     if (otherSpreadsheetData.tug !== spreadsheetData.tug) continue
//     if (time && otherSpreadsheetData.time && otherSpreadsheetData.time.indexOf(time) === -1) continue
//     if (!fishes[otherFishId].biteTimes[baitId]) continue
//     const otherRange = fishes[otherFishId].biteTimes[baitId]
//
//     for (let i = 0; i < blindDHRanges.length;) {
//       const currentRange = blindDHRanges[i]
//       if (otherRange[1] < currentRange[0] || otherRange[0] > currentRange[1]) {
//         // No overlap
//         ++i
//       } else if (otherRange[0] <= currentRange[0] && otherRange[1] >= currentRange[1]) {
//         // Full overlap
//         blindDHRanges.splice(i, 1)
//       } else if (otherRange[0] > currentRange[0] && otherRange[1] < currentRange[1]) {
//         // Splits currentRange into 2
//         blindDHRanges.splice(i, 1, [currentRange[0], otherRange[0] - 1], [otherRange[1] + 1, currentRange[1]])
//         i += 2
//       } else {
//         // Partial overlap
//         if (currentRange[0] < otherRange[0] && otherRange[0] < currentRange[1]) {
//           blindDHRanges.splice(i++, 1, [currentRange[0], otherRange[0] - 1])
//         } else if (currentRange[0] < otherRange[1] && otherRange[1] < currentRange[1]) {
//           blindDHRanges.splice(i++, 1, [otherRange[1] + 1, currentRange[1]])
//         } else {
//           console.error('This should never happen')
//           i++
//         }
//       }
//     }
//   }
//
//   return blindDHRanges
// }
