import React, { Component } from 'react'
import moment from 'moment'
import cn from 'classnames'
import calculateVoyages, { LULU_EPOCH } from './calculate-voyages'
import baitChains from './bait-chains'
import FishIcon from './FishIcon.jsx'
import TimeIcon from './TimeIcon.jsx'

import zf from '../foundation.scss'
import styles from './OceanFishing.scss'

const UTC = moment().utcOffset()
const JST_UTC = 540
const UPDATE_INTERVAL = 60000
const DEST_MAP = {
  S: 'Southern Strait',
  G: 'Galadion Bay',
  N: 'Northern Strait',
  R: 'Rhotano Sea'
}
const TIME_MAP = {
  D: TimeIcon.Day,
  S: TimeIcon.Sunset,
  N: TimeIcon.Night
}
const OBJECTIVES_MAP = {
  ND: ['sothis', 'elasmosaurus'],
  RD: ['sharks', 'coralManta'],
  NS: ['seadragons', 'coralManta'],
  RS: ['sothis', 'stonescale'],
  NN: ['octopodes'],
  RN: ['jellyfish']
}
const ROUTE_MAP = {
  N: ['S', 'G', 'N'],
  R: ['G', 'S', 'R']
}
const BLUE_FISH_MAP = {
  GN: 'sothis',
  SN: 'coralManta',
  ND: 'elasmosaurus',
  RS: 'stonescale'
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
    const upcomingVoyages = calculateVoyages(
      now,
      Math.min(Math.max(+numRows, 1), 100),
      filter === 'none' ? null : filter
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
            <legend>Filter by route</legend>
            <select onChange={this.handleOnSelectFilter} value={filter}>
              {[
                { route: 'none', label: 'None' },
                { route: 'ND', label: 'Northern Strait - Day' },
                { route: 'NS', label: 'Northern Strait - Sunset' },
                { route: 'NN', label: 'Northern Strait - Night' },
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
                  <td className={styles.objectives}>
                    {OBJECTIVES_MAP[destinationCode].map(name => <FishIcon key={name} name={name} />)}
                  </td>
                </tr>
              )
            }))}
          </tbody>
        </table>
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
                  {routeStops.map(stop =>
                    <div key={stop} className={cn(zf.cell, zf.large4)}>
                      {DEST_MAP[stop[0]]} {TIME_MAP[stop[1]]}
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
              return (
                <div className={zf.cell}>
                  <p>This is the Jellyfish route.</p>
                </div>
              )
            case 'NS':
              return (
                <div className={zf.cell}>
                  <p>This is the Seadragons route.</p>
                </div>
              )
            case 'RD':
              return (
                <div className={zf.cell}>
                  <p>This is the Sharks route.</p>
                  <div className={cn(styles.routeTable, zf.gridX, zf.gridPaddingX)}>
                    <div className={cn(zf.cell, zf.large4)}>
                      {DEST_MAP.G} {TIME_MAP.S}
                      <ul className={styles.catches}>
                        <li>
                          IC; DH-IC-DH post-spectral.<br />
                          {baitChains.tarnishedShark}
                        </li>
                        <li>
                          IC–DH.<br />
                          {baitChains.ghostShark}
                        </li>
                        <li>
                          No buffs.<br />
                          {baitChains.quicksilverBlade}
                        </li>
                        <li>
                          DH–IC–DH.<br />
                          {baitChains.funnelShark}
                        </li>
                        <li className={styles.divider}>
                          <p>Pre-spectral, save GP when possible. Post-spectral, blind DH Tarnished Sharks.</p>
                          <p>During spectral, hook [<strong>!!</strong>]s and [<strong>!!!</strong>]s. IC–DH if you catch a Ghost Shark. [<strong>!!!</strong>] is a blind DH.</p>
                        </li>
                      </ul>
                    </div>
                    <div className={cn(zf.cell, zf.large4)}>
                      {DEST_MAP.S} {TIME_MAP.N}
                      <ul className={styles.catches}>
                        <li><p>No Sharks here.</p><p>Try for Coral Manta?</p></li>
                      </ul>
                    </div>
                    <div className={cn(zf.cell, zf.large4)}>
                      {DEST_MAP.R} {TIME_MAP.D}
                      <ul className={styles.catches}>
                        <li>
                          IC-DH; DH-IC-DH post-spectral.<br />
                          {baitChains.chromeHammerhead}
                        </li>
                        <li>
                          No buffs.<br />
                          {baitChains.sweeper}
                        </li>
                        <li>
                          DH-IC-DH.<br />
                          {baitChains.executioner}
                        </li>
                        <li className={styles.divider}>
                          <p>Pre-spectral, don’t blind DH. Post-spectral, blind DH Chrome Hammerheads.</p>
                          <p>During spectral, hook [<strong>!!</strong>]s and [<strong>!!!</strong>]s. If you catch a Sweeper, can use IC if high on GP. [<strong>!!!</strong>] is a blind DH.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            case 'NN':
              return (
                <div className={zf.cell}>
                  <p>This is the Octopodes route.</p>
                  <div className={cn(styles.routeTable, zf.gridX, zf.gridPaddingX)}>
                    <div className={cn(zf.cell, zf.large4)}>
                      {DEST_MAP.S} {TIME_MAP.D}
                      <ul className={styles.catches}>
                        <li><p>No octopodes here.</p></li>
                      </ul>
                    </div>
                    <div className={cn(zf.cell, zf.large4)}>
                      {DEST_MAP.G} {TIME_MAP.S}
                      <ul className={styles.catches}>
                        <li>
                          IC–DH at 16-28s.<br />
                          {baitChains.cyanOctopus}
                        </li>
                        <li>
                          DH–IC–DH at &lt;3s.<br />
                          {baitChains.mermansMane}
                        </li>
                        <li className={styles.divider}>
                          <p>Can blind DH the Cyan Octopodes at 25s, or at 19s with a SS’d Jasperhead.</p>
                          <p>During spectral, only the instant [<strong>!!</strong>] is Merman’s Mane; any later is not.</p>
                        </li>
                      </ul>
                    </div>
                    <div className={cn(zf.cell, zf.large4)}>
                      {DEST_MAP.N} {TIME_MAP.N}
                      <ul className={styles.catches}>
                        <li>
                          DH–IC–DH at 4s.<br />
                          {baitChains.mopbeard}
                        </li>
                        <li className={styles.divider}>
                          <p>The earlier [<strong>!!</strong>] is Coccosteus.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
          }
        })()}
      </>
    )
  }
}

export default OceanFishing
