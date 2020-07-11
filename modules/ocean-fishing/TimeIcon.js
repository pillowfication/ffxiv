import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

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

export default function TimeIcon (props) {
  const classes = useStyles()

  switch (props.time) {
    case 'D':
      return (
        <svg width={32} height={32} className={classes.timeIcon} title='Day'>
          <circle cx={16} cy={16} r={8} />
          {(() => {
            const cx = 16
            const cy = 16
            const delta = 0.22
            const r = 11
            const R = 15

            function ct (theta, rho) {
              return Math.round((cx + rho * Math.cos(theta)) * 100) / 100 + ' ' +
                Math.round((cy + rho * Math.sin(theta)) * 100) / 100
            }

            const rays = []
            for (let i = 0; i < 8; ++i) {
              const theta = i * Math.PI / 4 + Math.PI / 8
              rays.push(
                <path
                  key={i}
                  d={`M ${ct(theta - delta, r, cx, cy)} L ${ct(theta, R, cx, cy)} L ${ct(theta + delta, r, cx, cy)} Z`}
                />
              )
            }

            return rays
          })()}
          <path d='M 26.84 17.89 L 29.86 21.74 L 25 22.33 Z' />
          <path d='M 22.33 25 L 21.74 29.86 L 17.89 26.84 Z' />
          <path d='M 14.11 26.84 L 10.26 29.86 L 9.67 25 Z' />
          <path d='M 7 22.33 L 2.14 21.74 L 5.16 17.89 Z' />
          <path d='M 5.16 14.11 L 2.14 10.26 L 7 9.67 Z' />
          <path d='M 9.67 7 L 10.26 2.14 L 14.11 5.16 Z' />
          <path d='M 17.89 5.16 L 21.74 2.14 L 22.33 7 Z' />
          <path d='M 25 9.67 L 29.86 10.26 L 26.84 14.11 Z' />
        </svg>
      )
    case 'S':
      return (
        <svg width={32} height={32} className={classes.timeIcon} title='Sunset'>
          <path d='M 29 22 A 10.4 10.4 0 1 0 10 22 Z' />
          <path d='M 2 28 L 2 24 L 30 24 L 30 28 Z' />
        </svg>
      )
    case 'N':
      return (
        <svg width={32} height={32} className={classes.timeIcon} title='Night'>
          <path d='M 14 3 A 12 12 0 1 1 3 18 A 9 9 0 1 0 14 3 Z' />
        </svg>
      )
  }
}

TimeIcon.propTypes = {
  time: PropTypes.oneOf(['D', 'S', 'N']).isRequired
}
