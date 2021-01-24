import everything from './everything.json'
import { Weather } from '../../../skywatcher/weather'

export type FishingSpot = {
  id: number,
  place_name_de: string,
  place_name_en: string,
  place_name_fr: string,
  place_name_ja: string,
  place_name_sub_de: string,
  place_name_sub_en: string,
  place_name_sub_fr: string,
  place_name_sub_ja: string,
  place_name_sub_no_article_de: string,
  place_name_sub_no_article_en: string,
  place_name_sub_no_article_fr: string,
  place_name_sub_no_article_ja: string,
  fishes: number[]
}

export type Fish = {
  id: number,
  fishing_spot: number,
  name_de: string,
  name_en: string,
  name_fr: string,
  name_ja: string,
  description_de: string,
  description_en: string,
  description_fr: string,
  description_ja: string,
  icon: string,
  lodestone_data?: {
    url?: string,
    icon_sm?: string,
    icon_lg?: string
  },
  spreadsheet_data: SpreadsheetInfo
}

export type SpreadsheetInfo = {
  name: string,
  bait?: number,
  points?: number,
  double_hook?: number | [number, number],
  mooch?: number,
  tug?: 1 | 2 | 3,
  bite_time: {
    all?: [number, number],
    [key: number]: [number, number]
  },
  time?: string,
  weathers?:
    { type: 'ALL' } |
    { type: 'OK', list: Weather[] } |
    { type: 'NOT OK', list: Weather[] },
  stars?: number,
  category?: 'octopus' | 'shark' | 'jellyfish' | 'seadragon' | 'balloon' | 'crab' | 'manta',
  intuition?: { id: number, count: number }[]
}

export type Bait = {
  id: number,
  name_de: string,
  name_en: string,
  name_fr: string,
  name_ja: string,
  icon: string
}

export type Achievement = {
  id: number,
  name_de: string,
  name_en: string,
  name_fr: string,
  name_ja: string,
  icon: string
}

export const fishingSpots: { [key: number]: FishingSpot } = everything.fishingSpots
export const fishes: { [key: number]: Fish } = <any>everything.fishes
export const baits: { [key: number]: Bait } = everything.baits
export const achievements: { [key: number]: Bait } = everything.achievements
