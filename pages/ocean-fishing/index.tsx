import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Link from '../../src/Link'
import Page from '../../src/Page'
import Section from '../../src/Section'
import UpcomingVoyages from '../../src/ocean-fishing/UpcomingVoyages'
import RouteInformation from '../../src/ocean-fishing/RouteInformation'
import AchievementsInformation from '../../src/ocean-fishing/AchievementsInformation'
import { DestTime } from '../../src/ocean-fishing/ffxiv-ocean-fishing'
import { useTranslation } from '../../src/i18n'

import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import Alert from '@material-ui/lab/Alert'
import Highlight from '../../src/Highlight'
import BaitList from '../../src/ocean-fishing/BaitList'
import BaitGroup from '../../src/ocean-fishing/BaitGroup'
import { fishes } from '../../src/ocean-fishing/ffxiv-ocean-fishing/data'
import { getBaitGroup } from '../../src/ocean-fishing/utils'

export const ChecklistContext = React.createContext<{ checklist: number[], setChecklist: (checklist: number[]) => void }>(
  { checklist: [], setChecklist: () => {} }
)

const useStyles = makeStyles(theme => ({
  buttons: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(1),
      color: theme.palette.text.primary,
      textTransform: 'none',
      '&:hover': {
        textDecoration: 'none'
      }
    }
  }
}))

const OceanFishing = (): React.ReactElement => {
  const classes = useStyles()
  const { t } = useTranslation('ocean-fishing')
  const [now, setNow] = useState<Date>(new Date())
  const [selectedRoute, setSelectedRoute] = useState<DestTime | null>(null) // This is initialized when UpcomingVoyages is mounted
  const [checklist, setChecklist] = useState<number[] | null>(null)
  const [showAlert, setShowAlert] = useState(false)

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
      <ChecklistContext.Provider value={{ checklist: checklist ?? [], setChecklist }}>
        <Section>
          <Alert
            severity='info'
            action={<Button color='inherit' size='small' onClick={() => { setShowAlert(!showAlert) }}>More info</Button>}
          >
            Some baits suggestions have changed!
          </Alert>
          <Collapse in={showAlert}>
            <Alert severity='info' icon={false} style={{ marginTop: '1px' }}>
              <Typography paragraph>Initially, desynthesis baits were used as suggested baits. But with the data collected by Teamcraft, a few fish can be seen preferring other baits. Most notably, Hi-aetherlouse now uses Ragworm instead of Plump Worm.</Typography>
              <Box textAlign='center' mb={2}>
                <BaitGroup {...getBaitGroup(fishes[29761])} />
              </Box>
              <Typography paragraph>Some fish also prefer the non-standard ocean fishing baits. For example, Beatific Vision is better caught with Pill Bug instead of Krill. For simplicity, Krill is still marked as the bait of choice. The exception is when Beatific Vision appears as an intuition fish for Seafaring Toad, where Pill Bug will be suggested.</Typography>
              <Box textAlign='center' mb={2}>
                <BaitGroup {...getBaitGroup(fishes[32094])} />
              </Box>
              <Typography paragraph>The following fish have updated bait suggestions:</Typography>
              <Box mb={2} pl={4}>
                <BaitList
                  baitGroups={[29761, 32105, 29790, 32074, 32094].map(fishId => ({
                    header: fishes[fishId].name.en,
                    baitGroupProps: { ...getBaitGroup(fishes[fishId]) }
                  }))}
                />
              </Box>
              <Typography paragraph>And the following fish were considered:</Typography>
              <Highlight language='plaintext'>
                {`
Spectral Megalodon:  Plump Worm -> Krill            +0.0% Not substantial
Merlthor Butterfly:  Ragworm -> Versatile Lure      +0.3% Ignore versatile lure
Hi-aetherlouse:      Plump Worm -> Ragworm          +1.2% CHANGE
Gugrusaurus:         Plump Worm -> Heavy Steel Jig  +0.6% Not substantial; increases bite times
Aronnax:             Krill -> Rat Tail              +3.1% Not intuition fish
Deep-sea Eel:        Plump Worm -> Rat Tail         +0.8% CHANGE (as intuition)
True Barramundi:     Krill -> Rat Tail              +3.1% Not intuition fish
Lavandin Remora:     Krill -> Versatile Lure        +0.4% Ignore versatile lure
Mistbeard's Cup:     Krill -> Squid Strip           +7.6% CHANGE (as intuition)
Anomalocaris Saron:  Krill -> Squid Strip           +6.2% Not intuition fish
Callichthyid:        Plump Worm -> Versatile Lure   +0.2% Ignore versatile lure
Sunken Mask:         Ragworm -> Versatile Lure      +1.8% Ignore versatile lure
Dravanian Bream:     Krill -> Versatile Lure        +0.5% Ignore versatile lure
Serrated Clam:       Ragworm -> Pill Bug            +1.8% Not intuition fish
Beatific Vision:     Krill -> Pill Bug              +5.0% CHANGE (as intuition)
Gory Tuna:           Plump Worm -> Pill Bug         +0.6% Not intuition fish
Ticinepomis:         Plump Worm -> Pill Bug         +3.5% Not intuition fish
Garum Jug:           Ragworm -> Versatile Lure      +6.8% Ignore versatile lure
Garum Jug:           Ragworm -> Krill               +2.4% CHANGE
                `.trim()}
              </Highlight>
            </Alert>
          </Collapse>
        </Section>
        <Section>
          <Typography paragraph>
            Data are taken from the <MuiLink href='https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit?usp=sharing'>Ocean Fishing Spreadsheet</MuiLink> managed by S’yahn Tia. Bite times are from <MuiLink href='https://ffxivteamcraft.com/'>Teamcraft</MuiLink> when available. For questions/comments/corrections, please visit the <MuiLink href='https://discord.gg/AnFaDpN'>Fisherman’s Horizon Discord</MuiLink> or message Lulu Pillow@Adamantoise or Pillowfication#0538.
          </Typography>
          <Typography paragraph>
            I’ve also made a Chrome Extension for adding ocean fishes to the <Link href='https://ff14fish.carbuncleplushy.com/'>Carbuncle Plushy FFX|V Fish Tracker App</Link> available on the <Link href='https://chrome.google.com/webstore/detail/add-ocean-fish-to-ff14-fi/oihefgmncbnicjmcdccjflagboaidenh'>Chrome Web Store</Link>.
          </Typography>
          <div className={classes.buttons}>
            <Button component={Link} variant='contained' href='/ocean-fishing/about'>
              <Typography>{t('aboutPage._title')}</Typography>
            </Button>
            <Button component={Link} variant='contained' href='/ocean-fishing/fish'>
              <Typography>{t('fishPage._title')}</Typography>
            </Button>
            <Button component={Link} variant='contained' href='/ocean-fishing/bonuses'>
              <Typography>{t('bonusesPage._title')}</Typography>
            </Button>
          </div>
        </Section>
        <UpcomingVoyages now={now} onSelectRoute={setSelectedRoute} />
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
