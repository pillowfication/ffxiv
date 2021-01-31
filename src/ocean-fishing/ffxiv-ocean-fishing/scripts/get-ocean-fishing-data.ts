import fs from 'fs'
import path from 'path'
import * as saintCoinach from '../../../saint-coinach'

const Achievement_en = saintCoinach.get('Achievement.en')
const Achievement_de = saintCoinach.get('Achievement.de')
const Achievement_fr = saintCoinach.get('Achievement.fr')
const Achievement_ja = saintCoinach.get('Achievement.ja')
const FishingSpot_en = saintCoinach.get('FishingSpot.en')
const IKDContentBonus_en = saintCoinach.get('IKDContentBonus.en')
const IKDContentBonus_de = saintCoinach.get('IKDContentBonus.de')
const IKDContentBonus_fr = saintCoinach.get('IKDContentBonus.fr')
const IKDContentBonus_ja = saintCoinach.get('IKDContentBonus.ja')
const IKDFishParam = saintCoinach.get('IKDFishParam')
const Item_en = saintCoinach.get('Item.en')
const Item_de = saintCoinach.get('Item.de')
const Item_fr = saintCoinach.get('Item.fr')
const Item_ja = saintCoinach.get('Item.ja')
const PlaceName_en = saintCoinach.get('PlaceName.en')
const PlaceName_de = saintCoinach.get('PlaceName.de')
const PlaceName_fr = saintCoinach.get('PlaceName.fr')
const PlaceName_ja = saintCoinach.get('PlaceName.ja')

console.log('Collecting ocean fishing spots...')
const oceanFishingSpots = FishingSpot_en.data
  .filter(({ ['PlaceName{Main}']: PlaceName_Main }) => PlaceName_Main === 'The High Seas')
  .map(fishingSpot => {
    return {
      id: fishingSpot['#'],
      placeName_main: PlaceName_en.data.find(({ Name }) => Name === fishingSpot['PlaceName{Main}'])['#'],
      placeName_sub: PlaceName_en.data.find(({ Name }) => Name === fishingSpot['PlaceName{Sub}'])['#'],
      placeName: PlaceName_en.data.find(({ Name }) => Name === fishingSpot['PlaceName'])['#'],
      fishes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        .map(index => fishingSpot[`Item[${index}]`])
        .filter(itemName => itemName)
        .map(itemName => Item_en.data.find(({ Name }) => Name === itemName)['#']),
      order: fishingSpot.Order
    }
  })
  .reduce((acc, curr) => (acc[curr.id] = curr, acc), {})
fs.writeFileSync(path.resolve(__dirname, '../data/fishing-spots.json'), JSON.stringify(oceanFishingSpots))

console.log('Collecting place names...')
const placeNames = Object.values<any>(oceanFishingSpots)
  .flatMap(fishingSpot => {
    return [fishingSpot.placeName_main, fishingSpot.placeName_sub, fishingSpot.placeName]
  })
  .filter((value, index, array) => array.indexOf(value, index + 1) === -1)
  .map(placeNameId => {
    const placeName_en = PlaceName_en.data.find(({ ['#']: id }) => id === placeNameId)
    const placeName_de = PlaceName_de.data.find(({ ['#']: id }) => id === placeNameId)
    const placeName_fr = PlaceName_fr.data.find(({ ['#']: id }) => id === placeNameId)
    const placeName_ja = PlaceName_ja.data.find(({ ['#']: id }) => id === placeNameId)

    return {
      id: placeNameId,
      name_en: placeName_en.Name,
      name_de: placeName_de.Name,
      name_fr: placeName_fr.Name,
      name_ja: placeName_ja.Name,
      name_noArticle_en: placeName_en['Name{NoArticle}'],
      name_noArticle_de: placeName_de['Name{NoArticle}'],
      name_noArticle_fr: placeName_fr['Name{NoArticle}'],
      name_noArticle_ja: placeName_ja['Name{NoArticle}']
    }
  })
  .reduce((acc, curr) => (acc[curr.id] = curr, acc), {})
fs.writeFileSync(path.resolve(__dirname, '../data/place-names.json'), JSON.stringify(placeNames))

