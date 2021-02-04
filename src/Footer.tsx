import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: 'center',
    '& a': {
      color: 'gray',
      '&:hover': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
      }
    }
  }
}))

const Footer = (): React.ReactElement => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Link href='https://www.buymeacoffee.com/pillowfication'>
        <Typography variant='caption'>buymeacoffee.com/pillowfication</Typography>
      </Link>
    </footer>
  )
}

export default Footer
