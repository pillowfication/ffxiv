import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Section from '../Section'
import HighOrLowCard from './HighOrLowCard'
import calculateHighOrLow from './ffxiv-high-or-low'
import { useTranslation } from '../i18n'

enum CalculatorState {
  Incomplete,
  Duplicate,
  Complete
}

function toPercent (p: number, q: number): number {
  return Math.floor(p / q * 100)
}

const useStyles = makeStyles(() => ({
  cardsContainer: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflowX: 'auto'
  }
}))

const Calculator = (): React.ReactElement => {
  const classes = useStyles()
  const { t } = useTranslation('high-or-low')
  const [tb1, setTb1] = useState<number | null>(null)
  const [tb2, setTb2] = useState<number | null>(null)
  const [me, setMe] = useState<number | null>(null)

  let state: CalculatorState
  const tb1Error = tb1 !== null && (tb1 === tb2 || tb1 === me)
  const tb2Error = tb2 !== null && (tb2 === tb1 || tb2 === me)
  const meError = me !== null && (me === tb1 || me === tb2)
  let high: number = 0
  let low: number = 0
  let same: number = 0

  if (tb1Error || tb2Error || meError) {
    state = CalculatorState.Duplicate
  } else if (tb1 === null || tb2 === null || me === null) {
    state = CalculatorState.Incomplete
  } else {
    state = CalculatorState.Complete
    ;({ high, low, same } = calculateHighOrLow(tb1, tb2, me))
  }

  const handleClickReset = (): void => {
    setTb1(null)
    setTb2(null)
    setMe(null)
  }

  return (
    <Section>
      <div className={classes.cardsContainer}>
        <HighOrLowCard value={tb1} error={tb1Error} onInputDigit={setTb1} />
        <HighOrLowCard value={tb2} error={tb2Error} onInputDigit={setTb2} />
        <HighOrLowCard disabled />
        <br />
        <HighOrLowCard value={me} error={meError} onInputDigit={setMe} />
        <HighOrLowCard disabled />
        <HighOrLowCard disabled />
        <br />
        {(() => {
          switch (state) {
            case CalculatorState.Incomplete:
              return <Typography paragraph>{t('state.inputCards')}</Typography>
            case CalculatorState.Duplicate:
              return <Typography paragraph>{t('state.duplicateCards')}</Typography>
            case CalculatorState.Complete: {
              const sum = high + low + same
              if (high > low) {
                return <Typography paragraph>{t('state.high', { chance: toPercent(high, sum) })}</Typography>
              } else if (high < low) {
                return <Typography paragraph>{t('state.low', { chance: toPercent(low, sum) })}</Typography>
              } else {
                return <Typography paragraph>{t('state.same', { chance: toPercent(low, sum) })}</Typography>
              }
            }
          }
        })()}
        <Button variant='contained' color='secondary' onClick={handleClickReset}>{t('reset')}</Button>
      </div>
    </Section>
  )
}

export default Calculator
