import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import { oceanFishes } from './ocean-fishing/data'
import { translate } from './utils'
import { useTranslation } from '../i18n'

// No Lodestone images for now
function getImgUrl (fish: any) {
  return `https://xivapi.com/i/${('000000' + (fish.icon - (fish.icon % 1000))).slice(-6)}/${('000000' + fish.icon).slice(-6)}.png`
}

const useStyles = makeStyles(theme => ({
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
    backgroundImage: 'url("/images/ocean-fishing/item-overlay-lg.png")',
    backgroundSize: '100% auto'
  }
}))

type Props = {
  fishId: number,
  size?: number,
  className?: string
}

const OceanFishIconLarge = ({ fishId, size = 128, className }: Props) => {
  const classes = useStyles({ size })
  const { i18n } = useTranslation()
  const fish = oceanFishes[fishId]
  const locale = i18n.language

  return (
    <>
      <Tooltip arrow placement='top' title={translate(locale, fish, 'name')}>
        <div className={clsx(classes.iconContainer, className)}>
          <img src={getImgUrl(fish)} className={classes.oceanFishIcon} />
          <div className={classes.iconOverlay} />
        </div>
      </Tooltip>
    </>
  )
}

export default React.memo(OceanFishIconLarge)
