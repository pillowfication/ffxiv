import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import OceanFishIcon from './OceanFishIcon'
import Tug from './Tug'
import StarBadge from './StarBadge'

const useStyles = makeStyles(theme => ({
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
  subtext: {
    verticalAlign: 'middle',
    marginLeft: theme.spacing(2)
  }
}))

export interface Bait {
  id: number
  tug?: 1 | 2 | 3
}

interface Props {
  baits: Bait[]
  baitIsRequired?: boolean
  subtext?: string | ((fishId: number) => string)
}

const BaitChain = ({ baits, baitIsRequired = false, subtext }: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.baitChain}>
      {baits.map(({ id, tug }, index) =>
        <React.Fragment key={id}>
          <div className={classes.bait}>
            {index === 0
              ? <OceanFishIcon type='bait' id={id} Badge={baitIsRequired && <StarBadge />} />
              : <OceanFishIcon type='fish' id={id} Badge={tug !== undefined && <Tug size='small' strength={tug} />} />}
            {(subtext !== undefined && index === baits.length - 1) && (
              <Typography className={classes.subtext} display='inline'>
                {typeof subtext === 'string' ? subtext : subtext(id)}
              </Typography>
            )}
          </div>
          {index < baits.length - 1 && <ChevronRightIcon className={classes.chevron} />}
        </React.Fragment>
      )}
    </div>
  )
}

export default BaitChain
