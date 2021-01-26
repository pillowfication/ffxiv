import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ItemIcon from './ItemIcon'
import TimeIcon from './TimeIcon'
import BaitGroup from './BaitGroup'
import ChecklistCheckmark from './ChecklistCheckmark'
import WeatherIcon from '../skywatcher/WeatherIcon'
import { oceanFishes, OceanFish } from './ocean-fishing/data'
import { getBaitGroup, subtextBiteTime } from './utils'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

function getImgUrl (fish: OceanFish) {
  if (fish.lodestoneData) {
    return `https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/${fish.lodestoneData.icon_lg.slice(0, 2)}/${fish.lodestoneData.icon_lg}.png`
  } else {
    // Fallback to XIVAPI's icons
    return `https://xivapi.com/i/${('000000' + (fish.icon - (fish.icon % 1000))).slice(-6)}/${('000000' + fish.icon).slice(-6)}.png`
  }
}

const useStyles = makeStyles(theme => ({
  container: {
    width: 400,
  },
  header: {
    padding: theme.spacing(2),
    alignItems: 'start'
  },
  title: {
    paddingTop: theme.spacing(1)
  },
  content: {
    padding: theme.spacing(0, 2, 2)
  },
  description: {
    whiteSpace: 'pre-line'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}))

type Props = {
  fishId: number
}

const OceanFishPopper = ({ fishId }: Props) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('ocean-fishing')
  const [expanded, setExpanded] = React.useState(false)
  const fish = oceanFishes[fishId]
  const spreadsheetData = fish.spreadsheetData
  const locale = i18n.language

  const handleClickExpand = () => { setExpanded(!expanded) }

  return (
    <Box boxShadow={8}>
      <Card variant='outlined' className={classes.container}>
        <CardHeader
          avatar={<ItemIcon src={getImgUrl(fish)} />}
          title={translate(locale, fish, 'name')}
          titleTypographyProps={{ variant: 'h6', paragraph: true, className: classes.title }}
          subheader={(
            <div>
              {fish.lodestoneData && <div><Link href={`https://na.finalfantasyxiv.com/lodestone/playguide/db/item/${fish.lodestoneData.item}/`}>Lodestone</Link></div>}
              <div><Link href={`https://ffxivteamcraft.com/db/${locale}/item/${fishId}`}>Teamcraft</Link></div>
            </div>
          )}
          action={<ChecklistCheckmark fishId={fishId} />}
          className={classes.header}
        />
        <CardContent className={classes.content}>
          <BaitGroup {...getBaitGroup(fishId)} subtext={subtextBiteTime} />
        </CardContent>
        <CardContent className={classes.content}>
          <Table size='small'>
            <TableBody>
              <TableRow>
                <TableCell variant='head'>
                  {t('fishInfo.rating')}
                </TableCell>
                <TableCell align='center'>
                  {spreadsheetData.stars ? '★'.repeat(spreadsheetData.stars) : '?'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'>
                  {t('fishInfo.points')}
                </TableCell>
                <TableCell align='center'>
                  {spreadsheetData.points ? spreadsheetData.points : '?'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'>
                  {t('fishInfo.doubleHook')}
                </TableCell>
                <TableCell align='center'>
                  {spreadsheetData.doubleHook ? (Array.isArray(spreadsheetData.doubleHook) ? spreadsheetData.doubleHook.join('-') : spreadsheetData.doubleHook) : '?'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'>
                  {t('fishInfo.weather')}
                </TableCell>
                <TableCell align='center'>
                  {spreadsheetData.weathers
                    ? (() => {
                        switch (spreadsheetData.weathers.type) {
                          case 'ALL':
                            return 'Any'
                          case 'OK':
                            return spreadsheetData.weathers.list.map(weather =>
                              <WeatherIcon key={weather} weather={weather} showLabel={false} />
                            )
                          case 'NOT OK':
                            return (
                              <>
                                <span style={{ verticalAlign: 'middle' }}>Not </span>
                                {spreadsheetData.weathers.list.map(weather =>
                                  <WeatherIcon key={weather} weather={weather} showLabel={false} />
                                )}
                              </>
                            )
                        }
                      })()
                    : '?'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'>
                  {t('fishInfo.timeOfDay')}
                </TableCell>
                <TableCell align='center'>
                  {spreadsheetData.time ? (spreadsheetData.time.length === 3 ? 'Any' : spreadsheetData.time.map(time => <TimeIcon key={time} time={time} />)) : '?'}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent className={classes.content}>
            <Typography variant='body2' className={classes.description}>
              {translate(locale, fish, 'description').replace(/\n\n+/g, '\n\n')}
            </Typography>
          </CardContent>
        </Collapse>
        <CardActions disableSpacing>
          <IconButton onClick={handleClickExpand} className={clsx(classes.expand, expanded && classes.expandOpen)}>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  )
}

export default OceanFishPopper
