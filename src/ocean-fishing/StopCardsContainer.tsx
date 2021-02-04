import React from 'react'
import Grid from '@material-ui/core/Grid'

interface Props {
  children?: React.ReactNode
}

const StopCardsContainer = ({ children }: Props): React.ReactElement => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  )
}

export default StopCardsContainer
