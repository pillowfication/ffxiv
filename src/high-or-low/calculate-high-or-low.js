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

  const tbEv = 7 * (tb1 + tb2)
  const meEv = 5 * me + 45
  return {
    err: null,
    guess: meEv > tbEv ? 'HIGH' : meEv < tbEv ? 'LOW' : 'BOTH'
  }
}
