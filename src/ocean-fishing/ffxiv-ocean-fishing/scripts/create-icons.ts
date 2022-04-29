import fs from 'fs'
import path from 'path'
import { createCanvas, loadImage } from 'canvas'
import fishingSpots from '../data/fishing-spots.json'
import fishes from '../data/fishes.json'
import baits from '../data/baits.json'
import contentBonuses from '../data/content-bonuses.json'
import achievements from '../data/achievements.json'
import * as saintCoinach from '../../../saint-coinach'

const OUTPUT = path.resolve(__dirname, '../data/icons.png')
const OUTPUT_MAP = path.resolve(__dirname, '../data/icons-map.json')

// Layout will be
//   Fishing Spot #1 fishes
//   Fishing Spot #2 fishes
//   ...
//   Baits
//   Achievements
//   Content Bonuses
const ICONS: Array<Array<{ type: string, id: number, icon: number }>> = []

function chunk<T> (array: T[], chunkSize = 10): T[][] {
  return array.reduce<T[][]>((acc, curr, index) => {
    const chunkIndex = Math.floor(index / chunkSize)
    ;(acc[chunkIndex] !== undefined ? acc[chunkIndex] : (acc[chunkIndex] = [])).push(curr)
    return acc
  }, [])
}

function getValuesSorted<T extends Record<string, any>> (object: Record<any, T>, property: string): T[] {
  return Object.values(object).sort((a, b) => a[property] - b[property])
}

// Add fishes
for (const fishingSpot of getValuesSorted(fishingSpots, 'order')) {
  if (fishingSpot.id !== 0) {
    ICONS.push((fishingSpot.fishes as number[]).map(fishId => ( // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
      { type: 'fish', id: fishId, icon: (fishes as any)[fishId].icon }
    )))
  }
}

// Add baits
ICONS.push(...chunk(getValuesSorted(baits, 'id').filter(({ icon }) => icon !== 0).map(bait => (
  { type: 'bait', id: bait.id, icon: bait.icon }
))))

// Add achievements
ICONS.push(...chunk(getValuesSorted(achievements, 'order').filter(({ icon }) => icon !== 0).map(achievement => (
  { type: 'achievement', id: achievement.id, icon: achievement.icon }
))))

// Add content bonuses
ICONS.push(...chunk(getValuesSorted(contentBonuses, 'order').filter(({ icon }) => icon !== 0).map(contentBonus => (
  { type: 'content-bonus', id: contentBonus.id, icon: contentBonus.icon }
))))

// Put together all the icons!
const ICON_ROWS = ICONS.length
const ICON_COLS = Math.max(...ICONS.map(row => row.length))
const ICON_SIZE = 40

const canvas = createCanvas(ICON_COLS * ICON_SIZE, ICON_ROWS * ICON_SIZE)
const ctx = canvas.getContext('2d')

;(async () => {
  // Draw the icons
  for (let row = 0; row < ICON_ROWS; ++row) {
    for (let col = 0; col < ICONS[row].length; ++col) {
      const icon = ICONS[row][col].icon
      if (icon !== 0) {
        const img = await loadImage(saintCoinach.getIcon(icon).buffer)
        ctx.drawImage(img, col * ICON_SIZE, row * ICON_SIZE)
      }
    }
  }

  const out = fs.createWriteStream(OUTPUT)
  canvas.createPNGStream().pipe(out)
  out.on('finish', () => {
    fs.writeFileSync(OUTPUT_MAP, JSON.stringify(
      ICONS.map(row => row.map(cell => `${cell.type}_${cell.id}`))
    ))
    console.log('Done!')
  })
})().then(null, null)
