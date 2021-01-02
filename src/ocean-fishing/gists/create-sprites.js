const fs = require('fs')
const path = require('path')
const { createCanvas, loadImage } = require('canvas')
const { fishingSpots, fishes, baits, achievements } = require('./data/ocean-fish-data.json')

const OUTPUT = path.resolve(__dirname, './data/ocean-fishing-icons.png')
const OUTPUT_MAP = path.resolve(__dirname, './data/ocean-fishing-icons-map.json')

// Layout will be
//   Fishing Spot #1 fishes...
//   Fishing Spot #2 fishes...
//   Baits...
//   Achievements...
//   Bonus Icons...
const ICONS = []

function getValuesSorted (obj) {
  return Object.values(obj).sort((a, b) => a.id - b.id)
}

// Add fishes
for (const fishingSpot of getValuesSorted(fishingSpots)) {
  ICONS.push(fishingSpot.fishes.map(fishId => (
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
  { id: 'Octopus Travelers', icon: './icons/octopodes.png', isLocal: true },
  { id: 'Certifiable Shark Hunters', icon: './icons/sharks.png', isLocal: true },
  { id: 'Jelled Together', icon: './icons/jellyfish.png', isLocal: true },
  { id: 'Maritime Dragonslayers', icon: './icons/seadragons.png', isLocal: true },
  { id: 'Balloon Catchers', icon: './icons/balloons.png', isLocal: true },
  { id: 'Crab Boat Crew', icon: './icons/crabs.png', isLocal: true },
  { id: 'Sticking it to the Manta', icon: './icons/mantas.png', isLocal: true }
])

const ICON_ROWS = ICONS.length
const ICON_COLS = Math.max(...ICONS.map(row => row.length))
const ICON_SIZE = 40
const XIVAPI = 'https://xivapi.com'

const canvas = createCanvas(ICON_COLS * ICON_SIZE, ICON_ROWS * ICON_SIZE)
const ctx = canvas.getContext('2d')

;(async () => {
  for (let row = 0; row < ICON_ROWS; ++row) {
    for (let col = 0; col < ICONS[row].length; ++col) {
      const cell = ICONS[row][col]
      let img
      if (cell.isLocal) {
        console.log(`Fetching local image ${cell.icon}`)
        img = await loadImage(path.resolve(__dirname, cell.icon))
      } else {
        console.log(`Fetching image ${cell.icon}`)
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
