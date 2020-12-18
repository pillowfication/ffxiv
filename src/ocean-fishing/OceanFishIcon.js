import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import ICONS from './gists/icons'

const ICON_ROWS = ICONS.length
const ICON_COLS = Math.max(...ICONS.map(row => row.length))

function camelCase (str) {
  str = str.replace(/[^a-z]/g, '')
  return str[0].toLowerCase() + str.slice(1)
}

const useStyles = makeStyles((theme) => {
  const styles = {
    oceanFishIcon: {
      display: 'inline-block',
      width: '2.5em',
      height: '2.5em',
      margin: theme.spacing(0.5),
      backgroundImage: 'url("/images/ocean-fish.png")',
      backgroundSize: `${ICON_COLS * 100}% ${ICON_ROWS * 100}%`
    },
    inline: {
      display: 'inline-block',
      verticalAlign: 'middle'
    }
  }

  for (let row = 0; row < ICON_ROWS; ++row) {
    for (let col = 0; col < ICONS[row].length; ++col) {
      styles[camelCase(ICONS[row][col])] = {
        backgroundPosition: `${col * -100}% ${row * -100}%`
      }
    }
  }
  return styles
})

const OceanFishIcon = ({ name, inline, className }) => {
  const classes = useStyles()

  return (
    <Tooltip arrow placement='top' title={name}>
      {inline
        ? <div className={classes.inline}><div className={cn(classes.oceanFishIcon, classes[camelCase(name)], className)} /></div>
        : <div className={cn(classes.oceanFishIcon, classes[camelCase(name)], className)} />}
    </Tooltip>
  )
}

OceanFishIcon.propTypes = {
  name: function (props, propName, componentName) {
    const propTypesError = PropTypes.string.isRequired.apply(this, arguments)
    if (propTypesError) {
      return propTypesError
    }
    for (const row of ICONS) {
      if (row.indexOf(props[propName]) >= 0) {
        return
      }
    }
    return new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Unknown name '${props[propName]}'.`
    )
  }
}

export default OceanFishIcon
