const { getRepresentative } = require('./enumerate')
const lines = require('./lines.json')
const payouts = require('./payouts.json')

const DIGITS = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

function getLineExpectedValue (line, hiddenNumbers) {
  let revealedSum = 0
  let hiddenCount = 0
  for (let index = 0; index < 3; ++index) {
    const value = line[index]
    if (value) {
      revealedSum += value
    } else {
      ++hiddenCount
    }
  }
console.log(revealedSum, hiddenCount)
  let possibleHiddenSums = [ 0 ]
  for (let depth = 0; depth < hiddenCount; ++depth) {
    possibleHiddenSums = Array.prototype.concat(
      ...hiddenNumbers.map(x =>
        possibleHiddenSums.map(y => x + y)
      )
    )
  }
console.log(possibleHiddenSums)
  const possibleSums = possibleHiddenSums.map(x => x + revealedSum)
console.log(possibleSums)
  return possibleSums.reduce((totalPayout, x) => totalPayout + payouts[x], 0) / possibleSums.length
}

function baseDecide (board) {
  const { representative, mapping } = getRepresentative(board)
  // TODO: memoize

  const invertedBoard = {}
  for (const position in representative) {
    invertedBoard[representative[position]] = position
  }

  const revealedNumbers = DIGITS.filter(x => invertedBoard[x])
  const hiddenNumbers = DIGITS.filter(x => !invertedBoard[x])

  if (revealedNumbers.length < 4) {

  } else {
    const moveSet = {}
    for (const lineName in lines) {
      const lineMapping = lines[lineName]
      moveSet[lineName] = getLineExpectedValue({
        0: representative[lineMapping[0]],
        1: representative[lineMapping[1]],
        2: representative[lineMapping[2]]
      }, hiddenNumbers)
    }
  }
}
