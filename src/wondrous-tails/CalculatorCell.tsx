import React from 'react'
import { alpha } from '@mui/system'
import Box from '@mui/material/Box'

interface Props {
  selected?: boolean
  onSelect: () => void
}

const CalculatorCell = ({ selected = false, onSelect }: Props): React.ReactElement => {
  return (
    <Box component='td' onClick={onSelect} sx={{
      display: 'inline-block',
      width: { xs: '5em', md: '7em' },
      height: { xs: '5em', md: '7em' },
      border: '1px solid black',
      cursor: 'pointer',
      backgroundColor: selected ? theme => alpha(theme.palette.primary.main, 0.5) : 'none'
    }} />
  )
}

export default CalculatorCell
