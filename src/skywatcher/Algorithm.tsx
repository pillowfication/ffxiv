import React from 'react'
import { useTranslation } from 'next-i18next'
import Section from '../Section'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Link from '../Link'
import Highlight from '../Highlight'
import translateWeather from './ffxiv-skywatcher/src/translate-weather'
import { Weather } from './ffxiv-skywatcher/src/types'
import WeatherIcon from './WeatherIcon'

const Algorithm = (): React.ReactElement => {
  const { t, i18n } = useTranslation('skywatcher')
  const locale = i18n.language

  return (
    <Section title={t('algorithm')}>
      <Typography paragraph>
        The weather in Eorzea can be predicted. First, the number of Eorzean hours and days since the <Link href='https://en.wikipedia.org/wiki/Unix_time'>Unix epoch</Link> is calculated.
      </Typography>
      <Highlight language='javascript'>
        {`
// Get seconds since Jan 1st 1970
const unixSeconds = Date.now() / 1000

// Get Eorzean hours/days since (1 Eorzean hour = 175 seconds)
const eorzeanHours = Math.floor(unixSeconds / 175)
const eorzeanDays = Math.floor(eorzeanHours / 24)
        `.trim()}
      </Highlight>
      <Typography paragraph>
        Next, compute which of the 3 time chunks the hour falls in.
      </Typography>
      <Highlight language='javascript'>
        {`
let timeChunk = (eorzeanHours % 24) - (eorzeanHours % 8)

// Adjust time chunk so that
//   16:00 is 00,
//   00:00 is 08,
//   08:00 is 16
timeChunk = (timeChunk + 8) % 24
        `.trim()}
      </Highlight>
      <Typography paragraph>
        The number of Eorzean days and the time chunk form the seed that is hashed.
      </Typography>
      <Highlight language='javascript'>
        {`
const seed = eorzeanDays * 100 + timeChunk

// Do a little hashing
const step1 = (seed << 11) ^ seed
const step2 = (step1 >>> 8) ^ step1

// Return a number between 0-99 inclusive
const weatherChance = step2 % 100
        `.trim()}
      </Highlight>
      <Typography paragraph>
        With <code>weatherChance</code> computed as a number from 0 to 99, each zone can determine its weather. For example, the weather in Eureka Anemos is Gales if <code>weatherChance</code> is between 30 and 59. Its full table of weathers is
      </Typography>
      <TableContainer sx={{ mb: 2 }}>
        <Table sx={{ width: 'auto' }}>
          <TableHead>
            <TableRow>
              <TableCell align='center'><Typography component='code'>weatherChance</Typography></TableCell>
              <TableCell align='center'><Typography>Weather</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align='center'><Typography>00-29</Typography></TableCell>
              <TableCell align='center'>
                <WeatherIcon weather={Weather.FairSkies} />
                <Typography component='div' variant='caption' sx={{ lineHeight: '110%' }}>
                  {translateWeather(Weather.FairSkies, locale)}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'><Typography>30-59</Typography></TableCell>
              <TableCell align='center'>
                <WeatherIcon weather={Weather.Gales} />
                <Typography component='div' variant='caption' sx={{ lineHeight: '110%' }}>
                  {translateWeather(Weather.Gales, locale)}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'><Typography>60-89</Typography></TableCell>
              <TableCell align='center'>
                <WeatherIcon weather={Weather.Showers} />
                <Typography component='div' variant='caption' sx={{ lineHeight: '110%' }}>
                  {translateWeather(Weather.Showers, locale)}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'><Typography>90-99</Typography></TableCell>
              <TableCell align='center'>
                <WeatherIcon weather={Weather.Snow} />
                <Typography component='div' variant='caption' sx={{ lineHeight: '110%' }}>
                  {translateWeather(Weather.Snow, locale)}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  )
}

export default React.memo(Algorithm)
