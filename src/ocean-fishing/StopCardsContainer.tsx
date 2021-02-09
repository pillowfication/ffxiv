import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

interface Props {
  children?: React.ReactNode
}

const StopCardsContainer = ({ children }: Props): React.ReactElement => {
  return (
    <Box mb={2}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Box>
  )
}

export default StopCardsContainer
