import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import { fishes, Fish } from './gists/data'
import { translate } from './utils'
import i18n from '../../i18n'
import { I18n } from 'next-i18next'

function getImgUrl (fish: Fish) {
  if (!fish.lodestone_data) {
    return `https://xivapi.com${fish.icon}`
  } else {
    const id = fish.lodestone_data.icon_lg
    return `https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/${id.slice(0, 2)}/${id}.png`
  }
}

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: 'inline-block',
    position: 'relative' as 'relative',
    width: ({ size }: { size: number }) => size * 1.1875,
    height: ({ size }: { size: number }) => size * 1.1875,
    margin: theme.spacing(0.1),
    verticalAlign: 'middle'
  },
  oceanFishIcon: {
    position: 'absolute' as 'absolute',
    top: ({ size }: { size: number }) => size * 0.046875,
    left: ({ size }: { size: number }) => size * 0.09375,
    width: ({ size }: { size: number }) => size,
    height: ({ size }: { size: number }) => size
  },
  iconOverlay: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: ({ size }: { size: number }) => size * 1.2,
    height: ({ size }: { size: number }) => size * 1.1,
    backgroundImage: `url("${'/images/item-overlay-lg.png'}")`,
    backgroundSize: '100% auto'
  }
}))

type Props = {
  fishId: number,
  size?: number,
  className?: string,
  i18n: I18n
}

const OceanFishIconLarge = ({ fishId, size = 128, className, i18n }: Props) => {
  const classes = useStyles({ size })
  const fish = fishes[fishId]

  return (
    <>
      <Tooltip arrow placement='top' title={translate(i18n.language, fish, 'name')}>
        <div className={clsx(classes.iconContainer, className)}>
          <img src={getImgUrl(fish)} className={classes.oceanFishIcon} />
          <div className={classes.iconOverlay} />
        </div>
      </Tooltip>
    </>
  )
}

export default i18n.withTranslation('ocean-fishing')(OceanFishIconLarge)
