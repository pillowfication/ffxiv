import fs from 'fs'
import path from 'path'
import fetch, { fetchAllPages } from '../../../fetch-xivapi'

const DATA: { [key: string]: string[] } = {}
const OUTPUT = path.resolve(__dirname, '../data/names.json')
const skipKeys = ['GameContentLinks', 'ID', 'Patch', 'Url']

const LOCALES = ['en', 'de', 'fr', 'ja']

;(async () => {
  // Fetch all the data
  console.log('Fetching', '/CharaMakeName')
  const urls = await fetchAllPages('/CharaMakeName', { columns: 'Url' })
  console.log(`${urls.length} URLs found`)

  for (const { Url: url } of urls) {
    console.log('Fetching', url)
    const nameData = (await fetch(url)) as { [key: string]: string }

    for (const [key, val] of Object.entries(nameData)) {
      if (skipKeys.includes(key)) {
        continue
      } else {
        ;(DATA[key] || (DATA[key] = []))[nameData.ID] = val

        // If there is ever a difference with translations, we need to support it
        // Fortunately no differences yet
        for (const locale of LOCALES) {
          if (nameData[`${key}_${locale}`] && nameData[`${key}_${locale}`] !== val) {
            console.log(url, key, `${key}_${locale}`)
          }
        }
      }
    }
  }

  // Remove null and empty strings
  for (const [key, val] of Object.entries(DATA)) {
    DATA[key] = val.filter(x => x)
  }

  // For now, remove duplicate translations
  for (const key in DATA) {
    for (const locale of LOCALES) {
      if (key.indexOf(`_${locale}`) !== -1) {
        delete DATA[key]
      }
    }
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(DATA))
})()
