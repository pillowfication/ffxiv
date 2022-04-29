import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import FishPanel from './FishPanel'
import { Stop, Time, StopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import translate from '../translate'

interface Props {
  stopTimes: [StopTime, StopTime, StopTime]
}

const RouteInformationAll = ({ stopTimes }: Props): React.ReactElement => {
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
      <Tabs variant='fullWidth' value={tab} onChange={handleChangeTab} className={'classes.fishTab'}>
        {stopTimes.map((stopTime, index) =>
          <Tab
            key={stopTime}
            label={(
              <>
                {index + 1}. {translate(locale, maps.STOP_MAP[stopTime[0] as Stop].placeName_sub, 'name')}
                {maps.TIME_MAP[stopTime[1] as Time]}
              </>
            )}
            className={'classes.fishTab'}
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
