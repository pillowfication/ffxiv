import React from 'react'
import Grid from '@material-ui/core/Grid'

type Props = {
  children?: React.ReactNode
}

const StopCardsContainer = ({ children }: Props) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  )
}

export default StopCardsContainer
