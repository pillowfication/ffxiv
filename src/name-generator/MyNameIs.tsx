import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  myNameIs: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(4),
      padding: theme.spacing(2),
    },
    fontSize: '1.75em',
    '& > span': {
      display: 'block',
      margin: theme.spacing(1),
      textAlign: 'center',
      whiteSpace: 'nowrap'
    }
  }
}))

type Props = {
  name: string
}

const MyNameIs = ({ name }: Props) => {
  const classes = useStyles()

  return (
    <Paper variant='outlined' className={classes.myNameIs}>
      <span>{name}</span>
    </Paper>
  )
}

export default MyNameIs
