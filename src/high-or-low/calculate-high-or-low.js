function choose2 (arr) {
  if (arr.length === 2) {
    return [arr[0] + arr[1]]
  }
  const slice = arr.slice(1)
  return slice.map((x) => x + arr[0]).concat(choose2(slice))
}

export default function calculateHighOrLow (tb1, tb2, me) {
  const tb1Err = tb1 && (tb1 === tb2 || tb1 === me)
  const tb2Err = tb2 && (tb2 === tb1 || tb2 === me)
  const meErr = me && (me === tb1 || me === tb2)
  if (tb1Err || tb2Err || meErr) {
    return {
      err: 'DUPLICATE',
      tb1Err,
      tb2Err,
      meErr
    }
  }

  if (!tb1 || !tb2 || !me) {
    return {
      err: 'INCOMPLETE'
    }
  }

  const hiddenCards = []
  Array(9).fill().forEach((_, index) => {
    const card = index + 1
    if (card !== tb1 && card !== tb2 && card !== me) {
      hiddenCards.push(card)
    }
  })

  const tbPossibles = hiddenCards.map((card) => tb1 + tb2 + card)
  const mePossibles = choose2(hiddenCards).map((sum) => me + sum)

  let high = 0
  let low = 0
  let both = 0
  for (const me of mePossibles) {
    for (const tb of tbPossibles) {
      me > tb ? ++high : me < tb ? ++low : ++both
    }
  }

  return {
    err: null,
    high,
    low,
    both
  }
}
