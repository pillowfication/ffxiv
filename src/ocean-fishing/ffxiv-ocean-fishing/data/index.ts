import _fishingSpots from './fishing-spots.json'
import _placeNames from './place-names.json'
import _fishes from './fishes.json'
import _baits from './baits.json'
import _contentBonuses from './content-bonuses.json'
import _achievements from './achievements.json'
import _biteTimes from './bite-times.json'
import spreadsheetData from './spreadsheet-data.json'
import lodestoneData from './lodestone-data.json'

import { Time } from '../src/types'
import { Weather } from '../../../skywatcher/ffxiv-skywatcher/src/types'
import { Translatable } from '../../../translate'

const baitMap: Record<string, number> = Object.values(_baits)
  .reduce((acc, curr) => { acc[curr.name.en] = curr; return acc }, {})
const fishMap: Record<string, number> = Object.values(_fishes)
  .reduce((acc, curr) => { acc[curr.name.en] = curr; return acc }, {})
const spreadsheetMap: Record<string, any> = Object.values<any>(spreadsheetData)
  .flatMap(x => x)
  .reduce((acc, curr) => { acc[curr.name] = curr; return acc }, {})

function getMapped<T> (map: Record<string, T>, name: string | null): T | null {
  if (name === null) {
    return null
  }
  if (map[name] === undefined) {
    throw new Error(`Could not find '${name}'`)
  }
  return map[name]
}

export interface FishingSpot {
  id: number
  placeName_main: PlaceName
  placeName_sub: PlaceName
  placeName: PlaceName
  fishes: Fish[]
  order: number
}

for (const fishingSpot of Object.values(_fishingSpots)) {
  fishingSpot.placeName_main = _placeNames[fishingSpot.placeName_main]
  fishingSpot.placeName_sub = _placeNames[fishingSpot.placeName_sub]
  fishingSpot.placeName = _placeNames[fishingSpot.placeName]
  fishingSpot.fishes = (fishingSpot.fishes as number[]).map(fishId => _fishes[fishId]) // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
}

export const fishingSpots = _fishingSpots as any as Record<number, FishingSpot>

export interface PlaceName {
  id: number
  name: Translatable
  name_noArticle: Translatable
}

export const placeNames = _placeNames as Record<number, PlaceName>

export interface Fish {
  id: number
  icon: number
  name: Translatable
  description: Translatable
  contentBonus: ContentBonus | null
  biteTimes: {
    [key: number]: [number, number]
    all: [number, number] | null
  }
  spreadsheetData: SpreadsheetData
  lodestoneData: LodestoneData | null
}

export interface SpreadsheetData {
  bait: Bait | null
  points: number | null
  doubleHook: number | [number, number] | null
  mooch: Fish | null
  tug: 1 | 2 | 3 | null
  time: Time[] | null
  weathers: { type: 'ALL' } | { type: 'OK', list: Weather[] } | { type: 'NOT OK', list: Weather[] } | null
  stars: number | null
  intuition: Array<{ fish: Fish, count: number }> | null
}

export interface LodestoneData {
  item: string
  icon_sm: string
  icon_md: string
  icon_lg: string
}

for (const fish of Object.values<any>(_fishes)) {
  fish.contentBonus = fish.contentBonus !== null ? _contentBonuses[fish.contentBonus] : null

  // Attach bite times
  fish.biteTimes = _biteTimes[fish.id]

  // Attach spreadsheet data
  if (fish.id === 0) {
    fish.spreadsheetData = {
      bait: null,
      points: null,
      doubleHook: null,
      mooch: null,
      tug: null,
      time: null,
      weathers: null,
      stars: null,
      intuition: null
    }
  } else {
    const spreadsheetData = getMapped(spreadsheetMap, fish.name.en)
    fish.spreadsheetData = {
      bait: getMapped(baitMap, spreadsheetData.bait),
      points: spreadsheetData.points,
      doubleHook: spreadsheetData.doubleHook,
      mooch: getMapped(fishMap, spreadsheetData.mooch),
      tug: spreadsheetData.tug,
      time: spreadsheetData.time !== null ? spreadsheetData.time.split('') : null,
      weathers: spreadsheetData.weathers !== null
        ? (() => {
            switch (spreadsheetData.weathers.type) {
              case 'ALL':
                return spreadsheetData.weathers
              case 'OK':
              case 'NOT OK':
                return {
                  type: spreadsheetData.weathers.type,
                  list: spreadsheetData.weathers.list.map((weather: any) => Weather[weather])
                }
            }
          })()
        : null,
      stars: spreadsheetData.stars,
      intuition: spreadsheetData.intuition != null
        ? spreadsheetData.intuition.map(({ name, count }) => ({ fish: getMapped(fishMap, name), count }))
        : null
    }
  }

  // Attach Lodestone data
  fish.lodestoneData = lodestoneData[fish.id]
}

export const fishes = _fishes as any as Record<number, Fish>

export interface Bait {
  id: number
  icon: number
  name: Translatable
}

export const baits = _baits as Record<number, Bait>

export interface ContentBonus {
  id: number
  icon: number
  objective: Translatable
  requirement: Translatable
  bonus: number
  order: number
}

export const contentBonuses = _contentBonuses as Record<number, ContentBonus>

export interface Achievement {
  id: number
  icon: number
  name: Translatable
  description: Translatable
  reward: Translatable
  order: number
}

export const achievements = _achievements as Record<number, Achievement>
