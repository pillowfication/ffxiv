import React, { Component } from 'react'
import moment from 'moment'
import cn from 'classnames'
import calculateVoyages, { LULU_EPOCH } from './calculate-voyages'
import FishIcon from './FishIcon.jsx'
import TimeIcon from './TimeIcon.jsx'

import zf from '../foundation.scss'
import styles from './OceanFishing.scss'

const UTC = moment().utcOffset()
const JST_UTC = 540
const UPDATE_INTERVAL = 123456
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
const BAIT_CHAINS = {
  S: [
    createBaitChain(
      [{ name: 'krill' }, { name: 'spectralDiscus', tug: 3 }]
    ),
    createBaitChain(
      [{ name: 'plumpWorm' }, { name: 'littleLeviathan', tug: 3 }],
      [{
        count: 1,
        bait: [{ name: 'krill' }, { name: 'ghoulBarracuda', tug: 2 }, { name: 'gladius', tug: 2 }]
      }]
    )
  ],
  G: [
    createBaitChain(
      [{ name: 'plumpWorm' }, { name: 'spectralMegalodon', tug: 3 }]
    ),
    createBaitChain(
      [{ name: 'krill' }, { name: 'drunkfish', tug: 3 }],
      [{
        count: 3,
        bait: [{ name: 'krill' }, { name: 'galadionChovy', tug: 1 }]
      }]
    )
  ],
  N: [
    createBaitChain(
      [{ name: 'ragworm' }, { name: 'spectralSeaBo', tug: 3 }]
    ),
    createBaitChain(
      [{ name: 'ragworm' }, { name: 'shootingStar', tug: 3 }],
      [{
        count: 1,
        bait: [{ name: 'ragworm' }, { name: 'tossedDagger', tug: 1 }, { name: 'elderDinichthys', tug: 2 }]
      }]
    )
  ],
  R: [
    createBaitChain(
      [{ name: 'plumpWorm' }, { name: 'spectralBass', tug: 3 }]
    ),
    createBaitChain(
      [{ name: 'krill' }, { name: 'sabaton', tug: 3 }],
      [{
        count: 2,
        bait: [{ name: 'plumpWorm' }, { name: 'crimsonMonkfish', tug: 2 }]
      }]
    )
  ],
  coralManta: createBaitChain(
    [{ name: 'shrimpCageFeeder' }, { name: 'coralManta', tug: 3 }],
    [{
      count: 2,
      bait: [{ name: 'plumpWorm' }, { name: 'hiAetherlouse', tug: 1 }, { name: 'greatGrandmarlin', tug: 2 }]
    }]
  ),
  sothis: createBaitChain(
    [{ name: 'glowworm' }, { name: 'sothis', tug: 3 }],
    [{
      count: 2,
      bait: [{ name: 'ragworm' }, { name: 'heavenskey', tug: 1 }]
    }, {
      count: 1,
      bait: [{ name: 'krill' }, { name: 'navigatorsPrint', tug: 1 }]
    }]
  ),
  elasmosaurus: createBaitChain(
    [{ name: 'heavySteelJig' }, { name: 'elasmosaurus', tug: 3 }],
    [{
      count: 3,
      bait: [{ name: 'plumpWorm' }, { name: 'gugrusaurus', tug: 3 }]
    }]
  ),
  stonescale: createBaitChain(
    [{ name: 'ratTail' }, { name: 'stonescale', tug: 3 }],
    [{
      count: 2,
      bait: [{ name: 'plumpWorm' }, { name: 'deepSeaEel', tug: 2 }]
    }, {
      count: 1,
      bait: [{ name: 'ragworm' }, { name: 'silencer', tug: 1 }]
    }]
  )
}

function paddedZero (n) {
  return n > 9 ? n : '0' + n
}

function toUTCString (utc) {
  return `UTC${utc >= 0 ? '+' : '−'}${paddedZero(Math.abs(utc / 60 | 0))}:${paddedZero(Math.abs(utc) % 60)}`
}

function createBaitChain (bait, intuitionBait) {
  const elems = []
  bait.forEach(({ name, tug }, index) => {
    elems.push(
      <div key={index} className={styles.baitGroup}>
        <FishIcon name={name} />
        {tug && <span className={cn(styles.tug, [styles.light, styles.medium, styles.heavy][tug - 1])}>{'!'.repeat(tug)}</span>}
      </div>
    )
    if (index < bait.length - 1) {
      elems.push('▸')
    }
  })

  if (intuitionBait) {
    elems.push(
      <ul key='int'>
        {intuitionBait.map((bait, index) =>
          <li key={index}>
            {bait.count} {createBaitChain(bait.bait)}
          </li>
        )}
      </ul>
    )
  }

  return elems
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
            const timeUntil = LULU_EPOCH.clone().add(next.day, 'days').add(next.hour, 'hours').utcOffset(UTC).diff(now)

            return (
              <div className={cn(styles.routeDetails, zf.cell)}>
                <h4>{DEST_MAP[dest]} {TIME_MAP[time]}</h4>
                {timeUntil <= 0 ? 'next is boarding now / en route' : 'next is in ' + moment.duration(timeUntil).humanize()}
                <div className={cn(styles.routeTable, zf.gridX, zf.gridPaddingX)}>
                  {routeStops.map(stop =>
                    <div key={stop} className={cn(zf.cell, zf.large4)}>
                      {DEST_MAP[stop[0]]} {TIME_MAP[stop[1]]}
                      <ul className={styles.catches}>
                        {BAIT_CHAINS[stop[0]].map((baitChain, index) => <li key={index}>{baitChain}</li>)}
                        {BLUE_FISH_MAP[stop] &&
                          <li className={styles.spectral}>{BAIT_CHAINS[BLUE_FISH_MAP[stop]]}</li>}
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
      </>
    )
  }
}

export default OceanFishing
