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
import ChecklistCheckmark from './ChecklistCheckmark'
import WeatherIcon from '../skywatcher/WeatherIcon'
import { fishingSpots, fishes } from './gists/data'
import * as maps from './maps'
import { translate } from './utils'
import i18n from '../../i18n'
import { I18n, TFunction } from 'next-i18next'

const useStyles = makeStyles((theme) => ({
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

type Props = {
  spots: number[],
  time?: 'D' | 'S' | 'N',
  t: TFunction,
  i18n: I18n
}

const FishTable = ({ spots, time, t, i18n }: Props) => {
  const classes = useStyles()

  return (
    <TableContainer>
      <Table size='small' className={classes.table}>
        {spots.map(spotId => {
          const fishingSpot = fishingSpots[spotId]
          const isSpectral = /spectral/i.test(fishingSpot.place_name_en)
          return (
            <React.Fragment key={spotId}>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3} align='center'>{t('fish')}</TableCell>
                  <TableCell align='center'>{t('bait')}</TableCell>
                  <TableCell align='center'>{t('tug')}</TableCell>
                  <TableCell align='center'>{t('bite-time')}</TableCell>
                  <TableCell align='center'>{t('points')}</TableCell>
                  <TableCell align='center'>{t('double-hook')}</TableCell>
                  <TableCell align='center'>{t(isSpectral ? 'time-of-day' : 'weather')}</TableCell>
                  <TableCell align='center'>{t('category')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fishingSpot.fishes.map(fishId => {
                  const fish = fishes[fishId]
                  const fishInfo = fish.spreadsheet_data
                  return (
                    <TableRow
                      key={fishId}
                      hover
                      className={clsx(time && fishInfo.time && fishInfo.time.indexOf(time) === -1 && classes.disabled)}
                    >
                      <TableCell align='center'>
                        <ChecklistCheckmark fishId={fish.id} />
                      </TableCell>
                      <TableCell>
                        <OceanFishIcon type='fish' id={fish.id} />
                      </TableCell>
                      <TableCell>
                        <div><Typography>{translate(i18n.language, fish, 'name')}</Typography></div>
                        {fishInfo.stars &&
                          <div className={classes.stars}>{'★'.repeat(fishInfo.stars)}</div>}
                      </TableCell>
                      <TableCell align='center'>
                        {fishInfo.intuition && (
                          <>
                            {fishInfo.intuition.map((intuitionFish, index) =>
                              <React.Fragment key={index}>
                                <Typography className={classes.count} display='inline'>
                                  {index === 0 ? `${intuitionFish.count}×` : `, ${intuitionFish.count}×`}
                                </Typography>
                                <OceanFishIcon type='fish' id={intuitionFish.id} />
                              </React.Fragment>
                            )}
                            <img src='/images/fishers-intuition.png' className={classes.intuition} />
                          </>
                        )}
                        {fishInfo.bait && <OceanFishIcon type='bait' id={fishInfo.bait} />}
                        {fishInfo.bait && fishInfo.mooch && 'or'}
                        {fishInfo.mooch && <OceanFishIcon type='fish' id={fishInfo.mooch} />}
                      </TableCell>
                      <TableCell align='center'>
                        {fishInfo.tug &&
                          <Tug strength={fishInfo.tug} className={classes.tug} />}
                      </TableCell>
                      <TableCell align='center'>
                        {fishInfo.bite_time.all &&
                          <Typography>{fishInfo.bite_time.all[0] === fishInfo.bite_time.all[1] ? fishInfo.bite_time.all[0] : fishInfo.bite_time.all.join('-')}</Typography>}
                      </TableCell>
                      <TableCell align='center'>
                        {fishInfo.points &&
                          <Typography>{fishInfo.points}</Typography>}
                      </TableCell>
                      <TableCell align='center'>
                        {fishInfo.double_hook &&
                          <Typography>{Array.isArray(fishInfo.double_hook) ? fishInfo.double_hook.join('-') : fishInfo.double_hook}</Typography>}
                      </TableCell>
                      <TableCell align='center'>
                        {(() => {
                          if (isSpectral) {
                            return fishInfo.time === 'DSN'
                              ? 'Any'
                              : fishInfo.time && fishInfo.time.split('').map(time => <TimeIcon key={time} time={time as maps.Time} />)
                          } else {
                            if (!fishInfo.weathers) return null
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
                          }
                        })()}
                      </TableCell>
                      <TableCell align='center'>
                        {fishInfo.category &&
                          <OceanFishIcon type='bonus-icon' id={fishInfo.category} size={30} />}
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

export default i18n.withTranslation('ocean-fishing')(FishTable)
