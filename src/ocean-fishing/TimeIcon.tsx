import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import { Time } from './ffxiv-ocean-fishing'
import { useTranslation } from '../i18n'

const ICON_SIZE = 32

const useStyles = makeStyles(theme => ({
  timeIcon: {
    display: 'inline-block',
    position: 'relative',
    top: '0.15em',
    verticalAlign: 'sub',
    '& *': {
      stroke: theme.palette.type === 'dark' ? '#616161' : '#000000',
      fill: '#ffff00'
    }
  }
}))

type Props = {
  time: Time
}

const TimeIcon = ({ time }: Props) => {
  const classes = useStyles()
  const { t } = useTranslation('ocean-fishing')

  switch (time) {
    case 'D':
      return (
        <Tooltip arrow placement='top' title={t('time.day')}>
          <svg width={ICON_SIZE} height={ICON_SIZE} className={classes.timeIcon}>
            <circle cx={ICON_SIZE / 2} cy={ICON_SIZE / 2} r={ICON_SIZE / 4} />
            {(() => {
              const delta = 0.22
              const r = 11
              const R = 15
              const round = (n: number) => Math.round(n * 100) / 100
              const ct = (theta: number, rho: number) => round(ICON_SIZE / 2 + rho * Math.cos(theta)) + ' ' + round(ICON_SIZE / 2 + rho * Math.sin(theta))

              const rays: React.ReactNode[] = []
              for (let i = 0; i < 8; ++i) {
                const theta = i * Math.PI / 4 + Math.PI / 8
                rays.push(
                  <path key={i} d={`M ${ct(theta - delta, r)} L ${ct(theta, R)} L ${ct(theta + delta, r)} Z`} />
                )
              }
              return rays
            })()}
          </svg>
        </Tooltip>
      )
    case 'S':
      return (
        <Tooltip arrow placement='top' title={t('time.sunset')}>
          <svg width={ICON_SIZE} height={ICON_SIZE} className={classes.timeIcon}>
            <path d='M 29 22 A 10.4 10.4 0 1 0 10 22 Z' />
            <path d='M 2 28 L 2 24 L 30 24 L 30 28 Z' />
          </svg>
        </Tooltip>
      )
    case 'N':
      return (
        <Tooltip arrow placement='top' title={t('time.night')}>
          <svg width={ICON_SIZE} height={ICON_SIZE} className={classes.timeIcon}>
            <path d='M 14 3 A 12 12 0 1 1 3 18 A 9 9 0 1 0 14 3 Z' />
          </svg>
        </Tooltip>
      )
  }
}

export default React.memo(TimeIcon)
