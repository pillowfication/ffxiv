function choose2 (arr: number[]): number[] {
  if (arr.length === 2) {
    return [arr[0] + arr[1]]
  }
  const slice = arr.slice(1)
  return [...slice.map(x => x + arr[0]), ...choose2(slice)]
}

function calculateHighOrLow (tb1: number, tb2: number, me: number) {
  const hiddenCards = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(card =>
    card !== tb1 && card !== tb2 && card !== me
  )
  const tbPossibles = hiddenCards.map(card => tb1 + tb2 + card)
  const mePossibles = choose2(hiddenCards).map(sum => me + sum)

  let high = 0
  let low = 0
  let same = 0
  for (const me of mePossibles) {
    for (const tb of tbPossibles) {
      me > tb ? ++high : me < tb ? ++low : ++same
    }
  }

  return {
    high,
    low,
    same
  }
}

export default calculateHighOrLow
