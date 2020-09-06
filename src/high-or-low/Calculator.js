import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Section from '../Section'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import HighOrLowCard from './HighOrLowCard'
import calculateHighOrLow from './calculate-high-or-low'

function toPercent (p, q) {
  return (p / q * 100 | 0) + '%'
}

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflowX: 'auto'
  }
}))

const Calculator = () => {
  const [tb1, setTb1] = useState(null)
  const [tb2, setTb2] = useState(null)
  const [me, setMe] = useState(null)
  const classes = useStyles()
  const {
    err,
    tb1Err,
    tb2Err,
    meErr,
    high,
    low,
    both
  } = calculateHighOrLow(tb1, tb2, me)

  const handleClickReset = (event) => {
    setTb1(null)
    setTb2(null)
    setMe(null)
  }

  return (
    <Section>
      <div className={classes.cardsContainer}>
        <HighOrLowCard value={tb1} error={tb1Err} onInputDigit={setTb1} />
        <HighOrLowCard value={tb2} error={tb2Err} onInputDigit={setTb2} />
        <HighOrLowCard disabled />
        <br />
        <HighOrLowCard value={me} error={meErr} onInputDigit={setMe} />
        <HighOrLowCard disabled />
        <HighOrLowCard disabled />
        <br />
        {(() => {
          switch (err) {
            case 'INCOMPLETE':
              return <Typography paragraph>Input cards above</Typography>
            case 'DUPLICATE':
              return <Typography paragraph>Cannot have duplicate cards</Typography>
            default: {
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
