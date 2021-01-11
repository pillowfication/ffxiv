import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import OceanFishPopper from './OceanFishPopper'
import { fishes, baits, achievements } from './gists/data'
// import ICONS_URL from './gists/data/ocean-fishing-icons.png'
import ICONS_MAP from './gists/data/ocean-fishing-icons-map.json'
import { translate } from './utils'
import i18n from '../../i18n'
import { I18n } from 'next-i18next'

const ICON_ROWS = ICONS_MAP.length
const ICON_COLS = Math.max(...ICONS_MAP.map(row => row.length))

// TODO: This needs to be found on XIVAPI somehow
// Can maybe be parsed from the achievement descriptions
const BONUS_ICONS_INFO = {
  octopus: {
    name_en: 'Octopus Travelers',
    name_de: 'Oktopussreiter',
    name_fr: 'Octo-opus',
    name_ja: 'オクトパストラベラー'
  },
  shark: {
    name_en: 'Certifiable Shark Hunters',
    name_de: 'Haijäger',
    name_fr: 'Chasseurs de requins',
    name_ja: 'シャークハンター'
  },
  jellyfish: {
    name_en: 'Jelled Together',
    name_de: 'Quallenfänger',
    name_fr: 'Le bateau de la méduse',
    name_ja: 'クラゲマニア'
  },
  seadragon: {
    name_en: 'Maritime Dragonslayers',
    name_de: 'Seepferdchenbändiger',
    name_fr: 'Fièvre de cheval des mers',
    name_ja: 'シードラゴンキラー'
  },
  balloon: {
    name_en: 'Balloon Catchers',
    name_de: 'Ballonfänger',
    name_fr: 'Amateur du ballon rond',
    name_ja: 'バルーンキャッチャー'
  },
  crab: {
    name_en: 'Crab Boat Crew',
    name_de: 'Krabbenschiffsbesatzung',
    name_fr: 'Pince-sans-rire',
    name_ja: '蟹工船'
  },
  manta: {
    name_en: 'Sticking it to the Manta',
    name_de: 'Manta! Manta!',
    name_fr: 'Raies arraisonnées',
    name_ja: 'エイエイオー'
  }
}

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
      backgroundImage: `url("${'/images/ocean-fishing-icons.png'}")`,
      backgroundSize: `${ICON_COLS * 100}% ${ICON_ROWS * 100}%`
    },
    iconOverlay: {
      position: 'absolute' as 'absolute',
      top: ({ size }: { size: number }) => size * 0.05,
      left: 0,
      width: ({ size }: { size: number }) => size * 1.2,
      height: ({ size }: { size: number }) => size * 1.1,
      backgroundImage: `url("${'/images/item-overlay.png'}")`,
    },
    achievementOverlay: {
      position: 'absolute' as 'absolute',
      top: 0,
      left: 0,
      width: ({ size }: { size: number }) => size * 1.2,
      height: ({ size }: { size: number }) => size * 1.2,
      backgroundImage: `url("${'/images/achievement-overlay.png'}")`
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
  className?: string,
  i18n: I18n
}

const OceanFishIcon = ({ type, id, size = 40, className, i18n }: Props) => {
  const classes = useStyles({ size })
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

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
    case 'bonus-icon': info = BONUS_ICONS_INFO[id]; break
  }

  return (
    <>
      <Tooltip arrow placement='top' title={translate(i18n.language, info, 'name')}>
        <div
          className={clsx(classes.iconContainer, type === 'fish' && classes.hasPopper, className)}
          onClick={handleClick}
        >
          <div className={clsx(classes.oceanFishIcon, classes[camelCase(id)])} />
          {type !== 'bonus-icon' &&
            <div className={type === 'achievement' ? classes.achievementOverlay : classes.iconOverlay} />}
        </div>
      </Tooltip>
      {type === 'fish' &&
        <Popper anchorEl={anchorEl} open={Boolean(anchorEl)} placement='bottom-start'>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div>
              <OceanFishPopper fishId={id as number} />
            </div>
          </ClickAwayListener>
        </Popper>}
    </>
  )
}

export default i18n.withTranslation('ocean-fishing')(OceanFishIcon)
