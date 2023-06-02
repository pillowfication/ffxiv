import React, { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Typography from '@mui/material/Typography'
import Link from '../../src/Link'
import Page from '../../src/Page'
import Section from '../../src/Section'
import NavigationBar from '../../src/ocean-fishing/NavigationBar'
import UpcomingVoyages from '../../src/ocean-fishing/UpcomingVoyages'
import RouteInformation from '../../src/ocean-fishing/RouteInformation'
import AchievementsInformation from '../../src/ocean-fishing/AchievementsInformation'
import { DestTime } from '../../src/ocean-fishing/ffxiv-ocean-fishing'
import { Alert } from '@mui/material'

export const ChecklistContext = React.createContext<{ checklist: number[], setChecklist: (checklist: number[]) => void }>({
  checklist: [],
  setChecklist: () => {}
})

const OceanFishing = (): React.ReactElement => {
  const { t } = useTranslation('ocean-fishing')
  const [now, setNow] = useState<Date>(new Date())
  const [selectedRoute, setSelectedRoute] = useState<DestTime | null>(null) // This is initialized when UpcomingVoyages is mounted
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
      if (data !== null) {
        const checkset = new Set<number>()
        for (const datum of data.split(',')) {
          checkset.add(Number(datum) | 0)
        }
        setChecklist(Array.from(checkset).filter(x => x).sort((a, b) => a - b))
      } else {
        setChecklist([])
      }
    }

    return () => {
      clearTimeout(interval)
    }
  }, [])
  useEffect(() => {
    if (typeof window !== 'undefined' && checklist !== null) {
      window.localStorage.setItem('ocean-fishing/checklist', checklist.join(','))
    }
  }, [checklist])

  return (
    <Page title={t('_title')} description={t('_description')}>
      <Alert color='info' sx={{ mb: 2 }}>These pages are undergoing a lot of change! Things are definitely broken, but hopefully nothing crashes.</Alert>
      <NavigationBar />
      <ChecklistContext.Provider value={{ checklist: checklist ?? [], setChecklist }}>
        <Section>
          <Typography paragraph>
            Data are taken from the <Link href='https://docs.google.com/spreadsheets/d/1R0Nt8Ye7EAQtU8CXF1XRRj67iaFpUk1BXeDgt6abxsQ/edit#gid=149797934'>Ocean Fishing Spreadsheet</Link> managed by Tyo’to Tayuun. Bite times are from <Link href='https://ffxivteamcraft.com/'>Teamcraft</Link>. For questions/comments/corrections, please visit the <Link href='https://discord.gg/AnFaDpN'>Fisherman’s Horizon Discord</Link> or message Lulu Pillow@Adamantoise or Pillowfication#0538.
          </Typography>
          <Typography paragraph sx={{ display: 'none' }}>
            I’ve also made a Chrome Extension for adding ocean fishes to the <Link href='https://ff14fish.carbuncleplushy.com/'>Carbuncle Plushy FFX|V Fish Tracker App</Link> available on the <Link href='https://chrome.google.com/webstore/detail/add-ocean-fish-to-ff14-fi/oihefgmncbnicjmcdccjflagboaidenh'>Chrome Web Store</Link>.
          </Typography>
        </Section>
        <UpcomingVoyages now={now} checklist={checklist} onSelectRoute={setSelectedRoute} />
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'ocean-fishing']))
    }
  }
}

export default OceanFishing
