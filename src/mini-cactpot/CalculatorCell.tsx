import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  cell: {
    width: '5em',
    height: '5em',
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
    borderRadius: 0,
    [theme.breakpoints.up('md')]: {
      width: '7.5em',
      height: '7.5em'
    }
  },
  cellInput: {
    textAlign: 'center',
    fontSize: '2.5em',
    [theme.breakpoints.up('md')]: {
      fontSize: '4em'
    }
  },
  suggested: {
    backgroundColor: fade(theme.palette.primary.main, 0.2)
  },
  error: {
    backgroundColor: fade(theme.palette.error.main, 0.25)
  }
}))

type Props = {
  value?: number,
  suggested?: boolean,
  error?: boolean,
  onInputDigit?: (digit: number) => void
}

const CalculatorCell = ({ value, suggested, error, onInputDigit = () => {} }: Props) => {
  const classes = useStyles()

  const handleInputDigit = (event: React.KeyboardEvent) => {
    const key = event.key
    if (key === 'Backspace' || key === 'Delete') {
      onInputDigit(null)
    } else {
      const digit = Number(key)
      if (digit >= 1 && digit <= 9) {
        onInputDigit(digit)
      }
    }
  }

  return (
    <TextField
      variant='outlined'
      error={error}
      InputProps={{ className: clsx(classes.cell, suggested && classes.suggested, error && classes.error) }}
      inputProps={{ className: classes.cellInput }}
      onKeyDown={handleInputDigit}
      value={value}
    />
  )
}

export default CalculatorCell
