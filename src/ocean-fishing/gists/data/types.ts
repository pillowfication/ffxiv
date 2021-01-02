export type FishingSpot = {
  id: number,
  name_de: string,
  name_en: string,
  name_fr: string,
  name_ja: string,
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
