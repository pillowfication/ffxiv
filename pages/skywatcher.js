import React, { useEffect, useState } from 'react'
import getEorzeanTime from '../src/skywatcher/get-eorzean-time'
import Typography from '@material-ui/core/Typography'
import UpcomingWeather from '../src/skywatcher/UpcomingWeather'
import Forecaster from '../src/skywatcher/Forecaster'
import About from '../src/skywatcher/About'

const UPDATE_INTERVAL = 2917

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
      <Forecaster now={now} />
      <UpcomingWeather now={now} />
      <About />
    </>
  )
}
