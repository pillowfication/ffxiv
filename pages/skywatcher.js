import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import getEorzeanTime from '../src/skywatcher/get-eorzean-time'
import Section from '../src/Section'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Highlight from '../src/Highlight'
import WeatherTable from '../src/skywatcher/WeatherTable'
import WeatherForecaster from '../src/skywatcher/WeatherForecaster'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const UPDATE_INTERVAL = 2917

const useStyles = makeStyles((theme) => ({
  anemosTable: {
    width: 'initial',
    '& th, & td': {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  }
}))

export default function Skywatcher (props) {
  const [now, setNow] = useState(null)
  const classes = useStyles()

  useEffect(() => {
    const setTime = () => { setNow(new Date()) }
    const interval = setInterval(setTime, UPDATE_INTERVAL)
    setTime()

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <Typography variant='h1' gutterBottom>Skywatcher</Typography>
      <Typography paragraph>
        The time in Eorzea is <b>{now ? getEorzeanTime(now).toString() : '…'}</b>.
      </Typography>
      <WeatherForecaster now={now} />
      <WeatherTable now={now} />
      <Section title='About'>
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
        <Table className={classes.anemosTable}>
          <TableHead>
            <TableRow>
              <TableCell align='center'><code>weatherChance</code></TableCell>
              <TableCell align='center'>Weather</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align='center'>00-29</TableCell>
              <TableCell>Fair Skies</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>30-59</TableCell>
              <TableCell>Gales</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>60-89</TableCell>
              <TableCell>Showers</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>90-99</TableCell>
              <TableCell>Snow</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>
    </>
  )
}
