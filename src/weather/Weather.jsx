import React, { Component } from 'react'
import cn from 'classnames'

import zf from '../foundation.scss'
import styles from './Weather.scss'

class Weather extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    document.title = 'Weather'
  }

  render () {
    return (
      <>
        <h1>Weather</h1>
        <p>hello</p>
      </>
    )
  }
}

export default Weather
