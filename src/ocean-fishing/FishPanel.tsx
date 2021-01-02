import React from 'react'
import FishTable from './FishTable'
import * as maps from './maps'

type Props = {
  tab: number,
  index: number,
  stop: maps.StopTime,
  checklist: number[],
  setChecklist: (checklist: number[]) => void
}

function FishPanel ({ tab, index, stop, checklist, setChecklist }: Props) {
  const fishingSpotId: number = maps.STOP_MAP[stop[0]]
  return (
    <div hidden={tab !== index}>
      {tab === index &&
        <FishTable
          spots={[fishingSpotId, fishingSpotId + 1]}
          time={stop[1] as maps.Time}
          checklist={checklist}
          setChecklist={setChecklist}
        />}
    </div>
  )
}

export default FishPanel
