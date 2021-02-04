import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Card from '@material-ui/core/Card'
import FishPanel from './FishPanel'
import { fishingSpots, placeNames } from './ffxiv-ocean-fishing/data'
import { Stop, Time, StopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import { translate } from '../utils'
import { useTranslation } from '../i18n'

const useStyles = makeStyles(theme => ({
  headerSub: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      display: 'block'
    }
  },
  headerTime: {
    position: 'relative',
    top: '-0.2em',
    marginLeft: '0.25em'
  },
  fishFilterSelect: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      textAlign: 'right'
    }
  },
  fishTab: {
    textTransform: 'none'
  }
}))

interface Props {
  stopTimes: [StopTime, StopTime, StopTime]
}

const RouteInformationAll = ({ stopTimes }: Props): React.ReactElement => {
  const classes = useStyles()
  const { i18n } = useTranslation('ocean-fishing')
  const [tab, setTab] = useState(0)
  const locale = i18n.language

  useEffect(() => {
    setTab(0)
  }, [stopTimes.join(',')])

  const handleChangeTab = (_: any, value: number): void => {
    setTab(value)
  }

  return (
    <Card variant='outlined'>
      <Tabs variant='fullWidth' value={tab} onChange={handleChangeTab} className={classes.fishTab}>
        {stopTimes.map((stopTime, index) =>
          <Tab
            key={stopTime}
            label={(
              <>
                {index + 1}. {translate(locale, placeNames[fishingSpots[maps.STOP_MAP[stopTime[0] as Stop]].placeName_sub], 'name')}
                {maps.TIME_MAP[stopTime[1] as Time]}
              </>
            )}
            className={classes.fishTab}
          />
        )}
      </Tabs>
      {stopTimes.map((stopTime, index) =>
        <FishPanel key={stopTime} tab={tab} index={index} stopTime={stopTime} />
      )}
    </Card>
  )
}

export default RouteInformationAll
