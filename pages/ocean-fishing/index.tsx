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
import { DestinationStopTime } from '../../src/ocean-fishing/ffxiv-ocean-fishing'
import { useTranslation } from '../../src/i18n'

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

const OceanFishing = () => {
  const classes = useStyles()
  const { t } = useTranslation('ocean-fishing')
  const [now, setNow] = useState<Date>(new Date())
  const [selectedRoute, setSelectedRoute] = useState<DestinationStopTime | null>(null) // This is initialized when UpcomingVoyages is mounted
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
    <Page
      title={t('title')}
      description='Schedule for upcoming ocean fishing voyages with information on blue fish, achievements, and more.'
    >
      <ChecklistContext.Provider value={{ checklist, setChecklist }}>
        <Section>
          <Typography paragraph>
            Data are taken from the <MuiLink href='https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit?usp=sharing'>Ocean Fishing Spreadsheet</MuiLink> managed by S’yahn Tia. Bite times are from <MuiLink href='https://ffxivteamcraft.com/'>Teamcraft</MuiLink> when available. For questions/comments/corrections, please visit the <MuiLink href='https://discord.gg/AnFaDpN'>Fisherman’s Horizon Discord</MuiLink> or message Lulu Pillow@Adamantoise or Pillowfication#0538.
          </Typography>
          <div className={classes.buttons}>
            <Button component={Link} variant='contained' href='/ocean-fishing/about'>
              <Typography>{t('aboutPage.title')}</Typography>
            </Button>
            <Button component={Link} variant='contained' href='/ocean-fishing/fish'>
              <Typography>{t('fishPage.title')}</Typography>
            </Button>
            <Button component={Link} variant='contained' href='/ocean-fishing/bonuses'>
              <Typography>{t('bonusesPage.title')}</Typography>
            </Button>
          </div>
        </Section>
        <UpcomingVoyages now={now} onSelectRoute={setSelectedRoute} />
        {selectedRoute && (
          <>
            <RouteInformation now={now} selectedRoute={selectedRoute} />
            <AchievementsInformation selectedRoute={selectedRoute} />
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
