import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import cn from 'classnames'

import WeatherIcon from './WeatherIcon.jsx'
import calculateWeathers from './calculate-weathers'
import * as zones from './zones'
import zf from '../foundation.scss'
import styles from './Skywatcher.scss'

const REGIONS = [
  zones.LA_NOSCEA,
  zones.THE_BLACK_SHROUD,
  zones.THANALAN,
  zones.ISHGARD_AND_SURROUNDING_AREAS,
  zones.GYR_ABANIA,
  zones.THE_FAR_EAST,
  zones.NORVRANDT,
  zones.EUREKA,
  zones.OTHERS
]
const ZONES = REGIONS.map(region => region.zones).flat()
const WEATHERS_COUNT = 5
const WEATHER_THUNDERSTORM = 'Thunder' + String.fromCharCode(173) + 'storms'
const EORZEAN_RATIO = 1440 / 70
const UPDATE_INTERVAL = 1000

function getEorzeanTime (now) {
  return new Date(Math.floor(now.getTime() * EORZEAN_RATIO))
}

function padZeroes (str) {
  return ('0' + str).slice(-2)
}

class Skywatcher extends Component {
  constructor (props) {
    super(props)

    this.state = {
      now: new Date()
    }

    this.updateTime = this.updateTime.bind(this)
    this.handleOnSelectFilter = this.handleOnSelectFilter.bind(this)
  }

  componentDidMount () {
    document.title = 'Weather'
    this.interval = setInterval(this.updateTime, UPDATE_INTERVAL)
  }

  componentWillUnmount () {
    this.interval && clearInterval(this.interval)
  }

  updateTime () {
    this.setState({
      now: new Date()
    })
  }

  handleOnSelectFilter (event) {
    const filter = event.target.value
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: filter === 'none' ? null : `?filter=${filter}`
    })
  }

  render () {
    const { location } = this.props
    const { now } = this.state
    const weathers = calculateWeathers(ZONES, WEATHERS_COUNT, now)
    const query = new URLSearchParams(location.search)
    const filter = query.get('filter')
    const region = filter && REGIONS.find(region => region.query === filter)
    const eorzeanTime = getEorzeanTime(now)
    const timeChunk = Math.floor(eorzeanTime.getHours() / 8) * 8

    return (
      <>
        <h1>Skywatcher</h1>
        <p>The time in Eorzea is <strong>{padZeroes(eorzeanTime.getHours())}:{padZeroes(eorzeanTime.getMinutes())}</strong>.</p>
        <div className={cn(zf.gridX, zf.gridPaddingX)}>
          <fieldset className={cn(zf.cell)}>
            <select onChange={this.handleOnSelectFilter} value={filter || 'none'}>
              <option value='none'>Show all regions</option>
              {REGIONS.map(region =>
                <option key={region.query} value={region.query}>{region.name}</option>
              )}
            </select>
          </fieldset>
        </div>
        <div className={zf.tableScroll}>
          <table className={cn(styles.weathers, zf.hover)}>
            <tbody>
              {(region ? [region] : REGIONS).map(region =>
                <React.Fragment key={region.name}>
                  <tr className={styles.region}>
                    <th colSpan={WEATHERS_COUNT + 2}>
                      <h4>{region.name}</h4>
                    </th>
                  </tr>
                  <tr className={styles.time}>
                    <th />
                    {Array(WEATHERS_COUNT + 1).fill().map((_, index) =>
                      <th key={index} scope='col'>
                        {padZeroes((24 + timeChunk + 8 * (index - 1)) % 24) + ':00'}
                      </th>
                    )}
                  </tr>
                  {region.zones.map(zone =>
                    <tr key={zone}>
                      <th className={styles.zone}>{weathers[zone].zoneName}</th>
                      {weathers[zone].zoneWeathers.map((weather, index) =>
                        <td key={index}>
                          <WeatherIcon name={weather} />
                          <br />
                          {weather === 'Thunderstorms' ? WEATHER_THUNDERSTORM : weather}
                        </td>
                      )}
                    </tr>
                  )}
                </React.Fragment>
              )}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default withRouter(Skywatcher)
