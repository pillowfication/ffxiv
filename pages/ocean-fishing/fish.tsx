import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import { ChecklistContext } from './index'
import Page from '../../src/Page'
import Section from '../../src/Section'
import ImportFishes from '../../src/ocean-fishing/ImportFishes'
import FishTable from '../../src/ocean-fishing/FishTable'
import { fishingSpots, placeNames } from '../../src/ocean-fishing/ffxiv-ocean-fishing/data'
import { translate } from '../../src/utils'
import { useTranslation } from '../../src/i18n'

const Fish = (): React.ReactElement => {
  const { t, i18n } = useTranslation('ocean-fishing')
  const [checklist, setChecklist] = useState<number[]>([])
  const [showImport, setShowImport] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = window.localStorage.getItem('ocean-fishing/checklist')
      if (data !== null) {
        setChecklist(data.split(',').map(x => Number(x) | 0).filter(x => x))
      }
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('ocean-fishing/checklist', checklist.join(','))
  }, [checklist])

  const toggleShowImport = (): void => {
    setShowImport(!showImport)
  }

  return (
    <Page title={`${t('_title')} - ${t('fishPage._title')}`}>
      <ChecklistContext.Provider value={{ checklist, setChecklist }}>
        <Section>
          <Typography paragraph>
            Data are taken from the <Link href='https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit?usp=sharing'>Ocean Fishing Spreadsheet</Link> managed by S’yahn Tia. Bite times are from <Link href='https://ffxivteamcraft.com/'>Teamcraft</Link> when available. For questions/comments/corrections, please visit the <Link href='https://discord.gg/AnFaDpN'>Fisherman’s Horizon Discord</Link> or message Lulu Pillow@Adamantoise or Pillowfication#0538.
          </Typography>
          <Typography paragraph>
            I’ve also made a Chrome Extension for adding ocean fishes to the <Link href='https://ff14fish.carbuncleplushy.com/'>Carbuncle Plushy FFX|V Fish Tracker App</Link> available on the <Link href='https://chrome.google.com/webstore/detail/add-ocean-fish-to-ff14-fi/oihefgmncbnicjmcdccjflagboaidenh'>Chrome Web Store</Link>.
          </Typography>
          <Button variant='contained' onClick={toggleShowImport}>Import Fishes</Button>
        </Section>
        <Collapse in={showImport}>
          <Section>
            <ImportFishes checklist={checklist} setChecklist={setChecklist} />
          </Section>
        </Collapse>
        {Object.values(fishingSpots)
          .sort((a, b) => a.id - b.id)
          .map(fishingSpot =>
            <Section key={fishingSpot.id} title={translate(i18n.language, placeNames[fishingSpot.placeName], 'name')}>
              <FishTable spots={[fishingSpot.id]} />
            </Section>
          )}
      </ChecklistContext.Provider>
    </Page>
  )
}

Fish.getInitialProps = async () => ({
  namespacesRequired: ['common', 'ocean-fishing']
})

export default Fish
