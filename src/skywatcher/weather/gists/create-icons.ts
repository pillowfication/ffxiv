import fs from 'fs'
import path from 'path'
import { createCanvas, loadImage } from 'canvas'
import weathers from '../data/weathers.json'

const OUTPUT = path.resolve(__dirname, '../data/weather-icons.png')
const OUTPUT_MAP = path.resolve(__dirname, '../data/weather-icons-map.json')
const ICON_SIZE = 32
const XIVAPI = 'https://xivapi.com'
const ICONS = Object.keys(weathers).map(Number).sort((a, b) => a - b)

const canvas = createCanvas(ICONS.length * ICON_SIZE, ICON_SIZE)
const ctx = canvas.getContext('2d')

;(async () => {
  for (let i = 0; i < ICONS.length; ++i) {
    const id = ICONS[i]

    if (weathers[id].Icon) {
      console.log(`Fetching image ${weathers[id].Icon}`)
      const img = await loadImage(`${XIVAPI}${weathers[id].Icon}`)
      ctx.drawImage(img, i * ICON_SIZE, 0)
    }
  }

  const out = fs.createWriteStream(OUTPUT)
  canvas.createPNGStream().pipe(out)
  out.on('finish', () => {
    fs.writeFileSync(OUTPUT_MAP, JSON.stringify(ICONS))
    console.log('Done!')
  })
})()
