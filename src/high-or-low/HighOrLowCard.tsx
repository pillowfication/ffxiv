import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { alpha } from '@material-ui/core/styles/colorManipulator'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  card: {
    width: '4em',
    height: '6em',
    margin: theme.spacing(1),
    border: theme.palette.type === 'dark' ? '1px solid gray' : '1px solid black',
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
    borderRadius: '0.5em',
    [theme.breakpoints.up('md')]: {
      width: '6em',
      height: '9em',
      margin: theme.spacing(2)
    }
  },
  cardInput: {
    textAlign: 'center',
    fontSize: '3em'
  },
  disabled: {
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    '& $cardInput': {
      fontSize: '2em'
    }
  }
}))

interface Props {
  value?: number | null
  disabled?: boolean
  error?: boolean
  onInputDigit?: (digit: number | null) => void
}

const HighOrLowCard = ({ value, disabled = false, error, onInputDigit = () => {} }: Props): React.ReactElement => {
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
      disabled={disabled}
      error={error}
      InputProps={{ className: clsx(classes.card, disabled && classes.disabled) }}
      inputProps={{ className: classes.cardInput }}
      onKeyDown={handleInputDigit}
      value={disabled ? '?' : (value != null ? value : '')} // eslint-disable-line no-extra-boolean-cast
    />
  )
}

export default HighOrLowCard
