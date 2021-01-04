import React from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import OceanFishIcon from './OceanFishIcon'
import TimeIcon from './TimeIcon'
import BaitGroup from './BaitGroup'
import WeatherIcon from '../skywatcher/WeatherIcon'
import { fishes } from './gists/data/ocean-fish-data.json'
import * as maps from './maps'
import { getFishInfo, getBaitGroup, subtextBiteTime, translate } from './utils'

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: 400
  },
  description: {
    whiteSpace: 'pre-line'
  }
}))

type Props = {
  id: number
}

const OceanFishPopper = ({ id }: Props) => {
  const classes = useStyles()
  const router = useRouter()
  const fish = fishes[id]
  const fishInfo = getFishInfo(fish.name_en)
  const locale = router.locale

  return (
    <Card component={Paper} elevation={8} className={classes.container}>
      <CardHeader
        avatar={<OceanFishIcon type='fish' id={id} />}
        title={translate(locale, fish, 'name')}
        subheader={fishInfo.stars && '★'.repeat(fishInfo.stars)}
      />
      <CardContent>
        <BaitGroup {...getBaitGroup(id)} subtext={subtextBiteTime} />
      </CardContent>
      <CardContent>
        <Table size='small'>
          <TableBody>
            <TableRow>
              <TableCell variant='head'><Typography>Points</Typography></TableCell>
              <TableCell align='center'>{fishInfo.points}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant='head'><Typography>Double Hook</Typography></TableCell>
              <TableCell align='center'>{fishInfo.doubleHook}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant='head'><Typography>Weather</Typography></TableCell>
              <TableCell align='center'>
                {fishInfo.weathers
                  ? (() => {
                      switch (fishInfo.weathers.type) {
                        case 'ALL':
                          return 'Any'
                        case 'OK':
                          return fishInfo.weathers.list.map(weather =>
                            <WeatherIcon key={weather} weatherId={weather} showLabel={false} />
                          )
                        case 'NOT OK':
                          return (
                            <>
                              <span style={{ verticalAlign: 'super' }}>Not&nbsp;</span>
                              {fishInfo.weathers.list.map(weather =>
                                <WeatherIcon key={weather} weatherId={weather} showLabel={false} />
                              )}
                            </>
                          )
                      }
                    })()
                  : '?'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant='head'><Typography>Time</Typography></TableCell>
              <TableCell align='center'>
                {fishInfo.time ?
                  fishInfo.time === 'DSN'
                    ? 'Any'
                    : fishInfo.time && fishInfo.time.split('').map(time => <TimeIcon key={time} time={time as maps.Time} />)
                  : '?'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardContent>
        <Typography variant='caption' className={classes.description}>
          {translate(locale, fish, 'description').replace(/\[[^\]]*\]/g, '').trim()}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default OceanFishPopper
