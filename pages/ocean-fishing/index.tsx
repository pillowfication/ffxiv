import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import Link from '../../src/Link'
import Page from '../../src/Page'
import Section from '../../src/Section'
import UpcomingVoyages from '../../src/ocean-fishing/UpcomingVoyages'
import RouteInformation from '../../src/ocean-fishing/RouteInformation'
import AchievementsInformation from '../../src/ocean-fishing/AchievementsInformation'
import * as maps from '../../src/ocean-fishing/maps'
import i18n from '../../i18n'
import { TFunction } from 'next-i18next'

export const ChecklistContext = React.createContext<{ checklist: number[], setChecklist: (checklist: number[]) => void }>(
  { checklist: [], setChecklist: () => {} }
)

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

    if (typeof window !== 'undefined') {
      const data = window.localStorage.getItem('ocean-fishing/checklist')
      if (data) {
        setChecklist(data.split(',').map(x => Number(x) | 0).filter(x => x))
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
      <ChecklistContext.Provider value={{ checklist, setChecklist }}>
        <Section>
          <Typography paragraph>
            Data are taken from the <MuiLink href='https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit?usp=sharing'>Ocean Fishing Spreadsheet</MuiLink> managed by S’yahn Tia. Bite times are from <MuiLink href='https://ffxivteamcraft.com/'>Teamcraft</MuiLink> when available. For questions/comments/corrections, please visit the <MuiLink href='https://discord.gg/AnFaDpN'>Fisherman’s Horizon Discord</MuiLink> or message Lulu Pillow@Adamantoise or Pillowfication#0538.
          </Typography>
          <Typography paragraph>
            For a static list of all the fish and more information, see the <Link href='/ocean-fishing/fish'>Fish page</Link>.
          </Typography>
        </Section>
        <UpcomingVoyages now={now} onSelectRoute={setSelectedRoute} />
        <RouteInformation now={now} selectedRoute={selectedRoute} />
        <AchievementsInformation selectedRoute={selectedRoute} />
      </ChecklistContext.Provider>
    </Page>
  )
}

OceanFishing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'ocean-fishing']
})

export default i18n.withTranslation('ocean-fishing')(OceanFishing)
