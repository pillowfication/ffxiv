import React from 'react'
import { alpha } from '@mui/system'
import { Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const SELECTED_COLOR = (theme: Theme): string => alpha(theme.palette.primary.main, 0.5)

interface Props {
  state: string
}

const MiniGrid = ({ state }: Props): React.ReactElement => {
  return (
    <Paper
      component='table'
      square
      sx={{
        display: 'inline-block',
        borderCollapse: 'collapse',
        m: 2,
        '& td': {
          width: '2.5em',
          height: '2.5em',
          border: '1px solid black'
        }
      }}
    >
      <tbody>
        <tr>
          <Box component='td' sx={{ backgroundColor: state.charAt(0) === 'X' ? SELECTED_COLOR : 'none' }} />
          <Box component='td' sx={{ backgroundColor: state.charAt(1) === 'X' ? SELECTED_COLOR : 'none' }} />
          <Box component='td' sx={{ backgroundColor: state.charAt(2) === 'X' ? SELECTED_COLOR : 'none' }} />
        </tr>
        <tr>
          <Box component='td' sx={{ backgroundColor: state.charAt(3) === 'X' ? SELECTED_COLOR : 'none' }} />
          <Box component='td' sx={{ backgroundColor: state.charAt(4) === 'X' ? SELECTED_COLOR : 'none' }} />
          <Box component='td' sx={{ backgroundColor: state.charAt(5) === 'X' ? SELECTED_COLOR : 'none' }} />
        </tr>
        <tr>
          <Box component='td' sx={{ backgroundColor: state.charAt(6) === 'X' ? SELECTED_COLOR : 'none' }} />
          <Box component='td' sx={{ backgroundColor: state.charAt(7) === 'X' ? SELECTED_COLOR : 'none' }} />
          <Box component='td' sx={{ backgroundColor: state.charAt(8) === 'X' ? SELECTED_COLOR : 'none' }} />
        </tr>
      </tbody>
    </Paper>
  )
}

export default React.memo(MiniGrid)
