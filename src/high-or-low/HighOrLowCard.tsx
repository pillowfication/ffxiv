import React from 'react'
import TextField from '@mui/material/TextField'

interface Props {
  value?: number | null
  disabled?: boolean
  error?: boolean
  onInputDigit?: (digit: number | null) => void
}

const HighOrLowCard = ({ value, disabled = false, error, onInputDigit = () => {} }: Props): React.ReactElement => {
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
      InputProps={{
        sx: {
          width: { xs: '4em', md: '6em' },
          height: { xs: '6em', md: '9em' },
          borderRadius: '0.5em',
          m: { xs: 1, md: 2 }
        }
      }}
      inputProps={{
        sx: {
          textAlign: 'center',
          fontSize: '3em'
        }
      }}
      onKeyDown={handleInputDigit}
      value={disabled ? '?' : (value != null ? value : '')} // eslint-disable-line no-extra-boolean-cast
    />
  )
}

export default HighOrLowCard
