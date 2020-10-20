import React, { useEffect, useState } from 'react'
import { getEorzeanTime } from '../src/skywatcher/get-eorzean-time'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import UpcomingWeather from '../src/skywatcher/UpcomingWeather'
import Forecaster from '../src/skywatcher/Forecaster'
import About from '../src/skywatcher/About'

const UPDATE_INTERVAL = 175 / 60 * 1000 / 2

const Skywatcher = () => {
  const [now, setNow] = useState(null)

  useEffect(() => {
    const setTime = () => { setNow(new Date()) }
    let interval

    const loop = () => {
      interval = setTimeout(() => {
        setTime()
        loop()
      }, UPDATE_INTERVAL)
    }
    loop()

    setTime()

    return () => {
      clearTimeout(interval)
    }
  }, [])

  return (
    <Page title='Skywatcher'>
      <Typography paragraph>
        The time in Eorzea is <b>{now ? getEorzeanTime(now).toString() : '…'}</b>.
      </Typography>
      <Forecaster now={now} />
      <UpcomingWeather now={now} />
      <About />
    </Page>
  )
}

export default Skywatcher
