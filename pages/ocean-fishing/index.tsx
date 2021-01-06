import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '../../src/Link'
import Page from '../../src/Page'
import Section from '../../src/Section'
import UpcomingVoyages from '../../src/ocean-fishing/UpcomingVoyages'
import RouteInformation from '../../src/ocean-fishing/RouteInformation'
import AchievementsInformation from '../../src/ocean-fishing/AchievementsInformation'
import * as maps from '../../src/ocean-fishing/maps'
import i18n from '../../i18n'
import { TFunction } from 'next-i18next'

type Props = {
  t: TFunction
}

const OceanFishing = ({ t }: Props) => {
  const [now, setNow] = useState<Date | null>(null)
  const [selectedRoute, setSelectedRoute] = useState<maps.DestinationStopTime | null>(null)
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
    <Page title={t('ocean-fishing')}>
      <Section>
        <Typography paragraph>
          Data are taken from the <Link href='https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit?usp=sharing'>Ocean Fishing Spreadsheet</Link> managed by S’yahn Tia. Bite times are from <Link href='https://ffxivteamcraft.com/'>Teamcraft</Link> when available. For questions/comments/corrections, please visit the <Link href='https://discord.gg/AnFaDpN'>Fisherman’s Horizon Discord</Link> or message Lulu Pillow@Adamantoise or Pillowfication#0538.
        </Typography>
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

OceanFishing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'ocean-fishing'],
})

export default i18n.withTranslation('ocean-fishing')(OceanFishing)
