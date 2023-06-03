import React from 'react'
import Box from '@mui/material/Box'

interface Props {
    src: string
}

const ItemIcon = ({ src }: Props): React.ReactElement => {
    return (
        <Box sx={{
            display: 'inline-block',
            position: 'relative',
            width: 152,
            height: 152,
            verticalAlign: 'middle'
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 152,
                height: 152,
                backgroundImage: 'url("/images/ocean-fishing/item-socket-lg.png")',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat'
            }} />
            <Box component='img' src={src} sx={{
                position: 'absolute',
                top: 6,
                left: 12,
                width: 128,
                height: 128
            }} />
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 152,
                height: 152,
                backgroundImage: 'url("/images/ocean-fishing/item-cover-lg.png")',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat'
            }} />
        </Box>
    )
}

export default React.memo(ItemIcon)
