import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  baitGroups: {
    listStyleType: 'none',
    margin: 0,
    paddingLeft: 0,
    '& > li:not(:last-child)': {
      paddingBottom: theme.spacing(1)
    }
  },
  intuition: {
    verticalAlign: 'bottom',
    margin: '0 0.33em'
  }
}))

const BaitList = ({ baitGroups }) => {
  const classes = useStyles()

  return (
    <ul className={classes.baitGroups}>
      {baitGroups.map(({ header, hasIntuition, baitGroup }, index) =>
        <li key={index}>
          <Typography gutterBottom>
            {header}
            {hasIntuition && <img src='/images/fishers-intuition.png' className={classes.intuition} />}
          </Typography>
          {baitGroup}
        </li>
      )}
    </ul>
  )
}

BaitList.propTypes = {
  baitGroups: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.node.isRequired,
      hasIntuition: PropTypes.bool,
      baitGroup: PropTypes.element.isRequired
    }).isRequired
  ).isRequired
}

export default BaitList
