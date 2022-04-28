import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from './Link'

const Footer = (): React.ReactElement => {
  return (
    <Box component='footer' textAlign='center' mt={2} mb={10}>
      <Link href='https://www.buymeacoffee.com/pillowfication'>
        <Typography variant='caption'>buymeacoffee.com/pillowfication</Typography>
      </Link>
    </Box>
  )
}

export default Footer
