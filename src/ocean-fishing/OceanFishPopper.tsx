import React from 'react'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ItemIcon from './ItemIcon'
import TimeIcon from './TimeIcon'
import BaitGroup from './BaitGroup'
import ChecklistCheckmark from './ChecklistCheckmark'
import WeatherIcon from '../skywatcher/WeatherIcon'
import { Fish } from './ffxiv-ocean-fishing/data'
import { getBaitGroup, subtextBiteTime } from './utils'
import translate from '../translate'

function getImgUrl (fish: Fish): string {
  if (fish.lodestoneData !== null) {
    return `https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/${fish.lodestoneData.icon_lg.slice(0, 2)}/${fish.lodestoneData.icon_lg}.png`
  } else {
    // Fallback to XIVAPI's icons
    return `https://xivapi.com/i/${`000000${fish.icon - (fish.icon % 1000)}`.slice(-6)}/${`000000${fish.icon}`.slice(-6)}.png`
  }
}

interface Props {
  fish: Fish
}

const OceanFishPopper = ({ fish }: Props): React.ReactElement => {
  const { t, i18n } = useTranslation('ocean-fishing')
  const [expanded, setExpanded] = React.useState(false)
  const spreadsheetData = fish.spreadsheetData
  const locale = i18n.language

  const handleClickExpand = (): void => {
    setExpanded(!expanded)
  }

  return (
    <Box boxShadow={8}>
      <Card variant='outlined' className={'classes.container'}>
        <CardHeader
          avatar={<ItemIcon src={getImgUrl(fish)} />}
          title={translate(locale, fish, 'name')}
          titleTypographyProps={{ variant: 'h6', paragraph: true, className: 'classes.title' }}
          subheader={(
            <div>
              {fish.lodestoneData !== null && (
                <div><Link href={`https://na.finalfantasyxiv.com/lodestone/playguide/db/item/${fish.lodestoneData.item}/`}>Lodestone</Link></div>
              )}
              <div><Link href={`https://ffxivteamcraft.com/db/${locale}/item/${fish.id}`}>Teamcraft</Link></div>
            </div>
          )}
          action={<ChecklistCheckmark fishId={fish.id} />}
          className={'classes.header'}
        />
        <CardContent className={'classes.content'}>
          <BaitGroup {...getBaitGroup(fish)} subtext={subtextBiteTime} />
        </CardContent>
        <CardContent className={'classes.content'}>
          <Table size='small' className={'classes.table'}>
            <TableBody>
              <TableRow>
                <TableCell variant='head'>
                  {t('fishInfo.rating')}
                </TableCell>
                <TableCell align='center'>
                  {spreadsheetData.stars !== null ? '★'.repeat(spreadsheetData.stars) : '?'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'>
                  {t('fishInfo.points')}
                </TableCell>
                <TableCell align='center'>
                  {spreadsheetData.points !== null ? spreadsheetData.points : '?'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'>
                  {t('fishInfo.doubleHook')}
                </TableCell>
                <TableCell align='center'>
                  {spreadsheetData.doubleHook !== null
                    ? (Array.isArray(spreadsheetData.doubleHook) ? spreadsheetData.doubleHook.join('-') : spreadsheetData.doubleHook)
                    : '?'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'>
                  {t('fishInfo.tripleHook')}
                </TableCell>
                <TableCell align='center'>
                  {spreadsheetData.tripleHook !== null
                    ? (Array.isArray(spreadsheetData.tripleHook) ? spreadsheetData.tripleHook.join('-') : spreadsheetData.tripleHook)
                    : '?'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant='head'>
                  {t('fishInfo.weather')}
                </TableCell>
                <TableCell align='center'>
                  {spreadsheetData.weathers !== null
                    ? (() => {
                        switch (spreadsheetData.weathers.type) {
                          case 'ALL':
                            return 'Any'
                          case 'OK':
                            return spreadsheetData.weathers.list.map(weather =>
                              <WeatherIcon key={weather} weather={weather} />
                            )
                          case 'NOT OK':
                            return (
                              <>
                                <span style={{ verticalAlign: 'middle' }}>Not </span>
                                {spreadsheetData.weathers.list.map(weather =>
                                  <WeatherIcon key={weather} weather={weather} />
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
                  {spreadsheetData.time !== null
                    ? spreadsheetData.time.length === 3 ? 'Any' : spreadsheetData.time.map(time => <TimeIcon key={time} time={time} />)
                    : '?'}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent className={'classes.content'}>
            <Typography variant='body2' className={'classes.description'}>
              {translate(locale, fish, 'description').replace(/\n\n+/g, '\n\n')}
            </Typography>
          </CardContent>
        </Collapse>
        <CardActions disableSpacing>
          <IconButton onClick={handleClickExpand} className={'clsx(classes.expand, expanded && classes.expandOpen)'}>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  )
}

export default OceanFishPopper
