import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'

const useStyles = makeStyles(theme => ({
  cell: {
    display: 'inline-block',
    width: '5em',
    height: '5em',
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
    border: theme.palette.type === 'dark' ? '1px solid gray' : '1px solid black',
    borderRadius: 0,
    [theme.breakpoints.up('md')]: {
      width: '7em',
      height: '7em'
    },
    cursor: 'pointer'
  },
  selected: {
    backgroundColor: fade(theme.palette.primary.main, theme.palette.type === 'dark' ? 0.8 : 0.6)
  }
}))

type Props = {
  selected?: boolean,
  onSelect?: () => void
}

const CalculatorCell = ({ selected, onSelect = () => {} }: Props) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.cell, selected && classes.selected)}
      onClick={onSelect}
    />
  )
}


export default CalculatorCell
