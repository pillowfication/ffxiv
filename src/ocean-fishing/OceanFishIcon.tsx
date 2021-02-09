import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import OceanFishPopper from './OceanFishPopper'
import { fishes, baits, achievements, contentBonuses } from './ffxiv-ocean-fishing/data'
import ICONS_MAP from './ffxiv-ocean-fishing/data/icons-map.json'
import translate from '../translate'
import { useTranslation } from '../i18n'

const ICON_ROWS = ICONS_MAP.length
const ICON_COLS = Math.max(...ICONS_MAP.map(row => row.length))

const useStyles = makeStyles(theme => {
  const styles = {
    container: {
      display: 'inline-block',
      position: 'relative' as const,
      margin: theme.spacing(0.1),
      verticalAlign: 'middle'
    },
    iconContainer: {
      width: ({ size }: { size: number }) => size * 1.2,
      height: ({ size }: { size: number }) => size * 1.2
    },
    oceanFishIcon: {
      position: 'absolute' as const,
      top: ({ size }: { size: number }) => size * 0.1,
      left: ({ size }: { size: number }) => size * 0.1,
      width: ({ size }: { size: number }) => size,
      height: ({ size }: { size: number }) => size,
      backgroundImage: 'url("/images/ocean-fishing/icons.png")',
      backgroundSize: `${ICON_COLS * 100}% ${ICON_ROWS * 100}%`
    },
    itemCover: {
      position: 'absolute' as const,
      top: ({ size }: { size: number }) => size * 0.05,
      left: 0,
      width: ({ size }: { size: number }) => size * 1.2,
      height: ({ size }: { size: number }) => size * 1.1,
      backgroundImage: 'url("/images/ocean-fishing/item-cover.png")'
    },
    achievementCover: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      width: ({ size }: { size: number }) => size * 1.2,
      height: ({ size }: { size: number }) => size * 1.2,
      backgroundImage: 'url("/images/ocean-fishing/achievement-cover.png")'
    },
    hasPopper: {
      cursor: 'pointer'
    },
    badge: {
      position: 'absolute' as const,
      top: -5,
      left: '100%',
      marginLeft: -10
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

interface Props {
  type: 'fish' | 'bait' | 'achievement' | 'content-bonus'
  id: number
  size?: number
  badge?: React.ReactNode
  className?: string
}

const OceanFishIcon = ({ type, id, size = 40, badge, className }: Props): React.ReactElement => {
  const classes = useStyles({ size })
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
      <div className={clsx(classes.container, className)}>
        <Tooltip arrow placement='top' title={tooltip}>
          <div
            className={clsx(classes.iconContainer, type === 'fish' && classes.hasPopper)}
            onClick={handleClick}
          >
            <div className={clsx(classes.oceanFishIcon, classes[`${type}_${id}`])} />
            {type === 'fish' && <div className={classes.itemCover} />}
            {type === 'bait' && <div className={classes.itemCover} />}
            {type === 'achievement' && <div className={classes.achievementCover} />}
          </div>
        </Tooltip>
        {badge !== undefined && (
          <div className={classes.badge}>{badge}</div>
        )}
      </div>
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
