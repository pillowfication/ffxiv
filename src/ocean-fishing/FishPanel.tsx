import React from 'react'
import FishTable from './FishTable'
import { Stop, Time, StopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'

interface Props {
  tab: number
  index: number
  stopTime: StopTime
}

const FishPanel = ({ tab, index, stopTime }: Props): React.ReactElement => {
  const fishingSpotId: number = maps.STOP_MAP[stopTime[0] as Stop]
  return (
    <div hidden={tab !== index}>
      {tab === index && (
        <FishTable
          spots={[fishingSpotId, fishingSpotId + 1]}
          time={stopTime[1] as Time}
        />
      )}
    </div>
  )
}

export default FishPanel
