import React from 'react'
import { useTranslation } from 'next-i18next'
import { styled } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import { Time } from './ffxiv-ocean-fishing'

const ICON_SIZE = 32

function round (n: number): number {
  return Math.round(n * 100) / 100
}

function ct (theta: number, rho: number): string {
  return `${round(ICON_SIZE / 2 + rho * Math.cos(theta))} ${round(ICON_SIZE / 2 + rho * Math.sin(theta))}`
}

const Icon = styled('svg')(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  top: '0.15em',
  verticalAlign: 'sub',
  '& *': {
    stroke: theme.palette.mode === 'dark' ? '#616161' : '#000000',
    fill: '#ffff00'
  }
}))

interface Props {
  time: Time
}

const TimeIcon = ({ time }: Props): React.ReactElement => {
  const { t } = useTranslation('ocean-fishing')

  switch (time) {
    case 'D':
      return (
        <Tooltip arrow placement='top' title={String(t('time.day'))}>
          <Icon width={ICON_SIZE} height={ICON_SIZE}>
            <circle cx={ICON_SIZE / 2} cy={ICON_SIZE / 2} r={ICON_SIZE / 4} />
            {(() => {
              const delta = 0.22
              const r = 11
              const R = 15

              const rays: React.ReactNode[] = []
              for (let i = 0; i < 8; ++i) {
                const theta = i * Math.PI / 4 + Math.PI / 8
                rays.push(
                  <path key={i} d={`M ${ct(theta - delta, r)} L ${ct(theta, R)} L ${ct(theta + delta, r)} Z`} />
                )
              }
              return rays
            })()}
          </Icon>
        </Tooltip>
      )
    case 'S':
      return (
        <Tooltip arrow placement='top' title={String(t('time.sunset'))}>
          <Icon width={ICON_SIZE} height={ICON_SIZE}>
            <path d='M 29 22 A 10.4 10.4 0 1 0 10 22 Z' />
            <path d='M 2 28 L 2 24 L 30 24 L 30 28 Z' />
          </Icon>
        </Tooltip>
      )
    case 'N':
      return (
        <Tooltip arrow placement='top' title={String(t('time.night'))}>
          <Icon width={ICON_SIZE} height={ICON_SIZE}>
            <path d='M 14 3 A 12 12 0 1 1 3 18 A 9 9 0 1 0 14 3 Z' />
          </Icon>
        </Tooltip>
      )
  }
}

export default React.memo(TimeIcon)
