import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import Alert from '@material-ui/lab/Alert'
import Link from '../../src/Link'
import Page from '../../src/Page'
import Section from '../../src/Section'
import UpcomingVoyages from '../../src/ocean-fishing/UpcomingVoyages'
import RouteInformation from '../../src/ocean-fishing/RouteInformation'
import AchievementsInformation from '../../src/ocean-fishing/AchievementsInformation'
import * as maps from '../../src/ocean-fishing/maps'

const OceanFishing = () => {
  const [now, setNow] = useState<Date>(null)
  const [selectedRoute, setSelectedRoute] = useState<maps.DestinationStopTime>(null)
  const [checklist, setChecklist] = useState<number[]>([])

  useEffect(() => {
    let interval: NodeJS.Timeout
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
        setChecklist(data.split(',').map(Number).filter(x => x))
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
        <Alert severity='info'>The checklist has been reset to be compatible with <MuiLink href='https://ff14fish.carbuncleplushy.com/'>CarbunclePlushy</MuiLink> and i18n.</Alert>
      </Section>
      <Section>
        <Typography paragraph>
          For a static list of all the fish and more information, see the <Link href='/ocean-fishing/fish'>Fish page</Link>.
        </Typography>
      </Section>
      <UpcomingVoyages now={now} onSelectRoute={setSelectedRoute} />
      <RouteInformation now={now} selectedRoute={selectedRoute} checklist={checklist} setChecklist={setChecklist} />
      <AchievementsInformation selectedRoute={selectedRoute} />
    </Page>
  )
}

export default OceanFishing
