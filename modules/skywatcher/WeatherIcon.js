import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'classnames'
import PropTypes from 'prop-types'

const ICONS = [
  'Clear Skies',
  'Fair Skies',
  'Clouds',
  'Wind',
  'Gales',
  'Fog',
  'Rain',
  'Showers',
  'Thunder',
  'Thunderstorms',
  'Dust Storms',
  'Sandstorms',
  'Heat Waves',
  'Hot Spells',
  'Snow',
  'Blizzards',
  'Gloom',
  'Umbral Static',
  'Umbral Wind'
]

export const ICON_TITLES = {}
for (const icon of ICONS) {
  ICON_TITLES[toCamelCase(icon)] = icon
}

function toCamelCase (str) {
  str = str.replace(' ', '')
  return str[0].toLowerCase() + str.slice(1)
}

const useStyles = makeStyles((theme) => {
  const styles = {
    weatherIcon: {
      display: 'inline-block',
      width: '30px',
      height: '30px',
      marginBottom: '-0.5em',
      backgroundImage: 'url("./images/weather-icons.png")',
      backgroundSize: `${ICONS.length * 100}% 100%`
    }
  }
  ICONS.forEach((icon, index) => {
    styles[toCamelCase(icon)] = {
      backgroundPosition: `${index * -100}% 0%`
    }
  })
  return styles
})

export default function WeatherIcon (props) {
  const classes = useStyles()
  const name = toCamelCase(props.name)

  return (
    <div className={cn(classes.weatherIcon, classes[name])} title={ICON_TITLES[name]} />
  )
}

WeatherIcon.propTypes = {
  name: function (props, propName, componentName) {
    const propTypesError = PropTypes.string.isRequired.apply(this, arguments)
    if (propTypesError) {
      return propTypesError
    }

    const key = toCamelCase(props[propName])
    if (ICON_TITLES[key] === undefined) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`.` +
        ` Unknown name '${props[propName]}'.`
      )
    }
  }
}
