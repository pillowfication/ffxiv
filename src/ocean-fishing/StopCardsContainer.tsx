import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

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
