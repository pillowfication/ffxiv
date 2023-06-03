import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import OceanFishIcon from './OceanFishIcon'
import TimeIcon from './TimeIcon'
import Tug from './Tug'
import StarBadge from './StarBadge'
import ChecklistCheckmark from './ChecklistCheckmark'
import WeatherIcon from '../skywatcher/WeatherIcon'
import { Time } from './ffxiv-ocean-fishing'
import { fishes, baits, FishingSpot } from './ffxiv-ocean-fishing/data'
import { isBaitRequired, getRecommendedBait, getRecommendedMooch } from './utils'
import translate from '../translate'

const BAIT_IDS = [
    29714, // Ragworm
    29715, // Krill
    29716, // Plump Worm
    29717, // Versatile Lure
    2587, // Pill Bug
    2591, // Rat Tail
    2603, // Glowworm
    2613, // Shrimp Cage Feeder
    2619, // Heavy Steel Jig
    12704, // Stonefly Nymph
    27590, // Squid Strip
    36593 // Mackerel Strip
]

const MOOCH_IDS = [
    29718, // Tossed Dagger
    29722, // Ghoul Barracuda
    29761, // Hi-aetherlouse
    32107, // Rothlyt Mussel
    40543, // Leopard Prawn
    40551 // Snapping Koban
]

function getValidBaits(fishingSpots: FishingSpot[]): number[] {
    return BAIT_IDS
        .filter(baitId => {
            for (const fishingSpot of fishingSpots) {
                for (const fish of fishingSpot.fishes) {
                    if (fish.spreadsheetData?.baits?.[baitId]?.usable === true) {
                        return true
                    }
                }
            }
            return false
        })
}

function getValidMooches(fishingSpots: FishingSpot[]): number[] {
    return MOOCH_IDS
        .filter(moochId => {
            for (const fishingSpot of fishingSpots) {
                for (const fish of fishingSpot.fishes) {
                    if (fish.spreadsheetData?.mooches?.[moochId]?.usable === true) {
                        return true
                    }
                }
            }
            return false
        })
}

function formatDH(doubleHook: [number, number]): string {
    return doubleHook[0] === doubleHook[1] ? String(doubleHook[0]) : doubleHook.join('\u2011')
}

interface Props {
    fishingSpots: FishingSpot[]
    time?: Time
}

