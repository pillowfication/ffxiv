import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'inline-block',
    margin: theme.spacing(2),
    borderCollapse: 'collapse',
    border: theme.palette.type === 'dark' ? '1px solid gray' : '1px solid black'
  },
  cell: {
    display: 'inline-block',
    width: '2.5em',
    height: '2.5em',
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
    border: theme.palette.type === 'dark' ? '1px solid gray' : '1px solid black'
  },
  selected: {
    backgroundColor: fade(theme.palette.primary.main, theme.palette.type === 'dark' ? 0.8 : 0.6)
  }
}))

type Props = {
  state: string
}

const MiniGrid = ({ state }: Props) => {
  const classes = useStyles()

  return (
    <table className={classes.grid}>
      <tbody>
        <tr>
          <td className={clsx(classes.cell, state[0] === 'X' && classes.selected)} />
          <td className={clsx(classes.cell, state[1] === 'X' && classes.selected)} />
          <td className={clsx(classes.cell, state[2] === 'X' && classes.selected)} />
        </tr>
        <tr>
          <td className={clsx(classes.cell, state[3] === 'X' && classes.selected)} />
          <td className={clsx(classes.cell, state[4] === 'X' && classes.selected)} />
          <td className={clsx(classes.cell, state[5] === 'X' && classes.selected)} />
        </tr>
        <tr>
          <td className={clsx(classes.cell, state[6] === 'X' && classes.selected)} />
          <td className={clsx(classes.cell, state[7] === 'X' && classes.selected)} />
          <td className={clsx(classes.cell, state[8] === 'X' && classes.selected)} />
        </tr>
      </tbody>
    </table>
  )
}

export default MiniGrid
