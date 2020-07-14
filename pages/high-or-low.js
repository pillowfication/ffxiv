import React from 'react'
import Typography from '@material-ui/core/Typography'
import HighOrLowCalculator from '../src/high-or-low/HighOrLowCalculator'
import About from '../src/high-or-low/About'

export default function HighOrLow () {
  return (
    <>
      <Typography variant='h1' gutterBottom>High or Low</Typography>
      <HighOrLowCalculator />
      <About />
    </>
  )
}
