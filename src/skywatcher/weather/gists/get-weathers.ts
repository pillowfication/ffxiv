import fs from 'fs'
import path from 'path'
import fetch, { fetchAllPages } from '../../../fetch-xivapi'

interface weather {
  ID: number,
  Icon: string,
  Name_en: string,
  Name_de: string,
  Name_fr: string,
  Name_ja: string
}

const DATA: Record<number, weather> = {}
const OUTPUT = path.resolve(__dirname, '../data/weathers.json')

;(async () => {
  // Fetch all the data
  console.log('Fetching', '/Weather')
  const urls = await fetchAllPages('/Weather', { columns: 'Url' })
  console.log(`${urls.length} URLs found`)

  for (const { Url: url } of urls) {
    console.log('Fetching', url)
    const weatherData: weather = await fetch(url, { columns: 'ID,Icon,Name_en,Name_de,Name_fr,Name_ja' })
    DATA[weatherData.ID] = weatherData
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(DATA))
})()
