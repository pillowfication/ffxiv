const { mappings, applyMapping } = require('./mappings')

function getIdentifier (board) {
  let identifier = 0
  for (let index = 1; index <= 9; ++index) {
    identifier += (board[index] || 0) * Math.pow(10, index - 1)
  }
  return identifier
}

function getRepresentative (board) {
  let minimumIdentifier = Number.MAX_SAFE_INTEGER
  let minimumMapping, minimumBoard
  for (const mapping of mappings) {
    const mappedBoard = applyMapping(board, mapping)
    let identifier = getIdentifier(mappedBoard)
    if (identifier < minimumIdentifier) {
      minimumIdentifier = identifier
      minimumMapping = mapping
      minimumBoard = mappedBoard
    }
  }
  return {
    identifier: minimumIdentifier,
    representative: minimumBoard,
    mapping: minimumMapping
  }
}

module.exports = { getRepresentative }
