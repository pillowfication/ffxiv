import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'
import Link from '../../src/Link'
import Page from '../../src/Page'
import Section from '../../src/Section'
import UpcomingVoyages from '../../src/ocean-fishing/UpcomingVoyages'
import RouteInformation from '../../src/ocean-fishing/RouteInformation'
import AchievementsInformation from '../../src/ocean-fishing/AchievementsInformation'

const OceanFishing = () => {
  const [now, setNow] = useState(null)
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [checklist, setChecklist] = useState([])

  useEffect(() => {
    let interval
    (function loop () {
      const now = new Date()
      setNow(now)
      interval = setTimeout(loop, 60000 - now.getTime() % 60000)
    })()

    if (typeof window === 'undefined') {
      setChecklist([])
    } else {
      const data = window.localStorage.getItem('ocean-fishing/checklist')
      if (!data) {
        setChecklist([])
      } else {
        setChecklist(data.split(','))
      }
    }

    return () => {
      clearTimeout(interval)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('ocean-fishing/checklist', checklist.join(','))
  }, [checklist])

  return (
    <Page title='Ocean Fishing'>
      <Section>
        <Alert severity='info'>Information on new routes may be missing or incorrect.</Alert>
      </Section>
      <Section>
        <Typography paragraph>
          For a static list of all the fish, see the <Link href='/ocean-fishing/fish'>Fish page</Link>.
        </Typography>
      </Section>
      <UpcomingVoyages now={now} onSelectRoute={setSelectedRoute} />
      <RouteInformation now={now} selectedRoute={selectedRoute} checklist={checklist} setChecklist={setChecklist} />
      <AchievementsInformation selectedRoute={selectedRoute} />
    </Page>
  )
}

export default OceanFishing
