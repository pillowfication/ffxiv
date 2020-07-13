import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import BaitChain from './BaitChain'

const useStyles = makeStyles((theme) => ({
  intuitionFishes: {
    listStyleType: 'none',
    paddingLeft: theme.spacing(1)
  },
  count: {
    marginRight: theme.spacing(1)
  }
}))

export default function BaitGroup (props) {
  const { bait, intuitionFishes } = props
  const classes = useStyles()

  return (
    <>
      <BaitChain bait={bait} />
      {intuitionFishes &&
        <ul className={classes.intuitionFishes}>
          {intuitionFishes.map(({ count, bait }, index) =>
            <li key={index}>
              <span className={classes.count}>{count}</span>
              <BaitChain bait={bait} />
            </li>
          )}
        </ul>}
    </>
  )
}

BaitGroup.propTypes = {
  bait: BaitChain.propTypes.bait,
  intuitionFishes: PropTypes.arrayOf(PropTypes.shape({
    count: PropTypes.number.isRequired,
    bait: BaitChain.propTypes.bait
  }).isRequired)
}
