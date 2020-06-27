const mappings = {
  iden: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 },
  s090: { 1: 7, 2: 4, 3: 1, 4: 8, 5: 5, 6: 2, 7: 9, 8: 6, 9: 3 },
  s180: { 1: 9, 2: 8, 3: 7, 4: 6, 5: 5, 6: 4, 7: 3, 8: 2, 9: 1 },
  s270: { 1: 3, 2: 6, 3: 9, 4: 2, 5: 5, 6: 8, 7: 1, 8: 4, 9: 7 },
  sHor: { 1: 7, 2: 8, 3: 9, 4: 4, 5: 5, 6: 6, 7: 1, 8: 2, 9: 3 },
  sVer: { 1: 3, 2: 2, 3: 1, 4: 6, 5: 5, 6: 4, 7: 9, 8: 8, 9: 7 },
  sDia: { 1: 1, 2: 4, 3: 7, 4: 2, 5: 5, 6: 8, 7: 3, 8: 6, 9: 9 },
  sOff: { 1: 3, 2: 6, 3: 9, 4: 2, 5: 5, 6: 8, 7: 7, 8: 4, 9: 1 }
}

function getInverseMapping (mappingName) {
  switch (mappingName) {
    case 'iden':
    case 's180':
    case 'sHor':
    case 'sVer':
    case 'sDia':
    case 'sOff':
      return mappingName
    case 's090':
      return 's270'
    case 's270':
      return 's090'
  }
}

function applyMapping (board, mappingName) {
  const mapping = mappings[mappingName]
  const newBoard = {}
  for (let i = 1; i <= 9; ++i) {
    board[i] && (newBoard[mapping[i]] = board[i])
  }
  return newBoard
}

module.exports = {
  mappings: Object.keys(mappings),
  getMappingTable: mapName => mappings[mapName],
  getInverseMapping,
  applyMapping
}
