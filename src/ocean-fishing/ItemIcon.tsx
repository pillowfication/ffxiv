import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  iconContainer: {
    display: 'inline-block',
    position: 'relative',
    width: 152,
    height: 152,
    verticalAlign: 'middle'
  },
  itemSocket: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 152,
    height: 152,
    backgroundImage: 'url("/images/ocean-fishing/item-socket-lg.png")',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat'
  },
  item: {
    position: 'absolute',
    top: 6,
    left: 12,
    width: 128,
    height: 128
  },
  itemCover: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: 152,
    height: 152,
    backgroundImage: 'url("/images/ocean-fishing/item-cover-lg.png")',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat'
  }
}))

type Props = {
  src: string
}

const ItemIcon = ({ src }: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.iconContainer}>
      <div className={classes.itemSocket} />
      <img src={src} className={classes.item} />
      <div className={classes.itemCover} />
    </div>
  )
}

export default React.memo(ItemIcon)
