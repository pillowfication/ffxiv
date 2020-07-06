import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import cn from 'classnames'
import PropTypes from 'prop-types'
import calculateVoyages, { LULU_EPOCH } from './calculate-voyages'
import baitChains from './bait-chains'
import FishIcon from './FishIcon.jsx'
import { Jellyfish, Seadragons, Sharks, Octopodes } from './AchievementRoutes.jsx'
import {
  DEST_MAP,
  TIME_MAP,
  OBJECTIVES_MAP,
  ROUTE_MAP,
  BLUE_FISH_MAP,
  FILTER_MAP
} from './maps.jsx'

import zf from '../foundation.scss'
import styles from './OceanFishing.scss'

const UTC = moment().utcOffset()
const JST_UTC = 540
const UPDATE_INTERVAL = 60000

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

    const query = new URLSearchParams(props.location.search)
    const filter = query.get('filter')
    const now = moment().utcOffset(JST_UTC)

    this.state = {
      now: now,
      numRows: 10,
      hover: null,
      select: calculateVoyages(now, 1, FILTER_MAP[filter] || null)[0].destinationCode
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
    document.title = 'Ocean Fishing'
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
    const filter = event.target.value
    this.setState({
      filter: filter,
      select: filter === 'none'
        ? this.state.select
        : calculateVoyages(this.state.now, 1, FILTER_MAP[filter] || null)[0].destinationCode
    })
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: filter === 'none' ? null : `?filter=${filter}`
    })
  }

  handleOnHover (destinationCode) {
    this.setState({ hover: destinationCode })
  }

  handleOnClick (destinationCode) {
    this.setState({ select: destinationCode })
  }

  render () {
    const { location } = this.props
    const { now, numRows, hover, select } = this.state
    const query = new URLSearchParams(location.search)
    const filter = query.get('filter')
    const upcomingVoyages = calculateVoyages(
      now,
      Math.min(Math.max(+numRows, 1), 100),
      FILTER_MAP[filter] || null
    )
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
            <legend>Filter</legend>
            <select onChange={this.handleOnSelectFilter} value={filter || 'none'}>
              <option value='none'>No filter</option>
              <optgroup label='Route'>
                <option onChange={this.handleOnSelectFilter} value='ND'>Northern Strait - Day</option>
                <option onChange={this.handleOnSelectFilter} value='NS'>Northern Strait - Sunset</option>
                <option onChange={this.handleOnSelectFilter} value='NN'>Northern Strait - Night</option>
                <option onChange={this.handleOnSelectFilter} value='RD'>Rhotano Sea - Day</option>
                <option onChange={this.handleOnSelectFilter} value='RS'>Rhotano Sea - Sunset</option>
                <option onChange={this.handleOnSelectFilter} value='RN'>Rhotano Sea - Night</option>
              </optgroup>
              <optgroup label='Blue Fish'>
                <option onChange={this.handleOnSelectFilter} value='sothis'>Sothis</option>
                <option onChange={this.handleOnSelectFilter} value='coral_manta'>Coral Manta</option>
                <option onChange={this.handleOnSelectFilter} value='elasmosaurus'>Elasmosaurus</option>
                <option onChange={this.handleOnSelectFilter} value='stonescale'>Stonescale</option>
              </optgroup>
              <optgroup label='Achievements'>
                <option onChange={this.handleOnSelectFilter} value='jellyfish'>Jellyfish</option>
                <option onChange={this.handleOnSelectFilter} value='seadragons'>Seadragons</option>
                <option onChange={this.handleOnSelectFilter} value='sharks'>Sharks</option>
                <option onChange={this.handleOnSelectFilter} value='octopodes'>Octopodes</option>
              </optgroup>
            </select>
          </fieldset>
        </div>
        <div className={zf.tableScroll}>
          <table className={styles.schedule} onMouseOut={this.handleOnHover.clear}>
            <thead>
              <tr>
                <th colSpan={2}>TIME</th>
                <th colSpan={2}>ROUTE</th>
                <th>OBJECTIVES</th>
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
                      (!filter || filter === 'none') && destinationCode === hover && styles.hover
                    )}
                    onMouseOver={this.handleOnHover[destinationCode]}
                    onClick={this.handleOnClick[destinationCode]}
                  >
                    <td className={styles.date}>{dateChange && date}</td>
                    <td className={styles.time}>{time.format('HH:mm')}</td>
                    <td className={styles.destinationName}>{DEST_MAP[destinationCode[0]]}</td>
                    <td className={styles.destinationTime}>{TIME_MAP[destinationCode[1]]}</td>
                    <td className={styles.objectives}>
                      {OBJECTIVES_MAP[destinationCode].map(name => <FishIcon key={name} name={name} />)}
                    </td>
                  </tr>
                )
              }))}
            </tbody>
          </table>
        </div>
        {(() => {
          if (select !== null) {
            const dest = select[0]
            const time = select[1]
            const times = 'DSN'
            const timeIndex = times.indexOf(time)
            const routeStops = ROUTE_MAP[dest].map((dest, index) => dest + times[(timeIndex + index + 1) % 3])
            const next = calculateVoyages(now, 1, select)[0]
            const nextMoment = LULU_EPOCH.clone().add(next.day, 'days').add(next.hour, 'hours').utcOffset(UTC)
            const timeUntil = nextMoment.diff(now)

            return (
              <div className={cn(styles.routeDetails, zf.cell)}>
                <h4>{DEST_MAP[dest]} {TIME_MAP[time]}</h4>
                next is {
                  timeUntil <= 0
                    ? 'boarding now / en route'
                    : `${moment.duration(timeUntil).humanize(true)} at ${nextMoment.format('HH:mm')}`
                }
                <div className={cn(styles.routeTable, zf.gridX, zf.gridPaddingX)}>
                  {routeStops.map((stop, index) =>
                    <div key={stop} className={cn(zf.cell, zf.medium4)}>
                      <h6>{index + 1}. {DEST_MAP[stop[0]]} {TIME_MAP[stop[1]]}</h6>
                      <ul className={styles.catches}>
                        {baitChains[stop[0]].map((baitChain, index) => <li key={index}>{baitChain}</li>)}
                        {BLUE_FISH_MAP[stop] &&
                          <li className={styles.divider}>{baitChains[BLUE_FISH_MAP[stop]]}</li>}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )
          } else {
            return <p>Click on a route above to view its details here.</p>
          }
        })()}
        {(() => {
          switch (select) {
            case 'RN':
              return <Jellyfish />
            case 'NS':
              return <Seadragons />
            case 'RD':
              return <Sharks />
            case 'NN':
              return <Octopodes />
          }
        })()}
      </>
    )
  }
}

OceanFishing.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(OceanFishing)
