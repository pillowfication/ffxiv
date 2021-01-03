import React from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
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
    oceanFishIcon: {
      display: 'inline-block',
      width: '2.5em',
      height: '2.5em',
      margin: theme.spacing(0.5),
      backgroundImage: `url("${'/images/ocean-fishing-icons.png'}")`,
      backgroundSize: `${ICON_COLS * 100}% ${ICON_ROWS * 100}%`,
      verticalAlign: 'middle'
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
  className?: string
}

const OceanFishIcon = ({ type, id, className }: Props) => {
  const classes = useStyles()
  const router = useRouter()
  const locale = router.locale

  let info: { name_en: string }
  switch (type) {
    case 'fish': info = fishes[id]; break
    case 'bait': info = baits[id]; break
    case 'achievement': info = achievements[id]; break
    case 'bonus-icon': info = { name_en: String(id) }; break
  }
  if (!info) {
    console.error(`Could not find info for ${id} (${type})`)
    info = { name_en: String(id) }
  }

  return (
    <Tooltip arrow placement='top' title={translate(locale, info, 'name')}>
      <div className={clsx(classes.oceanFishIcon, classes[camelCase(id)], className)} />
    </Tooltip>
  )
}

export default React.memo(OceanFishIcon)
