import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

type Rank = 1 | 2 | 3 | 4 | 5 | 'S'

const mapRank: Record<Rank, string> = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  S: '★'
}

const useStyles = makeStyles(theme => ({
  icon: {
    display: 'inline-block',
    width: '2em',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    marginRight: theme.spacing(1)
  }
}))

interface Props {
  rank: Rank
}

const RankIcon = ({ rank }: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <Paper className={classes.icon}>{mapRank[rank]}</Paper>
  )
}

export default RankIcon
