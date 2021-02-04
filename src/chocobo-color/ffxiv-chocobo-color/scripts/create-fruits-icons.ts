import fs from 'fs'
import path from 'path'
import { createCanvas, loadImage } from 'canvas'
import { fruits } from '../data'
import * as saintCoinach from '../../../saint-coinach'

const OUTPUT = path.resolve(__dirname, '../data/fruits-icons.png')
const OUTPUT_MAP = path.resolve(__dirname, '../data/fruits-icons-map.json')
const ICON_SIZE = 40
const ICONS = Object.keys(fruits).map(Number).sort((a, b) => a - b)

const canvas = createCanvas(ICONS.length * ICON_SIZE, ICON_SIZE)
const ctx = canvas.getContext('2d')

await (async () => {
  for (let i = 0; i < ICONS.length; ++i) {
    const img = await loadImage(saintCoinach.getIcon(fruits[ICONS[i]].icon).buffer)
    ctx.drawImage(img, i * ICON_SIZE, 0)
  }

  const out = fs.createWriteStream(OUTPUT)
  canvas.createPNGStream().pipe(out)
  out.on('finish', () => {
    fs.writeFileSync(OUTPUT_MAP, JSON.stringify(ICONS))
    console.log('Done!')
  })
})()
