import React, { useEffect, useState } from 'react'
import getEorzeanTime from '../src/skywatcher/get-eorzean-time'
import Typography from '@material-ui/core/Typography'
import WeatherTable from '../src/skywatcher/WeatherTable'
import WeatherForecaster from '../src/skywatcher/WeatherForecaster'

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
      <WeatherForecaster now={now} />
      <WeatherTable now={now} />
    </>
  )
}
