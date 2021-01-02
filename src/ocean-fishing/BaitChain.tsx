import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import OceanFishIcon from './OceanFishIcon'
import Tug from './Tug'

const useStyles = makeStyles((theme) => ({
  baitChain: {
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  bait: {
    position: 'relative',
    display: 'inline-block'
  },
  chevron: {
    position: 'relative',
    verticalAlign: 'middle',
    marginLeft: '-0.15em',
    marginRight: '-0.15em'
  },
  dh: {
    verticalAlign: 'middle',
    marginLeft: theme.spacing(2)
  }
}))

export type Bait = {
  id: number,
  tug?: 1 | 2 | 3,
  doubleHook?: number | number[]
}

type Props = {
  bait: Bait[],
  showDH?: boolean
}

const BaitChain = ({ bait, showDH }: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.baitChain}>
      {bait.map(({ id, tug, doubleHook }, index) =>
        <React.Fragment key={id}>
          <div className={classes.bait}>
            <OceanFishIcon type={index === 0 ? 'bait' : 'fish'} id={id} />
            {tug && <Tug sup strength={tug} />}
            {(showDH && index === bait.length - 1) &&
              <Typography className={classes.dh} display='inline'>DH: {Array.isArray(doubleHook) ? doubleHook.join('-') : doubleHook}</Typography>}
          </div>
          {index < bait.length - 1 && <ChevronRightIcon className={classes.chevron} />}
        </React.Fragment>
      )}
    </div>
  )
}

export default BaitChain
