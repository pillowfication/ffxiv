import fs from 'fs'
import path from 'path'
import * as sc from '../../../saint-coinach'

/* eslint-disable @typescript-eslint/naming-convention */
const Achievement_en = sc.requireCsv('Achievement', 'en')
const Achievement_de = sc.requireCsv('Achievement', 'de')
const Achievement_fr = sc.requireCsv('Achievement', 'fr')
const Achievement_ja = sc.requireCsv('Achievement', 'ja')
const Achievement_cn = sc.requireCsv('Achievement', 'cn')
const Achievement_ko = sc.requireCsv('Achievement', 'ko')
const FishingSpot_en = sc.requireCsv('FishingSpot', 'en')
const FishParameter_en = sc.requireCsv('FishParameter', 'en')
const IKDContentBonus_en = sc.requireCsv('IKDContentBonus', 'en')
const IKDContentBonus_de = sc.requireCsv('IKDContentBonus', 'de')
const IKDContentBonus_fr = sc.requireCsv('IKDContentBonus', 'fr')
const IKDContentBonus_ja = sc.requireCsv('IKDContentBonus', 'ja')
const IKDContentBonus_cn = sc.requireCsv('IKDContentBonus', 'cn')
const IKDContentBonus_ko = sc.requireCsv('IKDContentBonus', 'ko')
const IKDFishParam = sc.requireCsv('IKDFishParam')
const Item_en = sc.requireCsv('Item', 'en')
const Item_de = sc.requireCsv('Item', 'de')
const Item_fr = sc.requireCsv('Item', 'fr')
const Item_ja = sc.requireCsv('Item', 'ja')
const Item_cn = sc.requireCsv('Item', 'cn')
const Item_ko = sc.requireCsv('Item', 'ko')
const PlaceName_en = sc.requireCsv('PlaceName', 'en')
const PlaceName_de = sc.requireCsv('PlaceName', 'de')
const PlaceName_fr = sc.requireCsv('PlaceName', 'fr')
const PlaceName_ja = sc.requireCsv('PlaceName', 'ja')
const PlaceName_cn = sc.requireCsv('PlaceName', 'cn')
const PlaceName_ko = sc.requireCsv('PlaceName', 'ko')

