// This file is not being used right now

import fs from 'fs'
import path from 'path'
import weathers from '../data/weathers.json'
import placeNames from '../data/place-names.json'

const LOCALES = ['en', 'de', 'fr', 'ja']
const DEFAULT_LOCALE = 'en'

for (const locale of LOCALES) {
  fs.writeFileSync(
    path.resolve(__dirname, `../data/${locale}/weathers.json`),
    JSON.stringify(Object.values(weathers).reduce((acc, curr) => {
      if (locale === DEFAULT_LOCALE) {
        acc[curr.ID] = {
          id: curr.ID,
          icon: curr.Icon,
          name: curr.Name_en
        }
      } else {
        acc[curr.ID] = {
          [`name_${locale}`]: curr[`Name_${locale}`]
        }
      }
      return acc
    }, {}))
  )

  fs.writeFileSync(
    path.resolve(__dirname, `../data/${locale}/place-names.json`),
    JSON.stringify(Object.values(placeNames).reduce((acc, curr) => {
      if (locale === DEFAULT_LOCALE) {
        acc[curr.ID] = {
          id: curr.ID,
          name: curr.Name_en
        }
      } else {
        acc[curr.ID] = {
          [`name_${locale}`]: curr[`Name_${locale}`]
        }
      }
      return acc
    }, {}))
  )
}
