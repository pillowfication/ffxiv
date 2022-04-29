import React from 'react'
import { SxProps, Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface Props {
  title?: React.ReactNode
  sx?: SxProps<Theme>
  children?: React.ReactNode
}

const Section = ({ title, sx, children }: Props): React.ReactElement => {
  return (
    <Box component='section' mb={4} sx={sx}>
      {title !== undefined && <Typography variant='h2' gutterBottom>{title}</Typography>}
      {children}
    </Box>
  )
}

export default Section
