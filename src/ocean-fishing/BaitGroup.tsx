import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BaitChain, { Bait } from './BaitChain'

const useStyles = makeStyles((theme) => ({
  intuitionFishes: {
    listStyleType: 'none',
    paddingLeft: theme.spacing(1)
  },
  count: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1)
  }
}))

type Props = {
  bait: Bait[],
  intuitionFishes?: { bait: Bait[], count: number }[],
  showDH?: boolean
}

const BaitGroup = ({ bait, intuitionFishes, showDH }: Props) => {
  const classes = useStyles()

  return (
    <>
      <BaitChain bait={bait} showDH={showDH} />
      {intuitionFishes &&
        <ul className={classes.intuitionFishes}>
          {intuitionFishes.map(({ count, bait }, index) =>
            <li key={index}>
              <Typography className={classes.count} display='inline'>{count}×</Typography>
              <BaitChain bait={bait} />
            </li>
          )}
        </ul>}
    </>
  )
}

export default BaitGroup
