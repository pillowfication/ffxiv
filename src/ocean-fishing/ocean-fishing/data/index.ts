import oceanFishingFishingSpots from './ocean-fishing-fishing-spots.json'
import oceanFishingPlaceNames from './ocean-fishing-place-names.json'
import oceanFishingFishes from './ocean-fishing-fishes.json'
import oceanFishingBaits from './ocean-fishing-baits.json'
import oceanFishingContentBonuses from './ocean-fishing-content-bonuses.json'
import oceanFishingAchievements from './ocean-fishing-achievements.json'
import oceanFishingBiteTimes from './ocean-fishing-bite-times.json'
import spreadsheetData from './spreadsheet-data.json'

import { Time } from '../types'
import { Weather } from '../../../skywatcher/weather/src/types/weather'

export type FishingSpot = {
  id: number,
  placeName_main: number,
  placeName_sub: number,
  placeName: number,
  fishes: number[],
  order: number
}

export type PlaceName = {
  id: number,
  name_en: string,
  name_de: string,
  name_fr: string,
  name_ja: string,
  name_noArticle_en: string,
  name_noArticle_de: string,
  name_noArticle_fr: string,
  name_noArticle_ja: string
}

export type SpreadsheetData = {
  bait?: number,
  points?: number,
  doubleHook?: number | [number, number],
  mooch?: number,
  tug?: 1 | 2 | 3,
  time?: Time[],
  weathers?: { type: 'ALL' } | { type: 'OK', list: Weather[] } | { type: 'NOT OK', list: Weather[] },
  stars?: number,
  contentBonus?: number,
  intuition?: { fishId: number, count: number }[]
}

export type OceanFish = {
  id: number,
  icon: number,
  name_en: string,
  name_de: string,
  name_fr: string,
  name_ja: string,
  description_en: string,
  description_de: string,
  description_fr: string,
  description_ja: string,
  contentBonus: number,
  spreadsheetData: SpreadsheetData,
  biteTimes: {
    [key: number]: [number, number],
    all?: [number, number]
  }
}

export type Bait = {
  id: number,
  icon: number,
  name_en: string,
  name_de: string,
  name_fr: string,
  name_ja: string
}

export type ContentBonus = {
  id: number,
  icon: number,
  objective_en: string,
  objective_de: string,
  objective_fr: string,
  objective_ja: string,
  requirement_en: string,
  requirement_de: string,
  requirement_fr: string,
  requirement_ja: string,
  bonus: number,
  order: number
}

export type Achievement = {
  id: number,
  icon: number,
  name_en: string,
  name_de: string,
  name_fr: string,
  name_ja: string,
  description_en: string,
  description_de: string,
  description_fr: string,
  description_ja: string,
  order: number
}

const baitMap: Record<string, number> = Object.values(oceanFishingBaits)
  .reduce((acc, curr) => (acc[curr.name_en] = curr.id, acc), {})
const fishMap: Record<string, number> = Object.values(oceanFishingFishes)
  .reduce((acc, curr) => (acc[curr.name_en] = curr.id, acc), {})
const spreadsheetMap: Record<string, any> = Object.values<any>(spreadsheetData)
  .flatMap(x => x)
  .reduce((acc, curr) => (acc[curr.name] = curr, acc), {})

function getMapped<T> (map: Record<string, T>, name: string) {
  if (!map[name]) {
    throw new Error(`Could not find '${name}'`)
  }
  return map[name]
}

// Attach spreadsheet data and bite times
for (const oceanFish of Object.values<any>(oceanFishingFishes)) {
  const spreadsheetData = getMapped(spreadsheetMap, oceanFish.name_en)
  oceanFish.spreadsheetData = {
    bait: spreadsheetData.bait && getMapped(baitMap, spreadsheetData.bait),
    points: spreadsheetData.points,
    doubleHook: spreadsheetData.doubleHook,
    mooch: spreadsheetData.mooch && getMapped(fishMap, spreadsheetData.mooch),
    tug: spreadsheetData.tug,
    time: spreadsheetData.time && spreadsheetData.time.split(''),
    weathers: spreadsheetData.weathers && (() => {
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
    })(),
    stars: spreadsheetData.stars,
    intuition: spreadsheetData.intuition && spreadsheetData.intuition.map(({ name, count }) => ({ fishId: getMapped(fishMap, name), count }))
  }

  oceanFish.biteTimes = oceanFishingBiteTimes[oceanFish.id] || {}
}

export const fishingSpots = oceanFishingFishingSpots as Record<number, FishingSpot>
export const placeNames = oceanFishingPlaceNames as Record<number, PlaceName>
export const oceanFishes = <any>oceanFishingFishes as Record<number, OceanFish>
export const baits = oceanFishingBaits as Record<number, Bait>
export const contentBonuses = oceanFishingContentBonuses as Record<number, ContentBonus>
export const achievements = oceanFishingAchievements as Record<number, Achievement>
