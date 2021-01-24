import fs from 'fs'
import path from 'path'
import { fishes, baits } from '../data/ocean-fish-data.json'
import biteTimes from '../data/ocean-fish-bite-times.json'

const OUTPUT = path.resolve(__dirname, '../data/bite-times.csv')

const BAITS = [
  ...Object.keys(baits).map(Number),
  29722, // Ghoul Barracuda
  29761, // Hi-aetherlouse
  29718, // Tossed Dagger
  32107 // Rothlyt Mussel
]

fs.writeFileSync(OUTPUT, [
  'Fish',
  ...BAITS.map(id => (fishes[id] || baits[id]).name_en),
  'All',
].join(',') + '\n')

for (const id of Object.keys(fishes).map(Number).sort((a, b) => a - b)) {
  fs.appendFileSync(OUTPUT, [
    fishes[id].name_en,
    ...BAITS.map(bait => (biteTimes[id] && biteTimes[id][bait] && biteTimes[id][bait].join('-')) || ''),
    (biteTimes[id] && biteTimes[id].all && biteTimes[id].all.join('-')) || ''
  ].join(',') + '\n')
}
