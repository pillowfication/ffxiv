import fs from 'fs'
import path from 'path'
import url from 'url'
import * as sc from '../../../saint-coinach'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
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
const Title_en = sc.requireCsv('Title', 'en')
const Title_de = sc.requireCsv('Title', 'de')
const Title_fr = sc.requireCsv('Title', 'fr')
const Title_ja = sc.requireCsv('Title', 'ja')
const Title_cn = sc.requireCsv('Title', 'cn')
const Title_ko = sc.requireCsv('Title', 'ko')

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
  .reduce<Record<number, any>>((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/fishing-spots.json'), JSON.stringify(fishingSpots))

console.log('Collecting place names...')
const placeNames = Object.values(fishingSpots)
  .flatMap(fishingSpot => [fishingSpot.placeName_main, fishingSpot.placeName_sub, fishingSpot.placeName])
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
      name: {
        en: placeName_en.Name,
        de: placeName_de.Name,
        fr: placeName_fr.Name,
        ja: placeName_ja.Name,
        cn: placeName_cn?.Name ?? '',
        ko: placeName_ko?.Name ?? ''
      },
      name_noArticle: {
        en: placeName_en['Name{NoArticle}'],
        de: placeName_de['Name{NoArticle}'],
        fr: placeName_fr['Name{NoArticle}'],
        ja: placeName_ja['Name{NoArticle}'],
        cn: placeName_cn?.['Name{NoArticle}'] ?? '',
        ko: placeName_ko?.['Name{NoArticle}'] ?? ''
      }
    }
  })
  .reduce<Record<number, any>>((acc, curr) => { acc[curr.id] = curr; return acc }, {})
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
      name: {
        en: item_en.Name,
        de: item_de.Name,
        fr: item_fr.Name,
        ja: item_ja.Name,
        cn: item_cn?.Name ?? '',
        ko: item_ko?.Name ?? ''
      },
      description: {
        en: item_en.Description,
        de: item_de.Description,
        fr: item_fr.Description,
        ja: item_ja.Description,
        cn: item_cn?.Description ?? '',
        ko: item_ko?.Description ?? ''
      },
      contentBonus: (() => {
        if (+ikdFishParam['<UNKNOWN_2>'] === 22) {
          return 22 // Manta bug
        } else if (+ikdFishParam.IKDContentBonus !== 0) {
          return +ikdFishParam.IKDContentBonus
        } else {
          return null
        }
      })()
    }
  })
  .reduce<Record<number, any>>((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/fishes.json'), JSON.stringify(oceanFishes))

console.log('Collecting baits...')
const baits = [
  0,
  2587, // Pill Bug
  2591, // Rat Tail
  2603, // Glowworm
  2613, // Shrimp Cage Feeder
  2619, // Heavy Steel Jig
  12704, // Stonefly Nymph
  27590, // Squid Strip
  29714, // Ragworm
  29715, // Krill
  29716, // Plump Worm
  29717, // Versatile Lure
  36593, // Mackerel Strip
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
      name: {
        en: item_en.Name,
        de: item_de.Name,
        fr: item_fr.Name,
        ja: item_ja.Name,
        cn: item_cn?.Name ?? '',
        ko: item_ko?.Name ?? ''
      }
    }
  })
  .reduce<Record<number, any>>((acc, curr) => { acc[curr.id] = curr; return acc }, {})
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
      objective: {
        en: ikdContentBonus_en.Objective,
        de: ikdContentBonus_de.Objective,
        fr: ikdContentBonus_fr.Objective,
        ja: ikdContentBonus_ja.Objective,
        cn: ikdContentBonus_cn?.Objective ?? '',
        ko: ikdContentBonus_ko?.Objective ?? ''
      },
      requirement: {
        en: ikdContentBonus_en.Requirement,
        de: ikdContentBonus_de.Requirement,
        fr: ikdContentBonus_fr.Requirement,
        ja: ikdContentBonus_ja.Requirement,
        cn: ikdContentBonus_cn?.Requirement ?? '',
        ko: ikdContentBonus_ko?.Requirement ?? ''
      },
      bonus: ikdContentBonus_en['<UNKNOWN_2>'],
      order: ikdContentBonus_en.Order
    }
  })
  .reduce<Record<number, any>>((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/content-bonuses.json'), JSON.stringify(contentBonuses))

function range (start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}

console.log('Collecting ocean fishing achievements...')
function getReward (achievement: any, Title: sc.SaintCoinachCsv, Item: sc.SaintCoinachCsv): string {
  if (!achievement) {
    return ''
  } else if (+achievement.Title !== 0) {
    return Title.get(+achievement.Title).Masculine
  } else if (+achievement.Item !== 0) {
    return Item.get(+achievement.Item).Name
  } else {
    return ''
  }
}

const oceanFishingAchievements = [0, ...range(2553, 2566), ...range(2748, 2759), ...range(3256, 3269)]
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
      name: {
        en: achievement_en.Name,
        de: achievement_de.Name,
        fr: achievement_fr.Name,
        ja: achievement_ja.Name,
        cn: achievement_cn?.Name ?? '',
        ko: achievement_ko?.Name ?? ''
      },
      description: {
        en: achievement_en.Description,
        de: achievement_de.Description,
        fr: achievement_fr.Description,
        ja: achievement_ja.Description,
        cn: achievement_cn?.Description ?? '',
        ko: achievement_ko?.Description ?? ''
      },
      reward: {
        en: getReward(achievement_en, Title_en, Item_en),
        de: getReward(achievement_de, Title_de, Item_de),
        fr: getReward(achievement_fr, Title_fr, Item_fr),
        ja: getReward(achievement_ja, Title_ja, Item_ja),
        cn: getReward(achievement_cn, Title_cn, Item_cn),
        ko: getReward(achievement_ko, Title_ko, Item_ko)
      },
      order: achievement_en.Order
    }
  })
  .reduce<Record<number, any>>((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/achievements.json'), JSON.stringify(oceanFishingAchievements))

console.log('Done!')
