const PAYOUTS: Record<number, number> = {
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

function getPermutations (digits: number): number[][] {
  if (digits === 1) {
    return [[1]]
  } else {
    const permutations: number[][] = []
    const subPermutations = getPermutations(digits - 1)
    for (const subPerm of subPermutations) {
      for (let index = 0; index < digits; ++index) {
        const newPerm = subPerm.slice()
        newPerm.splice(index, 0, digits)
        permutations.push(newPerm)
      }
    }
    return permutations
  }
}

function rotatePermutation (permutation: number[], count: number): number[] {
  const rotation = [2, 5, 8, 1, 4, 7, 0, 3, 6].map(index => permutation[index])
  return count <= 1 ? rotation : rotatePermutation(rotation, count - 1)
}

function scoreLine (permutation: number[], lineId: number): number {
  const line = LINES[lineId]
  return PAYOUTS[permutation[line[0]] + permutation[line[1]] + permutation[line[2]]]
}

//
// Compute expected value
//

let EV = 0

for (const permutation of getPermutations(9)) {
  for (let revealedIndex = 0; revealedIndex < 9; ++revealedIndex) {
    // Rotate `perm` so that the "Y" shape is
    //   0 . 2
    //   . 4 .
    //   . 7 .
    let perm = permutation.slice()
    switch (revealedIndex) {
      case 3:
      case 8:
        perm = rotatePermutation(perm, 1)
        break
      case 1:
      case 6:
        perm = rotatePermutation(perm, 2)
        break
      case 5:
        perm = rotatePermutation(perm, 3)
    }

    // Count how many revealed squares are 1, 2, or 3 and are 7, 8, or 9
    let count123 = 0
    let count789 = 0
    for (const index of [0, 2, 4, 7]) {
      if (perm[index] <= 3) {
        ++count123
      } else if (perm[index] >= 7) {
        ++count789
      }
    }

    // If there is a possible 123 line, guess it
    let hasPossible123 = false
    if (count123 === 1) {
      if (perm[0] <= 3) {
        EV += scoreLine(perm, 4); hasPossible123 = true
      } else if (perm[2] <= 3) {
        EV += scoreLine(perm, 6); hasPossible123 = true
      } else if (perm[4] <= 3) {
        EV += scoreLine(perm, 1); hasPossible123 = true
      } else if (perm[7] <= 3) {
        EV += scoreLine(perm, 0); hasPossible123 = true
      }
    } else if (count123 === 2) {
      if (perm[0] <= 3 && perm[2] <= 3) {
        EV += scoreLine(perm, 2); hasPossible123 = true
      } else if (perm[0] <= 3 && perm[4] <= 3) {
        EV += scoreLine(perm, 3); hasPossible123 = true
      } else if (perm[2] <= 3 && perm[4] <= 3) {
        EV += scoreLine(perm, 7); hasPossible123 = true
      } else if (perm[4] <= 3 && perm[7] <= 3) {
        EV += scoreLine(perm, 5); hasPossible123 = true
      }
    }
    if (hasPossible123) continue

    // Do the same for 789
    let hasPossible789 = false
    if (count789 === 1) {
      if (perm[0] >= 7) {
        EV += scoreLine(perm, 4); hasPossible789 = true
      } else if (perm[2] >= 7) {
        EV += scoreLine(perm, 6); hasPossible789 = true
      } else if (perm[4] >= 7) {
        EV += scoreLine(perm, 1); hasPossible789 = true
      } else if (perm[7] >= 7) {
        EV += scoreLine(perm, 0); hasPossible789 = true
      }
    } else if (count789 === 2) {
      if (perm[0] >= 7 && perm[2] >= 7) {
        EV += scoreLine(perm, 2); hasPossible789 = true
      } else if (perm[0] >= 7 && perm[4] >= 7) {
        EV += scoreLine(perm, 3); hasPossible789 = true
      } else if (perm[2] >= 7 && perm[4] >= 7) {
        EV += scoreLine(perm, 7); hasPossible789 = true
      } else if (perm[4] >= 7 && perm[7] >= 7) {
        EV += scoreLine(perm, 5); hasPossible789 = true
      }
    }
    if (hasPossible789) continue

    // Guess whatever line can sum to the highest possible number
    const visibles = [perm[0], perm[2], perm[4], perm[7]]
    const invisibles = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (const value of visibles.sort((a, b) => b - a)) {
      invisibles.splice(value - 1, 1)
    }
    const max1 = invisibles[4]
    const max2 = invisibles[4] + invisibles[3]

    const maxLineSums = [
      perm[7] + max2,
      perm[4] + max2,
      perm[0] + perm[2] + max1,
      perm[0] + perm[4] + max1,
      perm[0] + max2,
      perm[4] + perm[7] + max1,
      perm[2] + max2,
      perm[2] + perm[4] + max1
    ]
    EV += scoreLine(perm, maxLineSums.indexOf(Math.max(...maxLineSums)))
  }
}

console.log(EV / 362880 / 9)
export {}
