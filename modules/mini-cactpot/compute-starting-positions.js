const fs = require('fs')
const path = require('path')
const { getSuggestion } = require('./calculate-mini-cactpot')

const CACHE_LOCATION = path.resolve(__dirname, './cache.json')

const cache = []
for (let i = 0; i < 9; ++i) {
  const grid = Array(9).fill(null)
  for (let digit = 1; digit <= 9; ++digit) {
    grid[i] = digit
    const suggestion = getSuggestion(grid, true)
    cache.push({
      v: suggestion.maxCellEV,
      c: suggestion.maxCellLocations.length > 1 ? suggestion.maxCellLocations : suggestion.maxCellLocations[0]
    })
  }
}

fs.writeFileSync(CACHE_LOCATION, JSON.stringify(cache))
