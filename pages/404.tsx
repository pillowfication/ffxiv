import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
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
      <Link href='/'>
        <Button color='primary' variant='contained'>Go home</Button>
      </Link>

      <div className={classes.lulu}>
        <img src='/images/lulu-judging.png' />
        <p>How did you get here?</p>
      </div>
    </>
  )
}

_404.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default _404
