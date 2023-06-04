import React, { Fragment, useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useQueryState } from 'next-usequerystate'
import NoSsr from '@mui/material/NoSsr'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import ListSubheader from '@mui/material/ListSubheader'
import MenuItem from '@mui/material/MenuItem'
import Section from '../Section'
import UpcomingVoyagesTable from './UpcomingVoyagesTable'
import { fishes, achievements } from './ffxiv-ocean-fishing/data'
import { calculateVoyages, Route, Destination, Time } from './ffxiv-ocean-fishing'
import { STOP_MAP, FILTER_MAP } from './maps'
import { upperFirst, isUncaughtItinerary } from './utils'
import translate from '../translate'

function getRoute(route: string | null): Route {
    if (route?.trim().toLowerCase() === 'ruby') {
        return Route.Ruby
    } else {
        return Route.Indigo
    }
}

// `filter` is one of
//  - `null` for no filter
//  - a key in maps.FILTER_MAP for some predefined filter
//  - 'uncaught' for a dynamic filter for uncaught fish
//  - comma separated list of DestTimes
function getFilter(filter: string | null, checklist?: number[]): Array<{ destination: Destination, time: Time }> | undefined {
    const destinations = [Destination.TheNorthernStraitOfMerlthor, Destination.RhotanoSea, Destination.TheBloodbrineSea, Destination.TheRothlytSound, Destination.TheRubySea, Destination.TheOneRiver]
    const times = [Time.Day, Time.Sunset, Time.Night]
    if (filter === null) {
        return undefined
    } else if (filter in FILTER_MAP) {
        return FILTER_MAP[filter]
    } else if (filter === 'uncaught') {
        return (destinations.flatMap(destination => times.map(time => ({ destination, time }))))
            .filter(({ destination, time }) => isUncaughtItinerary(destination, time, checklist ?? []))
    } else {
        return filter.split(',')
            .filter(code => code.length === 2 && destinations.includes(code[0] as any) && times.includes(code[1] as any))
            .map(code => ({ destination: code[0] as unknown as Destination, time: code[1] as unknown as Time }))
    }
}

interface Props {
    now: Date
    onSelectVoyage: (destination: Destination, time: Time) => void
    checklist: number[]
}

