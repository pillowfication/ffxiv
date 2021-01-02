import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
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
import Section from '../Section'
import OceanFishIcon from './OceanFishIcon'
import { fishingSpots, fishes, achievements } from './gists/data/ocean-fish-data.json'
import * as maps from './maps'
import { toTimeString } from '../utils'
import calculateVoyages from './calculate-voyages'
import { timeUntil, getBlueFish, translate } from './utils'

const DATE_FORMAT: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit' }

const useStyles = makeStyles((theme) => ({
  schedule: {
    '& td': {
      height: 53,
      paddingTop: theme.spacing(0.25),
      paddingBottom: theme.spacing(0.25),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      whiteSpace: 'nowrap'
    },
    '& td:first-child': {
      paddingLeft: theme.spacing(2)
    },
    '& td:last-child': {
      paddingRight: theme.spacing(2)
    },
    '& tbody tr:hover': {
      cursor: 'pointer'
    }
  },
  hoverRow: {
    backgroundColor: theme.palette.action.hover
  },
  timeUntil: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  timeCell: {
    '& svg': {
      top: 0,
      verticalAlign: 'middle'
    }
  },
  objectivesCell: {
    '& div': {
      verticalAlign: 'middle',
      fontSize: '1rem'
    }
  }
}))

type Props = {
  now?: Date,
  onSelectRoute: (route: maps.DestinationStopTime) => void
}

