import _territories from './territories.json'
import _placeNames from './place-names.json'
import _weathers from './weathers.json'
import _weatherRates from './weather-rates.json'
import _partition from './partition.json'

export type Territory = {
  id: number,
  placeName: number,
  placeName_zone: number,
  placeName_region: number,
  weatherRate: number
}

export type PlaceName = {
  id: number,
  name_en: string,
  name_de: string,
  name_fr: string,
  name_ja: string
}

export type Weather = {
  id: number,
  icon?: number,
  name_en: string,
  name_de: string,
  name_fr: string,
  name_ja: string,
  description_en: string,
  description_de: string,
  description_fr: string,
  description_ja: string
}

export type WeatherRate = {
  id: number,
  rates: number[][]
}

export const territories = _territories as Record<number, Territory>
export const placeNames = _placeNames as Record<number, PlaceName>
export const weathers = _weathers as Record<number, Weather>
export const weatherRates = _weatherRates as Record<number, WeatherRate>
export const partition = _partition as { placeNames: Record<number, number[]>, weatherRates: Record<number, number[]> }
