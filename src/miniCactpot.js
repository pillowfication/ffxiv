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
};
const LINES = [
  [6, 7, 8],
  [3, 4, 5],
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6]
];

function decide(board) {
  const revealedNumbers = board.filter(n => n);
  const hiddenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => !revealedNumbers.includes(n));

  if (revealedNumbers.length === 4) {
    const lineExpectedValues = LINES.map(line => {
      let lineSum = 0;
      let revealedCountInLine = 0;

      for (const square of line) {
        let squareValue = board[square];
        if (squareValue) {
          lineSum += squareValue;
          revealedCountInLine++;
        }
      }

      if (revealedCountInLine === 3) {
        return PAYOUTS[lineSum];
      }

      const possibleHiddenCombinations = choose(hiddenNumbers, 3 - revealedCountInLine);
      let expectedValueSum = 0;

      for (const hiddenCombination of possibleHiddenCombinations) {
        const hiddenCombinationSum = hiddenCombination.reduce((sum, n) => sum + n, 0);
        expectedValueSum += PAYOUTS[lineSum + hiddenCombinationSum];
      }

      return expectedValueSum / possibleHiddenCombinations.length;
    });

    let maxExpectedValue = 0;
    let bestLines = [];

    for (let line = 0; line < LINES.length; line++) {
      const expectedValue = lineExpectedValues[line];
      if (expectedValue === maxExpectedValue) {
        bestLines.push(line);
      } else if (expectedValue > maxExpectedValue) {
        maxExpectedValue = expectedValue;
        bestLines = [line];
      }
    }

    return {
      lineExpectedValues,
      maxExpectedValue,
      bestLines
    };
  }

  // if (revealedNumbers.length < 4)
  const hiddenSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8].filter(n => board[n] === undefined);

  const hiddenSquaresExpectedValues = hiddenSquares.map(square => {
    let expectedValueSum = 0;

    for (const hiddenNumber of hiddenNumbers) {
      const boardCopy = board.slice();
      boardCopy[square] = hiddenNumber;
      expectedValueSum += _decide(boardCopy).maxExpectedValue;
    }

    return expectedValueSum / hiddenNumbers.length;
  });

  let maxExpectedValue = 0;
  let bestSquares = [];

  for (let squareIndex = 0; squareIndex < hiddenSquares.length; squareIndex++) {
    const square = hiddenSquares[squareIndex];
    const expectedValue = hiddenSquaresExpectedValues[squareIndex];

    if (expectedValue === maxExpectedValue) {
      bestSquares.push(square);
    } else if (expectedValue > maxExpectedValue) {
      maxExpectedValue = expectedValue;
      bestSquares = [square];
    }
  }

  return {
    hiddenSquaresExpectedValues,
    maxExpectedValue,
    bestSquares
  };
}

const decideCache = {};
function _decide(board) {
  let identifier = board.map(n => n || '_').join('');
  if (decideCache[identifier]) {
    return decideCache[identifier];
  }
  return decideCache[identifier] = decide(board);
}

function choose(array, count) {
  if (array.length <= count) {
    return [array.slice()];
  }
  if (count === 0) {
    return [[]];
  }

  const first = array[0];
  const chooseWithFirst = choose(array.slice(1), count - 1);
  for (const withFirst of chooseWithFirst) {
    withFirst.unshift(first);
  }

  const chooseWithoutFirst = choose(array.slice(1), count);

  return chooseWithFirst.concat(chooseWithoutFirst);
}

module.exports = function miniCactpot(b) {
  return _decide(b);
};
