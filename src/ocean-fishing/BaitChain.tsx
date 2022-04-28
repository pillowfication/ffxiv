import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import OceanFishIcon from './OceanFishIcon'
import Tug from './Tug'
import StarBadge from './StarBadge'
import { Fish, Bait } from './ffxiv-ocean-fishing/data'

export interface BaitLink {
  bait: Bait
}

export interface FishLink {
  fish: Fish
  tug: 1 | 2 | 3 | null
}

interface Props {
  baits: Array<BaitLink | FishLink>
  baitIsRequired?: boolean
  subtext?: string | ((fish: Fish) => string)
  small?: boolean
}

const BaitChain = (props: Props): React.ReactElement => {
  const {
    baits,
    baitIsRequired = false,
    subtext,
    small = false
  } = props

  return (
    <Box sx={{ display: 'inline', '& > *': { verticalAlign: 'middle' } }}>
      {baits.map((link, index) => {
        if ((link as any).bait !== undefined) {
          const { bait } = link as BaitLink
          return (
            <React.Fragment key={bait.id}>
              <Box display='inline-block'>
                <OceanFishIcon
                  type='bait'
                  id={bait.id}
                  size={small ? 34 : 40}
                  badge={baitIsRequired && <StarBadge />}
                />
              </Box>
              <ChevronRightIcon sx={{ mx: -0.5 }} />
            </React.Fragment>
          )
        } else {
          const { fish, tug } = link as FishLink
          return (
            <React.Fragment key={fish.id}>
              <Box display='inline-block'>
                <OceanFishIcon
                  type='fish'
                  id={fish.id}
                  size={small ? 34 : 40}
                  badge={tug !== null && <Tug size='small' strength={tug} />}
                />
                {(subtext !== undefined && index === baits.length - 1) && (
                  <Typography display='inline' ml={2}>
                    {typeof subtext === 'function' ? subtext(fish) : subtext}
                  </Typography>
                )}
              </Box>
              {index < baits.length - 1 && (
                <ChevronRightIcon sx={{ mx: -0.5 }} />
              )}
            </React.Fragment>
          )
        }
      })}
    </Box>
  )
}

export default BaitChain
