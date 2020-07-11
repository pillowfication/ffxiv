import React from 'react'
import Typography from '@material-ui/core/Typography'
import MiniCactpotCalculator from '../modules/mini-cactpot/MiniCactpotCalculator'

export default function MiniCactpot () {
  return (
    <>
      <Typography variant='h1' gutterBottom>Mini Cactpot</Typography>
      <MiniCactpotCalculator />
    </>
  )
}
