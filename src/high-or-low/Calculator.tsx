import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Section from '../Section'
import HighOrLowCard from './HighOrLowCard'
import calculateHighOrLow from './calculate-high-or-low'

enum CalculatorState {
  Incomplete,
  Duplicate,
  Complete
}

function toPercent (p: number, q: number) {
  return (p / q * 100 | 0) + '%'
}

const useStyles = makeStyles(() => ({
  cardsContainer: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflowX: 'auto'
  }
}))

const Calculator: React.FunctionComponent = () => {
  const [tb1, setTb1] = useState<number>(null)
  const [tb2, setTb2] = useState<number>(null)
  const [me, setMe] = useState<number>(null)
  const classes = useStyles()

  let state: CalculatorState
  let tb1Error = tb1 && (tb1 === tb2 || tb1 === me)
  let tb2Error = tb2 && (tb2 === tb1 || tb2 === me)
  let meError = me && (me === tb1 || me === tb2)
  let high: number
  let low: number
  let both: number

  // Check to see if there are any duplicate cards
  if (tb1Error || tb2Error || meError) {
    state = CalculatorState.Duplicate

  // Check to see if all the cards have been inputted
  } else if (tb1 === null || tb2 === null || me === null) {
    state = CalculatorState.Incomplete

  // The cards are good!
  } else {
    state = CalculatorState.Complete
    ;({high, low, both} = calculateHighOrLow(tb1, tb2, me))
  }

  const handleClickReset = () => {
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
              return <Typography paragraph>Input cards above</Typography>
            case CalculatorState.Duplicate:
              return <Typography paragraph>Cannot have duplicate cards</Typography>
            case CalculatorState.Complete: {
              const sum = high + low + both
              if (high > low) {
                return <Typography paragraph>You are <b>High</b> ({toPercent(high, sum)})</Typography>
              } else if (high < low) {
                return <Typography paragraph>You are <b>Low</b> ({toPercent(low, sum)})</Typography>
              } else {
                return <Typography paragraph>You are <b>High</b> or <b>Low</b> ({toPercent(low, sum)})</Typography>
              }
            }
          }
        })()}
        <Button variant='contained' color='secondary' onClick={handleClickReset}>Reset</Button>
      </div>
    </Section>
  )
}

export default Calculator
