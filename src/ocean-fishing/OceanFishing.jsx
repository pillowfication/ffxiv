import React, { Component } from 'react'
import moment from 'moment'
import cn from 'classnames'
import calculateVoyages, { LULU_EPOCH } from './calculate-voyages'

import zf from '../foundation.scss'
import styles from './OceanFishing.scss'

const UTC = moment().utcOffset()
const JST_UTC = 540
const UPDATE_INTERVAL = 180000
const DEST_MAP = {
  N: 'Northern Merlthor',
  R: 'Rhotano Sea'
}
const TIME_MAP = {
  D: (
    // Sun rays
    // const cx = 16, cy = 16
    // const delta = 0.22, r = 11, R = 15
    // function ct (theta, rho, cx, cy) {
    //   return `${Math.round((cx + rho * Math.cos(theta)) * 100) / 100} ${Math.round((cy + rho * Math.sin(theta)) * 100) / 100}`
    // }
    // for (let i = 0; i < 8; ++i) {
    //   const theta = i * Math.PI / 4 + Math.PI / 8
    //   console.log(`<path d='M ${ct(theta - delta, r, cx, cy)} L ${ct(theta, R, cx, cy)} L ${ct(theta + delta, r, cx, cy)} Z' stroke='black' fill='yellow' />`)
    // }
    <svg width={32} height={32} className={styles.timeIcon}>
      <circle cx={16} cy={16} r={8} stroke='black' fill='yellow' />
      <path d='M 26.84 17.89 L 29.86 21.74 L 25 22.33 Z' stroke='black' fill='yellow' />
      <path d='M 22.33 25 L 21.74 29.86 L 17.89 26.84 Z' stroke='black' fill='yellow' />
      <path d='M 14.11 26.84 L 10.26 29.86 L 9.67 25 Z' stroke='black' fill='yellow' />
      <path d='M 7 22.33 L 2.14 21.74 L 5.16 17.89 Z' stroke='black' fill='yellow' />
      <path d='M 5.16 14.11 L 2.14 10.26 L 7 9.67 Z' stroke='black' fill='yellow' />
      <path d='M 9.67 7 L 10.26 2.14 L 14.11 5.16 Z' stroke='black' fill='yellow' />
      <path d='M 17.89 5.16 L 21.74 2.14 L 22.33 7 Z' stroke='black' fill='yellow' />
      <path d='M 25 9.67 L 29.86 10.26 L 26.84 14.11 Z' stroke='black' fill='yellow' />
    </svg>
  ),
  S: (
    <svg width={32} height={32} className={styles.timeIcon}>
      <path d='M 29 22 A 10.4 10.4 0 1 0 10 22 Z' stroke='black' fill='yellow' />
      <path d='M 2 28 L 2 24 L 30 24 L 30 28 Z' stroke='black' fill='yellow' />
    </svg>
  ),
  N: (
    <svg width={32} height={32} className={styles.timeIcon}>
      <path d='M 14 3 A 12 12 0 1 1 3 18 A 9 9 0 1 0 14 3 Z' stroke='black' fill='yellow' />
    </svg>
  )
}
const OBJECTIVES_MAP = {
  ND: ['sothis', 'elasmosaurus'],
  RD: ['sharks', 'coralManta'], // coralManta
  NS: ['seadragons', 'coralManta'],
  RS: ['sothis', 'stonescale'],
  NN: ['octopodes'],
  RN: ['jellyfish']
}

function paddedZero (n) {
  return n > 9 ? n : '0' + n
}
function toUTCString (utc) {
  return `UTC${utc >= 0 ? '+' : '−'}${paddedZero(Math.abs(utc / 60 | 0))}:${paddedZero(Math.abs(utc) % 60)}`
}

class OceanFishing extends Component {
  constructor (props) {
    super(props)
    this.interval = null

    this.state = {
      now: moment().utcOffset(JST_UTC),
      numRows: 10,
      filter: 'none',
      hover: null,
      select: null
    }

    this.updateTime = this.updateTime.bind(this)
    this.handleOnChangeRows = this.handleOnChangeRows.bind(this)
    this.handleOnSelectFilter = this.handleOnSelectFilter.bind(this)
    this.handleOnHover = {
      ND: this.handleOnHover.bind(this, 'ND'),
      RD: this.handleOnHover.bind(this, 'RD'),
      NS: this.handleOnHover.bind(this, 'NS'),
      RS: this.handleOnHover.bind(this, 'RS'),
      NN: this.handleOnHover.bind(this, 'NN'),
      RN: this.handleOnHover.bind(this, 'RN'),
      clear: this.handleOnHover.bind(this, null)
    }
    this.handleOnClick = {
      ND: this.handleOnClick.bind(this, 'ND'),
      RD: this.handleOnClick.bind(this, 'RD'),
      NS: this.handleOnClick.bind(this, 'NS'),
      RS: this.handleOnClick.bind(this, 'RS'),
      NN: this.handleOnClick.bind(this, 'NN'),
      RN: this.handleOnClick.bind(this, 'RN')
    }
  }

