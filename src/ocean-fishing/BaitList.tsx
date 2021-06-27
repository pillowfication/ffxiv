import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import BaitGroup from './BaitGroup'
import { BaitLink, FishLink } from './BaitChain'
import { Fish } from './ffxiv-ocean-fishing/data'

const useStyles = makeStyles(theme => ({
  baitList: {
    listStyleType: 'none',
    margin: 0,
    paddingLeft: 0,
    '& > li:not(:last-child)': {
      paddingBottom: theme.spacing(1)
    }
  }
}))

interface Props {
  baitGroups: Array<{
    header: string
    baitGroupProps: {
      baits: Array<BaitLink | FishLink>
      baitIsRequired?: boolean
      intuitionFishes?: Array<{ baits: Array<BaitLink | FishLink>, baitIsRequired?: boolean, count: number }>
      subtext?: string | ((fish: Fish) => string)
      mainOnly?: boolean
    }
  } | 'hr'>
}

const BaitList = ({ baitGroups }: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <ul className={classes.baitList}>
      {baitGroups.map((baitGroup, index) => {
        if (baitGroup === 'hr') {
          return <li key={index}><hr /></li>
        } else {
          const { header, baitGroupProps } = baitGroup
          return (
            <li key={index}>
              <Typography gutterBottom>{header}</Typography>
              <BaitGroup {...baitGroupProps} />
            </li>
          )
        }
      })}
    </ul>
  )
}

export default BaitList
