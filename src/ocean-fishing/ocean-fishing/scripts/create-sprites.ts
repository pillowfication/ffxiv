import fs from 'fs'
import path from 'path'
import { createCanvas, loadImage, Image } from 'canvas'
import { fishingSpots, fishes, baits, achievements } from '../data/ocean-fish-data.json'

const OUTPUT = path.resolve(__dirname, '../data/ocean-fishing-icons.png')
const OUTPUT_MAP = path.resolve(__dirname, '../data/ocean-fishing-icons-map.json')

// Layout will be
//   Fishing Spot #1 fishes
//   Fishing Spot #2 fishes
//   ...
//   Baits
//   Achievements
//   Bonus Icons
const ICONS: { id: number | string, icon: string, isLocal?: boolean }[][] = []

function getValuesSorted (obj: object) {
  return Object.values(obj).sort((a, b) => a.id - b.id)
}

// Add fishes
for (const fishingSpot of getValuesSorted(fishingSpots)) {
  ICONS.push(fishingSpot.fishes.map((fishId: number) => (
    { id: fishId, icon: fishes[fishId].icon }
  )))
}

// Add baits and achievements
ICONS.push(getValuesSorted(baits).map(bait => (
  { id: bait.id, icon: bait.icon }
)))
ICONS.push(getValuesSorted(achievements).map(achievement => (
  { id: achievement.id, icon: achievement.icon }
)))

// Add bonus icons
ICONS.push([
  { id: 'octopus', icon: './icons/octopodes.png', isLocal: true },
  { id: 'shark', icon: './icons/sharks.png', isLocal: true },
  { id: 'jellyfish', icon: './icons/jellyfish.png', isLocal: true },
  { id: 'seadragon', icon: './icons/seadragons.png', isLocal: true },
  { id: 'balloon', icon: './icons/balloons.png', isLocal: true },
  { id: 'crab', icon: './icons/crabs.png', isLocal: true },
  { id: 'manta', icon: './icons/mantas.png', isLocal: true }
])

const ICON_ROWS = ICONS.length
const ICON_COLS = Math.max(...ICONS.map(row => row.length))
const ICON_SIZE = 40
const XIVAPI = 'https://xivapi.com'

const canvas = createCanvas(ICON_COLS * ICON_SIZE, ICON_ROWS * ICON_SIZE)
const ctx = canvas.getContext('2d')

;(async () => {
  // Draw the icons
  for (let row = 0; row < ICON_ROWS; ++row) {
    for (let col = 0; col < ICONS[row].length; ++col) {
      const cell = ICONS[row][col]
      let img: Image
      if (cell.isLocal) {
        // These images I could not find on XIVAPI
        console.log(`Fetching local image ${path.resolve(__dirname, cell.icon)}`)
        img = await loadImage(path.resolve(__dirname, cell.icon))
      } else {
        console.log(`Fetching image ${XIVAPI}${cell.icon}`)
        img = await loadImage(`${XIVAPI}${cell.icon}`)
      }
      ctx.drawImage(img, col * ICON_SIZE, row * ICON_SIZE)
    }
  }

  const out = fs.createWriteStream(OUTPUT)
  canvas.createPNGStream().pipe(out)
  out.on('finish', () => {
    fs.writeFileSync(OUTPUT_MAP, JSON.stringify(
      ICONS.map(row => row.map(cell => cell.id))
    ))
    console.log('Done!')
  })
})()
