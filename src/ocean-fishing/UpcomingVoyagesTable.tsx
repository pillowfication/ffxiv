import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import OceanFishIcon from './OceanFishIcon'
import { getStopTimes, calculateVoyages, Dest, Time, DestTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { getBlueFish, timeUntil, upperFirst } from './utils'
import { toTimeString } from '../utils'
import translate from '../translate'

const DATE_FORMAT: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit' }

interface Props {
  now: Date
  numRows: number
  filter?: DestTime[]
  onSelectRoute: (route: DestTime) => void
}

const UpcomingVoyagesTable = ({ now, numRows, filter, onSelectRoute }: Props): React.ReactElement => {
  const { t, i18n } = useTranslation('ocean-fishing')
  const [hover, setHover] = useState<DestTime | null>(null)
  const upcomingVoyages = calculateVoyages(now, Math.min(Math.max(numRows, 1), 50), filter)
  const locale = i18n.language

  return (
    <TableContainer component={Paper}>
      <Table size='small' className={'classes.schedule'}>
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
                  className={'clsx(filter === undefined && hover === destTime && classes.hoverRow)'}
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
                    <Typography className={'classes.timeUntil'}>{timeUntil(now, date, { t, locale })}</Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography>{upperFirst(translate(locale, maps.STOP_MAP[destTime[0] as Dest].placeName_sub, 'name_noArticle', 'name'))}</Typography>
                  </TableCell>
                  <TableCell className={'classes.timeCell'}>
                    {maps.TIME_MAP[destTime[1] as Time]}
                  </TableCell>
                  <TableCell className={'classes.objectivesCell'}>
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
