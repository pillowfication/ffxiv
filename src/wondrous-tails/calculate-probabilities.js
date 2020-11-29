const LINES = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],
  [3, 6, 9, 12]
]

function countLines (board) {
  let count = 0
  for (const line of LINES) {
    if (board[line[0]] && board[line[1]] && board[line[2]] && board[line[3]]) {
      ++count
    }
  }
  return count
}

function choose (set, count) {
  if (count >= set.length) {
    return [set.slice()]
  } else if (count === 0) {
    return [[]]
  } else {
    return [
      ...choose(set.slice(1), count - 1).map(x => [set[0], ...x]),
      ...choose(set.slice(1), count)
    ]
  }
}

function calculateProbabilities (board) {
  const emptyIndices = Array(16).fill().map((_, index) => index).filter(index => !board[index])
  const possibleBoards = choose(emptyIndices, Math.max(emptyIndices.length - 7, 0)).map(empties => {
    const newBoard = board.slice()
    for (const index of empties) {
      newBoard[index] = true
    }
    return newBoard
  })

  const buckets = [0, 0, 0, 0]
  for (const possibleBoard of possibleBoards) {
    ++buckets[Math.min(countLines(possibleBoard), 3)]
  }

  return {
    lines1: buckets[1] + buckets[2] + buckets[3],
    lines2: buckets[2] + buckets[3],
    lines3: buckets[3],
    total: possibleBoards.length
  }
}

module.exports = calculateProbabilities
