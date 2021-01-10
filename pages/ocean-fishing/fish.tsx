import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
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
import i18n from '../../i18n'
import { I18n, TFunction } from 'next-i18next'

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

type Props = {
  t: TFunction,
  i18n: I18n
}

const OceanFishingFish = ({ t, i18n }: Props) => {
  const classes = useStyles()
  const [showImport, setShowImport] = useState(false)
  const [importData, setImportData] = useState('')
  const [message, setMessage] = useState<null | { type: Color, message: string }>(null)

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
      {showImport &&
        <ChecklistContext.Consumer>
          {({ setChecklist }) => {
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
          }}
        </ChecklistContext.Consumer>}
      {Object.values(fishingSpots)
        .sort((a, b) => a.id - b.id)
        .map(fishingSpot =>
          <Section key={fishingSpot.id} title={translate(i18n.language, fishingSpot, 'place_name')}>
            <FishTable spots={[fishingSpot.id]} />
          </Section>
        )}
    </Page>
  )
}

OceanFishingFish.getInitialProps = async () => ({
  namespacesRequired: ['common', 'ocean-fishing'],
})

export default i18n.withTranslation('ocean-fishing')(OceanFishingFish)
