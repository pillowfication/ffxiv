import React from 'react'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { Stop, Time, StopTime } from './ffxiv-ocean-fishing'
import * as maps from './maps'
import translate from '../translate'

interface Props {
  index: number
  stopTime: StopTime
  children?: React.ReactNode
}

const StopCard = ({ index, stopTime, children }: Props): React.ReactElement => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  return (
    <Grid item xs={12} md={4}>
      <Card variant='outlined' sx={{ height: 1.00 }}>
        <CardHeader
          title={
            <Typography variant='h6'>
              {index + 1}.{' '}
              {translate(locale, maps.STOP_MAP[stopTime[0] as Stop].placeName_sub, 'name')}{' '}
              <Box component='span' sx={{ '& > svg': { top: '-20%' } }}>{maps.TIME_MAP[stopTime[1] as Time]}</Box>
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
