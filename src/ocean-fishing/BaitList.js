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
  }
}))

const BaitList = ({ baitGroups }) => {
  const classes = useStyles()

  return (
    <ul className={classes.baitGroups}>
      {baitGroups.map(({ header, baitGroup }, index) =>
        <li key={index}>
          <Typography gutterBottom>{header}</Typography>
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
      baitGroup: PropTypes.element.isRequired
    }).isRequired
  ).isRequired
}

export default BaitList
