// Change `import CACHE` to `CACHE = []` in calculate-mini-cactpot before running this file
import fs from 'fs'
import path from 'path'
import { getSuggestion } from '../calculate-mini-cactpot'

const CACHE_LOCATION = path.resolve(__dirname, './cache.json')

const cache: Array<{v: number | undefined, c: number | number[] | undefined}> = []
for (let i = 0; i < 9; ++i) {
  const grid = Array(9).fill(null)
  for (let digit = 1; digit <= 9; ++digit) {
    grid[i] = digit
    const suggestion = getSuggestion(grid, true)
    cache.push({
      v: suggestion.maxCellEV,
      c: suggestion.maxCellLocations !== undefined && suggestion.maxCellLocations.length > 1 ? suggestion.maxCellLocations : suggestion.maxCellLocations?.[0]
    })
  }
}

fs.writeFileSync(CACHE_LOCATION, JSON.stringify(cache))
