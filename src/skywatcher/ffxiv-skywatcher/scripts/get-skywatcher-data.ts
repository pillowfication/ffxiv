import fs from 'fs'
import path from 'path'
import * as saintCoinach from '../../../saint-coinach'

/* eslint-disable @typescript-eslint/naming-convention */
const TerritoryType = saintCoinach.get('TerritoryType')
const PlaceName_en = saintCoinach.get('PlaceName.en')
const PlaceName_de = saintCoinach.get('PlaceName.de')
const PlaceName_fr = saintCoinach.get('PlaceName.fr')
const PlaceName_ja = saintCoinach.get('PlaceName.ja')
const PlaceName_ko = saintCoinach.get('PlaceName', 'ko')
const Weather_en = saintCoinach.get('Weather.en')
const Weather_de = saintCoinach.get('Weather.de')
const Weather_fr = saintCoinach.get('Weather.fr')
const Weather_ja = saintCoinach.get('Weather.ja')
const Weather_ko = saintCoinach.get('Weather', 'ko')
const WeatherRate = saintCoinach.get('WeatherRate')

console.log('Collecting territories...')
const territories = TerritoryType.data
  .filter(({ WeatherRate }) => WeatherRate)
  .map(territory => {
    return {
      id: territory['#'],
      placeName: +territory.PlaceName,
      placeName_zone: +territory['PlaceName{Zone}'],
      placeName_region: +territory['PlaceName{Region}'],
      weatherRate: territory.WeatherRate
    }
  })
  .reduce((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/territories.json'), JSON.stringify(territories))

console.log('Collecting place names...')
const placeNames = Object.values<any>(territories)
  .flatMap(territory => [territory.placeName, territory.placeName_zone, territory.placeName_region])
  .filter((placeNameId, index, array) => placeNameId !== array[index + 1])
  .map(placeNameId => {
    const placeName_en = PlaceName_en.data.find(({ '#': id }) => id === placeNameId)
    const placeName_de = PlaceName_de.data.find(({ '#': id }) => id === placeNameId)
    const placeName_fr = PlaceName_fr.data.find(({ '#': id }) => id === placeNameId)
    const placeName_ja = PlaceName_ja.data.find(({ '#': id }) => id === placeNameId)
    const placeName_ko = PlaceName_ko.data.find(({ '#': id }) => id === placeNameId)
    return {
      id: placeNameId,
      name_en: placeName_en.Name,
      name_de: placeName_de.Name,
      name_fr: placeName_fr.Name,
      name_ja: placeName_ja.Name,
      name_ko: placeName_ko.Name
    }
  })
  .reduce((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/place-names.json'), JSON.stringify(placeNames))

console.log('Collecting weathers...')
const weathers = Weather_en.data
  .map(weather => {
    const weatherId = weather['#']
    const weather_en = Weather_en.data.find(({ '#': id }) => id === weatherId)
    const weather_de = Weather_de.data.find(({ '#': id }) => id === weatherId)
    const weather_fr = Weather_fr.data.find(({ '#': id }) => id === weatherId)
    const weather_ja = Weather_ja.data.find(({ '#': id }) => id === weatherId)
    const weather_ko = Weather_ko.data.find(({ '#': id }) => id === weatherId)
    return {
      id: weatherId,
      icon: +weather_en.Icon,
      name_en: weather_en.Name,
      name_de: weather_de.Name,
      name_fr: weather_fr.Name,
      name_ja: weather_ja.Name,
      name_ko: weather_ko.Name,
      description_en: weather_en.Description,
      description_de: weather_de.Description,
      description_fr: weather_fr.Description,
      description_ja: weather_ja.Description,
      description_ko: weather_ko.Description
    }
  })
  .reduce((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/weathers.json'), JSON.stringify(weathers))

console.log('Collecting weather rates...')
const weatherRates = WeatherRate.data
  .map(weatherRate => {
    return {
      id: weatherRate['#'],
      rates: [0, 1, 2, 3, 4, 5, 6, 7]
        .map(index => [+weatherRate[`Weather[${index}]`], weatherRate[`Rate[${index}]`]])
        .filter(([weather, rate]) => weather !== 0 && rate !== 0)
    }
  })
  .reduce((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/weather-rates.json'), JSON.stringify(weatherRates))
