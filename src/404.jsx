import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import zf from './foundation.scss'

class _404 extends Component {
  componentDidMount () {
    document.title = '404'
  }

  render () {
    return (
      <>
        <h1>404</h1>
        <p>This page does not exist.</p>
        <Link to='/' className={zf.button}>Go back home?</Link>
      </>
    )
  }
}

export default _404
