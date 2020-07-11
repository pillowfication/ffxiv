import React, { useEffect, useState } from 'react'
import getEorzeanTime from '../modules/skywatcher/get-eorzean-time'
import Typography from '@material-ui/core/Typography'
import WeatherTable from '../modules/skywatcher/WeatherTable'

const UPDATE_INTERVAL = 1000

export default function Skywatcher (props) {
  const [now, setNow] = useState(null)

  useEffect(() => {
    const setTime = () => { setNow(new Date()) }
    const interval = setInterval(setTime, UPDATE_INTERVAL)
    setTime()

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <Typography variant='h1' gutterBottom>Skywatcher</Typography>
      <Typography paragraph>
        The time in Eorzea is <b>{now ? getEorzeanTime(now).toString() : '…'}</b>.
      </Typography>
      <WeatherTable now={now} />
    </>
  )
}
