import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../src/Page'
import UpcomingWeather from '../src/skywatcher/UpcomingWeather'
import Forecaster from '../src/skywatcher/Forecaster'
import About from '../src/skywatcher/About'
import { formatTime } from '../src/utils'

const Skywatcher = () => {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout
    (function loop () {
      const now = new Date()
      setNow(now)
      interval = setTimeout(loop, (60000 - (now.getTime() * 1440 / 70) % 60000) / (1440 / 70))
    })()

    return () => {
      clearTimeout(interval)
    }
  }, [])

  return (
    <Page title='Skywatcher'>
      <Typography paragraph>
        The time in Eorzea is <b>{now ? formatTime(new Date(now.getTime() * 1440 / 70)) : '…'}</b>.
      </Typography>
      <Forecaster now={now} />
      <UpcomingWeather now={now} />
      <About />
    </Page>
  )
}

Skywatcher.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default Skywatcher
