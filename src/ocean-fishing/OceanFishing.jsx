import React, { Component } from 'react'
import moment from 'moment'
import cn from 'classnames'

import styles from './OceanFishing.scss'

const UTC = moment().utcOffset()
const JST_UTC = 540
const NUM_ROWS = 20

const LULU_EPOCH = moment('2020-06-28 00:00+09:00').subtract(666, 'days')
const DEST_CYCLE = ['N', 'R']
const TIME_CYCLE = ['D', 'S', 'N']
const DEST_MAP = {
  N: 'Northern Merlthor',
  R: 'Rhotano Sea'
}
const TIME_MAP = {
  D: (
    <svg width={32} height={32}>
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
    <svg width={32} height={32}>
      <path d='M 29 24 A 10.4 10.4 0 1 0 10 24 Z' stroke='black' fill='yellow' />
      <path d='M 2 30 L 2 26 L 30 26 L 30 30 Z' stroke='black' fill='yellow' />
    </svg>
  ),
  N: (
    <svg width={32} height={32}>
      <path d='M 14 3 A 12 12 0 1 1 3 18 A 9 9 0 1 0 14 3 Z' stroke='black' fill='yellow' />
    </svg>
  )
}
const OBJECTIVES_MAP = {
  ND: ['sothis', 'elasmosaurus'],
  RD: ['sharks', 'coralManta'],
  NS: ['dragons', 'coralManta'],
  RS: ['sothis', 'stonescale'],
  NN: ['octopodes'],
  RN: ['jellyfish']
}

function getVoyages (time, count) {
  // Important that `time` is UTC+09:00
  let day = time.diff(LULU_EPOCH, 'days')
  let hour = time.hour()

  // Adjust time to fall on the next voyage
  if (time.minute() < 15) hour -= 1
  hour += (hour & 1) ? 2 : 1
  if (hour === 0) {
    day -= 1
    hour = 24
  } else if (hour === 25) {
    day += 1
    hour = 1
  }

  // Find the current voyage
  const voyageNumber = hour >> 1
  let destIndex = (day + voyageNumber) % 2
  let timeIndex = ((day >> 1) + (voyageNumber >> 1)) % 3

  // Loop until however many voyages are found
  const upcomingVoyages = []
  while (upcomingVoyages.length < count) {
    upcomingVoyages.push({
      day,
      hour,
      destinationCode: DEST_CYCLE[destIndex] + TIME_CYCLE[timeIndex]
    })
    if (hour === 23) {
      day += 1
      hour = 1
      timeIndex = (timeIndex + ((day & 1) ? 1 : 2)) % 3
    } else {
      hour += 2
      destIndex = (destIndex + 1) % 2
      timeIndex = (timeIndex + ((hour >> 1 & 1) ? 0 : 1)) % 3
    }
  }
  return upcomingVoyages
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

    this.state = {
      now: moment().utcOffset(JST_UTC),
      hoverDestinationCode: null
    }

    this.updateTime = this.updateTime.bind(this)
    this.handleOnHover = {
      ND: this.handleOnHover.bind(this, 'ND'),
      RD: this.handleOnHover.bind(this, 'RD'),
      NS: this.handleOnHover.bind(this, 'NS'),
      RS: this.handleOnHover.bind(this, 'RS'),
      NN: this.handleOnHover.bind(this, 'NN'),
      RN: this.handleOnHover.bind(this, 'RN'),
      clear: this.handleOnHover.bind(this, null)
    }
  }

  updateTime () {
    this.setState({ now: moment().utcOffset(JST_UTC) })
  }

  handleOnHover (destinationCode) {
    this.setState({ hoverDestinationCode: destinationCode })
  }

  render () {
    const { now, hoverDestinationCode } = this.state

    const upcomingVoyages = getVoyages(now, NUM_ROWS)

    let previousDate

    return (
      <>
        <h1>Ocean Fishing</h1>
        <p>
          Your <a href='https://en.wikipedia.org/wiki/UTC_offset'>UTC offset</a> is <strong>({toUTCString(UTC)})</strong>. The time in Japan <strong>({toUTCString(JST_UTC)})</strong> is <strong>{now.utcOffset(JST_UTC).format('HH:mm')}</strong>.
        </p>
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
              const dateChange = (date !== previousDate)
              previousDate = date

              const destinationCode = voyage.destinationCode

              return (
                <tr
                  key={`${voyage.day}:${voyage.hour}`}
                  className={cn(dateChange && styles.dateChange, destinationCode === hoverDestinationCode && styles.hover)}
                  onMouseOver={this.handleOnHover[destinationCode]}
                >
                  <td className={styles.date}>{dateChange && date}</td>
                  <td className={styles.time}>{time.format('HH:mm')}</td>
                  <td className={styles.destinationName}>{DEST_MAP[destinationCode[0]]}</td>
                  <td className={styles.destinationTime}>{TIME_MAP[destinationCode[1]]}</td>
                  <td>{OBJECTIVES_MAP[destinationCode].map(i => <div key={i} className={cn(styles.icon, styles[i])} />)}</td>
                </tr>
              )
            }))}
          </tbody>
        </table>
      </>
    )
  }
}

export default OceanFishing
