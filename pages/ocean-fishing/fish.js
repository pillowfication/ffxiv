import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Page from '../../src/Page'
import Section from '../../src/Section'
import FishTable from '../../src/ocean-fishing/FishTable'

const REGIONS = [
  'Outer Galadion Bay',
  'Galadion Spectral Current',
  'The Southern Strait of Merlthor',
  'Southern Merlthor Spectral Current',
  'The Northern Strait of Merlthor',
  'Northern Merlthor Spectral Current',
  'Open Rhotano Sea',
  'Rhotano Spectral Current',
  'Cieldalaes Margin',
  'Cieldalaes Spectral Current',
  'Open Bloodbrine Sea',
  'Bloodbrine Spectral Current',
  'Outer Rothlyt Sound',
  'Rothlyt Spectral Current'
]

const OceanFishing = () => {
  const [checklist, setChecklist] = useState([])

  useEffect(() => {
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
  }, [])

  useEffect(() => {
    window.localStorage.setItem('ocean-fishing/checklist', checklist.join(','))
  }, [checklist])

  return (
    <Page title='Ocean Fishing Fish'>
      <Section>
        <Typography paragraph>
          This data is taken from the <Link href='https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit?usp=sharing'>Ocean Fishing Spreadsheet</Link> managed by S’yahn Tia.<br />For questions/comments, please visit the Fisherman’s Horizon Discord: <Link href='https://discord.gg/AnFaDpN'>https://discord.gg/AnFaDpN</Link>.
        </Typography>
      </Section>
      {REGIONS.map((region) =>
        <Section key={region} title={region}>
          <FishTable regions={[region]} checklist={checklist} setChecklist={setChecklist} />
        </Section>
      )}
    </Page>
  )
}

export default OceanFishing
