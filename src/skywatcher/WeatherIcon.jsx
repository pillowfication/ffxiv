import React, { Component } from 'react'
import propTypes from 'prop-types'
import cn from 'classnames'

import styles from './Skywatcher.scss'

export const ICON_TITLES = {
  clearSkies: 'Clear Skies',
  fairSkies: 'Fair Skies',
  clouds: 'Clouds',
  wind: 'Wind',
  gales: 'Gales',
  fog: 'Fog',
  rain: 'Rain',
  showers: 'Showers',
  thunder: 'Thunder',
  thunderstorms: 'Thunderstorms',
  dustStorms: 'Dust Storms',
  standstorms: 'Sandstorms',
  heatWaves: 'Heat Waves',
  hotSpells: 'Hot Spells',
  snow: 'Snow',
  blizzards: 'Blizzards',
  gloom: 'Gloom',
  umbralStatic: 'Umbral Static',
  umbralWind: 'Umbral Wind'
}

function toCamelCase (str) {
  str = str.replace(' ', '')
  return str[0].toLowerCase() + str.slice(1)
}

class WeatherIcon extends Component {
  render () {
    const name = toCamelCase(this.props.name)
    return (
      <div className={cn(styles.weatherIcon, styles[name])} title={ICON_TITLES[name]} />
    )
  }
}

WeatherIcon.propTypes = {
  name: function (props, propName, componentName) {
    const propTypesError = propTypes.string.isRequired.apply(this, arguments)
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

export default WeatherIcon
