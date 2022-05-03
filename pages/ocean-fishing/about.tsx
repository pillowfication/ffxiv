import React from 'react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'
import Page from '../../src/Page'
import Section from '../../src/Section'
import Link from '../../src/Link'
import Highlight from '../../src/Highlight'
import { mathJaxRequire, $, $$ } from '../../src/MathJax'
import NavigationBar from '../../src/ocean-fishing/NavigationBar'

const About = (): React.ReactElement => {
  const { t } = useTranslation('ocean-fishing')

  return (
    <Page title={[t('_title'), t('aboutPage._title')]}>
      {mathJaxRequire('cancel')}
      <NavigationBar />
      <Section title={t('aboutPage.data')}>
        <Typography paragraph>
          Data are taken from the <Link href='https://docs.google.com/spreadsheets/d/1R0Nt8Ye7EAQtU8CXF1XRRj67iaFpUk1BXeDgt6abxsQ/edit#gid=149797934'>Ocean Fishing Spreadsheet</Link> managed by Tyo’to Tayuun. To report errors, please visit the <Link href='https://discord.gg/AnFaDpN'>Fisherman’s Horizon Discord</Link> or message Lulu Pillow@Adamantoise or Pillowfication#0538.
        </Typography>
        <Typography paragraph>
          Bite times are periodically fetched from <Link href='https://ffxivteamcraft.com/'>Teamcraft</Link>. Teamcraft defines the minimum and maximum bite times to be the whiskers of a typical boxplot. This means
        </Typography>
        <ol>
          <Typography component='li'>
            Compute quartiles using the type-7 algorithm detailed in <Link href='https://www.rdocumentation.org/packages/stats/versions/3.6.2/topics/quantile'>R’s quantile method</Link>.
          </Typography>
          <Typography component='li'>
            Removing samples more than {$('1.5 \\times \\text{IQR}')} from the median.
          </Typography>
        </ol>
        <Typography paragraph>
          The default bite times shown on the <Link href='/ocean-fishing'>Ocean Fishing page</Link> are the bite time ranges over all baits, excluding Versatile Lure. While this works fairly well, it can still be inaccurate, and most prescribed strategies will use player-tested timings.
        </Typography>
        <Typography paragraph>
          Bait percentages are also fetched from Teamcraft and are usually used as the suggested bait, unless the bait causes a drastic increase in bite times. Usually the best bait is the fish’s desynthesis bait, and nonstandard ocean fishing baits are avoided, unless the goal is Fisher’s Intuition. Specific cases were further detailed in the <Link href='https://discord.com/channels/327124808217395200/679407580430467092/864238268514041917'>Discord</Link>.
        </Typography>
        <Typography paragraph>
          All my data and the code I used are available on <Link href='https://github.com/pillowfication/ffxiv/tree/master/src/ocean-fishing/ffxiv-ocean-fishing'>GitHub</Link>.
        </Typography>
      </Section>
      <Section title={t('aboutPage.algorithm')}>
        <Typography paragraph>
          Ocean Fishing voyages follow a specific pattern best seen using Japan Standard Time (JST). Voyages leave every 2 hours on odd hours (at 1:00, 3:00, …, 23:00). The destination always cycles between the 4 destinations in the following order:
        </Typography>
        <TableContainer sx={{ mb: 2 }}>
          {$$('\\cdots \\to \\text{Bloodbrine Sea} \\to \\text{Rothlyt Sound} \\to \\text{Northern Strait of Merlthor} \\to \\text{Rhotano Sea} \\to \\cdots')}
        </TableContainer>
        <Typography paragraph>
          The 4 destinations will all be set to arrive at Day, then repeated to arrive at Sunset, then repeated to arrive at Night. There are 12 routes that I label as
        </Typography>
        <TableContainer sx={{ mb: 2 }}>
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
        </TableContainer>
        <Typography paragraph>
          and they follow the sequence
        </Typography>
        <TableContainer sx={{ mb: 2 }}>
          {$$(`
            \\begin{array}{rcccccccccl}
              \\cdots & \\to & \\text{BD} & \\to & \\text{TD} & \\to & \\text{ND} & \\to & \\text{RD} \\\\
              & \\to & \\text{BS} & \\to & \\text{TS} & \\to & \\text{NS} & \\to & \\text{RS} \\\\
              & \\to & \\text{BN} & \\to & \\text{TN} & \\to & \\text{NN} & \\to & \\text{RN} & \\to & \\cdots \\\\
            \\end{array}
          `)}
        </TableContainer>
        <Typography paragraph>
          However, the first voyage of every day (at 1:00 JST) will skip a route. So there might be the schedule
        </Typography>
        <TableContainer sx={{ mb: 2 }}>
          {$$(`
            \\cdots
            \\begin{array}{c|c}
              \\text{19:00} & \\text{21:00} & \\text{23:00} & \\text{01:00} & \\text{03:00} & \\text{05:00} & \\text{07:00} \\\\
              \\text{NS} & \\text{RS} & \\text{BN} & \\begin{array}{c}\\cancel{\\text{TN}} \\\\ \\text{NN}\\end{array} & \\text{RN} & \\text{BD} & \\text{TD} \\\\
            \\end{array}
            \\cdots
          `)}
        </TableContainer>
        <Typography paragraph>
          Since there are 12 routes and 12 voyages a day, the route that is skipped will cycle through all 12 routes in 12 days. The full pattern of routes is 144 routes long.
        </Typography>
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
        <Typography paragraph>
          To figure out the route at a given time, we need to first establish some epoch as the first voyage and determine where in <Paper component='code' variant='outlined' sx={{ px: 0.5 }}>PATTERN</Paper> that voyage lies. All other routes will be calculated relative to that epoch. Fortunately, JST is UTC+09:00, which means a voyage lands on the <Link href='https://en.wikipedia.org/wiki/Unix_time'>Unix epoch</Link>. As it turns out, this voyage is index 88 in <Paper component='code' variant='outlined' sx={{ px: 0.5 }}>PATTERN</Paper>. Altogether,
        </Typography>
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
      </Section>
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

export default About
