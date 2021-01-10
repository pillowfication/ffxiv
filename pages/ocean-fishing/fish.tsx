import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Page from '../../src/Page'
import Section from '../../src/Section'
import ImportFishes from '../../src/ocean-fishing/ImportFishes'
import FishTable from '../../src/ocean-fishing/FishTable'
import { fishingSpots } from '../../src/ocean-fishing/gists/data'
import { translate } from '../../src/ocean-fishing/utils'
import i18n from '../../i18n'
import { I18n, TFunction } from 'next-i18next'

type Props = {
  t: TFunction,
  i18n: I18n
}

const OceanFishingFish = ({ t, i18n }: Props) => {
  const [checklist, setChecklist] = useState<number[]>([])
  const [showImport, setShowImport] = useState(false)

  useEffect(() => {
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
  }, [])

  useEffect(() => {
    window.localStorage.setItem('ocean-fishing/checklist', checklist.join(','))
  }, [checklist])

  const toggleShowImport = () => {
    setShowImport(!showImport)
  }

  return (
    <Page title={`${t('ocean-fishing')} - ${t('fish')}`}>
      <Section>
        <Typography paragraph>
          Data are taken from the <Link href='https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit?usp=sharing'>Ocean Fishing Spreadsheet</Link> managed by S’yahn Tia. Bite times are from <Link href='https://ffxivteamcraft.com/'>Teamcraft</Link> when available, with the top and bottom 10% removed.
        </Typography>
        <Typography paragraph>
          I’ve also made a Chrome Extension for adding ocean fishes to the <Link href='https://ff14fish.carbuncleplushy.com/'>Carbuncle Plushy FFX|V Fish Tracker App</Link> available on the <Link href='https://chrome.google.com/webstore/detail/add-ocean-fish-to-ff14-fi/oihefgmncbnicjmcdccjflagboaidenh'>Chrome Web Store</Link>.
        </Typography>
        <Button variant='contained' onClick={toggleShowImport}>Import Fishes</Button>
      </Section>
      {showImport && <ImportFishes setChecklist={setChecklist} />}
      {Object.values(fishingSpots)
        .sort((a, b) => a.id - b.id)
        .map(fishingSpot =>
          <Section key={fishingSpot.id} title={translate(i18n.language, fishingSpot, 'place_name')}>
            <FishTable spots={[fishingSpot.id]} checklist={checklist} setChecklist={setChecklist} />
          </Section>
        )}
    </Page>
  )
}

OceanFishingFish.getInitialProps = async () => ({
  namespacesRequired: ['common', 'ocean-fishing'],
})

export default i18n.withTranslation('ocean-fishing')(OceanFishingFish)
