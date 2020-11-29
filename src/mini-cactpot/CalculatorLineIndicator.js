import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyles = makeStyles((theme) => ({
  arrow: {
    margin: theme.spacing(1),
    fontSize: '2em',
    transform: ({ rotate }) => `rotate(${rotate}deg)`
  }
}))

const CalculatorLineIndicator = ({ rotate, suggested }) => {
  const classes = useStyles({ rotate })

  return (
    <ArrowForwardIcon
      className={classes.arrow}
      color={suggested ? 'primary' : 'disabled'}
    />
  )
}

CalculatorLineIndicator.propTypes = {
  rotate: PropTypes.number.isRequired,
  suggested: PropTypes.bool
}

export default CalculatorLineIndicator
