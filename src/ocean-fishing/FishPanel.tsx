import React from 'react'
import FishTable from './FishTable'
import { Stop, Time, StopTime } from './ocean-fishing'
import * as maps from './maps'

type Props = {
  tab: number,
  index: number,
  stop: StopTime
}

function FishPanel ({ tab, index, stop }: Props) {
  const fishingSpotId: number = maps.STOP_MAP[stop[0] as Stop]
  return (
    <div hidden={tab !== index}>
      {tab === index && (
        <FishTable
          spots={[fishingSpotId, fishingSpotId + 1]}
          time={stop[1] as Time}
        />
      )}
    </div>
  )
}

export default FishPanel
