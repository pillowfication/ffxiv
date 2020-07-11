import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import OceanFishingTable from '../modules/ocean-fishing/OceanFishingTable'
import RouteInformation from '../modules/ocean-fishing/RouteInformation'
import AchievementsInformation from '../modules/ocean-fishing/AchievementsInformation'

const JST_UTC = 540
const UPDATE_INTERVAL = 30 * 1000

function paddedZero (n) {
  return n > 9 ? n : '0' + n
}

function toUTCString (utc) {
  return `UTC${utc >= 0 ? '+' : '−'}${paddedZero(Math.abs(utc / 60 | 0))}:${paddedZero(Math.abs(utc) % 60)}`
}

export default function OceanFishing () {
  const [now, setNow] = useState(null)
  const [selectedRoute, setSelectedRoute] = useState(null)

  useEffect(() => {
    const setTime = () => { setNow(moment()) }
    const interval = setInterval(setTime, UPDATE_INTERVAL)
    setTime()

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <Typography variant='h1' gutterBottom>Ocean Fishing</Typography>
      <Typography paragraph>
        Your <Link href='https://en.wikipedia.org/wiki/UTC_offset'>UTC offset</Link> is ({now ? toUTCString(moment().utcOffset()) : '…'}). The time in Japan ({toUTCString(JST_UTC)}) is <strong>{now ? now.utcOffset(JST_UTC).format('HH:mm') : '…'}</strong>.
      </Typography>
      <OceanFishingTable now={now} onSelectRoute={setSelectedRoute} />
      <RouteInformation now={now} selectedRoute={selectedRoute} />
      <AchievementsInformation selectedRoute={selectedRoute} />
    </>
  )
}
