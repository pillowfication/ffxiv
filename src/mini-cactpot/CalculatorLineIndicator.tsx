import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

const useStyles = makeStyles(theme => ({
  arrow: {
    margin: theme.spacing(1),
    fontSize: '2em',
    transform: ({ rotate }: { rotate: number }) => `rotate(${rotate}deg)`
  }
}))

type Props = {
  rotate: number,
  suggested?: boolean
}

const CalculatorLineIndicator = ({ rotate, suggested }: Props) => {
  const classes = useStyles({ rotate })

  return (
    <ArrowForwardIcon
      className={classes.arrow}
      color={suggested ? 'primary' : 'disabled'}
    />
  )
}

export default CalculatorLineIndicator
