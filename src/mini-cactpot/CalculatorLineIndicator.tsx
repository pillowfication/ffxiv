import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface Props {
  rotate: number
  suggested?: boolean
}

const CalculatorLineIndicator = ({ rotate, suggested = false }: Props): React.ReactElement => {
  return (
    <ArrowForwardIcon
      color={suggested ? 'primary' : 'disabled'}
      sx={{
        m: 1,
        fontSize: '2em',
        transform: `rotate(${rotate}deg)`
      }}
    />
  )
}

export default CalculatorLineIndicator
