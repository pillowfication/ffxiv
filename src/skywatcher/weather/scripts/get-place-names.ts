import fs from 'fs'
import path from 'path'
import fetch from '../../../fetch-xivapi'
import maps from '../data/maps.json'

const DATA: Record<number, any> = {}
const OUTPUT = path.resolve(__dirname, '../data/place-names.json')

;(async () => {
  // Get the PlaceNames found in maps.json
  const placenames = Object.values(maps)
    .flatMap(mapData => [mapData.PlaceName, mapData.PlaceNameRegion])
    .filter((value, index, array) => array.indexOf(value, index + 1) === -1)
  console.log(`${placenames.length} PlaceNames found`)

  for (const placename of placenames) {
    const url = `/PlaceName/${placename}`
    console.log('Fetching', url)
    const placeNameData = await fetch(url, { columns: 'ID,Name_en,Name_de,Name_fr,Name_ja' })
    DATA[placeNameData.ID] = placeNameData
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(DATA))
})()
