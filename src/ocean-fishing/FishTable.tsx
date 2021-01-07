import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CheckIcon from '@material-ui/icons/Check'
import OceanFishIcon from './OceanFishIcon'
import TimeIcon from './TimeIcon'
import Tug from './Tug'
import WeatherIcon from '../skywatcher/WeatherIcon'
import { fishingSpots, fishes } from './gists/data/ocean-fish-data.json'
import { FishingSpot, Fish } from './gists/data/types'
import * as maps from './maps'
import { getFish, getFishInfo, getBait, translate } from './utils'
import i18n from '../../i18n'
import { I18n, TFunction } from 'next-i18next'

const useStyles = makeStyles((theme) => ({
  table: {
    '& td': {
      fontSize: '0.9em',
      padding: 0
    }
  },
  check: {
    padding: 10
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
  },
  unchecked: {
    opacity: 0.33
  },
  checked: {
    color: 'green'
  }
}))

type Props = {
  spots: number[],
  time?: 'D' | 'S' | 'N',
  checklist: number[],
  setChecklist: (checklist: number[]) => void,
  t: TFunction,
  i18n: I18n
}

const FishTable = ({ spots, time, checklist, setChecklist, t, i18n }: Props) => {
  const classes = useStyles()

  const toggleFish = (fishId: number) => {
    if (checklist.includes(fishId)) {
      const copy = checklist.slice()
      copy.splice(copy.findIndex(id => id === fishId), 1)
      setChecklist(copy)
    } else {
      const copy = checklist.slice()
      copy.push(fishId)
      copy.sort((a, b) => a - b)
      setChecklist(copy)
    }
  }

  return (
    <TableContainer>
      <Table size='small' className={classes.table}>
        {spots.map(spotId => {
          const fishingSpot: FishingSpot = fishingSpots[spotId]
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
                  const fish: Fish = fishes[fishId]
                  const fishInfo = getFishInfo(fish.name_en)
                  return (
                    <TableRow
                      key={fishId}
                      hover
                      className={clsx(time && fishInfo.time && fishInfo.time.indexOf(time) === -1 && classes.disabled)}
                    >
                      <TableCell align='center'>
                        <IconButton
                          className={clsx(classes.check, checklist.includes(fish.id) ? classes.checked : classes.unchecked)}
                          onClick={toggleFish.bind(null, fish.id)}
                        >
                          <CheckIcon />
                        </IconButton>
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
                                <OceanFishIcon type='fish' id={getFish(intuitionFish.name).id} />
                              </React.Fragment>
                            )}
                            <img src='/images/fishers-intuition.png' className={classes.intuition} />
                          </>
                        )}
                        {[fishInfo.bait, fishInfo.mooch]
                          .filter(x => x)
                          .map((bait, index) =>
                            <React.Fragment key={bait}>
                              {index > 0 && 'or'}
                              {getBait(bait) && <OceanFishIcon type='bait' id={getBait(bait).id} />}
                              {getFish(bait) && <OceanFishIcon type='fish' id={getFish(bait).id} />}
                            </React.Fragment>
                          )}
                      </TableCell>
                      <TableCell align='center'>
                        {fishInfo.tug &&
                          <Tug strength={fishInfo.tug} className={classes.tug} />}
                      </TableCell>
                      <TableCell align='center'>
                        {fishInfo.timer &&
                          <Typography>{fishInfo.timer[0] === fishInfo.timer[1] ? fishInfo.timer[0] : fishInfo.timer.join('-')}</Typography>}
                      </TableCell>
                      <TableCell align='center'>
                        {fishInfo.points &&
                          <Typography>{fishInfo.points}</Typography>}
                      </TableCell>
                      <TableCell align='center'>
                        {fishInfo.doubleHook &&
                          <Typography>{Array.isArray(fishInfo.doubleHook) ? fishInfo.doubleHook.join('-') : fishInfo.doubleHook}</Typography>}
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
