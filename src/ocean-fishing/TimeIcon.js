import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

const ICON_SIZE = 32

const useStyles = makeStyles((theme) => ({
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

const TimeIcon = ({ time }) => {
  const classes = useStyles()

  switch (time) {
    case 'D':
      return (
        <Tooltip arrow placement='top' title='Day'>
          <svg width={ICON_SIZE} height={ICON_SIZE} className={classes.timeIcon}>
            <circle cx={ICON_SIZE / 2} cy={ICON_SIZE / 2} r={ICON_SIZE / 4} />
            {(() => {
              const delta = 0.22
              const r = 11
              const R = 15
              const round = (n) => Math.round(n * 100) / 100
              const ct = (theta, rho) => round(ICON_SIZE / 2 + rho * Math.cos(theta)) + ' ' + round(ICON_SIZE / 2 + rho * Math.sin(theta))

              const rays = []
              for (let i = 0; i < 8; ++i) {
                const theta = i * Math.PI / 4 + Math.PI / 8
                rays.push(
                  <path
                    key={i}
                    d={
                      `M ${ct(theta - delta, r, ICON_SIZE / 2, ICON_SIZE / 2)}` +
                      ` L ${ct(theta, R, ICON_SIZE / 2, ICON_SIZE / 2)}` +
                      ` L ${ct(theta + delta, r, ICON_SIZE / 2, ICON_SIZE / 2)} Z`
                    }
                  />
                )
              }
              return rays
            })()}
          </svg>
        </Tooltip>
      )
    case 'S':
      return (
        <Tooltip arrow placement='top' title='Sunset'>
          <svg width={ICON_SIZE} height={ICON_SIZE} className={classes.timeIcon}>
            <path d='M 29 22 A 10.4 10.4 0 1 0 10 22 Z' />
            <path d='M 2 28 L 2 24 L 30 24 L 30 28 Z' />
          </svg>
        </Tooltip>
      )
    case 'N':
      return (
        <Tooltip arrow placement='top' title='Night'>
          <svg width={ICON_SIZE} height={ICON_SIZE} className={classes.timeIcon}>
            <path d='M 14 3 A 12 12 0 1 1 3 18 A 9 9 0 1 0 14 3 Z' />
          </svg>
        </Tooltip>
      )
  }
}

TimeIcon.propTypes = {
  time: PropTypes.oneOf(['D', 'S', 'N']).isRequired
}

TimeIcon.Day = () => <TimeIcon time='D' />
TimeIcon.Sunset = () => <TimeIcon time='S' />
TimeIcon.Night = () => <TimeIcon time='N' />

export default TimeIcon
