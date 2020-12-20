import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import OceanFishIcon from './OceanFishIcon'
import Tug from './Tug'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const useStyles = makeStyles((theme) => ({
  baitGroup: {
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
    display: 'inline',
    position: 'relative',
    top: '-0.95em',
    marginLeft: theme.spacing(1)
  }
}))

const BaitChain = ({ bait, showDH }) => {
  const classes = useStyles()

  return (
    <div className={classes.baitGroup}>
      {bait.map(({ name, tug, doubleHook }, index) =>
        <React.Fragment key={index}>
          <div className={classes.bait}>
            <OceanFishIcon name={name} />
            {tug ? <Tug sup strength={tug} /> : null}
            {(index === bait.length - 1 && showDH) &&
              <Typography className={classes.dh}>DH: {doubleHook}</Typography>}
          </div>
          {index < bait.length - 1 && <ChevronRightIcon className={classes.chevron} />}
        </React.Fragment>
      )}
    </div>
  )
}

BaitChain.propTypes = {
  bait: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tug: PropTypes.number,
      doubleHook: PropTypes.number
    })
  ).isRequired,
  showDH: PropTypes.bool
}

export default BaitChain
