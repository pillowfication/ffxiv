import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Section from '../Section'
import ItineraryInformationIntuition from './VoyageInformationIntuition'
import ItineraryInformationTimeSensitive from './VoyageInformationTimeSensitive'
import ItineraryInformationPoints from './VoyageInformationPoints'
import ItineraryInformationAll from './VoyageInformationAll'
import { calculateVoyages, getStopTimes, Destination, Time } from './ffxiv-ocean-fishing'
import { STOP_MAP, TIME_MAP } from './maps'
import { getRoute, timeUntil, upperFirst } from './utils'
import translate from '../translate'

enum FishFilter {
    Intuition = 'intuition',
    TimeSensitive = 'time-sensitive',
    Points = 'points',
    All = 'all'
}

interface Props {
    now: Date
    destination: Destination
    time: Time
}

const VoyageInformation = ({ now, destination, time }: Props): React.ReactElement => {
    const { t, i18n } = useTranslation('ocean-fishing')
    const [fishFilter, setFishFilter] = useState<FishFilter | null>(null)
    const itinerary = getStopTimes(destination, time)
    const departure = calculateVoyages(getRoute(destination), now, 1, [{ destination, time }])[0].date
    const locale = i18n.language

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const data = window.localStorage.getItem('ocean-fishing/route-information-filter')
            if (data !== null) {
                const key = Object.keys(FishFilter).find(key => (FishFilter as Record<string, FishFilter>)[key] === data)
                setFishFilter(key !== undefined ? (FishFilter as Record<string, FishFilter>)[key] : FishFilter.Intuition)
            }
        }
    }, [])

    useEffect(() => {
        if (fishFilter !== null)
            window.localStorage.setItem('ocean-fishing/route-information-filter', fishFilter)
    }, [fishFilter])

    const handleSelectFishFilter = (event: SelectChangeEvent<unknown>): void => {
        setFishFilter(event.target.value as FishFilter)
    }

    return (
        <Section>
            <Grid container alignItems='flex-end' spacing={2} mb={2}>
                <Grid item xs={12} md>
                    <Typography variant='h3'>
                        {upperFirst(translate(locale, STOP_MAP[destination].placeName_sub, 'name_noArticle', 'name'))}
                        <Box component='span' sx={{ '& > svg': { top: '-20%', ml: 1, mr: 2 } }}>
                            {TIME_MAP[time]}
                        </Box>
                        <Typography sx={{ display: { sm: 'block', md: 'inline' } }}>
                            {timeUntil(now, departure, { t, full: true, locale })}
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} md='auto'>
                    <Select size='small' value={fishFilter ?? FishFilter.Intuition} onChange={handleSelectFishFilter}>
                        <MenuItem value={FishFilter.Intuition}>{t('showIntuitionFish')}</MenuItem>
                        <MenuItem value={FishFilter.TimeSensitive}>{t('showTimeFish')}</MenuItem>
                        <MenuItem value={FishFilter.Points}>{t('showPointsFish')}</MenuItem>
                        <MenuItem value={FishFilter.All}>{t('showAllFish')}</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            {(() => {
                switch (fishFilter ?? FishFilter.Intuition) {
                    case FishFilter.Intuition:
                        return <ItineraryInformationIntuition itinerary={itinerary} />
                    case FishFilter.TimeSensitive:
                        return <ItineraryInformationTimeSensitive itinerary={itinerary} />
                    case FishFilter.Points:
                        return <ItineraryInformationPoints itinerary={itinerary} />
                    case FishFilter.All:
                        return <ItineraryInformationAll itinerary={itinerary} />
                }
            })()}
        </Section>
    )
}

export default VoyageInformation
