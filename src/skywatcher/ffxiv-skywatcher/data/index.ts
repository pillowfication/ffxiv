import _territories from './territories.json'
import _placeNames from './place-names.json'
import _weathers from './weathers.json'
import _weatherRates from './weather-rates.json'
import _partition from './partition.json'

export interface Territory {
  id: number
  placeName: PlaceName
  placeName_zone: PlaceName
  placeName_region: PlaceName
  weatherRate: WeatherRate
}

for (const territory of Object.values(_territories)) {
  territory.placeName = _placeNames[territory.placeName]
  territory.placeName_zone = _placeNames[territory.placeName_zone]
  territory.placeName_region = _placeNames[territory.placeName_region]
  territory.weatherRate = _weatherRates[territory.weatherRate]
}

export const territories = _territories as any as Record<number, Territory>

export interface PlaceName {
  id: number
  name_en: string
  name_de: string
  name_fr: string
  name_ja: string
  name_ko: string
}

export const placeNames = _placeNames as Record<number, PlaceName>

export interface Weather {
  id: number
  icon: number | null
  name_en: string
  name_de: string
  name_fr: string
  name_ja: string
  name_ko: string
  description_en: string
  description_de: string
  description_fr: string
  description_ja: string
  description_ko: string
}

export const weathers = _weathers as Record<number, Weather>

export interface WeatherRate {
  id: number
  rates: Array<[Weather, number]>
}

for (const weatherRate of Object.values(_weatherRates)) {
  weatherRate.rates = weatherRate.rates.map(([weatherId, chance]) => [_weathers[weatherId], chance])
}

export const weatherRates = _weatherRates as any as Record<number, WeatherRate>

export const partition = _partition as { placeNames: Record<number, number[]>, weatherRates: Record<number, number[]> }
