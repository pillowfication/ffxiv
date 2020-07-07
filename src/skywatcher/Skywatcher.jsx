import React, { Component } from 'react'
import cn from 'classnames'
import EorzeaWeather from 'eorzea-weather'

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
  zones.OTHERS,
  zones.EUREKA
]
const ZONES = REGIONS.map(region => region.zones).flat()
const WEATHERS_COUNT = 5

class Skywatcher extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    document.title = 'Weather'
  }

  render () {
    const weathers = calculateWeathers(ZONES, WEATHERS_COUNT)
    console.log(weathers)

    return (
      <>
        <h1>Weather</h1>
        <div className={zf.tableScroll}>
          <table className={styles.weathers}>
            <tbody>
              {REGIONS.map(region =>
                <React.Fragment key={region.name}>
                  <tr className={styles.region}>
                    <th colSpan={WEATHERS_COUNT + 2}>{region.name}</th>
                  </tr>
                  {region.zones.map(zone =>
                    <tr key={zone}>
                      <th className={styles.zone}>{(new EorzeaWeather(zone)).getZoneName()}</th>
                      {weathers[zone].map((weather, index) =>
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

export default Skywatcher
