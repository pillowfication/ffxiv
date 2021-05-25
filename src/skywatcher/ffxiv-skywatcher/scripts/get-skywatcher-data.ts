import fs from 'fs'
import path from 'path'
import * as sc from '../../../saint-coinach'

/* eslint-disable @typescript-eslint/naming-convention */
const TerritoryType = sc.requireCsv('TerritoryType')
const PlaceName_en = sc.requireCsv('PlaceName', 'en')
const PlaceName_de = sc.requireCsv('PlaceName', 'de')
const PlaceName_fr = sc.requireCsv('PlaceName', 'fr')
const PlaceName_ja = sc.requireCsv('PlaceName', 'ja')
const PlaceName_cn = sc.requireCsv('PlaceName', 'cn')
const PlaceName_ko = sc.requireCsv('PlaceName', 'ko')
const Weather_en = sc.requireCsv('Weather', 'en')
const Weather_de = sc.requireCsv('Weather', 'de')
const Weather_fr = sc.requireCsv('Weather', 'fr')
const Weather_ja = sc.requireCsv('Weather', 'ja')
const Weather_cn = sc.requireCsv('Weather', 'cn')
const Weather_ko = sc.requireCsv('Weather', 'ko')
const WeatherRate = sc.requireCsv('WeatherRate')

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
    const placeName_en = PlaceName_en.get(placeNameId)
    const placeName_de = PlaceName_de.get(placeNameId)
    const placeName_fr = PlaceName_fr.get(placeNameId)
    const placeName_ja = PlaceName_ja.get(placeNameId)
    const placeName_cn = PlaceName_cn.get(placeNameId)
    const placeName_ko = PlaceName_ko.get(placeNameId)
    return {
      id: placeNameId,
      name: {
        en: placeName_en.Name,
        de: placeName_de.Name,
        fr: placeName_fr.Name,
        ja: placeName_ja.Name,
        cn: placeName_cn?.Name ?? '',
        ko: placeName_ko?.Name ?? ''
      }
    }
  })
  .reduce((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/place-names.json'), JSON.stringify(placeNames))

console.log('Collecting weathers...')
const weathers = Weather_en.data
  .map(weather => {
    const weatherId = weather['#']
    const weather_en = Weather_en.get(weatherId)
    const weather_de = Weather_de.get(weatherId)
    const weather_fr = Weather_fr.get(weatherId)
    const weather_ja = Weather_ja.get(weatherId)
    const weather_cn = Weather_cn.get(weatherId)
    const weather_ko = Weather_ko.get(weatherId)
    return {
      id: weatherId,
      icon: +weather_en.Icon,
      name: {
        en: weather_en.Name,
        de: weather_de.Name,
        fr: weather_fr.Name,
        ja: weather_ja.Name,
        cn: weather_cn?.Name ?? '',
        ko: weather_ko?.Name ?? ''
      },
      description: {
        en: weather_en.Description,
        de: weather_de.Description,
        fr: weather_fr.Description,
        ja: weather_ja.Description,
        cn: weather_cn?.Description ?? '',
        ko: weather_ko?.Description ?? ''
      }
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

console.log('Done!')
