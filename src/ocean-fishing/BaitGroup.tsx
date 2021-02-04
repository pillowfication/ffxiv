import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BaitChain, { Bait } from './BaitChain'

const useStyles = makeStyles(theme => ({
  intuitionFishes: {
    listStyleType: 'none',
    margin: 0,
    paddingLeft: theme.spacing(1)
  },
  count: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1)
  }
}))

interface Props {
  baits: Bait[]
  baitIsRequired?: boolean
  intuitionFishes?: Array<{ baits: Bait[], baitIsRequired?: boolean, count: number }>
  subtext?: string | ((fishId: number) => string)
  mainOnly?: boolean
}

const BaitGroup = ({ baits, baitIsRequired, intuitionFishes, subtext, mainOnly = false }: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <>
      <BaitChain baits={baits} baitIsRequired={baitIsRequired} subtext={subtext} />
      {intuitionFishes !== undefined && (
        <ul className={classes.intuitionFishes}>
          {intuitionFishes.map(({ baits, baitIsRequired, count }, index) =>
            <li key={index}>
              <Typography className={classes.count} display='inline'>{count}×</Typography>
              <BaitChain baits={baits} baitIsRequired={baitIsRequired} subtext={mainOnly ? subtext : undefined} />
            </li>
          )}
        </ul>
      )}
    </>
  )
}

export default BaitGroup
