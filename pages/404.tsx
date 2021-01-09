import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '../src/Link'

const useStyles = makeStyles((theme) => ({
  goHome: {
    color: '#ffffff'
  },
  lulu: {
    textAlign: 'center',
    padding: theme.spacing(2),
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    },
    '& > img': {
      maxWidth: '50vw'
    }
  }
}))

const _404 = () => {
  const classes = useStyles()

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
        className={classes.goHome}
      >
        Go home
      </Button>

      <div className={classes.lulu}>
        <img src='/images/lulu-judging.png' />
        <p>How did you get here?</p>
      </div>
    </>
  )
}

export default _404
