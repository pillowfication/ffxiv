import fs from 'fs'
import path from 'path'
import * as sc from '../../../saint-coinach'

/*  eslint-disable @typescript-eslint/naming-convention */
const CharaMakeName_en = sc.requireCsv('CharaMakeName', 'en')
const CharaMakeName_de = sc.requireCsv('CharaMakeName', 'de')
const CharaMakeName_fr = sc.requireCsv('CharaMakeName', 'fr')
const CharaMakeName_ja = sc.requireCsv('CharaMakeName', 'ja')
const CharaMakeName_cn = sc.requireCsv('CharaMakeName', 'cn')
const CharaMakeName_ko = sc.requireCsv('CharaMakeName', 'ko')

// Check that there are no differences between the languages
// If there are, I will have to change everything
// TODO: CN and KO clients have name data now D:
CharaMakeName_en.data.forEach((charaMakeName_en, index) => {
  const others = {
    de: CharaMakeName_de.data[index],
    fr: CharaMakeName_fr.data[index],
    ja: CharaMakeName_ja.data[index],
    cn: CharaMakeName_cn.data[index],
    ko: CharaMakeName_ko.data[index]
  }
  for (const key of Object.keys(CharaMakeName_en.keys)) {
    for (const locale of ['de', 'fr', 'ja', 'cn', 'ko']) {
      if (others[locale][key] !== charaMakeName_en[key]) {
        console.error(`ERROR: Difference at row: ${charaMakeName_en['#'] as number}, key: ${key}, locale: ${locale}`)
        console.error(`Expected \`${charaMakeName_en[key] as string}\` but saw \`${others[locale][key] as string}\``)
      }
    }
  }
})

console.log('Collecting names...')
const charaMakeNames = Object.keys(CharaMakeName_en.keys)
  .filter(key => key !== '#')
  .map(key => ({ key, values: CharaMakeName_en.data.map(datum => datum[key]).filter(datum => datum) }))
  .reduce((acc, { key, values }) => {
    acc[key.replace(/[^a-zA-Z]+/g, '')] = (values as string[]).sort()
    return acc
  }, {})
fs.writeFileSync(path.resolve(__dirname, '../data/chara-make-names.json'), JSON.stringify(charaMakeNames))

console.log('Done!')
