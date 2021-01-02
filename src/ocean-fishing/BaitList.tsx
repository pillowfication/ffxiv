import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BaitGroup from './BaitGroup'
import { Bait } from './BaitChain'

const useStyles = makeStyles((theme) => ({
  baitList: {
    listStyleType: 'none',
    margin: 0,
    paddingLeft: 0,
    '& > li:not(:last-child)': {
      paddingBottom: theme.spacing(1)
    }
  }
}))

type Props = {
  baitGroups: {
    header: string,
    baitGroupProps: {
      bait: Bait[],
      intuitionFishes?: { bait: Bait[], count: number }[],
      showDH?: boolean
    }
  }[]
}

const BaitList = ({ baitGroups }: Props) => {
  const classes = useStyles()

  return (
    <ul className={classes.baitList}>
      {baitGroups.map(({ header, baitGroupProps }, index) =>
        <li key={index}>
          <Typography gutterBottom>{header}</Typography>
          <BaitGroup {...baitGroupProps} />
        </li>
      )}
    </ul>
  )
}

export default BaitList
