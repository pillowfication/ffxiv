import React from 'react'
import Paper from '@mui/material/Paper'

type Rank = 1 | 2 | 3 | 4 | 5 | 'S'

const mapRank: Record<Rank, string> = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  S: '★'
}

interface Props {
  rank: Rank
}

const RankIcon = ({ rank }: Props): React.ReactElement => {
  return (
    <Paper variant='outlined' sx={{
      display: 'inline-block',
      width: '2em',
      textAlign: 'center',
      fontWeight: 'bold',
      mr: 1
    }}>
      {mapRank[rank]}
    </Paper>
  )
}

export default RankIcon
