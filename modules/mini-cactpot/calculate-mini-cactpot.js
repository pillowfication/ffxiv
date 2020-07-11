const CACHE = require('./cache.json')

const PAYOUTS = {
  6: 10000,
  7: 36,
  8: 720,
  9: 360,
  10: 80,
  11: 252,
  12: 108,
  13: 72,
  14: 54,
  15: 180,
  16: 72,
  17: 180,
  18: 119,
  19: 36,
  20: 306,
  21: 1080,
  22: 144,
  23: 1800,
  24: 3600
}
const LINES = [
  [6, 7, 8],
  [3, 4, 5],
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6]
]

function memoize (func, createKey) {
  const cache = {}
  return function () {
    const key = createKey.apply(null, arguments)
    if (cache[key]) {
      return cache[key]
    } else {
      return (cache[key] = func.apply(null, arguments))
    }
  }
}

const calcHiddenSums = memoize((hidden, count) => {
  if (count === 0) {
    return [0]
  } else if (count === 1) {
    return hidden
  } else if (count === hidden.length) {
    let sum = 0
    for (const digit of hidden) {
      sum += digit
    }
    return [sum]
  } else {
    const lastIndex = hidden.length - 1
    const lastDigit = hidden[lastIndex]
    return calcHiddenSums(hidden.slice(0, lastIndex), count - 1).map(x => x + lastDigit)
      .concat(calcHiddenSums(hidden.slice(0, lastIndex), count))
  }
}, (hidden, count) => hidden + '|' + count)

const calcLineEV = memoize((grid, lineIndex, hidden) => {
  let revealed = 0
  let revealedSum = 0

  for (const i of LINES[lineIndex]) {
    if (grid[i]) {
      ++revealed
      revealedSum += grid[i]
    }
  }

  const hiddenSums = calcHiddenSums(hidden, 3 - revealed)
  return hiddenSums.reduce((ev, hiddenSum) => ev + PAYOUTS[revealedSum + hiddenSum], 0) / hiddenSums.length
}, (grid, lineIndex, hidden) => grid + '|' + lineIndex + '|' + hidden)

const calcCellEV = memoize((grid, cell, hidden) => {
  let ev = 0
  for (let i = 0; i < hidden.length; ++i) {
    const digit = hidden[i]
    const copyGrid = grid.slice()
    const copyHidden = hidden.slice()
    copyGrid[cell] = digit
    copyHidden.splice(i, 1)
    ev += calcGridEV(copyGrid, copyHidden)
  }
  return ev / hidden.length
}, (grid, cell, hidden) => grid + '|' + cell + '|' + hidden)

const calcGridEV = memoize((grid, hidden) => {
  let revealed = 0
  for (const cell of grid) {
    if (cell) {
      ++revealed
    }
  }

  if (revealed < 4) {
    let maxCellEV = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < 9; ++i) {
      if (!grid[i]) {
        maxCellEV = Math.max(maxCellEV, calcCellEV(grid, i, hidden))
      }
    }
    return maxCellEV
  } else {
    let maxLineEV = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < LINES.length; ++i) {
      maxLineEV = Math.max(maxLineEV, calcLineEV(grid, i, hidden))
    }
    return maxLineEV
  }
}, (grid, hidden) => grid + '|' + hidden)

function validateGrid (grid) {
  let enteredCount = 0
  const seenValues = {}
  const duplicateCells = []

  for (let i = 0; i < 9; ++i) {
    const value = grid[i]
    if (value !== null) {
      ++enteredCount
      const seenAt = seenValues[value]
      if (seenAt != null) {
        duplicateCells.push(seenAt)
        duplicateCells.push(i)
        seenValues[value] = true
      } else if (seenAt !== undefined) {
        duplicateCells.push(i)
      } else {
        seenValues[value] = i
      }
    }
  }

  if (enteredCount === 0) {
    return { type: 'EMPTY' }
  }
  if (enteredCount > 4) {
    const enteredCells = []
    for (const cellIndex in grid) {
      if (grid[cellIndex]) {
        enteredCells.push(cellIndex)
      }
    }
    return { type: 'TOO MANY', cells: enteredCells }
  }
  if (duplicateCells.length > 0) {
    return { type: 'DUPLICATES', cells: duplicateCells }
  }
  return null
}

function getSuggestion (grid, _disableCache) {
  const hidden = []
  for (let i = 1; i <= 9; ++i) {
    if (grid.indexOf(i) === -1) {
      hidden.push(i)
    }
  }
  const revealed = 9 - hidden.length

  if (revealed === 1 && !_disableCache) {
    const index = grid.findIndex(digit => digit !== null)
    const cached = CACHE[index * 9 + grid[index] - 1]
    return {
      type: 'CELL',
      maxCellEV: cached.v,
      maxCellLocations: Array.isArray(cached.c) ? cached.c : [cached.c]
    }
  }

  if (revealed < 4) {
    let maxCellEV = Number.MIN_SAFE_INTEGER
    let maxCellLocations
    for (let i = 0; i < 9; ++i) {
      if (!grid[i]) {
        const cellEV = calcCellEV(grid, i, hidden)
        if (cellEV > maxCellEV) {
          maxCellEV = cellEV
          maxCellLocations = [i]
        } else if (cellEV === maxCellEV) {
          maxCellLocations.push(i)
        }
      }
    }
    return {
      type: 'CELL',
      maxCellEV,
      maxCellLocations
    }
  } else {
    let maxLineEV = Number.MIN_SAFE_INTEGER
    let maxLineIds
    for (let i = 0; i < LINES.length; ++i) {
      const lineEV = calcLineEV(grid, i, hidden)
      if (lineEV > maxLineEV) {
        maxLineEV = lineEV
        maxLineIds = [i]
      } else if (lineEV === maxLineEV) {
        maxLineIds.push(i)
      }
    }
    return {
      type: 'LINE',
      maxLineEV,
      maxLineIds
    }
  }
}

module.exports = {
  PAYOUTS,
  LINES,
  validateGrid,
  getSuggestion
}
