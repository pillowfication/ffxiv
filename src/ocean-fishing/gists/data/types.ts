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
  name_de: string,
  name_en: string,
  name_fr: string,
  name_ja: string,
  icon: string
}

export type FishInfo = {
  name: string,
  bait?: string,
  points?: number,
  doubleHook?: number | [number, number],
  mooch?: string,
  tug?: 1 | 2 | 3,
  timer?: [number, number],
  time?: string,
  weathers?: {
    type: 'ALL' | 'OK' | 'NOT OK',
    list?: string[]
  },
  stars?: number,
  category?: 'octopus' | 'shark' | 'jellyfish' | 'seadragon' | 'balloon' | 'crab' | 'manta',
  intuition?: Array<{name: string, count: number}>
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
