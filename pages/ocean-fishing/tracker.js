import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Page from '../../src/Page'

const OceanFishing = () => {
  const [now, setNow] = useState(null)

  useEffect(() => {
    let interval
    (function loop () {
      const now = new Date()
      setNow(now)
      interval = setTimeout(loop, 60000 - now.getTime() % 60000)
    })()

    return () => {
      clearTimeout(interval)
    }
  }, [])

  return (
    <Page title='Ocean Fishing Tracker'>
      <Typography paragraph>hello</Typography>
    </Page>
  )
}

export default OceanFishing
