import React from 'react'
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
import { getStopTimes, calculateVoyages, Route, Dest, Time, DestTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { getBlueFish, timeUntil, upperFirst } from './utils'
import { toTimeString } from '../utils'
import translate from '../translate'

const DATE_FORMAT: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit' }

interface Props {
  now: Date
  route: Route
  numRows: number
  filter?: DestTime[]
  onSelectRoute: (route: DestTime) => void
}

const UpcomingVoyagesTable = ({ now, route, numRows, filter, onSelectRoute }: Props): React.ReactElement => {
  const { t, i18n } = useTranslation('ocean-fishing')
  const upcomingVoyages = calculateVoyages(route, now, Math.min(Math.max(numRows, 1), 50), filter)
  const locale = i18n.language

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={3} align='center'>{t('routeInfo.time')}</TableCell>
            <TableCell colSpan={2} align='center'>{t('routeInfo.route')}</TableCell>
            <TableCell align='center'>{t('routeInfo.objectives')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(() => {
            if (upcomingVoyages.length === 0) {
              return (
                <TableRow>
                  <TableCell colSpan={6} align='center'>
                    <Typography sx={{ p: 2, fontWeight: 'bold' }}>No voyages found. You should check the filters.</Typography>
                  </TableCell>
                </TableRow>
              )
            }

            let previousDate: string
            return upcomingVoyages.map(({ date, destTime }) => {
              const dateString = date.toLocaleDateString(locale, DATE_FORMAT)
              return (
                <TableRow key={date.getTime()} hover onClick={onSelectRoute.bind(null, destTime)}>
                  <TableCell align='right' sx={{ whiteSpace: 'nowrap' }}>
                    {previousDate !== (previousDate = dateString) && <Typography>{dateString}</Typography>}
                  </TableCell>
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography>{toTimeString(date, { padded: true, locale })}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{timeUntil(now, date, { t, locale })}</Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography>{upperFirst(translate(locale, maps.STOP_MAP[destTime[0] as Dest].placeName_sub, 'name_noArticle', 'name'))}</Typography>
                  </TableCell>
                  <TableCell>
                    {maps.TIME_MAP[destTime[1] as Time]}
                  </TableCell>
                  <TableCell>
                    {maps.ACHIEVEMENTS_MAP[destTime].map(achievement => (
                      <OceanFishIcon key={achievement.id} type='achievement' id={achievement.id} />
                    ))}
                    {getStopTimes(destTime).map(getBlueFish).map(blueFish => (
                      blueFish !== null && <OceanFishIcon key={blueFish.id} type='fish' id={blueFish.id} />
                    ))}
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