console.log('Collecting ocean fishing spots...')
const fishingSpots = FishingSpot_en.data
  .filter(fishingSpot => fishingSpot['#'] === 0 || +fishingSpot['PlaceName{Main}'] === 3443) // The High Seas
  .map(fishingSpot => ({
    id: fishingSpot['#'],
    placeName_main: +fishingSpot['PlaceName{Main}'],
    placeName_sub: +fishingSpot['PlaceName{Sub}'],
    placeName: +fishingSpot.PlaceName,
    fishes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      .map(index => +fishingSpot[`Item[${index}]`])
      .filter(itemId => itemId !== 0),
    order: fishingSpot.Order
  }))
  .reduce((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/fishing-spots.json'), JSON.stringify(fishingSpots))

console.log('Collecting place names...')
const placeNames = Object.values<any>(fishingSpots)
  .flatMap(fishingSpot => [fishingSpot.placeName_main, fishingSpot.placeName_sub, fishingSpot.placeName])
  .concat([0])
  .sort((a, b) => a - b)
  .filter((value, index, array) => value !== array[index + 1])
  .map(placeNameId => {
    const placeName_en = PlaceName_en.get(placeNameId)
    const placeName_de = PlaceName_de.get(placeNameId)
    const placeName_fr = PlaceName_fr.get(placeNameId)
    const placeName_ja = PlaceName_ja.get(placeNameId)
    const placeName_cn = PlaceName_cn.get(placeNameId)
    const placeName_ko = PlaceName_ko.get(placeNameId)
    return {
      id: placeNameId,
      name_en: placeName_en.Name,
      name_de: placeName_de.Name,
      name_fr: placeName_fr.Name,
      name_ja: placeName_ja.Name,
      name_cn: placeName_cn !== undefined ? placeName_cn.Name : '',
      name_ko: placeName_ko !== undefined ? placeName_ko.Name : '',
      name_noArticle_en: placeName_en['Name{NoArticle}'],
      name_noArticle_de: placeName_de['Name{NoArticle}'],
      name_noArticle_fr: placeName_fr['Name{NoArticle}'],
      name_noArticle_ja: placeName_ja['Name{NoArticle}'],
      name_noArticle_cn: placeName_cn !== undefined ? placeName_cn['Name{NoArticle}'] : '',
      name_noArticle_ko: placeName_ko !== undefined ? placeName_ko['Name{NoArticle}'] : ''
    }
  })
  .reduce((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/place-names.json'), JSON.stringify(placeNames))

console.log('Collecting ocean fishes...')
const oceanFishes = IKDFishParam.data
  .map(ikdFishParam => {
    const fishParameterId = +ikdFishParam.Fish
    const itemId = +FishParameter_en.get(fishParameterId).Item
    const item_en = Item_en.get(itemId)
    const item_de = Item_de.get(itemId)
    const item_fr = Item_fr.get(itemId)
    const item_ja = Item_ja.get(itemId)
    const item_cn = Item_cn.get(itemId)
    const item_ko = Item_ko.get(itemId)
    return {
      id: itemId,
      icon: +item_en.Icon,
      name_en: item_en.Name,
      name_de: item_de.Name,
      name_fr: item_fr.Name,
      name_ja: item_ja.Name,
      name_cn: item_cn.Name,
      name_ko: item_ko.Name,
      description_en: item_en.Description,
      description_de: item_de.Description,
      description_fr: item_fr.Description,
      description_ja: item_ja.Description,
      description_cn: item_cn.Description,
      description_ko: item_ko.Description,
      contentBonus: +ikdFishParam.IKDContentBonus !== 0 ? +ikdFishParam.IKDContentBonus : +ikdFishParam['Unknown[5-4]']
    }
  })
  .reduce((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/fishes.json'), JSON.stringify(oceanFishes))

console.log('Collecting baits...')
const baits = [
  0,
  2587, // Pill Bug
  2591, // Rat Tail
  2603, // Glowworm
  2613, // Shrimp Cage Feeder
  2619, // Heavy Steel Jig
  27590, // Squid Strip
  29714, // Ragworm
  29715, // Krill
  29716, // Plump Worm
  29717 // Versatile Lure
]
  .map(itemId => {
    const item_en = Item_en.get(itemId)
    const item_de = Item_de.get(itemId)
    const item_fr = Item_fr.get(itemId)
    const item_ja = Item_ja.get(itemId)
    const item_cn = Item_cn.get(itemId)
    const item_ko = Item_ko.get(itemId)
    return {
      id: itemId,
      icon: +item_en.Icon,
      name_en: item_en.Name,
      name_de: item_de.Name,
      name_fr: item_fr.Name,
      name_ja: item_ja.Name,
      name_cn: item_cn.Name,
      name_ko: item_ko.Name
    }
  })
  .reduce((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/baits.json'), JSON.stringify(baits))

console.log('Collecting content bonuses...')
const contentBonuses = IKDContentBonus_en.data
  .map(ikdContentBonus => {
    const ikdContentBonusId = ikdContentBonus['#']
    const ikdContentBonus_en = IKDContentBonus_en.get(ikdContentBonusId)
    const ikdContentBonus_de = IKDContentBonus_de.get(ikdContentBonusId)
    const ikdContentBonus_fr = IKDContentBonus_fr.get(ikdContentBonusId)
    const ikdContentBonus_ja = IKDContentBonus_ja.get(ikdContentBonusId)
    const ikdContentBonus_cn = IKDContentBonus_cn.get(ikdContentBonusId)
    const ikdContentBonus_ko = IKDContentBonus_ko.get(ikdContentBonusId)
    return {
      id: ikdContentBonusId,
      icon: +ikdContentBonus_en.Image,
      objective_en: ikdContentBonus_en.Objective,
      objective_de: ikdContentBonus_de.Objective,
      objective_fr: ikdContentBonus_fr.Objective,
      objective_ja: ikdContentBonus_ja.Objective,
      objective_cn: ikdContentBonus_cn !== undefined ? ikdContentBonus_cn.Objective : '',
      objective_ko: ikdContentBonus_ko !== undefined ? ikdContentBonus_ko.Objective : '',
      requirement_en: ikdContentBonus_en.Requirement,
      requirement_de: ikdContentBonus_de.Requirement,
      requirement_fr: ikdContentBonus_fr.Requirement,
      requirement_ja: ikdContentBonus_ja.Requirement,
      requirement_cn: ikdContentBonus_cn !== undefined ? ikdContentBonus_cn.Requirement : '',
      requirement_ko: ikdContentBonus_ko !== undefined ? ikdContentBonus_ko.Requirement : '',
      bonus: ikdContentBonus_en['<UNKNOWN_2>'],
      order: ikdContentBonus_en.Order
    }
  })
  .reduce((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/content-bonuses.json'), JSON.stringify(contentBonuses))

function range (start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}

console.log('Collecting ocean fishing achievements...')
const oceanFishingAchievements = [0, ...range(2553, 2566), ...range(2748, 2759)]
  .map(achievementId => {
    const achievement_en = Achievement_en.get(achievementId)
    const achievement_de = Achievement_de.get(achievementId)
    const achievement_fr = Achievement_fr.get(achievementId)
    const achievement_ja = Achievement_ja.get(achievementId)
    const achievement_cn = Achievement_cn.get(achievementId)
    const achievement_ko = Achievement_ko.get(achievementId)
    return {
      id: achievementId,
      icon: +achievement_en.Icon,
      name_en: achievement_en.Name,
      name_de: achievement_de.Name,
      name_fr: achievement_fr.Name,
      name_ja: achievement_ja.Name,
      name_cn: achievement_cn !== undefined ? achievement_cn.Name : '',
      name_ko: achievement_ko !== undefined ? achievement_ko.Name : '',
      description_en: achievement_en.Description,
      description_de: achievement_de.Description,
      description_fr: achievement_fr.Description,
      description_ja: achievement_ja.Description,
      description_cn: achievement_cn !== undefined ? achievement_cn.Description : '',
      description_ko: achievement_ko !== undefined ? achievement_ko.Description : '',
      order: achievement_en.Order
    }
  })
  .reduce((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/achievements.json'), JSON.stringify(oceanFishingAchievements))

console.log('Done!')
