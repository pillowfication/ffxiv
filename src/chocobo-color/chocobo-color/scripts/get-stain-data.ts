import fs from 'fs'
import path from 'path'
import * as saintCoinach from '../../../saint-coinach'

const Stain_en = saintCoinach.get('Stain.en')
const Stain_de = saintCoinach.get('Stain.de')
const Stain_fr = saintCoinach.get('Stain.fr')
const Stain_ja = saintCoinach.get('Stain.ja')

console.log('Collecting stains...')
const stains = Stain_en.data
  .map(stain => {
    const stainId = stain['#']
    const stain_en = Stain_en.data.find(({ ['#']: id }) => id === stainId)
    const stain_de = Stain_de.data.find(({ ['#']: id }) => id === stainId)
    const stain_fr = Stain_fr.data.find(({ ['#']: id }) => id === stainId)
    const stain_ja = Stain_ja.data.find(({ ['#']: id }) => id === stainId)

    return {
      id: stainId,
      color: {
        R: stain_en.Color.R,
        G: stain_en.Color.G,
        B: stain_en.Color.B
      },
      name_en: stain_en.Name,
      name_de: stain_de.Name,
      name_fr: stain_fr.Name,
      name_ja: stain_ja.Name,
      shade: stain_en.Shade,
      shadeIndex: stain_en['<UNKNOWN_2>']
    }
  })
  .reduce((acc, curr) => (acc[curr.id] = curr, acc), {})
fs.writeFileSync(path.resolve(__dirname, '../data/stains.json'), JSON.stringify(stains))
