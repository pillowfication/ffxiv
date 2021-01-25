import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import OceanFishPopper from './OceanFishPopper'
import { oceanFishes, baits, achievements, contentBonuses } from './ocean-fishing/data'
import ICONS_MAP from './ocean-fishing/data/ocean-fishing-icons-map.json'
import { translate } from './utils'
import { useTranslation } from '../i18n'

const ICON_ROWS = ICONS_MAP.length
const ICON_COLS = Math.max(...ICONS_MAP.map(row => row.length))
makeStyles
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
    itemCover: {
      position: 'absolute' as 'absolute',
      top: ({ size }: { size: number }) => size * 0.05,
      left: 0,
      width: ({ size }: { size: number }) => size * 1.2,
      height: ({ size }: { size: number }) => size * 1.1,
      backgroundImage: 'url("/images/ocean-fishing/item-cover.png")',
    },
    achievementCover: {
      position: 'absolute' as 'absolute',
      top: 0,
      left: 0,
      width: ({ size }: { size: number }) => size * 1.2,
      height: ({ size }: { size: number }) => size * 1.2,
      backgroundImage: 'url("/images/ocean-fishing/achievement-cover.png")'
    },
    hasPopper: {
      cursor: 'pointer'
    }
  }

  for (let row = 0; row < ICON_ROWS; ++row) {
    for (let col = 0; col < ICONS_MAP[row].length; ++col) {
      styles[ICONS_MAP[row][col]] = {
        backgroundPosition: `${col * -100}% ${row * -100}%`
      }
    }
  }
  return styles
})

type Props = {
  type: 'fish' | 'bait' | 'achievement' | 'content-bonus',
  id: number,
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

  let tooltip: string
  switch (type) {
    case 'fish': tooltip = translate(locale, oceanFishes[id], 'name'); break
    case 'bait': tooltip = translate(locale, baits[id], 'name'); break
    case 'achievement': tooltip = translate(locale, achievements[id], 'name'); break
    case 'content-bonus': tooltip = translate(locale, contentBonuses[id], 'objective'); break
  }

  return (
    <>
      <Tooltip arrow placement='top' title={tooltip}>
        <div
          className={clsx(classes.iconContainer, type === 'fish' && classes.hasPopper, className)}
          onClick={handleClick}
        >
          <div className={clsx(classes.oceanFishIcon, classes[`${type}_${id}`])} />
          {type === 'fish' && <div className={classes.itemCover} />}
          {type === 'bait' && <div className={classes.itemCover} />}
          {type === 'achievement' && <div className={classes.achievementCover} />}
        </div>
      </Tooltip>
      {type === 'fish' && (
        <Popper anchorEl={anchorEl} open={Boolean(anchorEl)} placement='bottom-start'>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div>
              <OceanFishPopper fishId={id} />
            </div>
          </ClickAwayListener>
        </Popper>
      )}
    </>
  )
}

export default React.memo(OceanFishIcon)
