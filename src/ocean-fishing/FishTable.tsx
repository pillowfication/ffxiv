import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import OceanFishIcon from './OceanFishIcon'
import TimeIcon from './TimeIcon'
import Tug from './Tug'
import StarBadge from './StarBadge'
import ChecklistCheckmark from './ChecklistCheckmark'
import WeatherIcon from '../skywatcher/WeatherIcon'
import { fishes, baits, FishingSpot } from './ffxiv-ocean-fishing/data'
import { isBaitRequired } from './utils'
import translate from '../translate'
import { useTranslation } from '../i18n'

const BAIT_IDS = [
  29714,
  29715,
  29716,
  29717,
  2587,
  2591,
  2603,
  2613,
  2619,
  27590,
  29722,
  29761,
  29718,
  32107
]

function getValidBaits (fishingSpots: FishingSpot[]): number[] {
  return BAIT_IDS
    .filter(baitId => {
      for (const fishingSpot of fishingSpots) {
        for (const fish of fishingSpot.fishes) {
          if (fish.biteTimes[baitId] != null) {
            return true
          }
        }
      }
      return false
    })
}

function formatDH (doubleHook: number | [number, number]): string {
  return Array.isArray(doubleHook) ? doubleHook.join('\u2011') : String(doubleHook)
}

// const useStyles = makeStyles(theme => ({
//   tableContainer: {
//     overflowY: 'hidden' // This is a mysterious issue appearing inconsistently only on Chrome
//   },
//   table: {
//     '& td': {
//       fontSize: '0.9em',
//       padding: 0
//     }
//   },
//   fishName: {
//     lineHeight: 1.25
//   },
//   stars: {
//     marginTop: '-0.125em',
//     opacity: 0.8
//   },
//   baitSelect: {
//     margin: theme.spacing(0.25, 1),
//     '& > div:first-child': {
//       padding: theme.spacing(0.33, 0.67),
//       fontSize: 'initial'
//     },
//     '& > svg': {
//       display: 'none'
//     }
//   },
//   baitCell: {
//     whiteSpace: 'nowrap',
//     '& > *': {
//       verticalAlign: 'middle'
//     }
//   },
//   intuition: {
//     position: 'relative',
//     verticalAlign: 'middle',
//     margin: '2px 2px 0'
//   },
//   tug: {
//     fontSize: '1.33em'
//   },
//   disabled: {
//     backgroundColor: theme.palette.type === 'dark' ? '#333333' : '#DDDDDD',
//     opacity: 0.5
//   }
// }))

interface Props {
  fishingSpots: FishingSpot[]
  time?: 'D' | 'S' | 'N'
}

