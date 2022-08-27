import fs from 'fs'
import path from 'path'
import url from 'url'
import canvas from 'canvas'
import * as saintCoinach from '../../../saint-coinach'
import weathers from '../data/weathers.json' assert { type: 'json' }

const __dirname = path.dirname(url.fileURLToPath(import.meta.url)) // eslint-disable-line @typescript-eslint/naming-convention

const OUTPUT = path.resolve(__dirname, '../data/weather-icons.png')
const OUTPUT_MAP = path.resolve(__dirname, '../data/weather-icons-map.json')
const ICON_SIZE = 32
const ICONS = Object.values(weathers).sort((a, b) => a.id - b.id)

const cvs = canvas.createCanvas(ICONS.length * ICON_SIZE, ICON_SIZE)
const ctx = cvs.getContext('2d')

;(async () => {
  for (let index = 0; index < ICONS.length; ++index) {
    const weather = ICONS[index]

    if (weather.icon !== null) {
      const img = await canvas.loadImage(saintCoinach.getIcon(weather.icon).buffer)
      ctx.drawImage(img, index * ICON_SIZE, 0)
    }
  }

  const out = fs.createWriteStream(OUTPUT)
  cvs.createPNGStream().pipe(out)
  out.on('finish', () => {
    fs.writeFileSync(OUTPUT_MAP, JSON.stringify(ICONS.map(weather => weather.id)))
    console.log('Done!')
  })
})().then(null, null)
