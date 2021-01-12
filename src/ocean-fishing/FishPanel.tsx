import React from 'react'
import FishTable from './FishTable'
import * as maps from './maps'

type Props = {
  tab: number,
  index: number,
  stop: maps.StopTime
}

function FishPanel ({ tab, index, stop }: Props) {
  const fishingSpotId: number = maps.STOP_MAP[stop[0]]
  return (
    <div hidden={tab !== index}>
      {tab === index && (
        <FishTable
          spots={[fishingSpotId, fishingSpotId + 1]}
          time={stop[1] as maps.Time}
        />
      )}
    </div>
  )
}

export default FishPanel
