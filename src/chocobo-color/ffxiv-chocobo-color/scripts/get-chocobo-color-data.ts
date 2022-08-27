import fs from 'fs'
import path from 'path'
import url from 'url'
import * as sc from '../../../saint-coinach'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url)) // eslint-disable-line @typescript-eslint/naming-convention

/* eslint-disable @typescript-eslint/naming-convention */
const Item_en = sc.requireCsv('Item', 'en')
const Item_de = sc.requireCsv('Item', 'de')
const Item_fr = sc.requireCsv('Item', 'fr')
const Item_ja = sc.requireCsv('Item', 'ja')
const Item_cn = sc.requireCsv('Item', 'cn')
const Item_ko = sc.requireCsv('Item', 'ko')
const Stain_en = sc.requireCsv('Stain', 'en')
const Stain_de = sc.requireCsv('Stain', 'de')
const Stain_fr = sc.requireCsv('Stain', 'fr')
const Stain_ja = sc.requireCsv('Stain', 'ja')
const Stain_cn = sc.requireCsv('Stain', 'cn')
const Stain_ko = sc.requireCsv('Stain', 'ko')

console.log('Collecting stains...')
const stains = Stain_en.data
  .map(stain => {
    const stainId = stain['#']
    const stain_en = Stain_en.get(stainId)
    const stain_de = Stain_de.get(stainId)
    const stain_fr = Stain_fr.get(stainId)
    const stain_ja = Stain_ja.get(stainId)
    const stain_cn = Stain_cn.get(stainId)
    const stain_ko = Stain_ko.get(stainId)
    return {
      id: stainId,
      color: {
        R: stain_en.Color.R,
        G: stain_en.Color.G,
        B: stain_en.Color.B
      },
      name: {
        en: stain_en.Name,
        de: stain_de.Name,
        fr: stain_fr.Name,
        ja: stain_ja.Name,
        cn: stain_cn.Name,
        ko: stain_ko.Name
      },
      shade: stain_en.Shade,
      shadeIndex: stain_en['<UNKNOWN_2>']
    }
  })
  .reduce<Record<number, any>>((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/stains.json'), JSON.stringify(stains))

console.log('Collecting fruits...')
const fruits = [
  8157, // Xelphatol Apple
  8158, // Doman Plum
  8159, // Mamook Pear
  8160, // Valfruit
  8161, // O'Ghomoro Berries
  8162, // Cieldalaes Pineapple
  8163 // Han Lemon
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
        cn: item_cn.Name,
        ko: item_ko.Name
      },
      singular: {
        en: item_en.Singular,
        de: item_de.Singular,
        fr: item_fr.Singular,
        ja: item_ja.Singular,
        cn: item_cn.Singular,
        ko: item_ko.Singular
      },
      plural: {
        en: item_en.Plural,
        de: item_de.Plural,
        fr: item_fr.Plural,
        ja: item_ja.Plural,
        cn: item_cn.Plural,
        ko: item_ko.Plural
      }
    }
  })
  .reduce<Record<number, any>>((acc, curr) => { acc[curr.id] = curr; return acc }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/fruits.json'), JSON.stringify(fruits))

console.log('Done!')
