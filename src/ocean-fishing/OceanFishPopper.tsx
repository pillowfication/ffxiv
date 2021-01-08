import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import OceanFishIconLarge from './OceanFishIconLarge'
import TimeIcon from './TimeIcon'
import BaitGroup from './BaitGroup'
import WeatherIcon from '../skywatcher/WeatherIcon'
import { fishes } from './gists/data/ocean-fish-data.json'
import { Fish } from './gists/data/types'
import * as maps from './maps'
import { getFishInfo, getBaitGroup, subtextBiteTime, translate } from './utils'
import i18n from '../../i18n'
import { I18n, TFunction } from 'next-i18next'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 400,
  },
  header: {
    padding: theme.spacing(1, 2, 0, 1)
  },
  content: {
    padding: theme.spacing(2, 2, 0)
  },
  description: {
    whiteSpace: 'pre-line'
  }
}))

type Props = {
  fishId: number,
  t: TFunction,
  i18n: I18n
}

const OceanFishPopper = ({ fishId, t, i18n }: Props) => {
  const classes = useStyles()
  const fish: Fish = fishes[fishId]
  const fishInfo = getFishInfo(fish.name_en)

  return (
    <Box boxShadow={8}>
      <Card variant='outlined' className={classes.container}>
        <CardHeader
          avatar={<OceanFishIconLarge fishId={fishId} size={100} />}
          title={translate(i18n.language, fish, 'name')}
          titleTypographyProps={{ variant: 'h6' }}
          subheader={(
            <div>
              <Typography variant='subtitle2' paragraph>{fishInfo.stars && '★'.repeat(fishInfo.stars)}</Typography>
              {fish.lodestone_data
                ? <Link href={`https://na.finalfantasyxiv.com${fish.lodestone_data.url}`}>Lodestone</Link>
                : 'Lodestone'}
              <> | </>
              <Link href={`https://ffxivteamcraft.com/db/${i18n.language}/item/${fishId}`}>Teamcraft</Link>
            </div>
          )}
          className={classes.header}
        />
        <CardContent className={classes.content}>
          <BaitGroup {...getBaitGroup(fishId)} subtext={subtextBiteTime} />
        </CardContent>
        <CardContent className={classes.content}>
          <Table size='small'>
            <TableBody>
              <TableRow>
                <TableCell variant='head'><Typography>{t('points')}</Typography></TableCell>
                <TableCell align='center'>{fishInfo.points}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'><Typography>{t('double-hook')}</Typography></TableCell>
                <TableCell align='center'>{fishInfo.doubleHook}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'><Typography>{t('weather')}</Typography></TableCell>
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
                <TableCell variant='head'><Typography>{t('time-of-day')}</Typography></TableCell>
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
        <CardContent className={classes.content}>
          <Typography variant='caption' className={classes.description}>
            {translate(i18n.language, fish, 'description').replace(/\[[^\]]*\]/g, '').trim()}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default i18n.withTranslation('ocean-fishing')(OceanFishPopper)
