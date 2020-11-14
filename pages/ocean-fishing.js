import React, { useState, useEffect } from 'react'
import Page from '../src/Page'
import UpcomingVoyages from '../src/ocean-fishing/UpcomingVoyages'
import RouteInformation from '../src/ocean-fishing/RouteInformation'
import AchievementsInformation from '../src/ocean-fishing/AchievementsInformation'

const OceanFishing = () => {
  const [now, setNow] = useState(null)
  const [selectedRoute, setSelectedRoute] = useState(null)

  useEffect(() => {
    let interval
    (function loop () {
      const now = new Date()
      setNow(now)
      interval = setTimeout(loop, 60000 - now.getTime() % 60000)
    })()

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Page title='Ocean Fishing'>
      <UpcomingVoyages now={now} onSelectRoute={setSelectedRoute} />
      <RouteInformation now={now} selectedRoute={selectedRoute} />
      <AchievementsInformation selectedRoute={selectedRoute} />
    </Page>
  )
}

export default OceanFishing