console.log('Collecting ocean fishes...')
const oceanFishes = IKDFishParam.data
  .map(ikdFishParam => {
    const itemId = Item_en.data.find(({ Name }) => Name === ikdFishParam.Fish)['#']
    const item_en = Item_en.data.find(({ ['#']: id }) => id === itemId)
    const item_de = Item_de.data.find(({ ['#']: id }) => id === itemId)
    const item_fr = Item_fr.data.find(({ ['#']: id }) => id === itemId)
    const item_ja = Item_ja.data.find(({ ['#']: id }) => id === itemId)

    return {
      id: itemId,
      icon: saintCoinach.parseIconId(item_en.Icon),
      name_en: item_en.Name,
      name_de: item_de.Name,
      name_fr: item_fr.Name,
      name_ja: item_ja.Name,
      description_en: item_en.Description,
      description_de: item_de.Description,
      description_fr: item_fr.Description,
      description_ja: item_ja.Description,
      contentBonus: ikdFishParam.IKDContentBonus
        ? IKDContentBonus_en.data.find(({ Objective }) => Objective === ikdFishParam.IKDContentBonus)['#']
        : null
    }
  })
  .reduce((acc, curr) => (acc[curr.id] = curr, acc), {})
fs.writeFileSync(path.resolve(__dirname, '../data/fishes.json'), JSON.stringify(oceanFishes))

console.log('Collecting baits...')
const baits = [
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
    const item_en = Item_en.data.find(({ ['#']: id }) => id === itemId)
    const item_de = Item_de.data.find(({ ['#']: id }) => id === itemId)
    const item_fr = Item_fr.data.find(({ ['#']: id }) => id === itemId)
    const item_ja = Item_ja.data.find(({ ['#']: id }) => id === itemId)

    return {
      id: itemId,
      icon: saintCoinach.parseIconId(item_en.Icon),
      name_en: item_en.Name,
      name_de: item_de.Name,
      name_fr: item_fr.Name,
      name_ja: item_ja.Name
    }
  })
  .reduce((acc, curr) => (acc[curr.id] = curr, acc), {})
fs.writeFileSync(path.resolve(__dirname, '../data/baits.json'), JSON.stringify(baits))

console.log('Collecting content bonuses...')
const contentBonuses = IKDContentBonus_en.data
  .map(ikdContentBonus => {
    const ikdContentBonusId = ikdContentBonus['#']
    const ikdContentBonus_en = IKDContentBonus_en.data.find(({ ['#']: id }) => id === ikdContentBonusId)
    const ikdContentBonus_de = IKDContentBonus_de.data.find(({ ['#']: id }) => id === ikdContentBonusId)
    const ikdContentBonus_fr = IKDContentBonus_fr.data.find(({ ['#']: id }) => id === ikdContentBonusId)
    const ikdContentBonus_ja = IKDContentBonus_ja.data.find(({ ['#']: id }) => id === ikdContentBonusId)

    return {
      id: ikdContentBonusId,
      icon: saintCoinach.parseIconId(ikdContentBonus_en.Image),
      objective_en: ikdContentBonus_en.Objective,
      objective_de: ikdContentBonus_de.Objective,
      objective_fr: ikdContentBonus_fr.Objective,
      objective_ja: ikdContentBonus_ja.Objective,
      requirement_en: ikdContentBonus_en.Requirement,
      requirement_de: ikdContentBonus_de.Requirement,
      requirement_fr: ikdContentBonus_fr.Requirement,
      requirement_ja: ikdContentBonus_ja.Requirement,
      bonus: ikdContentBonus_en['<UNKNOWN_2>'],
      order: ikdContentBonus_en.Order
    }
  })
  .reduce((acc, curr) => (acc[curr.id] = curr, acc), {})
fs.writeFileSync(path.resolve(__dirname, '../data/content-bonuses.json'), JSON.stringify(contentBonuses))

function range (start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}

console.log('Collecting ocean fishing achievements...')
const oceanFishingAchievements = [...range(2553, 2566), ...range(2748, 2759)]
  .map(achievementId => {
    const achievement_en = Achievement_en.data.find(({ ['#']: id }) => id === achievementId)
    const achievement_de = Achievement_de.data.find(({ ['#']: id }) => id === achievementId)
    const achievement_fr = Achievement_fr.data.find(({ ['#']: id }) => id === achievementId)
    const achievement_ja = Achievement_ja.data.find(({ ['#']: id }) => id === achievementId)

    return {
      id: achievementId,
      icon: saintCoinach.parseIconId(achievement_en.Icon),
      name_en: achievement_en.Name,
      name_de: achievement_de.Name,
      name_fr: achievement_fr.Name,
      name_ja: achievement_ja.Name,
      description_en: achievement_en.Description,
      description_de: achievement_de.Description,
      description_fr: achievement_fr.Description,
      description_ja: achievement_ja.Description,
      order: achievement_en.Order
    }
  })
  .reduce((acc, curr) => (acc[curr.id] = curr, acc), {})
fs.writeFileSync(path.resolve(__dirname, '../data/achievements.json'), JSON.stringify(oceanFishingAchievements))
