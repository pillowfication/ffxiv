import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
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
    top: '-0.25em',
    marginLeft: '-0.25em',
    marginRight: '-0.25em'
  },
  dh: {
    position: 'relative',
    top: '-0.7em',
    marginLeft: theme.spacing(0.25)
  }
}))

export default function BaitChain (props) {
  const { bait } = props
  const classes = useStyles()

  return (
    <div className={classes.baitGroup}>
      {bait.map(({ name, tug, dh }, index) =>
        <React.Fragment key={index}>
          <div className={classes.bait}>
            <OceanFishIcon name={name} />
            {tug && <Tug sup strength={tug} />}
            {dh && <span className={classes.dh}>DH: {dh}</span>}
          </div>
          {index < bait.length - 1 && <ChevronRightIcon fontSize='small' className={classes.chevron} />}
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
      dh: PropTypes.number
    })
  )
}
