import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Popper from '@mui/material/Popper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import OceanFishPopper from './OceanFishPopper'
import { fishes, baits, achievements, contentBonuses } from './ffxiv-ocean-fishing/data'
import ICONS_MAP from './ffxiv-ocean-fishing/data/icons-map.json'
import translate from '../translate'
import { useTranslation } from '../i18n'

const ICON_ROWS = ICONS_MAP.length
const ICON_COLS = Math.max(...ICONS_MAP.map(row => row.length))

// const useStyles = makeStyles(theme => {
//   const styles = {
//     container: {
//       display: 'inline-block',
//       position: 'relative' as const,
//       margin: theme.spacing(0.1),
//       verticalAlign: 'middle'
//     },
//     iconContainer: {
//       width: ({ size }: { size: number }) => size * 1.2,
//       height: ({ size }: { size: number }) => size * 1.2
//     },
//     oceanFishIcon: {
//       position: 'absolute' as const,
//       top: ({ size }: { size: number }) => size * 0.1,
//       left: ({ size }: { size: number }) => size * 0.1,
//       width: ({ size }: { size: number }) => size,
//       height: ({ size }: { size: number }) => size,
//       backgroundImage: 'url("/images/ocean-fishing/icons.png")',
//       backgroundSize: `${ICON_COLS * 100}% ${ICON_ROWS * 100}%`
//     },
//     itemCover: {
//       position: 'absolute' as const,
//       top: ({ size }: { size: number }) => size * 0.05,
//       left: 0,
//       width: ({ size }: { size: number }) => size * 1.2,
//       height: ({ size }: { size: number }) => size * 1.2,
//       backgroundImage: 'url("/images/ocean-fishing/item-cover.png")',
//       backgroundSize: '100% 100%'
//     },
//     achievementCover: {
//       position: 'absolute' as const,
//       top: 0,
//       left: 0,
//       width: ({ size }: { size: number }) => size * 1.2,
//       height: ({ size }: { size: number }) => size * 1.2,
//       backgroundImage: 'url("/images/ocean-fishing/achievement-cover.png")',
//       backgroundSize: '100% 100%'
//     },
//     hasPopper: {
//       cursor: 'pointer'
//     },
//     badge: {
//       position: 'absolute' as const,
//       top: -5,
//       left: '100%',
//       marginLeft: -10
//     }
//   }
//
//   for (let row = 0; row < ICON_ROWS; ++row) {
//     for (let col = 0; col < ICONS_MAP[row].length; ++col) {
//       styles[ICONS_MAP[row][col]] = {
//         backgroundPosition: `${col * -100}% ${row * -100}%`
//       }
//     }
//   }
//   return styles
// })

const BACKGROUND_POSITIONS: Record<string, string> = {}
for (let row = 0; row < ICON_ROWS; ++row) {
  for (let col = 0; col < ICONS_MAP[row].length; ++col) {
    BACKGROUND_POSITIONS[ICONS_MAP[row][col]] = `${col * -100}% ${row * -100}%`
  }
}

interface Props {
  type: 'fish' | 'bait' | 'achievement' | 'content-bonus'
  id: number
  size?: number
  badge?: React.ReactNode
}

const OceanFishIcon = ({ type, id, size = 40, badge }: Props): React.ReactElement => {
  const { i18n } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const locale = i18n.language

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    if (type === 'fish' && anchorEl === null) {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleClickAway = (): void => {
    setAnchorEl(null)
  }

  let tooltip: string
  switch (type) {
    case 'fish': tooltip = translate(locale, fishes[id], 'name'); break
    case 'bait': tooltip = translate(locale, baits[id], 'name'); break
    case 'achievement': tooltip = translate(locale, achievements[id], 'name'); break
    case 'content-bonus': tooltip = translate(locale, contentBonuses[id], 'objective'); break
  }

  return (
    <>
      <Box sx={{
        display: 'inline-block',
        position: 'relative',
        margin: 0.1,
        verticalAlign: 'middle'
      }}>
        <Tooltip arrow placement='top' title={tooltip}>
          <Box onClick={handleClick} sx={{
            width: size * 1.2,
            height: size * 1.2
          }}>
            <Box sx={{
              position: 'absolute',
              top: size * 0.1,
              left: size * 0.1,
              width: size,
              height: size,
              backgroundImage: 'url("/images/ocean-fishing/icons.png")',
              backgroundSize: `${ICON_COLS * 100}% ${ICON_ROWS * 100}%`
            }} style={{
              backgroundPosition: BACKGROUND_POSITIONS[`${type}_${id}`]
            }} />
            {(type === 'fish' || type === 'bait') && (
              <Box sx={{
                position: 'absolute',
                top: size * 0.05,
                left: 0,
                width: size * 1.2,
                height: size * 1.2,
                backgroundImage: 'url("/images/ocean-fishing/item-cover.png")',
                backgroundSize: '100% 100%'
              }} />
            )}
            {type === 'achievement' && (
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: size * 1.2,
                height: size * 1.2,
                backgroundImage: 'url("/images/ocean-fishing/achievement-cover.png")',
                backgroundSize: '100% 100%'
              }} />
            )}
          </Box>
        </Tooltip>
        {badge !== undefined && (
          <Box sx={{
            position: 'absolute',
            top: -5,
            left: '100%',
            ml: '-10px'
          }}>
            {badge}
          </Box>
        )}
      </Box>
      {type === 'fish' && (
        <Popper anchorEl={anchorEl} open={Boolean(anchorEl)} placement='bottom-start'>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div>
              <OceanFishPopper fish={fishes[id]} />
            </div>
          </ClickAwayListener>
        </Popper>
      )}
    </>
  )
}

export default React.memo(OceanFishIcon)
