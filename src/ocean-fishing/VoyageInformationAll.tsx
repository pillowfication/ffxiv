import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import FishPanel from './FishPanel'
import { Stop, Time } from './ffxiv-ocean-fishing'
import { STOP_MAP, TIME_MAP } from './maps'
import translate from '../translate'

interface Props {
    itinerary: Array<{ stop: Stop, time: Time }>
}

const RouteInformationAll = ({ itinerary }: Props): React.ReactElement => {
    const { i18n } = useTranslation('ocean-fishing')
    const [tab, setTab] = useState(0)
    const locale = i18n.language

    useEffect(() => {
        setTab(0)
    }, [itinerary.map(({ stop, time }) => stop + time).join(',')])

    const handleChangeTab = (event: React.SyntheticEvent<Element, Event>, value: any) => {
        setTab(Number(value))
    }

    return (
        <Card variant='outlined'>
            <Tabs variant='fullWidth' value={tab} onChange={handleChangeTab}>
                {itinerary.map(({ stop, time }, index) => (
                    <Tab
                        key={index}
                        label={<>{index + 1}. {translate(locale, STOP_MAP[stop].placeName_sub, 'name')} {TIME_MAP[time]}</>}
                    />
                ))}
            </Tabs>
            {itinerary.map(({ stop, time }, index) => (
                <FishPanel key={index} tab={tab} index={index} stop={stop} time={time} />
            ))}
        </Card>
    )
}

export default RouteInformationAll
