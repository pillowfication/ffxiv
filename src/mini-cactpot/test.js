const { getRepresentative } = require('./enumerate')

const allReps = {}

let start = Date.now()
for (let i = 0; i < 987654321; ++i) {
  const board = {}
  let countZeros = 0
  for (let j = 1; j <= 9; ++j) {
    let digit = ((i / Math.pow(10, j - 1)) | 0) % 10
    if (digit === 0) ++countZeros
    board[j] = digit
  }
  if (countZeros < 5) continue
  const { identifier } = getRepresentative(board)
  allReps[identifier] = true
  if (i % 1000000 === 0) console.log(i)
}
console.log(Date.now() - start)
console.log(Object.keys(allReps).length)
