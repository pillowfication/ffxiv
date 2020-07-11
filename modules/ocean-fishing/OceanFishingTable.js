import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import moment from 'moment'
import cn from 'classnames'
import PropTypes from 'prop-types'
import calculateVoyages, { LULU_EPOCH } from './calculate-voyages'
import { DEST_MAP, TIME_MAP, OBJECTIVES_MAP, FILTER_MAP } from './maps'
import { makeStyles } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import OceanFishIcon from './OceanFishIcon'

const useStyles = makeStyles((theme) => ({
  form: {
    marginBottom: theme.spacing(2)
  },
  schedule: {
    minWidth: theme.breakpoints.values.sm,
    '& td': {
      paddingTop: theme.spacing(0.25),
      paddingBottom: theme.spacing(0.25),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(2)
    },
    '& tbody tr:hover': {
      cursor: 'pointer'
    }
  },
  hoverRow: {
    backgroundColor: theme.palette.action.hover
  },
  timeCell: {
    '& svg': {
      top: '0',
      verticalAlign: 'middle'
    }
  },
  objectivesCell: {
    '& div': {
      verticalAlign: 'middle'
    }
  }
}))

export default function OceanFishingTable (props) {
  const { now, onSelectRoute } = props
  const [numRows, setNumRows] = useState(10)
  const [filter, setFilter] = useState('none')
  const [hover, setHover] = useState(null)
  const classes = useStyles()
  const router = useRouter()
  const firstRender = useRef(false)
  const voyagesCache = useRef(null)

  useEffect(() => {
    const queryFilter = FILTER_MAP[router.query.filter] ? router.query.filter : 'none'
    if ((!firstRender.current && now) || filter !== queryFilter) {
      voyagesCache.current = null
      firstRender.current = true
      setFilter(queryFilter)
      onSelectRoute(
        calculateVoyages(now, 1, FILTER_MAP[queryFilter] || null)[0].destinationCode
      )
    }
  })

  const handleInputNumRows = (event) => {
    voyagesCache.current = null
    setNumRows(event.target.value)
  }

  const handleBlurNumRows = (event) => {
    const numRows = Number(event.target.value)
    if (!numRows) {
      setNumRows(10)
    } else {
      setNumRows(Math.min(Math.max(Number(numRows) || 10, 1), 50))
    }
  }

  const handleSelectFilter = (event) => {
    voyagesCache.current = null
    const filter = event.target.value
    router.push({
      pathname: router.pathname,
      query: filter === 'none' ? null : { filter }
    })
  }

  const handleHoverRow = {
    none: setHover.bind(null, null),
    ND: setHover.bind(null, 'ND'),
    NS: setHover.bind(null, 'NS'),
    NN: setHover.bind(null, 'NN'),
    RD: setHover.bind(null, 'RD'),
    RS: setHover.bind(null, 'RS'),
    RN: setHover.bind(null, 'RN')
  }

  const handleSelectRow = {
    ND: onSelectRoute.bind(null, 'ND'),
    NS: onSelectRoute.bind(null, 'NS'),
    NN: onSelectRoute.bind(null, 'NN'),
    RD: onSelectRoute.bind(null, 'RD'),
    RS: onSelectRoute.bind(null, 'RS'),
    RN: onSelectRoute.bind(null, 'RN')
  }

  const upcomingVoyages = now &&
    (voyagesCache.current || (voyagesCache.current = calculateVoyages(
      now,
      Math.min(Math.max(Number(numRows) || 10, 1), 50),
      FILTER_MAP[filter] || null
    )))
  let previousDate

  return (
    <section>
      <Typography variant='h5' gutterBottom>Schedule</Typography>
      <Grid container spacing={2} className={classes.form}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              variant='filled'
              label='Number of rows'
              type='number'
              value={numRows}
              onChange={handleInputNumRows}
              onBlur={handleBlurNumRows}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant='filled'>
            {/* Change to MUI Select when <optgroup> is possible */}
            <InputLabel>Filter Route</InputLabel>
            <Select
              native
              value={filter}
              onChange={handleSelectFilter}
            >
              <option value='none'>No filter</option>
              <optgroup label='Route'>
                <option value='ND'>Northern Strait - Day</option>
                <option value='NS'>Northern Strait - Sunset</option>
                <option value='NN'>Northern Strait - Night</option>
                <option value='RD'>Rhotano Sea - Day</option>
                <option value='RS'>Rhotano Sea - Sunset</option>
                <option value='RN'>Rhotano Sea - Night</option>
              </optgroup>
              <optgroup label='Blue Fish'>
                <option value='sothis'>Sothis</option>
                <option value='coral_manta'>Coral Manta</option>
                <option value='elasmosaurus'>Elasmosaurus</option>
                <option value='stonescale'>Stonescale</option>
              </optgroup>
              <optgroup label='Achievements'>
                <option value='jellyfish'>Jellyfish</option>
                <option value='seadragons'>Seadragons</option>
                <option value='sharks'>Sharks</option>
                <option value='octopodes'>Octopodes</option>
              </optgroup>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <NoSsr>
        {now &&
          <TableContainer component={Paper}>
            <Table size='small' className={classes.schedule}>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography align='center'>Time</Typography>
                  </TableCell>
                  <TableCell colSpan={2}>
                    <Typography align='center'>Route</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align='center'>Objectives</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody onMouseOut={handleHoverRow.none}>
                {upcomingVoyages.map(({ day, hour, destinationCode }) => {
                  const time = LULU_EPOCH.clone()
                    .add(day, 'days').add(hour, 'hours')
                    .utcOffset(moment().utcOffset())
                  const date = time.format('M/D')
                  const dateChange = previousDate !== (previousDate = date)

                  return (
                    <TableRow
                      key={`${day}:${hour}`}
                      hover
                      className={cn(filter === 'none' && hover === destinationCode && classes.hoverRow)}
                      onMouseOver={handleHoverRow[destinationCode]}
                      onClick={handleSelectRow[destinationCode]}
                    >
                      <TableCell>
                        {dateChange && <Typography variant='body2' align='right'>{date}</Typography>}
                      </TableCell>
                      <TableCell>
                        <Typography variant='body2'>{time.format('HH:mm')}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant='body2' align='right'>{DEST_MAP[destinationCode[0]]}</Typography>
                      </TableCell>
                      <TableCell className={classes.timeCell}>
                        {TIME_MAP[destinationCode[1]]}
                      </TableCell>
                      <TableCell className={classes.objectivesCell}>
                        {OBJECTIVES_MAP[destinationCode].map((name, index) =>
                          <OceanFishIcon key={index} name={name} />
                        )}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>}
      </NoSsr>
    </section>
  )
}

OceanFishingTable.propTypes = {
  now: PropTypes.object,
  onSelectRoute: PropTypes.func.isRequired
}
