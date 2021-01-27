import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  starBadge: {
    color: '#ffff00',
    opacity: 0.75,
    position: 'relative',
    top: 3,
    left: -1
  }
}))

const StarBadge = () => {
  const classes = useStyles()

  return (
    <span className={classes.starBadge}>🟊</span>
  )
}

export default StarBadge
