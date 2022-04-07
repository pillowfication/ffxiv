import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import Link from '../../src/Link'
import Page from '../../src/Page'
import Section from '../../src/Section'
import NavigationBar from '../../src/ocean-fishing/NavigationBar'
import UpcomingVoyages from '../../src/ocean-fishing/UpcomingVoyages'
import RouteInformation from '../../src/ocean-fishing/RouteInformation'
import AchievementsInformation from '../../src/ocean-fishing/AchievementsInformation'
import { DestTime } from '../../src/ocean-fishing/ffxiv-ocean-fishing'
import { useTranslation } from '../../src/i18n'

export const ChecklistContext = React.createContext<{ checklist: number[], setChecklist: (checklist: number[]) => void }>(
  { checklist: [], setChecklist: () => {} }
)

const OceanFishing = (): React.ReactElement => {
  const { t } = useTranslation('ocean-fishing')
  const [now, setNow] = useState<Date>(new Date())
  const [selectedRoute, setSelectedRoute] = useState<DestTime | null>(null) // This is initialized when UpcomingVoyages is mounted
  const [checklist, setChecklist] = useState<number[] | null>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout
    (function loop () {
      const now = new Date()
      setNow(now)
      interval = setTimeout(loop, 60000 - now.getTime() % 60000)
    })()

    if (typeof window !== 'undefined') {
      const data = window.localStorage.getItem('ocean-fishing/checklist')
      if (data !== null) {
        setChecklist(data.split(',').map(x => Number(x) | 0).filter(x => x))
      } else {
        setChecklist([])
      }
    }

    return () => {
      clearTimeout(interval)
    }
  }, [])

  useEffect(() => {
    if (checklist !== null) {
      window.localStorage.setItem('ocean-fishing/checklist', checklist.join(','))
    }
  }, [checklist])

  return (
    <Page title={t('_title')} description={t('_description')}>
      <NavigationBar page='/' />
      <ChecklistContext.Provider value={{ checklist: checklist ?? [], setChecklist }}>
        <Section>
          <Typography paragraph>
            Data are taken from the <MuiLink href='https://docs.google.com/spreadsheets/d/1R0Nt8Ye7EAQtU8CXF1XRRj67iaFpUk1BXeDgt6abxsQ/edit#gid=149797934'>Ocean Fishing Spreadsheet</MuiLink> managed by Tyo’to Tayuun. Bite times are from <MuiLink href='https://ffxivteamcraft.com/'>Teamcraft</MuiLink>. For questions/comments/corrections, please visit the <MuiLink href='https://discord.gg/AnFaDpN'>Fisherman’s Horizon Discord</MuiLink> or message Lulu Pillow@Adamantoise or Pillowfication#0538.
          </Typography>
          <Typography paragraph>
            I’ve also made a Chrome Extension for adding ocean fishes to the <Link href='https://ff14fish.carbuncleplushy.com/'>Carbuncle Plushy FFX|V Fish Tracker App</Link> available on the <Link href='https://chrome.google.com/webstore/detail/add-ocean-fish-to-ff14-fi/oihefgmncbnicjmcdccjflagboaidenh'>Chrome Web Store</Link>.
          </Typography>
        </Section>
        <UpcomingVoyages now={now} onSelectRoute={setSelectedRoute} checklist={checklist ?? []} />
        {selectedRoute !== null && (
          <>
            <RouteInformation now={now} route={selectedRoute} />
            <AchievementsInformation route={selectedRoute} />
          </>
        )}
      </ChecklistContext.Provider>
    </Page>
  )
}

OceanFishing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'ocean-fishing']
})

export default OceanFishing
