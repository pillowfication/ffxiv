import React from 'react'
import TableContainer from '@mui/material/TableContainer'
import FishTable from './FishTable'
import { Stop, Time } from './ffxiv-ocean-fishing'
import { fishingSpots } from './ffxiv-ocean-fishing/data'
import * as maps from './maps'

interface Props {
    tab: number
    index: number
    stop: Stop
    time: Time
}

const FishPanel = ({ tab, index, stop, time }: Props): React.ReactElement => {
    const fishingSpot = maps.STOP_MAP[stop]
    return (
        <div hidden={tab !== index}>
            <TableContainer>
                <FishTable
                    fishingSpots={[fishingSpot, fishingSpots[fishingSpot.id + 1]]}
                    time={time}
                />
            </TableContainer>
        </div>
    )
}

export default FishPanel
