import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import BaitChain from './BaitChain'

const useStyles = makeStyles((theme) => ({
  intuitionFishes: {
    listStyleType: 'none',
    paddingLeft: theme.spacing(1)
  },
  count: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1)
  },
  intuition: {
    position: 'relative',
    verticalAlign: 'middle',
    margin: '2px 2px 0'
  }
}))

const BaitGroup = ({ bait, intuitionFishes, showDH }) => {
  const classes = useStyles()

  return (
    <>
      {intuitionFishes && <img src='/images/fishers-intuition.png' className={classes.intuition} />}
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

BaitGroup.propTypes = {
  bait: BaitChain.propTypes.bait,
  intuitionFishes: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number.isRequired,
      bait: BaitChain.propTypes.bait
    }).isRequired
  ),
  showDH: PropTypes.bool
}

export default BaitGroup
