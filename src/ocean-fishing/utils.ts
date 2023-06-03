import { timeUntil as genericTimeUntil } from '../utils'
import { fishingSpots, baits, fishes, Fish, Bait } from './ffxiv-ocean-fishing/data'
import { getStopTimes, Route, Stop, Destination, Time } from './ffxiv-ocean-fishing'
import { BaitLink, FishLink } from './BaitChain'
import * as maps from './maps'
import { TFunction } from 'next-i18next'

function memoize<T, R>(func: (arg: T) => R, getKey: (arg: T) => string): { (arg: T): R, cache: { [key: string]: R } } {
    const cache: { [key: string]: R } = {}
    const _func = (arg: T): R => {
        const key = getKey(arg)
        const cache = _func.cache
        return cache[key] !== undefined ? cache[key] : (cache[key] = func(arg))
    }
    _func.cache = cache
    return _func
}

export function timeUntil(now: Date, then: Date, options: { t: TFunction, full?: boolean, locale?: string }): string {
    const diff = then.getTime() - now.getTime()
    if (diff < -900000) {
        return options.t('routeInfo.enRoute')
    } else if (diff < 0) {
        return options.t('routeInfo.boardingNow')
    } else {
        return genericTimeUntil(now, then, options)
    }
}

export function getRoute(destination: Destination): Route {
    switch (destination) {
        case Destination.TheNorthernStraitOfMerlthor:
        case Destination.RhotanoSea:
        case Destination.TheBloodbrineSea:
        case Destination.TheRothlytSound:
            return Route.Indigo
        case Destination.TheRubySea:
        case Destination.TheOneRiver:
            return Route.Ruby
        default:
            return Route.Indigo
    }
}

export function getBlueFish(stop: Stop, time: Time): Fish | null {
    const blueFish = maps.BLUE_FISH_MAP[stop]
    if (blueFish.spreadsheetData?.timeAvailability?.includes(time)) {
        return blueFish
    }
    return null
}

export function isBaitRequired(fish: Fish, bait: Bait): boolean {
    return false
    // for (const otherBaitId of Object.keys(fish.biteTimes)) {
    //   if (otherBaitId === 'all' || +otherBaitId === bait.id || +otherBaitId === 29717) {
    //     continue
    //   } else {
    //     return false
    //   }
    // }
    // return true
}

export const getRecommendedBait = memoize(
    (fish: Fish): Bait | null => {
        if (fish.spreadsheetData?.baits != null) {
            for (const [baitId, baitData] of Object.entries(fish.spreadsheetData.baits)) {
                if (baitData?.best === true) {
                    return baits[Number(baitId)]
                }
            }
        }
        return null
    },
    (fish: Fish) => String(fish.id)
)

export const getRecommendedMooch = memoize(
    (fish: Fish): Fish | null => {
        if (fish.spreadsheetData?.mooches != null) {
            console.log(fish.spreadsheetData.mooches)
            for (const [fishId, moochData] of Object.entries(fish.spreadsheetData.mooches)) {
                if (moochData?.best === true) {
                    return fishes[Number(fishId)]
                }
            }
        }
        return null
    },
    (fish: Fish) => String(fish.id)
)

export const getBaitChain = memoize(
    function _getBaitChain(fish: Fish): Array<BaitLink | FishLink> {
        // Check if a bait is set as recommended
        if (fish.spreadsheetData?.baits != null) {
            for (const [baitId, baitData] of Object.entries(fish.spreadsheetData.baits)) {
                if (baitData?.best === true) {
                    return [{ bait: baits[baitId as any] }, { fish, tug: fish.spreadsheetData.tug }]
                }
            }
        }

        // Check if a mooch is set as recommended
        if (fish.spreadsheetData?.mooches != null) {
            for (const [fishId, moochData] of Object.entries(fish.spreadsheetData.mooches)) {
                if (moochData?.best === true) {
                    return [..._getBaitChain(fishes[fishId as any]), { fish, tug: fish.spreadsheetData.tug }]
                }
            }
        }

        // Versatile Lure as fallback
        return [{ bait: baits[29717] }, { fish, tug: fish.spreadsheetData?.tug ?? null }]
    },
    (fish: Fish) => String(fish.id)
)

export const getBaitGroup = memoize(
    (fish: Fish): {
        baits: Array<BaitLink | FishLink>
        baitIsRequired: boolean
        intuitionFishes?: Array<{ baits: Array<BaitLink | FishLink>, baitIsRequired: boolean, count: number }>
    } => {
        const baitChain = getBaitChain(fish)
        const intuitionFishes = fish.spreadsheetData?.intuitionFishes
        return {
            baits: baitChain,
            baitIsRequired: isBaitRequired(fish, (baitChain[0] as BaitLink).bait),
            intuitionFishes: intuitionFishes != null
                ? Object.entries(intuitionFishes).map(([intuitionFishId, count]) => {
                    const intuitionFish = fishes[Number(intuitionFishId)]
                    const intuitionBaitChain = getBaitChain(intuitionFish)
                    return {
                        baits: intuitionBaitChain,
                        baitIsRequired: isBaitRequired(intuitionFish, (intuitionBaitChain[0] as BaitLink).bait),
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

export function subtextDH(fish: Fish): string {
    const doubleHook = fish.spreadsheetData?.doubleHook
    return doubleHook != null
        ? `DH: ${Array.isArray(doubleHook) ? doubleHook.join('-') : doubleHook}`
        : 'DH: ?'
}

export function subtextBiteTime(fish: Fish): string {
    // const biteTimeAll = fish.biteTimes.all
    // return biteTimeAll !== null
    //   ? `${biteTimeAll[0] === biteTimeAll[1] ? biteTimeAll[0] : biteTimeAll.join('-')}s`
    //   : '?s'
    return '?s'
}

export function upperFirst(str: string): string {
    return str.length === 0 ? '' : str[0].toUpperCase() + str.slice(1)
}

export function cleanObjective(objective: string): string {
    return objective.replace(/<[^<>]*?\/>/g, '')
}

export function cleanRequirement(requirement: string): string {
    return upperFirst(requirement.replace(/^(Requirement:|Bedingung:|Condition :|達成条件：|达成条件：|달성 조건: )/, '').trim())
}

export function isUncaughtItinerary(destination: Destination, time: Time, checklist: number[]): boolean {
    for (const { stop, time: stopTime } of getStopTimes(destination, time)) {
        // Check for non-spectral fish
        const fishingSpot = maps.STOP_MAP[stop]
        for (const fish of fishingSpot.fishes) {
            if (!checklist.includes(fish.id))
                return true
        }

        // Check for spectral fish
        const spectralFishingSpot = fishingSpots[fishingSpot.id + 1]
        for (const fish of spectralFishingSpot.fishes) {
            if (!fish.spreadsheetData?.timeAvailability?.includes(stopTime))
                continue
            if (!checklist.includes(fish.id))
                return true
        }
    }
    return false
}
