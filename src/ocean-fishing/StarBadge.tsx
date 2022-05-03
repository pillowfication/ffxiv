import React from 'react'
import { useTranslation } from 'next-i18next'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'

const ICON_SIZE = 20

function round (n: number): number {
  return Math.round(n * 100) / 100
}

function ct (theta: number, rho: number): string {
  return `${round(ICON_SIZE / 2 + rho * Math.cos(theta))} ${round(ICON_SIZE / 2 + rho * Math.sin(theta))}`
}

const StarBadge = (): React.ReactElement => {
  const { t } = useTranslation('ocean-fishing')

  return (
    <Tooltip title={String(t('requiredBait'))}>
      <Box
        component='svg'
        width={ICON_SIZE}
        height={ICON_SIZE}
        sx={{
          position: 'relative',
          top: 3,
          left: -8,
          '& *': {
            stroke: theme => theme.palette.mode === 'dark' ? '#616161' : '#000000',
            fill: '#ffff00'
          }
        }}
      >
        {(() => {
          const r = 3
          const R = 7

          const points: string[] = []
          for (let i = 0; i < 5; ++i) {
            const theta = i * (2 * Math.PI / 5) + (Math.PI / 2)
            points.push(ct(theta, r))
            points.push(ct(theta + (2 * Math.PI / 10), R))
          }

          return <path d={`M ${points.join(' L ')} Z`} />
        })()}
      </Box>
    </Tooltip>
  )
}

export default React.memo(StarBadge)
