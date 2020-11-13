import React, { useState, useEffect } from 'react'
import Page from '../src/Page'
import UpcomingVoyages from '../src/ocean-fishing/UpcomingVoyages'
import RouteInformation from '../src/ocean-fishing/RouteInformation'
import AchievementsInformation from '../src/ocean-fishing/AchievementsInformation'

const UPDATE_INTERVAL = 30 * 1000

const OceanFishing = () => {
  const [now, setNow] = useState(null)
  const [selectedRoute, setSelectedRoute] = useState(null)

  useEffect(() => {
    const setTime = () => { setNow(new Date()) }
    const interval = setInterval(setTime, UPDATE_INTERVAL)
    setTime()

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
