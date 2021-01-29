import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import Page from '../../src/Page'
import Section from '../../src/Section'
import Link from '../../src/Link'
import Highlight from '../../src/Highlight'
import { mathJaxRequire, $$ } from '../../src/MathJax'
import { useTranslation } from '../../src/i18n'

const useStyles = makeStyles(theme => ({
  nestedList: {
    listStyleType: 'none',
    counterReset: 'counter',
    '& li': {
      position: 'relative',
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
      '&::before': {
        position: 'absolute',
        left: '-2em',
        content: 'counters(counter, ".") "."',
        counterIncrement: 'counter'
      }
    }
  },
  code: {
    padding: theme.spacing(0.2, 1)
  }
}))

const About = () => {
  const classes = useStyles()
  const { t } = useTranslation('ocean-fishing')

  return (
    <Page title={`${t('title')} - ${t('aboutPage.title')}`}>
      {mathJaxRequire('cancel')}
      <Section title={t('aboutPage.data')}>
        <Typography paragraph>
          Data are taken from the <MuiLink href='https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/edit?usp=sharing'>Ocean Fishing Spreadsheet</MuiLink> managed by S’yahn Tia. To report errors, please visit the <MuiLink href='https://discord.gg/AnFaDpN'>Fisherman’s Horizon Discord</MuiLink> or message Lulu Pillow@Adamantoise or Pillowfication#0538.
        </Typography>
        <Typography paragraph>
          Bite times are periodically fetched from <MuiLink href='https://ffxivteamcraft.com/'>Teamcraft</MuiLink> and cleaned up with the following process:
        </Typography>
        <ol className={classes.nestedList}>
          <Typography component='li'>
            For each of the 14 fishing spots (non spectral and spectral) and for each of the 15 baits (mooches included), fetch all reports at the specified fishing spot with the specified bait.
          </Typography>
          <Typography component='li'>
            For each fish-bait combination, calculate the bite time range from the reports.
            <ol className={classes.nestedList}>
              <Typography component='li'>
                If there are fewer than 10 total reports, do not calculate the bite time range. (This tends to remove reports where fish are caught with the baits that should be impossible, or blue fish where too few reports are recorded)
              </Typography>
              <Typography component='li'>
                Otherwise, remove the top 5% and the bottom 5% of the reports. The minimum and maximum of the remaining reports is used as the bite time range. (This tends to remove outliers, like <MuiLink href='https://media.discordapp.net/attachments/593471315319717888/797807850562912256/unknown.png'>Godsbed taking 18 hours to catch</MuiLink>)
              </Typography>
            </ol>
          </Typography>
          <Typography component='li'>
            For each fish, calculate the bite time range for all baits, excluding Versatile Lure.
          </Typography>
        </ol>
        <Typography paragraph>
          The bite times shown on the <Link href='/ocean-fishing'>Ocean Fishing page</Link> are the bite time ranges for all baits. The bite time ranges for all baits can currently be found at <MuiLink href='https://github.com/pillowfication/ffxiv/blob/master/src/ocean-fishing/ffxiv-ocean-fishing/data/bite-times.csv'>bite-times.csv</MuiLink>.
        </Typography>
        <Typography paragraph>
          All my data and the code I used are available on <MuiLink href='https://github.com/pillowfication/ffxiv/tree/master/src/ocean-fishing/ffxiv-ocean-fishing'>GitHub</MuiLink>.
        </Typography>
      </Section>
      <Section title={t('aboutPage.algorithm')}>
        <Typography paragraph>
          Ocean Fishing voyages follow a specific pattern best seen using Japan Standard Time (JST). Voyages leave every 2 hours on odd hours (at 1:00, 3:00, …, 23:00). The destination always cycles between the 4 destinations in the following order:
        </Typography>
        <Box mb={2}>
          {$$('\\cdots \\to \\text{Bloodbrine Sea} \\to \\text{Rothlyt Sound} \\to \\text{Northern Strait of Merlthor} \\to \\text{Rhotano Sea} \\to \\cdots')}
        </Box>
        <Typography paragraph>
          The 4 destinations will all be set to arrive at Day, then repeated to arrive at Sunset, then repeated to arrive at Night. There are 12 routes that I label as
        </Typography>
        <Box mb={2}>
          {$$(`
            \\begin{array}{r|ccc}
              & \\text{Day (D)} & \\text{Sunset (S)} & \\text{Night (N)} \\\\
              \\hline
              \\text{Bloodbrine Sea (B)} & \\text{BD} & \\text{BS} & \\text{BN} \\\\
              \\text{Rothlyt Sound (T)} & \\text{TD} & \\text{TS} & \\text{TN} \\\\
              \\text{Northern Strait of Merlthor (N)} & \\text{ND} & \\text{NS} & \\text{NN} \\\\
              \\text{Rhotano Sea (R)} & \\text{RD} & \\text{RS} & \\text{RN} \\\\
            \\end{array}
          `)}
        </Box>
        <Typography paragraph>
          and they follow the sequence
        </Typography>
        <Box mb={2}>
          {$$(`
            \\begin{array}{rcccccccccl}
              \\cdots & \\to & \\text{BD} & \\to & \\text{TD} & \\to & \\text{ND} & \\to & \\text{RD} \\\\
              & \\to & \\text{BS} & \\to & \\text{TS} & \\to & \\text{NS} & \\to & \\text{RS} \\\\
              & \\to & \\text{BN} & \\to & \\text{TN} & \\to & \\text{NN} & \\to & \\text{RN} & \\to & \\cdots \\\\
            \\end{array}
          `)}
        </Box>
        <Typography paragraph>
          However, the first voyage of every day (at 1:00 JST) will skip a route. So there might be the schedule
        </Typography>
        <Box mb={2}>
          {$$(`
            \\cdots
            \\begin{array}{c|c}
              \\text{19:00} & \\text{21:00} & \\text{23:00} & \\text{01:00} & \\text{03:00} & \\text{05:00} & \\text{07:00} \\\\
              \\text{NS} & \\text{RS} & \\text{BN} & \\begin{array}{c}\\cancel{\\text{TN}} \\\\ \\text{NN}\\end{array} & \\text{RN} & \\text{BD} & \\text{TD} \\\\
            \\end{array}
            \\cdots
          `)}
        </Box>
        <Typography paragraph>
          Since there are 12 routes and 12 voyages a day, the route that is skipped will cycle through all 12 routes in 12 days. The full pattern of routes is 144 routes long.
        </Typography>
        <Box mb={2}>
          <Highlight language='javascript'>
            {`
const PATTERN = [
  'BD', 'TD', 'ND', 'RD', 'BS', 'TS', 'NS', 'RS', 'BN', 'TN', 'NN', 'RN',
  'TD', 'ND', 'RD', 'BS', 'TS', 'NS', 'RS', 'BN', 'TN', 'NN', 'RN', 'BD',
  'ND', 'RD', 'BS', 'TS', 'NS', 'RS', 'BN', 'TN', 'NN', 'RN', 'BD', 'TD',
  'RD', 'BS', 'TS', 'NS', 'RS', 'BN', 'TN', 'NN', 'RN', 'BD', 'TD', 'ND',
  'BS', 'TS', 'NS', 'RS', 'BN', 'TN', 'NN', 'RN', 'BD', 'TD', 'ND', 'RD',
  'TS', 'NS', 'RS', 'BN', 'TN', 'NN', 'RN', 'BD', 'TD', 'ND', 'RD', 'BS',
  'NS', 'RS', 'BN', 'TN', 'NN', 'RN', 'BD', 'TD', 'ND', 'RD', 'BS', 'TS',
  'RS', 'BN', 'TN', 'NN', 'RN', 'BD', 'TD', 'ND', 'RD', 'BS', 'TS', 'NS',
  'BN', 'TN', 'NN', 'RN', 'BD', 'TD', 'ND', 'RD', 'BS', 'TS', 'NS', 'RS',
  'TN', 'NN', 'RN', 'BD', 'TD', 'ND', 'RD', 'BS', 'TS', 'NS', 'RS', 'BN',
  'NN', 'RN', 'BD', 'TD', 'ND', 'RD', 'BS', 'TS', 'NS', 'RS', 'BN', 'TN',
  'RN', 'BD', 'TD', 'ND', 'RD', 'BS', 'TS', 'NS', 'RS', 'BN', 'TN', 'NN'
]
            `.trim()}
          </Highlight>
        </Box>
        <Typography paragraph>
          To figure out the route at a given time, we need to first establish some epoch as the first voyage and determine where in <Paper component='code' variant='outlined' className={classes.code}>PATTERN</Paper> that voyage lies. All other routes will be calculated relative to that epoch. Fortunately, JST is UTC+09:00, which means a voyage lands on the <MuiLink href='https://en.wikipedia.org/wiki/Unix_time'>Unix epoch</MuiLink>. As it turns out, this voyage is index 88 in <Paper component='code' variant='outlined' className={classes.code}>PATTERN</Paper>. Altogether,
        </Typography>
        <Box mb={2}>
          <Highlight language='typescript'>
            {`
const TWO_HOURS = 2 * 60 * 60 * 1000
const OFFSET = 88

/**
 * Returns the route of the ongoing/most recent voyage.
 */
function getRoute (date: Date) {
  // Get the number of voyages since 00:00:00 UTC, 1 January 1970
  const voyageNumber = Math.floor(date.getTime() / TWO_HOURS)

  // Get where it lies in the pattern
  const route = PATTERN[(OFFSET + voyageNumber) % PATTERN.length]

  return route
}
            `.trim()}
          </Highlight>
        </Box>
      </Section>
    </Page>
  )
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common', 'ocean-fishing']
})

export default About
