import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Page from '../../src/Page'
import Section from '../../src/Section'
import FishTable from '../../src/ocean-fishing/FishTable'
import { fishingSpots } from '../../src/ocean-fishing/gists/data/ocean-fish-data.json'
import { FishingSpot } from '../../src/ocean-fishing/gists/data/types'
import { translate } from '../../src/ocean-fishing/utils'

const OceanFishingFish = () => {
  const router = useRouter()
  const [checklist, setChecklist] = useState<number[]>([])
  const locale = router.locale

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

  return (
    <Page title='Ocean Fishing Fish'>
      <Section>
        <Typography paragraph>
          These data are taken from the <Link href='https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit?usp=sharing'>Ocean Fishing Spreadsheet</Link> managed by S’yahn Tia. Bite times are from <Link href='https://ffxivteamcraft.com/'>Teamcraft</Link> when available.
        </Typography>
        <Typography paragraph>
          For questions/comments/corrections, please visit the Fisherman’s Horizon Discord (<Link href='https://discord.gg/AnFaDpN'>https://discord.gg/AnFaDpN</Link>) or message Lulu Pillow@Adamantoise or Pillowfication#0538.
        </Typography>
      </Section>
      {Object.values(fishingSpots)
        .sort((a, b) => a.id - b.id)
        .map((fishingSpot: FishingSpot) =>
          <Section key={fishingSpot.id} title={translate(locale, fishingSpot, 'place_name')}>
            <FishTable spots={[fishingSpot.id]} checklist={checklist} setChecklist={setChecklist} />
          </Section>
      )}
    </Page>
  )
}

export default OceanFishingFish
