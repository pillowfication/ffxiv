import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import lulu404 from './lulu404.png'
import zf from './foundation.scss'
import styles from './404.scss'

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
        <div className={styles.lulu}>
          <img src={lulu404} />
          <p>How did you get here?</p>
        </div>
      </>
    )
  }
}

export default _404
