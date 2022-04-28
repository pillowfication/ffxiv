import React from 'react'
import Paper from '@mui/material/Paper'

interface Props {
  name: string | string[]
}

const MyNameIs = ({ name }: Props): React.ReactElement => {
  return (
    <Paper variant='outlined' sx={{
      m: { xs: 2, md: 4 },
      p: { xs: 1, md: 2 },
      fontSize: '1.75em',
      textAlign: 'center',
      whiteSpace: 'nowrap'
    }}>
      {(Array.isArray(name) ? name : [name]).map(name => <div>{name}</div>)}
    </Paper>
  )
}

export default MyNameIs
