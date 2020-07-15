import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'classnames'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  tug: {
    display: 'inline-block',
    width: '1.2em',
    height: '1.2em',
    borderRadius: '0.2em',
    fontWeight: 'bold',
    lineHeight: '1.2em',
    textAlign: 'center'
  },
  sup: {
    position: 'absolute',
    left: '2.75em',
    top: '-0.25em',
    fontSize: '0.9em'
  },
  light: {
    backgroundColor: theme.palette.type === 'dark' ? '#078203' : '#aaffaa'
  },
  medium: {
    backgroundColor: theme.palette.type === 'dark' ? '#195ecf' : '#aaaaff'
  },
  heavy: {
    backgroundColor: theme.palette.type === 'dark' ? '#9e0000' : '#ffaaaa'
  }
}))

const Tug = ({ sup, strength }) => {
  const classes = useStyles()

  switch (strength) {
    case 1:
      return <span className={cn(classes.tug, sup && classes.sup, classes.light)} title='Light tug'>!</span>
    case 2:
      return <span className={cn(classes.tug, sup && classes.sup, classes.medium)} title='Medium tug'>!!</span>
    case 3:
      return <span className={cn(classes.tug, sup && classes.sup, classes.heavy)} title='Heavy tug'>!!!</span>
  }
}

Tug.propTypes = {
  sup: PropTypes.bool,
  strength: PropTypes.oneOf([1, 2, 3]).isRequired
}

Tug.Light = () => <Tug strength={1} />
Tug.Medium = () => <Tug strength={2} />
Tug.Heavy = () => <Tug strength={3} />

export default Tug
