import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { alpha } from '@material-ui/core/styles/colorManipulator'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
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
    fontSize: '2em',
    [theme.breakpoints.up('md')]: {
      fontSize: '4em'
    }
  },
  suggested: {
    backgroundColor: alpha(theme.palette.primary.main, 0.2)
  },
  error: {
    backgroundColor: alpha(theme.palette.error.main, 0.25)
  }
}))

interface Props {
  value: number | null
  suggested?: boolean
  error?: boolean
  onInputDigit: (digit: number | null) => void
}

const CalculatorCell = ({ value, suggested = false, error = false, onInputDigit }: Props): React.ReactElement => {
  const classes = useStyles()

  const handleInputDigit = (event: React.KeyboardEvent): void => {
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
      type='tel'
      variant='outlined'
      error={error}
      InputProps={{ className: clsx(classes.cell, suggested && classes.suggested, error && classes.error) }}
      inputProps={{ className: classes.cellInput }}
      onKeyDown={handleInputDigit}
      value={value !== null ? value : ''}
    />
  )
}

export default CalculatorCell
