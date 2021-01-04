import React, { useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import OceanFishPopper from './OceanFishPopper'
import { fishes, baits, achievements } from './gists/data/ocean-fish-data.json'
// import ICONS_URL from './gists/data/ocean-fishing-icons.png'
import ICONS_MAP from './gists/data/ocean-fishing-icons-map.json'
import { translate } from './utils'

const ICON_ROWS = ICONS_MAP.length
const ICON_COLS = Math.max(...ICONS_MAP.map(row => row.length))

function camelCase (id: number | string): string {
  if (typeof id === 'number') {
    return String(id)
  } else {
    id = id.replace(/[^a-z]/g, '')
    return id[0].toLowerCase() + id.slice(1)
  }
}

const useStyles = makeStyles((theme) => {
  const styles = {
    iconContainer: {
      display: 'inline-block',
      width: ({ size }: { size: number }) => size * 1.2,
      height: ({ size }: { size: number }) => size * 1.1,
      position: 'relative' as 'relative',
      margin: theme.spacing(0.5, 0.25),
      verticalAlign: 'middle'
    },
    oceanFishIcon: {
      position: 'absolute' as 'absolute',
      top: 0,
      left: 0,
      width: ({ size }: { size: number }) => size,
      height: ({ size }: { size: number }) => size,
      margin: ({ size }: { size: number }) => `${size * 0.05}px ${size * 0.1}px`,
      backgroundImage: `url("${'/images/ocean-fishing-icons.png'}")`,
      backgroundSize: `${ICON_COLS * 100}% ${ICON_ROWS * 100}%`
    },
    iconOverlay: {
      position: 'absolute' as 'absolute',
      top: 0,
      left: 0,
      width: ({ size }: { size: number }) => size * 1.2
    },
    hasPopper: {
      cursor: 'pointer'
    }
  }

  for (let row = 0; row < ICON_ROWS; ++row) {
    for (let col = 0; col < ICONS_MAP[row].length; ++col) {
      styles[camelCase(ICONS_MAP[row][col])] = {
        backgroundPosition: `${col * -100}% ${row * -100}%`
      }
    }
  }
  return styles
})

type Props = {
  type: 'fish' | 'bait' | 'achievement' | 'bonus-icon',
  id: number | string,
  size?: number,
  className?: string
}

const OceanFishIcon = ({ type, id, size = 40, className }: Props) => {
  const classes = useStyles({ size })
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const locale = router.locale

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (type === 'fish' && !anchorEl) {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleClickAway = () => {
    setAnchorEl(null)
  }

  let info: any
  let overlayUrl: string
  switch (type) {
    case 'fish':
      info = fishes[id]
      overlayUrl = '/images/item-overlay.png'
      break
    case 'bait':
      info = baits[id]
      overlayUrl = '/images/item-overlay.png'
      break
    case 'achievement':
      info = achievements[id]
      overlayUrl = '/images/achievement-overlay.png'
      break
    case 'bonus-icon':
      info = { name_en: String(id) }
      break
  }
  if (!info) {
    console.error(`Could not find info for ${id} (${type})`)
    info = { name_en: String(id) }
  }

  return (
    <>
      <Tooltip arrow placement='top' title={translate(locale, info, 'name')}>
        <div
          className={clsx(classes.iconContainer, type === 'fish' && classes.hasPopper, className)}
          onClick={handleClick}
        >
          <div className={clsx(classes.oceanFishIcon, classes[camelCase(id)])} />
          {overlayUrl &&
            <img src={overlayUrl} className={classes.iconOverlay} />}
        </div>
      </Tooltip>
      {type === 'fish' &&
        <Popper anchorEl={anchorEl} open={Boolean(anchorEl)} placement='bottom-start'>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div>
              <OceanFishPopper id={id as number} />
            </div>
          </ClickAwayListener>
        </Popper>}
    </>
  )
}

export default React.memo(OceanFishIcon)
