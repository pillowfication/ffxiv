import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { getSeed, getNextWeathers, getZoneWeather, translate } from './weather'
import { paddedZero, formatTime } from '../utils'
import Section from '../Section'
import Typography from '@material-ui/core/Typography'
import NoSsr from '@material-ui/core/NoSsr'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import WeatherIcon from './WeatherIcon'
import { Region } from './weather/consts'
import PARTITION from './weather/regions-partition'
import i18n from '../../i18n'
import { I18n } from 'next-i18next'

const REGIONS = [
  Region.LaNoscea,
  Region.TheBlackShroud,
  Region.Thanalan,
  Region.IshgardAndSurroundingAreas,
  Region.GyrAbania,
  Region.TheFarEast,
  Region.Norvrandt,
  Region.Others
]
const WEATHER_CELL_WIDTH = 75

const useStyles = makeStyles((theme) => ({
  options: {
    marginBottom: theme.spacing(2)
  },
  weatherTable: {
    overflow: 'hidden',
    '& thead th': {
      fontWeight: 'normal',
      '&$current': {
        fontWeight: 'bold'
      }
    },
    ':not(:last-child) > &': {
      marginBottom: theme.spacing(4)
    }
  },
  weatherTime: {
    textAlign: 'center',
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    '&:last-child': {
      paddingRight: theme.spacing(1),
      width: WEATHER_CELL_WIDTH + theme.spacing(1.5)
    }
  },
  regionCell: {
    minWidth: 200
  },
  weatherCell: {
    width: WEATHER_CELL_WIDTH + theme.spacing(1),
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    textAlign: 'center',
    verticalAlign: 'top',
    lineHeight: 1,
    '& span': {
      display: 'inline-block',
      width: WEATHER_CELL_WIDTH,
      lineHeight: 1.1
    },
    '&:last-child': {
      paddingRight: theme.spacing(1),
      width: WEATHER_CELL_WIDTH + theme.spacing(1.5)
    }
  },
  current: {
    position: 'relative',
    backgroundColor: theme.palette.action.hover
  }
}))

type Props = {
  now?: Date,
  i18n: I18n
}

const UpcomingWeather = ({ now, i18n }: Props) => {
  const classes = useStyles()
  const router = useRouter()
  const [filter, setFilter] = useState<Region | null>(null)
  const [showLabels, setShowLabels] = useState(true)
  const [showLocalTime, setShowLocalTime] = useState(false)
  const [showWeatherChance, setShowWeatherChance] = useState(false)
  const locale = i18n.language

  useEffect(() => {
    const queryFilter = String(router.query.filter)
    setFilter(Object.values(Region).includes(queryFilter as Region) ? queryFilter as Region : null)
  }, [router.query.filter])

  const handleSelectFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = event.target.value === 'none' ? null : (event.target.value as Region)
    router.push({
      pathname: router.pathname,
      query: filter && { filter }
    })
  }

  const handleToggleLabels = () => { setShowLabels(!showLabels) }
  const handleToggleLocalTime = () => { setShowLocalTime(!showLocalTime) }
  const handleToggleWeatherChance = () => { setShowWeatherChance(!showWeatherChance) }

  return (
    <Section title='Upcoming Weather'>
      <Grid container spacing={1} className={classes.options}>
        <Grid item xs={12}>
          <FormControl variant='filled' fullWidth margin='dense'>
            <InputLabel>Select a region</InputLabel>
            <Select onChange={handleSelectFilter} value={filter || 'none'}>
              <MenuItem value='none'>Show all regions</MenuItem>
              {Object.values(Region).map(region =>
                <MenuItem key={region} value={region}>{translate('region', region, locale)}</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={showLabels}
                onChange={handleToggleLabels}
                color='primary'
              />
            }
            label='Show Labels'
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={showLocalTime}
                onChange={handleToggleLocalTime}
                color='primary'
              />
            }
            label='Show local times'
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={showWeatherChance}
                onChange={handleToggleWeatherChance}
                color='primary'
              />
            }
            label={<>Show <code>weatherChance</code></>}
          />
        </Grid>
      </Grid>
      <NoSsr>
        {(() => {
          if (!now) return null

          const currentSeed = getSeed()
          const hashes = getNextWeathers(currentSeed - 1, 10)
          const sections = (filter ? [filter] : REGIONS).map(region => ({ region, zones: PARTITION[region] }))

          return sections.map(({ region, zones }) =>
            <Section key={region}>
              <Typography variant='h6' gutterBottom>{translate('region', region, locale)}</Typography>
              <TableContainer>
                <Table size='small' className={classes.weatherTable}>
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      {hashes.map((hash, index) => {
                        const eorzeanTime = new Date((currentSeed - 1 + index) * 28800000)
                        const localTime = new Date(eorzeanTime.getTime() / (1440 / 70))
                        return (
                          <TableCell key={index} className={clsx(classes.weatherTime, index === 1 && classes.current)}>
                            {showLocalTime
                              ? index === 1
                                  ? (
                                    <>
                                      {formatTime(new Date(now.getTime() * (1440 / 70)))} ET
                                      <br />
                                      {formatTime(now)} LT
                                    </>
                                    )
                                  : (
                                    <>
                                      {formatTime(eorzeanTime)} ET
                                      <br />
                                      {formatTime(localTime)} LT
                                    </>
                                    )
                              : (
                                  index === 1
                                    ? formatTime(new Date(now.getTime() * (1440 / 70)))
                                    : formatTime(eorzeanTime)
                                )}
                            {showWeatherChance && (
                              <>
                                <br />
                                {paddedZero(hash)}
                              </>
                            )}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {zones.map((zone) =>
                      <TableRow key={zone} hover>
                        <TableCell component='th' scope='row' className={classes.regionCell}>
                          <Typography>{translate('zone', zone, locale)}</Typography>
                        </TableCell>
                        {hashes.map((hash, index) =>
                          <TableCell
                            key={index}
                            className={clsx(classes.weatherCell, index === 1 && classes.current)}
                          >
                            <WeatherIcon weather={getZoneWeather(zone, hash)} showLabel={showLabels} />
                          </TableCell>
                        )}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Section>
          )
        })()}
      </NoSsr>
    </Section>
  )
}

export default i18n.withTranslation('skywatcher')(UpcomingWeather)
