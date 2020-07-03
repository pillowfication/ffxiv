import React, { Component } from 'react'
import propTypes from 'prop-types'
import cn from 'classnames'

import zf from '../foundation.scss'
import styles from './HighOrLow.scss'

class HighOrLow extends Component {
  componentDidMount () {
    document.title = 'High or Low'
  }

  render () {
    return (
      <>
        <h1>High or Low</h1>
        <div className={styles.container}>
          <div className={styles.card}><input type='text' defaultValue={1} /></div>
          <div className={styles.card}><input type='text' defaultValue={2} /></div>
          <div className={cn(styles.card, styles.hidden)} />
          <br />
          <div className={styles.card}><input type='text' defaultValue={3} /></div>
          <div className={cn(styles.card, styles.hidden)} />
          <div className={cn(styles.card, styles.hidden)} />
        </div>
      </>
    )
  }
}

export default HighOrLow