const UpcomingVoyages = ({ now, onSelectVoyage, checklist }: Props): React.ReactElement => {
    const { t, i18n } = useTranslation('ocean-fishing')
    const [_route, setRoute] = useQueryState('route')
    const [numRows, setNumRows] = useState(10)
    const [_filter, setFilter] = useQueryState('filter')
    const route = getRoute(_route)
    const filter = getFilter(_filter, checklist)
    const isCustomFilter = _filter != null && _filter !== 'uncaught' && FILTER_MAP[_filter] === undefined
    const locale = i18n.language

    useEffect(() => {
        const nextVoyage = calculateVoyages(
            route,
            now,
            1,
            filter != null && filter.length > 0 ? filter : undefined
        )
        if (nextVoyage.length > 0)
            onSelectVoyage(nextVoyage[0].destination, nextVoyage[0].time)
    }, [_filter])

    const handleSelectRoute = (event: SelectChangeEvent): void => {
        const route = event.target.value
        void setRoute(route)
    }

    const handleInputNumRows = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setNumRows(Number(event.target.value))
    }

    const handleBlurNumRows = (event: React.FocusEvent<HTMLInputElement>): void => {
        const numRows = Number(event.target.value)
        if (!isFinite(numRows)) {
            setNumRows(10)
        } else {
            setNumRows(Math.min(Math.max(Math.floor(numRows), 1), 50))
        }
    }

    const handleSelectFilter = (event: SelectChangeEvent): void => {
        const filter = event.target.value === 'none' ? null : event.target.value
        void setFilter(filter)
    }

    return (
        <Section title={t('upcomingVoyages')}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth variant='filled'>
                        <InputLabel>Route</InputLabel>
                        <NoSsr>
                            <Select value={_route ?? 'indigo'} onChange={handleSelectRoute}>
                                <MenuItem dense value='indigo'>Indigo</MenuItem>
                                <MenuItem dense value='ruby'>Ruby</MenuItem>
                            </Select>
                        </NoSsr>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <TextField
                            variant='filled'
                            label={t('numberOfRows')}
                            type='number'
                            value={numRows}
                            onChange={handleInputNumRows}
                            onBlur={handleBlurNumRows}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth variant='filled'>
                        <InputLabel>{t('filterRoute')}</InputLabel>
                        <NoSsr>
                            <Select
                                value={_filter !== null ? isCustomFilter ? 'custom' : _filter : 'none'}
                                onChange={handleSelectFilter}
                            >
                                {isCustomFilter && (
                                    <MenuItem value='custom' disabled>Custom Filter: {filter != null && filter.length > 0 ? filter.join(', ') : '(none)'}</MenuItem>
                                )}
                                <MenuItem dense value='none'>{t('noFilter')}</MenuItem>
                                <MenuItem dense value='uncaught'>Uncaught Fish</MenuItem>
                                <ListSubheader disableSticky sx={{ pt: 2 }}>{t('blueFish')}</ListSubheader>
                                <MenuItem dense value='sothis'>{translate(locale, fishes[29788], 'name')}</MenuItem>
                                <MenuItem dense value='coral_manta'>{translate(locale, fishes[29789], 'name')}</MenuItem>
                                <MenuItem dense value='stonescale'>{translate(locale, fishes[29790], 'name')}</MenuItem>
                                <MenuItem dense value='elasmosaurus'>{translate(locale, fishes[29791], 'name')}</MenuItem>
                                <MenuItem dense value='hafgufa'>{translate(locale, fishes[32074], 'name')}</MenuItem>
                                <MenuItem dense value='seafaring_toad'>{translate(locale, fishes[32094], 'name')}</MenuItem>
                                <MenuItem dense value='placodus'>{translate(locale, fishes[32114], 'name')}</MenuItem>
                                <ListSubheader disableSticky sx={{ pt: 2 }}>{t('achievements')}</ListSubheader>
                                <MenuItem dense value='octopodes'>{translate(locale, achievements[2563], 'name')}</MenuItem>
                                <MenuItem dense value='sharks'>{translate(locale, achievements[2564], 'name')}</MenuItem>
                                <MenuItem dense value='jellyfish'>{translate(locale, achievements[2565], 'name')}</MenuItem>
                                <MenuItem dense value='seadragons'>{translate(locale, achievements[2566], 'name')}</MenuItem>
                                <MenuItem dense value='balloons'>{translate(locale, achievements[2754], 'name')}</MenuItem>
                                <MenuItem dense value='crabs'>{translate(locale, achievements[2755], 'name')}</MenuItem>
                                <MenuItem dense value='mantas'>{translate(locale, achievements[2756], 'name')}</MenuItem>
                                {[
                                    Destination.RhotanoSea,
                                    Destination.TheNorthernStraitOfMerlthor,
                                    Destination.TheBloodbrineSea,
                                    Destination.TheRothlytSound,
                                    Destination.TheRubySea,
                                    Destination.TheOneRiver
                                ].map(destination => {
                                    const spotName = upperFirst(translate(locale, STOP_MAP[destination].placeName_sub, 'name_noArticle', 'name'))
                                    return [
                                        <ListSubheader disableSticky sx={{ pt: 2 }}>{spotName}</ListSubheader>,
                                        <MenuItem dense value={destination}>{spotName}</MenuItem>,
                                        <MenuItem dense value={destination + Time.Day}>{spotName} - {t('time.day')}</MenuItem>,
                                        <MenuItem dense value={destination + Time.Sunset}>{spotName} - {t('time.sunset')}</MenuItem>,
                                        <MenuItem dense value={destination + Time.Night}>{spotName} - {t('time.night')}</MenuItem>
                                    ]
                                })}
                            </Select>
                        </NoSsr>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <NoSsr>
                        <UpcomingVoyagesTable
                            now={now}
                            route={route}
                            numRows={numRows}
                            filter={filter}
                            onSelectVoyage={onSelectVoyage}
                        />
                    </NoSsr>
                </Grid>
            </Grid>
        </Section>
    )
}

export default UpcomingVoyages
