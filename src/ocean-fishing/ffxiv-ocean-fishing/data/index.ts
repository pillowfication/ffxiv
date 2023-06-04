import _fishingSpots from './fishing-spots.json'
import _placeNames from './place-names.json'
import _fishes from './fishes.json'
import _baits from './baits.json'
import _contentBonuses from './content-bonuses.json'
import _achievements from './achievements.json'
import _spreadsheetData from './spreadsheet-data.json'
import _lodestoneData from './lodestone-data.json'

import { Time } from '../src/types'
import { Weather } from '../../../skywatcher/ffxiv-skywatcher/src/types'
import { Translatable } from '../../../translate'

const fishMap: Record<string, any> = Object.values(_fishes)
  .reduce<Record<string, any>>((acc, curr) => { acc[curr.name.en] = curr; return acc }, {})
const spreadsheetMap: Record<string, any> = Object.values<any>(_spreadsheetData)
  .flatMap(x => x)
  .reduce((acc, curr) => { acc[curr.name] = curr; return acc }, {})

export interface FishingSpot {
  id: number
  placeName_main: PlaceName
  placeName_sub: PlaceName
  placeName: PlaceName
  fishes: Fish[]
  order: number
}

for (const fishingSpot of Object.values(_fishingSpots)) {
  fishingSpot.placeName_main = (_placeNames as any)[fishingSpot.placeName_main]
  fishingSpot.placeName_sub = (_placeNames as any)[fishingSpot.placeName_sub]
  fishingSpot.placeName = (_placeNames as any)[fishingSpot.placeName]
  fishingSpot.fishes = (fishingSpot.fishes as number[]).map(fishId => (_fishes as any)[fishId])
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
  spreadsheetData: SpreadsheetData | null
  lodestoneData: LodestoneData | null
}

export interface SpreadsheetData {
  name: string
  moochable: boolean | null
  mooched: boolean | null
  moochOnly: boolean | null
  intuition: boolean | null
  intuitionDuration: number | null
  intuitionFishes: Record<number, number> | null
  baits: Record<number, { biteTime: [number, number | null] | null, usable: boolean | null, best: boolean | null } | null> | null
  mooches: Record<number, { biteTime: [number, number | null] | null, usable: boolean | null, best: boolean | null } | null> | null
  points: number | null
  doubleHook: [number, number] | null
  tripleHook: [number, number] | null
  tug: 1 | 2 | 3 | null
  hookset: 'Precision' | 'Powerful' | null
  timeAvailability: Time[] | null
  weatherAvailability: { type: 'ALL' } | { type: 'OK', weathers: Weather[] } | { type: 'NOT OK', weathers: Weather[] } | null
  stars: number | null
}

export interface LodestoneData {
  item: string
  icon_sm: string
  icon_md: string
  icon_lg: string
}

for (const fish of Object.values<any>(_fishes)) {
  fish.contentBonus = fish.contentBonus !== null ? (_contentBonuses as any)[fish.contentBonus] : null

  // Attach spreadsheet data
  if (fish.id === 0) {
    fish.spreadsheetData = null
  } else {
    const spreadsheetData = spreadsheetMap[fish.name.en]

    if (spreadsheetData.mooches != null) {
      for (const fishName of Object.keys(spreadsheetData.mooches)) {
        spreadsheetData.mooches[fishMap[fishName].id] = spreadsheetData.mooches[fishName]
        delete spreadsheetData.mooches[fishName]
      }
    }

    if (spreadsheetData.intuitionFishes != null) {
      spreadsheetData.intuitionFishes = (spreadsheetData.intuitionFishes as any[])
        .reduce((acc, curr) => { acc[fishMap[curr.fish].id] = curr.count; return acc }, {})
    }

    fish.spreadsheetData = spreadsheetData
  }

  // Attach Lodestone data
  fish.lodestoneData = (_lodestoneData as any)[fish.id]
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
