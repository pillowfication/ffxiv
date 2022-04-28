import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '../src/Link'

const _404 = (): React.ReactElement => {
  return (
    <>
      <Typography variant='h1' gutterBottom>404</Typography>
      <Typography paragraph>This page does not exist.</Typography>
      <Button
        component={Link}
        variant='contained'
        color='primary'
        underline='none'
        href='/'
      >
        Go home
      </Button>

      <div>
        <img src='/images/lulu-judging.png' />
        <p>How did you get here?</p>
      </div>
    </>
  )
}

export default _404