  componentDidMount () {
    this.interval = setInterval(this.updateTime, UPDATE_INTERVAL)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  updateTime () {
    this.setState({ now: moment().utcOffset(JST_UTC) })
  }

  handleOnChangeRows (event) {
    this.setState({ numRows: event.target.value })
  }

  handleOnSelectFilter (event) {
    const destinationCode = event.target.value
    this.setState({
      filter: destinationCode,
      select: destinationCode === 'none' ? this.state.select : destinationCode
    })
  }

  handleOnHover (destinationCode) {
    this.setState({ hover: destinationCode })
  }

  handleOnClick (destinationCode) {
    this.setState({ select: destinationCode })
  }

  render () {
    const { now, numRows, filter, hover, select } = this.state
    const upcomingVoyages = calculateVoyages(now, +numRows, filter === 'none' ? null : filter)
    let previousDate

    return (
      <>
        <h1>Ocean Fishing</h1>
        <p>
          Your <a href='https://en.wikipedia.org/wiki/UTC_offset'>UTC offset</a> is <strong>({toUTCString(UTC)})</strong>. The time in Japan <strong>({toUTCString(JST_UTC)})</strong> is <strong>{now.utcOffset(JST_UTC).format('HH:mm')}</strong>.
        </p>
        <div className={cn(zf.gridX, zf.gridPaddingX)}>
          <fieldset className={cn(zf.cell, zf.medium6)}>
            <legend>Number of rows</legend>
            <input type='number' onChange={this.handleOnChangeRows} value={numRows} />
          </fieldset>
          <fieldset className={cn(zf.cell, zf.medium6)}>
            <legend>Filter by route</legend>
            <select onChange={this.handleOnSelectFilter} value={filter}>
              {[
                { route: 'none', label: 'None' },
                { route: 'ND', label: 'Northern Merlthor - Day' },
                { route: 'NS', label: 'Northern Merlthor - Sunset' },
                { route: 'NN', label: 'Northern Merlthor - Night' },
                { route: 'RD', label: 'Rhotano Sea - Day' },
                { route: 'RS', label: 'Rhotano Sea - Sunset' },
                { route: 'RN', label: 'Rhotano Sea - Night' }
              ].map(opt =>
                <option key={opt.route} value={opt.route}>{opt.label}</option>
              )}
            </select>
          </fieldset>
        </div>
        <table className={styles.schedule} onMouseOut={this.handleOnHover.clear}>
          <thead>
            <tr>
              <th colSpan={2}>Date</th>
              <th colSpan={2}>Route</th>
              <th>Objectives</th>
            </tr>
          </thead>
          <tbody>
            {(upcomingVoyages.map(voyage => {
              const time = LULU_EPOCH.clone().add(voyage.day, 'days').add(voyage.hour, 'hours').utcOffset(UTC)
              const date = time.format('M/D')
              const dateChange = previousDate !== (previousDate = date)
              const destinationCode = voyage.destinationCode

              return (
                <tr
                  key={`${voyage.day}:${voyage.hour}`}
                  className={cn(
                    dateChange && styles.dateChange,
                    filter === 'none' && destinationCode === hover && styles.hover
                  )}
                  onMouseOver={this.handleOnHover[destinationCode]}
                  onClick={this.handleOnClick[destinationCode]}
                >
                  <td className={styles.date}>{dateChange && date}</td>
                  <td className={styles.time}>{time.format('HH:mm')}</td>
                  <td className={styles.destinationName}>{DEST_MAP[destinationCode[0]]}</td>
                  <td className={styles.destinationTime}>{TIME_MAP[destinationCode[1]]}</td>
                  <td className={styles.objectives}>{OBJECTIVES_MAP[destinationCode].map(icon => <div key={icon} className={cn(styles.fishIcon, styles[icon])} />)}</td>
                </tr>
              )
            }))}
          </tbody>
        </table>
        {(() => {
          switch (select) {
            case 'ND':
              return (
                <>
                  <strong>Northern Strait {TIME_MAP.D}</strong>
                  <ol>
                    <li>Southern Strait {TIME_MAP.S}</li>
                    <li>Galadion Bay {TIME_MAP.N}</li>
                    <li>Northern Strait {TIME_MAP.D}</li>
                  </ol>
                </>
              )
            case 'RD':
              return (
                <>
                  <strong>Rhotano Sea {TIME_MAP.D}</strong>
                  <ol>
                    <li>Galadion Bay {TIME_MAP.S}</li>
                    <li>Southern Strait {TIME_MAP.N}</li>
                    <li>Rhotano Sea {TIME_MAP.D}</li>
                  </ol>
                </>
              )
            case 'NS':
              return (
                <>
                  <strong>Northern Strait {TIME_MAP.S}</strong>
                  <ol>
                    <li>Southern Strait {TIME_MAP.N}</li>
                    <li>Galadion Bay {TIME_MAP.D}</li>
                    <li>Northern Strait {TIME_MAP.S}</li>
                  </ol>
                </>
              )
            case 'RS':
              return (
                <>
                  <strong>Rhotano Sea {TIME_MAP.S}</strong>
                  <ol>
                    <li>Galadion Bay {TIME_MAP.N}</li>
                    <li>Southern Strait {TIME_MAP.D}</li>
                    <li>Rhotano Sea {TIME_MAP.S}</li>
                  </ol>
                </>
              )
            case 'NN':
              return (
                <>
                  <strong>Northern Strait {TIME_MAP.N}</strong>
                  <ol>
                    <li>Southern Strait {TIME_MAP.D}</li>
                    <li>Galadion Bay {TIME_MAP.S}</li>
                    <li>Northern Strait {TIME_MAP.N}</li>
                  </ol>
                </>
              )
            case 'RN':
              return (
                <>
                  <strong>Rhotano Sea {TIME_MAP.N}</strong>
                  <ol>
                    <li>Galadion Bay {TIME_MAP.D}</li>
                    <li>Southern Strait {TIME_MAP.S}</li>
                    <li>Rhotano Sea {TIME_MAP.N}</li>
                  </ol>
                </>
              )
            default:
              return <p>Click on a route above to view its details here.</p>
          }
        })()}
      </>
    )
  }
}

export default OceanFishing
