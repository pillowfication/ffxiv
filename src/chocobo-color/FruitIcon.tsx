import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import { fruits } from './ffxiv-chocobo-color/data'
import ICONS_MAP from './ffxiv-chocobo-color/data/fruits-icons-map.json'
import translate from '../translate'
import { useTranslation } from '../i18n'

const useStyles = makeStyles(() => {
  const styles = {
    iconContainer: {
      display: 'inline-block',
      position: 'relative' as 'relative',
      width: ({ size }: { size: number }) => 48 * size,
      height: ({ size }: { size: number }) => 48 * size,
      verticalAlign: 'middle',
      transform: ({ size }: { size: number }) => `scale(${size})`
    },
    fruitIcon: {
      position: 'absolute' as 'absolute',
      top: ({ size }: { size: number }) => 2 * size,
      left: ({ size }: { size: number }) => 4 * size,
      width: ({ size }: { size: number }) => 40 * size,
      height: ({ size }: { size: number }) => 40 * size,
      backgroundImage: 'url("/images/chocobo-color/fruits-icons.png")',
      backgroundSize: `${ICONS_MAP.length * 100}% 100%`
    },
    itemCover: {
      position: 'absolute' as 'absolute',
      top: 0,
      left: 0,
      width: ({ size }: { size: number }) => 48 * size,
      height: ({ size }: { size: number }) => 48 * size,
      backgroundImage: 'url("/images/chocobo-color/item-cover.png")',
      backgroundSize: '100% 100%'
    }
  }

  for (let index = 0; index < ICONS_MAP.length; ++index) {
    styles[ICONS_MAP[index]] = {
      backgroundPosition: `${index * -100}% 0%`
    }
  }
  return styles
})

interface Props {
  fruit: number
  size?: number
  className?: string
}

const FruitIcon = ({ fruit, size = 1, className }: Props): React.ReactElement => {
  const classes = useStyles(({ size }))
  const { i18n } = useTranslation()
  const locale = i18n.language

  return (
    <>
      <Tooltip arrow placement='top' title={translate(locale, fruits[fruit], 'name')}>
        <div className={clsx(classes.iconContainer, className)}>
          <div className={clsx(classes.fruitIcon, classes[fruit])} />
          <div className={classes.itemCover} />
        </div>
      </Tooltip>
    </>
  )
}

export default React.memo(FruitIcon)