const FishTable = ({ fishingSpots, time }: Props): React.ReactElement => {
    const { t, i18n } = useTranslation('ocean-fishing')
    const [bait, setBait] = useState<number | 'all'>('all')
    const locale = i18n.language

    const handleSelectBait = (event: SelectChangeEvent): void => {
        const baitId = event.target.value === 'all' ? 'all' : +event.target.value
        setBait(baitId)
    }

    return (
        <Table sx={{ '& td': { p: 0.5 } }}>
            {fishingSpots.map(fishingSpot => {
                const isSpectral = /spectral/i.test(fishingSpot.placeName.name.en)
                return (
                    <React.Fragment key={fishingSpot.id}>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={3} align='center'>{t('fish')}</TableCell>
                                <TableCell align='center'>{t('fishInfo.bait')}</TableCell>
                                <TableCell align='center'>{t('fishInfo.tug')}</TableCell>
                                <TableCell align='center'>
                                    {t('fishInfo.biteTime')}:&nbsp;
                                    <Select
                                        variant='standard'
                                        value={String(bait)}
                                        onChange={handleSelectBait}
                                        sx={{ '& .MuiInputBase-input': { p: 0 } }}
                                    >
                                        <MenuItem value='all'>{t('fishInfo.allBaits')}</MenuItem>
                                        {[...getValidBaits(fishingSpots), ...getValidMooches(fishingSpots)].map(baitId => (
                                            <MenuItem key={baitId} value={baitId}>
                                                {translate(locale, baits[baitId] || fishes[baitId], 'name')}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </TableCell>
                                <TableCell align='center'>{t('fishInfo.points')}</TableCell>
                                <TableCell align='center'>{t('fishInfo.doubleHook')}</TableCell>
                                <TableCell align='center'>{t(`fishInfo.${isSpectral ? 'timeOfDay' : 'weather'}`)}</TableCell>
                                <TableCell align='center'>{t('fishInfo.category')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fishingSpot.fishes.map(fish => {
                                const spreadsheetData = fish.spreadsheetData
                                const isUnavailable = time !== undefined && spreadsheetData?.timeAvailability != null && !spreadsheetData.timeAvailability.includes(time)
                                return (
                                    <TableRow key={fish.id} hover sx={{ opacity: isUnavailable ? 0.5 : 1 }}>
                                        <TableCell align='center'><ChecklistCheckmark fishId={fish.id} /></TableCell>
                                        <TableCell><OceanFishIcon type='fish' id={fish.id} /></TableCell>
                                        <TableCell>
                                            <Typography>{translate(locale, fish, 'name')}</Typography>
                                            {spreadsheetData?.stars != null && (
                                                <Box sx={{ mt: '-0.125em', opacity: 0.5 }}>{'★'.repeat(spreadsheetData.stars)}</Box>
                                            )}
                                        </TableCell>
                                        <TableCell align='center' sx={{ whiteSpace: 'nowrap', '& > *': { verticalAlign: 'middle' } }}>
                                            {spreadsheetData?.intuition === true && spreadsheetData?.intuitionFishes != null && (
                                                <>
                                                    {Object.entries(spreadsheetData.intuitionFishes).map(([intuitionFishId, count], index) =>
                                                        <React.Fragment key={intuitionFishId}>
                                                            <Typography display='inline'>{index === 0 ? `${count}×` : `, ${count}×`}</Typography>
                                                            <OceanFishIcon type='fish' id={Number(intuitionFishId)} />
                                                        </React.Fragment>
                                                    )}
                                                    <img src='/images/ocean-fishing/fishers-intuition.png' />
                                                </>
                                            )}
                                            {(() => {
                                                const recommendedBait = getRecommendedBait(fish)
                                                const recommendedMooch = getRecommendedMooch(fish)

                                                if (recommendedBait != null || recommendedMooch != null) {
                                                    return (
                                                        <>
                                                            {recommendedBait != null && (
                                                                <OceanFishIcon
                                                                    type='bait'
                                                                    id={recommendedBait.id}
                                                                    badge={isBaitRequired(fish, recommendedBait) && <StarBadge />}
                                                                />
                                                            )}
                                                            {recommendedBait != null && recommendedMooch != null && 'or'}
                                                            {recommendedMooch !== null && (
                                                                <OceanFishIcon type='fish' id={recommendedMooch.id} />
                                                            )}
                                                        </>
                                                    )
                                                } else {
                                                    return <OceanFishIcon type='bait' id={29717} />
                                                }
                                            })()}
                                        </TableCell>
                                        <TableCell align='center'>
                                            {spreadsheetData?.tug != null && (
                                                <Tug size='large' strength={spreadsheetData.tug} />
                                            )}
                                        </TableCell>
                                        <TableCell align='center'>
                                            {fish.spreadsheetData?.baits?.[bait as any] != null && (
                                                <Typography>{spreadsheetData!.baits[bait as any]!.biteTime?.[0] === spreadsheetData!.baits[bait as any]!.biteTime?.[1] ? spreadsheetData!.baits[bait as any]!.biteTime?.[0] : spreadsheetData!.baits[bait as any]!.biteTime?.join('\u2011')}</Typography>
                                            )}
                                        </TableCell>
                                        <TableCell align='center'>
                                            {spreadsheetData?.points != null && (
                                                <Typography>{spreadsheetData.points}</Typography>
                                            )}
                                        </TableCell>
                                        <TableCell align='center' sx={{ whiteSpace: 'nowrap' }}>
                                            {spreadsheetData?.doubleHook !== null && (
                                                <Typography>
                                                    {formatDH(spreadsheetData!.doubleHook)}
                                                    {spreadsheetData?.tripleHook !== null && (
                                                        <>&emsp;({formatDH(spreadsheetData!.tripleHook)})</>
                                                    )}
                                                </Typography>
                                            )}
                                        </TableCell>
                                        <TableCell align='center' sx={{ whiteSpace: 'nowrap' }}>
                                            {(() => {
                                                if (isSpectral) {
                                                    return spreadsheetData?.timeAvailability?.length === 3
                                                        ? 'Any'
                                                        : spreadsheetData?.timeAvailability?.map(time => <TimeIcon key={time} time={time} />)
                                                } else {
                                                    if (spreadsheetData?.weatherAvailability == null)
                                                        return null
                                                    switch (spreadsheetData.weatherAvailability.type) {
                                                        case 'ALL':
                                                            return 'Any'
                                                        case 'OK':
                                                            return spreadsheetData.weatherAvailability.weathers.map(weather =>
                                                                <WeatherIcon key={weather} weather={weather} />
                                                            )
                                                        case 'NOT OK':
                                                            return (
                                                                <>
                                                                    <Box component='span' sx={{ verticalAlign: 'middle' }}>Not&nbsp;</Box>
                                                                    {spreadsheetData.weatherAvailability.weathers.map(weather => (
                                                                        <WeatherIcon key={weather} weather={weather} />
                                                                    ))}
                                                                </>
                                                            )
                                                    }
                                                }
                                            })()}
                                        </TableCell>
                                        <TableCell align='center'>
                                            {fish.contentBonus !== null && (
                                                <OceanFishIcon type='content-bonus' id={fish.contentBonus.id} size={32} />
                                            )}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </React.Fragment>
                )
            })}
        </Table>
    )
}

export default FishTable
