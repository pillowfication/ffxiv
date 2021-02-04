import React from 'react'
import FishTable from './FishTable'
import { Stop, Time, StopTime } from './ffxiv-ocean-fishing'
import { fishingSpots } from './ffxiv-ocean-fishing/data'
import * as maps from './maps'

interface Props {
  tab: number
  index: number
  stopTime: StopTime
}

const FishPanel = ({ tab, index, stopTime }: Props): React.ReactElement => {
  const fishingSpot = maps.STOP_MAP[stopTime[0] as Stop]
  return (
    <div hidden={tab !== index}>
      {tab === index && (
        <FishTable
          fishingSpots={[fishingSpot, fishingSpots[fishingSpot.id + 1]]}
          time={stopTime[1] as Time}
        />
      )}
    </div>
  )
}

export default FishPanel
