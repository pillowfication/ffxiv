import fs from 'fs'
import path from 'path'
import fetch, { fetchAllPages } from '../../../fetch-xivapi'

const DATA: Record<number, any> = {}
const OUTPUT = path.resolve(__dirname, '../data/maps.json')

;(async () => {
  console.log('Fetching', '/Map')
  const urls = await fetchAllPages('/Map', { columns: 'Url' })
  console.log(`${urls.length} URLs found`)

  for (const { Url: url } of urls) {
    console.log('Fetching', url)
    const mapData = await fetch(url, { columns: 'ID,TerritoryType.PlaceName.ID,TerritoryType.PlaceNameRegion.ID,TerritoryType.WeatherRate' })

    if (mapData.TerritoryType.WeatherRate) {
      DATA[mapData.ID] = {
        ID: mapData.ID,
        PlaceName: mapData.TerritoryType.PlaceName.ID,
        PlaceNameRegion: mapData.TerritoryType.PlaceNameRegion.ID,
        WeatherRate: mapData.TerritoryType.WeatherRate
      }
    }
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(DATA))
})()
