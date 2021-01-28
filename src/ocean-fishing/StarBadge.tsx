import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  starBadge: {
    position: 'relative',
    top: 3,
    left: -8,
    '& *': {
      stroke: theme.palette.type === 'dark' ? '#616161' : '#000000',
      fill: '#ffff00'
    }
  }
}))

const StarBadge = () => {
  const classes = useStyles()

  return (
    <svg width={20} height={20} className={classes.starBadge}>
      {(() => {
        const r = 3
        const R = 7
        const round = (n: number) => Math.round(n * 100) / 100
        const ct = (theta: number, rho: number) => round(10 + rho * Math.cos(theta)) + ' ' + round(10 + rho * Math.sin(theta))

        const points: string[] = []
        for (let i = 0; i < 5; ++i) {
          const theta = i * (2 * Math.PI / 5) + (Math.PI / 2)
          points.push(ct(theta, r))
          points.push(ct(theta + (2 * Math.PI / 10), R))
        }

        return <path d={`M ${points.join(' L ')} Z`} />
      })()}
    </svg>
  )
}

export default StarBadge