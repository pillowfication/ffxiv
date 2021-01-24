import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import OceanFishPopper from './OceanFishPopper'
import { fishes, baits, achievements, objectives } from './ocean-fishing/data'
import ICONS_MAP from './ocean-fishing/data/ocean-fishing-icons-map.json'
import { translate } from './utils'
import { useTranslation } from '../i18n'

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

const useStyles = makeStyles(theme => {
  const styles = {
    iconContainer: {
      display: 'inline-block',
      position: 'relative' as 'relative',
      width: ({ size }: { size: number }) => size * 1.2,
      height: ({ size }: { size: number }) => size * 1.2,
      margin: theme.spacing(0.1),
      verticalAlign: 'middle'
    },
    oceanFishIcon: {
      position: 'absolute' as 'absolute',
      top: ({ size }: { size: number }) => size * 0.1,
      left: ({ size }: { size: number }) => size * 0.1,
      width: ({ size }: { size: number }) => size,
      height: ({ size }: { size: number }) => size,
      backgroundImage: 'url("/images/ocean-fishing/ocean-fishing-icons.png")',
      backgroundSize: `${ICON_COLS * 100}% ${ICON_ROWS * 100}%`
    },
    iconOverlay: {
      position: 'absolute' as 'absolute',
      top: ({ size }: { size: number }) => size * 0.05,
      left: 0,
      width: ({ size }: { size: number }) => size * 1.2,
      height: ({ size }: { size: number }) => size * 1.1,
      backgroundImage: 'url("/images/ocean-fishing/item-overlay.png")',
    },
    achievementOverlay: {
      position: 'absolute' as 'absolute',
      top: 0,
      left: 0,
      width: ({ size }: { size: number }) => size * 1.2,
      height: ({ size }: { size: number }) => size * 1.2,
      backgroundImage: 'url("/images/ocean-fishing/achievement-overlay.png")'
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
  type: 'fish' | 'bait' | 'achievement' | 'objective',
  id: number | string,
  size?: number,
  className?: string
}

const OceanFishIcon = ({ type, id, size = 40, className }: Props) => {
  const classes = useStyles({ size })
  const { i18n } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const locale = i18n.language

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (type === 'fish' && !anchorEl) {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleClickAway = () => {
    setAnchorEl(null)
  }

  let info: any
  switch (type) {
    case 'fish': info = fishes[id]; break
    case 'bait': info = baits[id]; break
    case 'achievement': info = achievements[id]; break
    case 'objective': info = objectives[id]; break
  }

  return (
    <>
      <Tooltip arrow placement='top' title={translate(locale, info, 'name')}>
        <div
          className={clsx(classes.iconContainer, type === 'fish' && classes.hasPopper, className)}
          onClick={handleClick}
        >
          <div className={clsx(classes.oceanFishIcon, classes[camelCase(id)])} />
          {type !== 'objective' && (
            <div className={type === 'achievement' ? classes.achievementOverlay : classes.iconOverlay} />
          )}
        </div>
      </Tooltip>
      {type === 'fish' && (
        <Popper anchorEl={anchorEl} open={Boolean(anchorEl)} placement='bottom-start'>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div>
              <OceanFishPopper fishId={id as number} />
            </div>
          </ClickAwayListener>
        </Popper>
      )}
    </>
  )
}

export default React.memo(OceanFishIcon)
