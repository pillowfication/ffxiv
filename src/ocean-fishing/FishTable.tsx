import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import OceanFishIcon from './OceanFishIcon'
import TimeIcon from './TimeIcon'
import Tug from './Tug'
import StarBadge from './StarBadge'
import ChecklistCheckmark from './ChecklistCheckmark'
import WeatherIcon from '../skywatcher/WeatherIcon'
import { fishingSpots, placeNames, fishes } from './ffxiv-ocean-fishing/data'
import { isBaitRequired } from './utils'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  table: {
    '& td': {
      fontSize: '0.9em',
      padding: 0
    }
  },
  stars: {
    marginTop: '-0.3em',
    opacity: 0.8
  },
  count: {
    verticalAlign: 'middle'
  },
  baitCell: {
    whiteSpace: 'nowrap'
  },
  intuition: {
    position: 'relative',
    verticalAlign: 'middle',
    margin: '2px 2px 0'
  },
  tug: {
    fontSize: '1.33em'
  },
  disabled: {
    backgroundColor: theme.palette.type === 'dark' ? '#333333' : '#DDDDDD',
    opacity: 0.5
  }
}))

interface Props {
  spots: number[]
  time?: 'D' | 'S' | 'N'
}

const FishTable = ({ spots, time }: Props): React.ReactElement => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('ocean-fishing')
  const locale = i18n.language

  return (
    <TableContainer>
      <Table size='small' className={classes.table}>
        {spots.map(spotId => {
          const fishingSpot = fishingSpots[spotId]
          const isSpectral = /spectral/i.test(placeNames[fishingSpot.placeName].name_en)
          return (
            <React.Fragment key={spotId}>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3} align='center'>{t('fish')}</TableCell>
                  <TableCell align='center'>{t('fishInfo.bait')}</TableCell>
                  <TableCell align='center'>{t('fishInfo.tug')}</TableCell>
                  <TableCell align='center'>{t('fishInfo.biteTime')}</TableCell>
                  <TableCell align='center'>{t('fishInfo.points')}</TableCell>
                  <TableCell align='center'>{t('fishInfo.doubleHook')}</TableCell>
                  <TableCell align='center'>{t(`fishInfo.${isSpectral ? 'timeOfDay' : 'weather'}`)}</TableCell>
                  <TableCell align='center'>{t('fishInfo.category')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fishingSpot.fishes.map(fishId => {
                  const fish = fishes[fishId]
                  const spreadsheetData = fish.spreadsheetData
                  return (
                    <TableRow
                      key={fishId}
                      hover
                      className={clsx(time !== undefined && spreadsheetData.time !== undefined && !spreadsheetData.time.includes(time) && classes.disabled)}
                    >
                      <TableCell align='center'>
                        <ChecklistCheckmark fishId={fish.id} />
                      </TableCell>
                      <TableCell>
                        <OceanFishIcon type='fish' id={fish.id} />
                      </TableCell>
                      <TableCell>
                        <div><Typography>{translate(locale, fish, 'name')}</Typography></div>
                        {spreadsheetData.stars !== undefined && (
                          <div className={classes.stars}>{'★'.repeat(spreadsheetData.stars)}</div>
                        )}
                      </TableCell>
                      <TableCell align='center' className={classes.baitCell}>
                        {spreadsheetData.intuition !== undefined && (
                          <>
                            {spreadsheetData.intuition.map(({ fishId, count }, index) =>
                              <React.Fragment key={fishId}>
                                <Typography className={classes.count} display='inline'>
                                  {index === 0 ? `${count}×` : `, ${count}×`}
                                </Typography>
                                <OceanFishIcon type='fish' id={fishId} />
                              </React.Fragment>
                            )}
                            <img src='/images/ocean-fishing/fishers-intuition.png' className={classes.intuition} />
                          </>
                        )}
                        {spreadsheetData.bait !== undefined && (
                          <OceanFishIcon
                            type='bait'
                            id={spreadsheetData.bait}
                            badge={isBaitRequired(fishId, spreadsheetData.bait) && <StarBadge />}
                          />
                        )}
                        {spreadsheetData.bait !== undefined && spreadsheetData.mooch !== undefined && 'or'}
                        {spreadsheetData.mooch !== undefined && (
                          <OceanFishIcon type='fish' id={spreadsheetData.mooch} />
                        )}
                      </TableCell>
                      <TableCell align='center'>
                        {spreadsheetData.tug !== undefined && (
                          <Tug strength={spreadsheetData.tug} className={classes.tug} />
                        )}
                      </TableCell>
                      <TableCell align='center'>
                        {fish.biteTimes.all !== undefined && (
                          <Typography>{fish.biteTimes.all[0] === fish.biteTimes.all[1] ? fish.biteTimes.all[0] : fish.biteTimes.all.join('-')}</Typography>
                        )}
                      </TableCell>
                      <TableCell align='center'>
                        {spreadsheetData.points !== undefined && (
                          <Typography>{spreadsheetData.points}</Typography>
                        )}
                      </TableCell>
                      <TableCell align='center'>
                        {spreadsheetData.doubleHook !== undefined && (
                          <Typography>{Array.isArray(spreadsheetData.doubleHook) ? spreadsheetData.doubleHook.join('-') : spreadsheetData.doubleHook}</Typography>
                        )}
                      </TableCell>
                      <TableCell align='center'>
                        {(() => {
                          if (isSpectral) {
                            return spreadsheetData.time?.length === 3 ? 'Any' : spreadsheetData.time?.map(time => <TimeIcon key={time} time={time} />)
                          } else {
                            if (spreadsheetData.weathers === undefined) return null
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
                          }
                        })()}
                      </TableCell>
                      <TableCell align='center'>
                        {fish.contentBonus !== undefined && (
                          <OceanFishIcon type='content-bonus' id={fish.contentBonus} size={30} />
                        )}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </React.Fragment>
          )
        })}
      </Table>
    </TableContainer>
  )
}

export default FishTable
