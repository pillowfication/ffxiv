import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Alert from '@material-ui/lab/Alert'
import { Color } from '@material-ui/lab/Alert'
import { ChecklistContext } from './index'
import Page from '../../src/Page'
import Section from '../../src/Section'
import FishTable from '../../src/ocean-fishing/FishTable'
import { fishingSpots } from '../../src/ocean-fishing/gists/data'
import { translate } from '../../src/ocean-fishing/utils'
import { useTranslation } from '../../src/i18n'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.type === 'light' && theme.palette.grey[200]
  },
  buttons: {
    '& button': {
      margin: theme.spacing(1, 0)
    }
  }
}))

type ImportDataProps = {
  setChecklist: (checklist: number[]) => void
}

const ImportData = ({ setChecklist }: ImportDataProps) => {
  const classes = useStyles()
  const [importData, setImportData] = useState('')
  const [message, setMessage] = useState<null | { type: Color, message: string }>(null)

  const handleInputImportData = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setImportData(event.target.value)
  }

  const handleClickImport = () => {
    try {
      const data = JSON.parse(importData)
      if (Array.isArray(data)) {
        setChecklist(data)
        setMessage({ type: 'success', message: `Imported ${data.length} fishes.` })
      } else if (Array.isArray(data.completed)) {
        setChecklist(data.completed)
        setMessage({ type: 'success', message: `Imported ${data.completed.length} fishes.` })
      } else {
        setMessage({ type: 'error', message: 'Could not parse data.' })
      }
    } catch (_) {
      setMessage({ type: 'error', message: 'Could not parse data.' })
    }
  }

  return (
    <Section>
      <Box component={Paper} p={2} className={classes.container}>
        <Typography>Paste code from <Link href='https://lalachievements.com/'>Lalachievements</Link> or <Link href='https://ff14fish.carbuncleplushy.com/'>FFX|V Fish Tracker App</Link> below.</Typography>
        <TextField
          multiline
          fullWidth
          variant='outlined'
          rows={4}
          margin='normal'
          value={importData}
          onChange={handleInputImportData}
        />
        {message && <Alert variant='outlined' severity={message.type}>{message.message}</Alert>}
        <div className={classes.buttons}>
          <Button variant='contained' color='primary' onClick={handleClickImport}>Import</Button>
        </div>
      </Box>
    </Section>
  )
}

const OceanFishingFish = () => {
  const { t, i18n } = useTranslation('ocean-fishing')
  const [checklist, setChecklist] = useState<number[]>([])
  const [showImport, setShowImport] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = window.localStorage.getItem('ocean-fishing/checklist')
      if (data) {
        setChecklist(data.split(',').map(x => Number(x) | 0).filter(x => x))
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
    <Page title={`${t('title')} - ${t('fish')}`}>
      <ChecklistContext.Provider value={{ checklist, setChecklist }}>
        <Section>
          <Typography paragraph>
            Data are taken from the <Link href='https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit?usp=sharing'>Ocean Fishing Spreadsheet</Link> managed by S’yahn Tia. Bite times are from <Link href='https://ffxivteamcraft.com/'>Teamcraft</Link> when available, with the top and bottom 5% removed.
          </Typography>
          <Typography paragraph>
            I’ve also made a Chrome Extension for adding ocean fishes to the <Link href='https://ff14fish.carbuncleplushy.com/'>Carbuncle Plushy FFX|V Fish Tracker App</Link> available on the <Link href='https://chrome.google.com/webstore/detail/add-ocean-fish-to-ff14-fi/oihefgmncbnicjmcdccjflagboaidenh'>Chrome Web Store</Link>.
          </Typography>
          <Button variant='contained' onClick={toggleShowImport}>Import Fishes</Button>
        </Section>
        <Collapse in={showImport}>
          <ImportData setChecklist={setChecklist} />
        </Collapse>
        {Object.values(fishingSpots)
          .sort((a, b) => a.id - b.id)
          .map(fishingSpot =>
            <Section key={fishingSpot.id} title={translate(i18n.language, fishingSpot, 'place_name')}>
              <FishTable spots={[fishingSpot.id]} />
            </Section>
          )}
      </ChecklistContext.Provider>
    </Page>
  )
}

OceanFishingFish.getInitialProps = async () => ({
  namespacesRequired: ['common', 'ocean-fishing']
})

export default OceanFishingFish
