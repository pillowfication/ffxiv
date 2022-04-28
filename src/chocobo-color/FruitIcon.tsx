import React from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import { fruits } from './ffxiv-chocobo-color/data'
import ICONS_MAP from './ffxiv-chocobo-color/data/fruits-icons-map.json'
import translate from '../translate'
import { useTranslation } from '../i18n'

interface Props {
  fruit: number
  size?: number
  className?: string
}

const FruitIcon = ({ fruit, size = 1 }: Props): React.ReactElement => {
  const { i18n } = useTranslation()
  const locale = i18n.language

  return (
    <>
      <Tooltip arrow placement='top' title={translate(locale, fruits[fruit], 'name')}>
        <Box sx={{
          display: 'inline-block',
          position: 'relative',
          width: 48 * size,
          height: 48 * size,
          verticalAlign: 'middle',
          transform: `scale(${size})`
        }}>
          <Box sx={{
            position: 'absolute',
            top: 2 * size,
            left: 4 * size,
            width: 40 * size,
            height: 40 * size,
            backgroundImage: 'url("/images/chocobo-color/fruits-icons.png")',
            backgroundSize: `${ICONS_MAP.length * 100}% 100%`,
            backgroundPosition: `${ICONS_MAP.indexOf(fruit) * -100}% 0%`
          }} />
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 48 * size,
            height: 48 * size,
            backgroundImage: 'url("/images/chocobo-color/item-cover.png")',
            backgroundSize: '100% 100%'
          }} />
        </Box>
      </Tooltip>
    </>
  )
}

export default React.memo(FruitIcon)
