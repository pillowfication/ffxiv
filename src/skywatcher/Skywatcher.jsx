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

class Skywatcher extends Component {
  constructor (props) {
    super(props)

    this.handleOnSelectFilter = this.handleOnSelectFilter.bind(this)
  }

  componentDidMount () {
    document.title = 'Weather'
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
    const weathers = calculateWeathers(ZONES, WEATHERS_COUNT)
    const query = new URLSearchParams(location.search)
    const filter = query.get('filter')
    const region = filter && REGIONS.find(region => region.query === filter)

    return (
      <>
        <h1>Skywatcher</h1>
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
                  {region.zones.map(zone =>
                    <tr key={zone}>
                      <th className={styles.zone}>{weathers[zone].zoneName}</th>
                      {weathers[zone].zoneWeathers.map((weather, index) =>
                        <td key={index}>
                          <WeatherIcon name={weather} />
                          <br />
                          {weather}
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
