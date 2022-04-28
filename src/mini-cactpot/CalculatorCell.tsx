import React from 'react'
import { alpha } from '@mui/system'
import TextField from '@mui/material/TextField'

interface Props {
  value: number | null
  suggested?: boolean
  error?: boolean
  onInputDigit: (digit: number | null) => void
}

const CalculatorCell = ({ value, suggested = false, error = false, onInputDigit }: Props): React.ReactElement => {
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
      InputProps={{
        sx: {
          width: { xs: '5em', md: '7.5em' },
          height: { xs: '5em', md: '7.5em' },
          borderRadius: 0,
          backgroundColor: suggested
            ? theme => alpha(theme.palette.primary.main, 0.2)
            : error
              ? theme => alpha(theme.palette.error.main, 0.2)
              : 'none'
        }
      }}
      inputProps={{
        sx: {
          textAlign: 'center',
          fontSize: { xs: '2em', md: '4em' }
        }
      }}
      onKeyDown={handleInputDigit}
      value={value !== null ? value : ''}
    />
  )
}

export default CalculatorCell
