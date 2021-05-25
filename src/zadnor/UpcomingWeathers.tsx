import React, { useEffect, useState } from 'react'
import UpcomingWeatherTable from '../skywatcher/UpcomingWeatherTable'
import { Place } from '../skywatcher/ffxiv-skywatcher/src/types'

const UpcomingWeathers = (): React.ReactElement => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    let interval: NodeJS.Timeout
    ;(function loop () {
      const now = new Date()
      setNow(now)
      interval = setTimeout(() => {
        interval = setTimeout(loop, (60000 - (now.getTime() * 1440 / 70) % 60000) / (1440 / 70))
      }, 0)
    })()

    return () => {
      clearTimeout(interval)
    }
  }, [])

  return (
    <UpcomingWeatherTable
      now={now}
      places={[{ place: Place.Zadnor, weatherRateIndex: 0 }]}
      showLabels
      showLocalTime
      count={14}
      hidePlaceName
    />
  )
}

export default UpcomingWeathers
