import React from 'react'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { Stop, Time } from './ffxiv-ocean-fishing'
import { STOP_MAP, TIME_MAP } from './maps'
import translate from '../translate'

interface Props {
    index: number
    stop: Stop
    time: Time
    children?: React.ReactNode
}

const StopCard = ({ index, stop, time, children }: Props): React.ReactElement => {
    const { i18n } = useTranslation()
    const locale = i18n.language

    return (
        <Grid item xs={12} md={4}>
            <Card variant='outlined' sx={{ height: 1.00 }}>
                <CardHeader
                    title={
                        <Typography variant='h6'>
                            {index + 1}.{' '}
                            {translate(locale, STOP_MAP[stop].placeName_sub, 'name')}{' '}
                            <Box component='span' sx={{ '& > svg': { top: '-20%' } }}>{TIME_MAP[time]}</Box>
                        </Typography>
                    }
                    disableTypography
                />
                {children}
            </Card>
        </Grid>
    )
}

export default StopCard
