import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import OceanFishIcon from './OceanFishIcon'
import { getStopTimes, calculateVoyages, calculateVoyagesOld, Dest, Time, DestTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { getBlueFish, timeUntil, upperFirst } from './utils'
import { toTimeString } from '../utils'
import translate from '../translate'
import { useTranslation } from '../i18n'

const DATE_FORMAT: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit' }

const useStyles = makeStyles(theme => ({
  schedule: {
    '& td': {
      height: 53,
      paddingTop: theme.spacing(0.25),
      paddingBottom: theme.spacing(0.25),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      whiteSpace: 'nowrap'
    },
    '& td:first-child': {
      paddingLeft: theme.spacing(2)
    },
    '& td:last-child': {
      paddingRight: theme.spacing(2)
    },
    '& tbody tr:hover': {
      cursor: 'pointer'
    }
  },
  hoverRow: {
    backgroundColor: theme.palette.action.hover
  },
  timeUntil: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  timeCell: {
    '& svg': {
      top: 0,
      verticalAlign: 'middle'
    }
  },
  objectivesCell: {
    '& div': {
      verticalAlign: 'middle',
      fontSize: '1rem'
    }
  }
}))

interface Props {
  now: Date
  numRows: number
  useOld?: boolean
  filter?: DestTime[]
  onSelectRoute: (route: DestTime) => void
}

const UpcomingVoyagesTable = ({ now, numRows, useOld = false, filter, onSelectRoute }: Props): React.ReactElement => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('ocean-fishing')
  const [hover, setHover] = useState<DestTime | null>(null)
  const upcomingVoyages = (useOld ? calculateVoyagesOld : calculateVoyages)(now, Math.min(Math.max(numRows, 1), 50), filter)
  const locale = i18n.language

  return (
    <TableContainer component={Paper}>
      <Table size='small' className={classes.schedule}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={3} align='center'>{t('routeInfo.time')}</TableCell>
            <TableCell colSpan={2} align='center'>{t('routeInfo.route')}</TableCell>
            <TableCell align='center'>{t('routeInfo.objectives')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody onMouseOut={setHover.bind(null, null)}>
          {(() => {
            if (upcomingVoyages.length === 0) {
              return (
                <TableRow>
                  <TableCell colSpan={6} align='center'>
                    <Typography>No voyages found. You should check the filters.</Typography>
                  </TableCell>
                </TableRow>
              )
            }

            let previousDate: string
            return upcomingVoyages.map(({ date, destTime }) => {
              const dateString = date.toLocaleDateString(locale, DATE_FORMAT)
              return (
                <TableRow
                  key={date.getTime()}
                  hover
                  className={clsx(filter === undefined && hover === destTime && classes.hoverRow)}
                  onMouseOver={setHover.bind(null, destTime)}
                  onClick={onSelectRoute.bind(null, destTime)}
                >
                  <TableCell align='right'>
                    {previousDate !== (previousDate = dateString) && <Typography>{dateString}</Typography>}
                  </TableCell>
                  <TableCell>
                    <Typography>{toTimeString(date, { padded: true, locale })}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.timeUntil}>{timeUntil(now, date, { t, locale })}</Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography>{upperFirst(translate(locale, maps.STOP_MAP[destTime[0] as Dest].placeName_sub, 'name_noArticle', 'name'))}</Typography>
                  </TableCell>
                  <TableCell className={classes.timeCell}>
                    {maps.TIME_MAP[destTime[1] as Time]}
                  </TableCell>
                  <TableCell className={classes.objectivesCell}>
                    {maps.ACHIEVEMENTS_MAP[destTime].map(achievement =>
                      <OceanFishIcon key={achievement.id} type='achievement' id={achievement.id} />
                    )}
                    {getStopTimes(destTime).map(stopTime => {
                      const blueFish = getBlueFish(stopTime)
                      return blueFish !== null && <OceanFishIcon key={blueFish.id} type='fish' id={blueFish.id} />
                    })}
                  </TableCell>
                </TableRow>
              )
            })
          })()}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UpcomingVoyagesTable