const UpcomingVoyages = ({ now, onSelectRoute }: Props) => {
  const [numRows, setNumRows] = useState(10)
  const [filter, setFilter] = useState('none')
  const [hover, setHover] = useState<string>(null)
  const classes = useStyles()
  const router = useRouter()
  const firstRender = useRef(false)

  const locale = router.locale
  const upcomingVoyages = now && calculateVoyages(
    now,
    Math.min(Math.max(Number(numRows) || 10, 1), 50),
    maps.FILTER_MAP[filter] || null
  )

  useEffect(() => {
    const queryFilter = maps.FILTER_MAP[String(router.query.filter)] ? String(router.query.filter) : 'none'
    if ((!firstRender.current && now) || filter !== queryFilter) {
      firstRender.current = true
      setFilter(queryFilter)
      onSelectRoute(
        calculateVoyages(now, 1, maps.FILTER_MAP[queryFilter] || null)[0].destinationCode
      )
    }
  })

  const handleInputNumRows = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumRows(Number(event.target.value))
  }

  const handleBlurNumRows = (event: React.FocusEvent<HTMLInputElement>) => {
    const numRows = Number(event.target.value)
    if (!numRows) {
      setNumRows(10)
    } else {
      setNumRows(Math.min(Math.max(numRows, 1), 50))
    }
  }

  const handleSelectFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = event.target.value
    router.push({
      pathname: router.pathname,
      query: filter === 'none' ? null : { filter }
    })
  }

  return (
    <Section title='Upcoming Voyages'>
      <Grid container spacing={2}>
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
              <optgroup label='Blue Fish'>
                <option value='sothis'>{translate(fishes[29788], 'name', locale)}</option>
                <option value='coral_manta'>{translate(fishes[29789], 'name', locale)}</option>
                <option value='stonescale'>{translate(fishes[29790], 'name', locale)}</option>
                <option value='elasmosaurus'>{translate(fishes[29791], 'name', locale)}</option>
                <option value='hafgufa'>{translate(fishes[32074], 'name', locale)}</option>
                <option value='seafaring_toad'>{translate(fishes[32094], 'name', locale)}</option>
                <option value='placodus'>{translate(fishes[32114], 'name', locale)}</option>
              </optgroup>
              <optgroup label='Achievements'>
                <option value='octopodes'>{translate(achievements[2563], 'name', locale)}</option>
                <option value='sharks'>{translate(achievements[2564], 'name', locale)}</option>
                <option value='jellyfish'>{translate(achievements[2565], 'name', locale)}</option>
                <option value='seadragons'>{translate(achievements[2566], 'name', locale)}</option>
                <option value='balloons'>{translate(achievements[2754], 'name', locale)}</option>
                <option value='crabs'>{translate(achievements[2755], 'name', locale)}</option>
                <option value='mantas'>{translate(achievements[2756], 'name', locale)}</option>
              </optgroup>
              <optgroup label={translate(fishingSpots[241], 'name', locale)}>
                <option value='R'>{translate(fishingSpots[241], 'name', locale)}</option>
                <option value='RD'>{translate(fishingSpots[241], 'name', locale)} - Day</option>
                <option value='RS'>{translate(fishingSpots[241], 'name', locale)} - Sunset</option>
                <option value='RN'>{translate(fishingSpots[241], 'name', locale)} - Night</option>
              </optgroup>
              <optgroup label={translate(fishingSpots[243], 'name', locale)}>
                <option value='N'>{translate(fishingSpots[243], 'name', locale)}</option>
                <option value='ND'>{translate(fishingSpots[243], 'name', locale)} - Day</option>
                <option value='NS'>{translate(fishingSpots[243], 'name', locale)} - Sunset</option>
                <option value='NN'>{translate(fishingSpots[243], 'name', locale)} - Night</option>
              </optgroup>
              <optgroup label={translate(fishingSpots[248], 'name', locale)}>
                <option value='B'>{translate(fishingSpots[248], 'name', locale)}</option>
                <option value='BD'>{translate(fishingSpots[248], 'name', locale)} - Day</option>
                <option value='BS'>{translate(fishingSpots[248], 'name', locale)} - Sunset</option>
                <option value='BN'>{translate(fishingSpots[248], 'name', locale)} - Night</option>
              </optgroup>
              <optgroup label={translate(fishingSpots[250], 'name', locale)}>
                <option value='T'>{translate(fishingSpots[250], 'name', locale)}</option>
                <option value='TD'>{translate(fishingSpots[250], 'name', locale)} - Day</option>
                <option value='TS'>{translate(fishingSpots[250], 'name', locale)} - Sunset</option>
                <option value='TN'>{translate(fishingSpots[250], 'name', locale)} - Night</option>
              </optgroup>
            </Select>
          </FormControl>
        </Grid>
        <NoSsr>
          {now &&
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table size='small' className={classes.schedule}>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={3} align='center'>Time</TableCell>
                      <TableCell colSpan={2} align='center'>Route</TableCell>
                      <TableCell align='center'>Objectives</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody onMouseOut={setHover.bind(null, null)}>
                    {(() => {
                      let previousDate: string

                      return upcomingVoyages.map(({ time, destinationCode }) => {
                        const dateString = time.toLocaleDateString(undefined, DATE_FORMAT)
                        const timeString = toTimeString(time, true)

                        return (
                          <TableRow
                            key={time.getTime()}
                            hover
                            className={clsx(filter === 'none' && hover === destinationCode && classes.hoverRow)}
                            onMouseOver={setHover.bind(null, destinationCode)}
                            onClick={onSelectRoute.bind(null, destinationCode)}
                          >
                            <TableCell align='right'>
                              {previousDate !== (previousDate = dateString) && <Typography>{dateString}</Typography>}
                            </TableCell>
                            <TableCell>
                              <Typography>{timeString}</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography className={classes.timeUntil}>{timeUntil(now, time)}</Typography>
                            </TableCell>
                            <TableCell align='right'>
                              <Typography>{translate(fishingSpots[maps.STOP_MAP[destinationCode[0]]], 'name', locale)}</Typography>
                            </TableCell>
                            <TableCell className={classes.timeCell}>
                              {maps.TIME_MAP[destinationCode[1]]}
                            </TableCell>
                            <TableCell className={classes.objectivesCell}>
                              {maps.ACHIEVEMENTS_MAP[destinationCode].map((achievement: number) =>
                                <OceanFishIcon key={achievement} type='achievement' id={achievement} />
                              )}
                              {getBlueFish(destinationCode).map((fishId?: number) =>
                                fishId && <OceanFishIcon key={fishId} type='fish' id={fishId} />
                              )}
                            </TableCell>
                          </TableRow>
                        )
                      })
                    })()}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>}
        </NoSsr>
      </Grid>
    </Section>
  )
}

export default UpcomingVoyages