const FishTable = ({ fishingSpots, time }: Props): React.ReactElement => {
  const { t, i18n } = useTranslation('ocean-fishing')
  const [bait, setBait] = useState<number | 'all'>('all')
  const locale = i18n.language

  const handleSelectBait = (event: SelectChangeEvent): void => {
    const baitId = event.target.value === 'all' ? 'all' : +event.target.value
    setBait(baitId)
  }

  return (
    <TableContainer sx={{ mb: 2 }}>
      <Table size='small' sx={{ '& td': { p: 0.5 } }}>
        {fishingSpots.map(fishingSpot => {
          const isSpectral = /spectral/i.test(fishingSpot.placeName.name.en)
          return (
            <React.Fragment key={fishingSpot.id}>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3} align='center'>{t('fish')}</TableCell>
                  <TableCell align='center'>{t('fishInfo.bait')}</TableCell>
                  <TableCell align='center'>{t('fishInfo.tug')}</TableCell>
                  <TableCell align='center'>
                    {t('fishInfo.biteTime')}:&nbsp;
                    <Select
                      variant='standard'
                      value={String(bait)}
                      onChange={handleSelectBait}
                      sx={{ '& .MuiInputBase-input': { p: 0 } }}
                    >
                      <MenuItem value='all'>{t('fishInfo.allBaits')}</MenuItem>
                      {getValidBaits(fishingSpots).map(baitId => (
                        <MenuItem key={baitId} value={baitId}>
                          {translate(locale, baits[baitId] || fishes[baitId], 'name')}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell align='center'>{t('fishInfo.points')}</TableCell>
                  <TableCell align='center'>{t('fishInfo.doubleHook')}</TableCell>
                  <TableCell align='center'>{t(`fishInfo.${isSpectral ? 'timeOfDay' : 'weather'}`)}</TableCell>
                  <TableCell align='center'>{t('fishInfo.category')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fishingSpot.fishes.map(fish => {
                  const spreadsheetData = fish.spreadsheetData
                  const isUnavailable = time !== undefined && spreadsheetData.time !== null && !spreadsheetData.time.includes(time)
                  return (
                    <TableRow key={fish.id} hover sx={{
                      opacity: isUnavailable ? 0.5 : 1
                    }}>
                      <TableCell align='center'><ChecklistCheckmark fishId={fish.id} /></TableCell>
                      <TableCell><OceanFishIcon type='fish' id={fish.id} /></TableCell>
                      <TableCell>
                        <Typography>{translate(locale, fish, 'name')}</Typography>
                        {spreadsheetData.stars !== null && (
                          <Box sx={{ mt: '-0.125em', opacity: 0.5 }}>
                            {'★'.repeat(spreadsheetData.stars)}
                          </Box>
                        )}
                      </TableCell>
                      <TableCell align='center' sx={{
                        whiteSpace: 'nowrap',
                        '& > *': { verticalAlign: 'middle' }
                      }}>
                        {spreadsheetData.intuition !== null && (
                          <>
                            {spreadsheetData.intuition.map(({ fish, count }, index) =>
                              <React.Fragment key={fish.id}>
                                <Typography display='inline'>{index === 0 ? `${count}×` : `, ${count}×`}</Typography>
                                <OceanFishIcon type='fish' id={fish.id} />
                              </React.Fragment>
                            )}
                            <img src='/images/ocean-fishing/fishers-intuition.png' />
                          </>
                        )}
                        {spreadsheetData.bait !== null && (
                          <OceanFishIcon
                            type='bait'
                            id={spreadsheetData.bait.id}
                            badge={isBaitRequired(fish, spreadsheetData.bait) && <StarBadge />}
                          />
                        )}
                        {spreadsheetData.bait !== null && spreadsheetData.mooch !== null && 'or'}
                        {spreadsheetData.mooch !== null && (
                          <OceanFishIcon type='fish' id={spreadsheetData.mooch.id} />
                        )}
                      </TableCell>
                      <TableCell align='center'>
                        {spreadsheetData.tug !== null && (
                          <Tug size='large' strength={spreadsheetData.tug} />
                        )}
                      </TableCell>
                      <TableCell align='center'>
                        {fish.biteTimes[bait] !== null && (
                          <Typography>{fish.biteTimes[bait]?.[0] === fish.biteTimes[bait]?.[1] ? fish.biteTimes[bait]?.[0] : fish.biteTimes[bait]?.join('\u2011')}</Typography>
                        )}
                      </TableCell>
                      <TableCell align='center'>
                        {spreadsheetData.points !== null && (
                          <Typography>{spreadsheetData.points}</Typography>
                        )}
                      </TableCell>
                      <TableCell align='center' sx={{ whiteSpace: 'nowrap' }}>
                        {spreadsheetData.doubleHook !== null && (
                          <Typography>
                            {formatDH(spreadsheetData.doubleHook)}
                            {spreadsheetData.tripleHook !== null && (
                              <>&emsp;({formatDH(spreadsheetData.tripleHook)})</>
                            )}
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell align='center' sx={{ whiteSpace: 'nowrap' }}>
                        {(() => {
                          if (isSpectral) {
                            return spreadsheetData.time?.length === 3
                              ? 'Any'
                              : spreadsheetData.time?.map(time => <TimeIcon key={time} time={time} />)
                          } else {
                            if (spreadsheetData.weathers === null) return null
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
                                    <Box component='span' sx={{ verticalAlign: 'middle' }}>Not&nbsp;</Box>
                                    {spreadsheetData.weathers.list.map(weather => (
                                      <WeatherIcon key={weather} weather={weather} />
                                    ))}
                                  </>
                                )
                            }
                          }
                        })()}
                      </TableCell>
                      <TableCell align='center'>
                        {fish.contentBonus !== null && (
                          <OceanFishIcon type='content-bonus' id={fish.contentBonus.id} size={32} />
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
