import fs from 'fs'
import path from 'path'
import fetch, { fetchAllPages } from '../../../fetch-xivapi'

const DATA: Record<number, any> = {}
const OUTPUT = path.resolve(__dirname, '../data/weather-rates.json')

function reformatRates (weatherRateData: any): [number, number][] {
  const rates = []
  for (let cumRate = 0, i = 0; i < 8 && cumRate < 100; ++i) {
    const rate = weatherRateData[`Rate${i}`]
    const weather = weatherRateData[`Weather${i}`].ID
    cumRate += rate
    rates.push([cumRate, weather])
  }
  return rates
}

;(async () => {
  console.log('Fetching', '/WeatherRate')
  const urls = await fetchAllPages('/WeatherRate', { columns: 'Url' })
  console.log(`${urls.length} URLs found`)

  for (const { Url: url } of urls) {
    console.log('Fetching', url)
    const weatherRateData = await fetch(url, {
      columns: 'ID,Rate0,Weather0.ID,Rate1,Weather1.ID,Rate2,Weather2.ID,Rate3,Weather3.ID,Rate4,Weather4.ID,Rate5,Weather5.ID,Rate6,Weather6.ID,Rate7,Weather7.ID'
    })
    DATA[weatherRateData.ID] = {
      ID: weatherRateData.ID,
      Rates: reformatRates(weatherRateData)
    }
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(DATA))
})()
