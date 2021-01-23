import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
import { fishingSpots, fishes, baits, achievements } from './data/fish-data.json'

const OUTPUT = path.resolve(__dirname, './data/ocean-fish-data.json')

async function getFFXIV (url: string) {
  console.log('Fetching', url)
  const response = await fetch('https://na.finalfantasyxiv.com' + url)
  return await response.text()
}

function getFishIds (fishingSpot: any): number[] {
  const fishIds = []
  for (let i = 0; i < 10; ++i) {
    if (fishingSpot[`Item${i}`]) {
      fishIds.push(fishingSpot[`Item${i}`])
    }
  }
  return fishIds
}

async function getLodestoneInfo (query: string) {
  let $ = cheerio.load(await getFFXIV(`/lodestone/playguide/db/item/?db_search_category=item&category2=6&category3=47&q=${query}`))
  const info: any = {}

  $('table.db-table > tbody > tr > td:first-child').each((_, elem) => {
    const td = $(elem)
    if ((new RegExp(query, 'i')).test(td.find('.db-table__link_txt > a').text())) {
      info.url = td.find('.db-table__link_txt > a').attr('href')
      info.icon_sm = td.find('.db-list__item__icon img')
        .attr('src')
        .match(/(?:^|\/)([^/.]+)\.png/)[1]
    }
  })

  if (!info.url) {
    console.log('Could not find item!')
    return null
  }

  $ = cheerio.load(await getFFXIV(info.url))
  const main = $('.db__l_main')
  info.icon_lg = main.find('.db-view__item__icon img')
    .eq(1)
    .attr('src')
    .match(/(?:^|\/)([^/.]+)\.png/)[1]

  return info
}

// The format of the data can be better seen with the types defined in `data/index.ts`
;(async () => {
  const results = {
    fishingSpots: (() => {
      const data = {}
      for (const fishingSpot of Object.values(fishingSpots)) {
        data[fishingSpot.ID] = {
          id: fishingSpot.ID,
          place_name_de: fishingSpot.PlaceName.Name_de,
          place_name_en: fishingSpot.PlaceName.Name_en,
          place_name_fr: fishingSpot.PlaceName.Name_fr,
          place_name_ja: fishingSpot.PlaceName.Name_ja,
          place_name_sub_de: fishingSpot.PlaceNameSub.Name_de,
          place_name_sub_en: fishingSpot.PlaceNameSub.Name_en,
          place_name_sub_fr: fishingSpot.PlaceNameSub.Name_fr,
          place_name_sub_ja: fishingSpot.PlaceNameSub.Name_ja,
          place_name_sub_no_article_de: fishingSpot.PlaceNameSub.NameNoArticle_de,
          place_name_sub_no_article_en: fishingSpot.PlaceNameSub.NameNoArticle_en,
          place_name_sub_no_article_fr: fishingSpot.PlaceNameSub.NameNoArticle_fr,
          place_name_sub_no_article_ja: fishingSpot.PlaceNameSub.NameNoArticle_ja,
          fishes: getFishIds(fishingSpot)
        }
      }
      return data
    })(),
    fishes: await (async () => {
      const data = {}
      for (const fishingSpot of Object.values(fishingSpots)) {
        for (const fishId of getFishIds(fishingSpot)) {
          const fish = fishes[fishId]
          data[fish.ID] = {
            id: fish.ID,
            fishing_spot: fishingSpot.ID,
            name_de: fish.Name_de,
            name_en: fish.Name_en,
            name_fr: fish.Name_fr,
            name_ja: fish.Name_ja,
            description_de: fish.Description_de,
            description_en: fish.Description_en,
            description_fr: fish.Description_fr,
            description_ja: fish.Description_ja,
            icon: fish.Icon,
            lodestone_data: await getLodestoneInfo(fish.Name_en)
          }
        }
      }
      return data
    })(),
    baits: (() => {
      const data = {}
      for (const bait of Object.values(baits)) {
        data[bait.ID] = {
          id: bait.ID,
          name_de: bait.Name_de,
          name_en: bait.Name_en,
          name_fr: bait.Name_fr,
          name_ja: bait.Name_ja,
          icon: bait.Icon
        }
      }
      return data
    })(),
    achievements: (() => {
      const data = {}
      for (const achievement of Object.values(achievements)) {
        data[achievement.ID] = {
          id: achievement.ID,
          name_de: achievement.Name_de,
          name_en: achievement.Name_en,
          name_fr: achievement.Name_fr,
          name_ja: achievement.Name_ja,
          icon: achievement.Icon
        }
      }
      return data
    })()
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(results))
})()
