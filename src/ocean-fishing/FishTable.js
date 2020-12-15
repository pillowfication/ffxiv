import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { TIME_MAP } from './maps'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import OceanFishIcon from './OceanFishIcon'
import Tug from './Tug'
import FISH from './gists/fish.json'

const useStyles = makeStyles((theme) => ({
  table: {
    '& td': {
      padding: 0
    }
  },
  tableTug: {
    fontSize: '1.5em'
  },
  disabled: {
    backgroundColor: theme.palette.type === 'dark' ? '#333333' : '#DDDDDD',
    opacity: 0.5
  }
}))

const FishRow = ({ fish, time }) => {
  const classes = useStyles()
  const isDisabled = fish.time && fish.time.indexOf(time) === -1

  return (
    <TableRow className={cn(isDisabled && classes.disabled)}>
      <TableCell><OceanFishIcon name={fish.name} /></TableCell>
      <TableCell><Typography>{fish.name}</Typography></TableCell>
      <TableCell align='center'>{[fish.bait, fish.mooch].filter((x) => x).map((bait) => <OceanFishIcon key={bait} name={bait} />)}</TableCell>
      <TableCell align='center'><Tug strength={fish.tug} className={classes.tableTug} /></TableCell>
      <TableCell align='center'><Typography>{fish.points}</Typography></TableCell>
      <TableCell align='center'><Typography>{Array.isArray(fish.doubleHook) ? fish.doubleHook.join(', ') : fish.doubleHook}</Typography></TableCell>
      <TableCell align='center'><Typography>{Array.isArray(fish.timer) ? fish.timer.join('-') : fish.timer}</Typography></TableCell>
      <TableCell align='center'>{fish.time === 'DSN' ? <Typography>Any</Typography> : fish.time.split('').map((time) => TIME_MAP[time])}</TableCell>
    </TableRow>
  )
}

const FishTable = ({ regions, time }) => {
  const classes = useStyles()

  return (
    <Table size='small' className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell colSpan={2} align='center'>Fish</TableCell>
          <TableCell align='center'>Bait</TableCell>
          <TableCell align='center'>Tug</TableCell>
          <TableCell align='center'>Points</TableCell>
          <TableCell align='center'>Double Hook</TableCell>
          <TableCell align='center'>Line Time</TableCell>
          <TableCell align='center'>Time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {FISH[regions[0]].map((fish) => <FishRow key={fish.name} fish={fish} time={time} />)}
      </TableBody>
      <TableHead>
        <TableRow>
          <TableCell colSpan={2} align='center'>Fish</TableCell>
          <TableCell align='center'>Bait</TableCell>
          <TableCell align='center'>Tug</TableCell>
          <TableCell align='center'>Points</TableCell>
          <TableCell align='center'>Double Hook</TableCell>
          <TableCell align='center'>Line Time</TableCell>
          <TableCell align='center'>Time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {FISH[regions[1]].map((fish) => <FishRow key={fish.name} fish={fish} time={time} />)}
      </TableBody>
    </Table>
  )
}

FishTable.propTypes = {
  regions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  time: PropTypes.string.isRequired
}

export default FishTable
