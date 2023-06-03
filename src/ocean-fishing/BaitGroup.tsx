import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import BaitChain, { BaitLink, FishLink } from './BaitChain'
import { Fish } from './ffxiv-ocean-fishing/data'

interface Props {
    baits: Array<BaitLink | FishLink>
    baitIsRequired?: boolean
    intuitionFishes?: Array<{ baits: Array<BaitLink | FishLink>, baitIsRequired?: boolean, count: number }>
    subtext?: string | ((fish: Fish) => string)
    mainOnly?: boolean
}

const BaitGroup = (props: Props): React.ReactElement => {
    const {
        baits,
        baitIsRequired = false,
        intuitionFishes,
        subtext,
        mainOnly = false
    } = props

    return (
        <>
            <BaitChain baits={baits} baitIsRequired={baitIsRequired} subtext={subtext} />
            {intuitionFishes !== undefined && (
                <Box component='ul' sx={{ listStyleType: 'none', pl: 1 }}>
                    {intuitionFishes.map(({ baits, baitIsRequired, count }, index) => (
                        <Box component='li' key={index} sx={{ '& > *': { verticalAlign: 'middle' } }}>
                            <Typography display='inline'>{count}×&nbsp;</Typography>
                            <BaitChain
                                small
                                baits={baits}
                                baitIsRequired={baitIsRequired}
                                subtext={mainOnly ? undefined : subtext}
                            />
                        </Box>
                    ))}
                </Box>
            )}
        </>
    )
}

export default BaitGroup
