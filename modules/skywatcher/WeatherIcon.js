import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'classnames'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

export const WEATHERS = [
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
const WEATHER_THUNDERSTORM = 'Thunder' + String.fromCharCode(173) + 'storms'

export const ICON_TITLES = {}
for (const icon of WEATHERS) {
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
      backgroundImage: 'url("./images/weather-icons.png")',
      backgroundSize: `${WEATHERS.length * 100}% 100%`
    }
  }
  WEATHERS.forEach((icon, index) => {
    styles[toCamelCase(icon)] = {
      backgroundPosition: `${index * -100}% 0%`
    }
  })
  return styles
})

export default function WeatherIcon (props) {
  const { name } = props
  const classes = useStyles()
  const baseName = toCamelCase(name)

  return (
    <>
      <div className={cn(classes.weatherIcon, classes[baseName])} title={ICON_TITLES[baseName]} />
      <br />
      <Typography variant='caption'>
        {name === 'Thunderstorms' ? WEATHER_THUNDERSTORM : name}
      </Typography>
    </>
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
