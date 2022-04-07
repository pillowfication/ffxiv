import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import OceanFishIcon from './OceanFishIcon'
import Tug from './Tug'
import StarBadge from './StarBadge'
import { Fish, Bait } from './ffxiv-ocean-fishing/data'

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
    fontSize: '16px',
    position: 'relative',
    verticalAlign: 'middle',
    margin: theme.spacing(0, 0.5),
    color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[400]
  },
  subtext: {
    verticalAlign: 'middle',
    marginLeft: theme.spacing(2)
  }
}))

export interface BaitLink {
  bait: Bait
}

export interface FishLink {
  fish: Fish
  tug: 1 | 2 | 3 | null
}

interface Props {
  baits: Array<BaitLink | FishLink>
  baitIsRequired?: boolean
  subtext?: string | ((fish: Fish) => string)
  small?: boolean
}

const BaitChain = ({ baits, baitIsRequired = false, subtext, small }: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.baitChain}>
      {baits.map((link, index) => {
        if ((link as any).bait !== undefined) {
          const { bait } = link as BaitLink
          return (
            <React.Fragment key={bait.id}>
              <div className={classes.bait}>
                <OceanFishIcon
                  type='bait'
                  id={bait.id}
                  size={small === true ? 34 : 40}
                  badge={baitIsRequired && <StarBadge />}
                />
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={classes.chevron} />
            </React.Fragment>
          )
        } else {
          const { fish, tug } = link as FishLink
          return (
            <React.Fragment key={fish.id}>
              <div className={classes.bait}>
                <OceanFishIcon
                  type='fish'
                  id={fish.id}
                  size={small === true ? 34 : 40}
                  badge={tug !== null && <Tug size='small' strength={tug} />}
                />
                {(subtext !== undefined && index === baits.length - 1) && (
                  <Typography className={classes.subtext} display='inline'>
                    {typeof subtext === 'string' ? subtext : subtext(fish)}
                  </Typography>
                )}
              </div>
              {index < baits.length - 1 && (
                <FontAwesomeIcon icon={faChevronRight} className={classes.chevron} />
              )}
            </React.Fragment>
          )
        }
      })}
    </div>
  )
}

export default BaitChain
