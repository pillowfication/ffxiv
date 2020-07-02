import React, { Component } from 'react'
import moment from 'moment'
import cn from 'classnames'
import propTypes from 'prop-types'
import {
  GCTimer,
  fromPlainObj
} from './FFXIVTimer.js'

import zf from '../foundation.scss'
import styles from './Timers.scss'

const UTC = moment().utcOffset()
const UPDATE_INTERVAL = 60000
const TIMER_TYPES = [
  GCTimer
]

function toUTCString (utc) {
  return `UTC${utc >= 0 ? '+' : '−'}${paddedZero(Math.abs(utc / 60 | 0))}:${paddedZero(Math.abs(utc) % 60)}`
}

function paddedZero (n) {
  return n > 9 ? n : '0' + n
}

class Timers extends Component {
  constructor (props) {
    super(props)
    this.interval = null

    const timersCache = window.localStorage.getItem('timers')
    if (timersCache) {
      this.state = {
        timers: JSON.parse(timersCache).map(fromPlainObj)
      }
    } else {
      this.state = {
        timers: []
      }
    }

    this.handleOnAddTimer = this.handleOnAddTimer.bind(this)
  }

  componentDidMount () {
    this.interval = setInterval(() => { this.forceUpdate() }, UPDATE_INTERVAL)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  handleOnAddTimer (timer) {
    const newTimers = this.state.timers.slice()
    newTimers.push(timer)
    this.setState({ timers: newTimers })
  }

  render () {
    const { timers } = this.state
    window.localStorage.setItem('timers', JSON.stringify(timers.map(timer => timer.toPlainObj())))

    return (
      <>
        <h1>Timers</h1>
        <p>Your <a href='https://en.wikipedia.org/wiki/UTC_offset'>UTC offset</a> is <strong>({toUTCString(UTC)})</strong>.</p>
        <table className={styles.timers}>
          <tbody>
            {timers.map((timer, index) => {
              const resetInfo = timer.getResetInfo()

              switch (timer.constructor.name) {
                case 'GCTimer':
                  return (
                    <tr key={index}>
                      <td>{timer.constructor.timerName}</td>
                      <td>{resetInfo.timeUntilNextReset.hours()}:{paddedZero(resetInfo.timeUntilNextReset.minutes())} Remaining ({resetInfo.nextReset.utcOffset(UTC).format('ddd M/D HH:mm')})</td>
                    </tr>
                  )
              }
            })}
          </tbody>
        </table>
        <hr />
        <AddTimerForm onAddTimer={this.handleOnAddTimer} />
      </>
    )
  }
}

class AddTimerForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      timerType: TIMER_TYPES[0].name
    }

    this.handleOnAddTimer = this.handleOnAddTimer.bind(this)
  }

  handleOnAddTimer () {
    const { onAddTimer } = this.props

    switch (this.state.timerType) {
      case 'GCTimer':
        return onAddTimer(new GCTimer())
      default:
        console.log('UHOH')
    }
  }

  render () {
    return (
      <form className={cn(zf.gridX, zf.gridPaddingX)}>
        <div className={cn(zf.cell, zf.small12)}>
          <p>Add a timer</p>
          <select>
            {TIMER_TYPES.map((timerType, index) =>
              <option key={timerType.name} value={timerType.name}>{timerType.timerName}</option>
            )}
          </select>
        </div>
        <div className={cn(zf.cell, zf.small12)}>
          <button type='button' className={zf.button} onClick={this.handleOnAddTimer}>Add Timer</button>
        </div>
      </form>
    )
  }
}
AddTimerForm.propTypes = {
  onAddTimer: propTypes.func.isRequired
}

export default Timers
