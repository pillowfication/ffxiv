import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BaitGroup from './BaitGroup'
import { BaitLink, FishLink } from './BaitChain'
import { Fish } from './ffxiv-ocean-fishing/data'

interface Props {
  baitGroups: Array<{
    header: string
    baitGroupProps: {
      baits: Array<BaitLink | FishLink>
      baitIsRequired?: boolean
      intuitionFishes?: Array<{ baits: Array<BaitLink | FishLink>, baitIsRequired?: boolean, count: number }>
      subtext?: string | ((fish: Fish) => string)
      mainOnly?: boolean
    }
  } | 'hr'>
}

const BaitList = ({ baitGroups }: Props): React.ReactElement => {
  return (
    <Box component='ul' sx={{ listStyleType: 'none', p: 0 }}>
      {baitGroups.map((baitGroup, index) => {
        if (baitGroup === 'hr') {
          return (
            <li key={index}><hr /></li>
          )
        } else {
          const { header, baitGroupProps } = baitGroup
          return (
            <li key={index}>
              <Typography gutterBottom>{header}</Typography>
              <BaitGroup {...baitGroupProps} />
            </li>
          )
        }
      })}
    </Box>
  )
}

export default BaitList
