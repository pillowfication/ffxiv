import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
import oceanFishingFishes from '../data/fishes.json'

const OUTPUT = path.resolve(__dirname, '../data/lodestone-data.json')

async function get (url: string): Promise<any> {
  console.log('Fetching', url)
  const response = await fetch(url)
  return await response.text()
}

async function getLodestoneData (query: string): Promise<any> {
  let $ = cheerio.load(await get(`https://na.finalfantasyxiv.com/lodestone/playguide/db/item/?db_search_category=item&category2=6&category3=47&q=${query}`))
  const data: any = {}

  $('table.db-table > tbody > tr > td:first-child').each((_, elem) => {
    const td = $(elem)

    if ((new RegExp(query, 'i')).test(td.find('.db-table__link_txt > a').text())) {
      data.item = td.find('.db-table__link_txt > a')?.attr('href')?.match(/item\/([^/]+)\//)?.[1]
      data.icon_sm = td.find('.db-list__item__icon img')?.attr('src')?.match(/\/([^/]+)\.png/)?.[1]
    }
  })

  if (data.item == null) {
    console.log('Could not find item:', query)
    return null
  }

  $ = cheerio.load(JSON.parse((await get(`https://img.finalfantasyxiv.com/lds/pc/tooltip/1610435816/na/item/${data.item as string}.js`)).match(/^eorzeadb\.pushup\((.+)\)$/)[1]).html)
  data.icon_md = $('.db-tooltip__item__icon img').eq(0).attr('src')?.match(/\/([^/]+)\.png/)?.[1]

  $ = cheerio.load(await get(`https://na.finalfantasyxiv.com/lodestone/playguide/db/item/${data.item as string}/`))
  data.icon_lg = $('.db__l_main .db-view__item__icon img').eq(1).attr('src')?.match(/\/([^/]+)\.png/)?.[1]

  return data
}

;(async () => {
  const lodestoneData = {}
  for (const fish of Object.values(oceanFishingFishes)) {
    if (fish.id === 0) {
      lodestoneData[fish.id] = null
    } else {
      lodestoneData[fish.id] = await getLodestoneData(fish.name_en)
    }
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(lodestoneData))

  console.log('Done!')
})().then(null, null)
