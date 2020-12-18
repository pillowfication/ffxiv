import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { TIME_MAP } from './maps'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CheckIcon from '@material-ui/icons/Check'
import OceanFishIcon from './OceanFishIcon'
import Tug from './Tug'
import WeatherIcon from '../skywatcher/WeatherIcon'
import FISH from './gists/fish.json'

const FISH_CATEGORIES = {
  octopus: 'Octopus Travelers',
  shark: 'Certifiable Shark Hunters',
  jellyfish: 'Jelled Together',
  seadragon: 'Maritime Dragonslayers',
  balloon: 'Balloon Catchers',
  crab: 'Crab Boat Crew',
  manta: 'Sticking it to the Manta'
}

const useStyles = makeStyles((theme) => ({
  table: {
    '& td': {
      fontSize: '0.9em',
      padding: 0
    }
  },
  check: {
    padding: 10
  },
  stars: {
    marginTop: '-0.3em',
    opacity: 0.8
  },
  intuition: {
    position: 'relative',
    verticalAlign: 'middle',
    margin: '-2px 2px 0'
  },
  tug: {
    fontSize: '1.33em'
  },
  category: {
    fontSize: '0.75em'
  },
  disabled: {
    backgroundColor: theme.palette.type === 'dark' ? '#333333' : '#DDDDDD',
    opacity: 0.5
  },
  unchecked: {
    opacity: 0.33
  },
  checked: {
    color: 'green'
  }
}))

const FishTable = ({ regions, time, checklist, setChecklist }) => {
  const classes = useStyles()
  const toggleFish = (fish) => {
    if (checklist.includes(fish.name)) {
      const copy = checklist.slice()
      copy.splice(copy.findIndex((x) => x === fish.name), 1)
      setChecklist(copy)
    } else {
      const copy = checklist.slice()
      copy.push(fish.name)
      setChecklist(copy)
    }
  }

  return (
    <Table size='small' className={classes.table}>
      {regions.map((region, index) => {
        const isSpectral = /spectral/i.test(region)
        return (
          <React.Fragment key={index}>
            <TableHead>
              <TableRow>
                <TableCell colSpan={3} align='center'>Fish</TableCell>
                <TableCell align='center'>Bait</TableCell>
                <TableCell align='center'>Tug</TableCell>
                <TableCell align='center'>Points</TableCell>
                <TableCell align='center'>Double Hook</TableCell>
                <TableCell align='center'>Line Time</TableCell>
                <TableCell align='center'>{isSpectral ? 'Time' : 'Weather'}</TableCell>
                <TableCell align='center'>Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {FISH[region].map((fish) =>
                <TableRow
                  key={fish.name}
                  hover
                  className={cn(time && fish.time && fish.time.indexOf(time) === -1 && classes.disabled)}
                >
                  <TableCell align='center'>
                    <IconButton
                      className={cn(classes.check, checklist.includes(fish.name) ? classes.checked : classes.unchecked)}
                      onClick={toggleFish.bind(null, fish)}
                    >
                      <CheckIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <OceanFishIcon name={fish.name} inline />
                  </TableCell>
                  <TableCell>
                    <div><Typography>{fish.name}</Typography></div>
                    <div className={classes.stars}>{'★'.repeat(fish.stars)}</div>
                  </TableCell>
                  <TableCell align='center'>
                    {fish.intuition && (
                      <>
                        {fish.intuition.map((fish, index) =>
                          <React.Fragment key={fish.name}>
                            <Typography display='inline'>{index === 0 ? `${fish.count}×` : `, ${fish.count}×`}</Typography>
                            <OceanFishIcon name={fish.name} inline />
                          </React.Fragment>)}
                        <img src='/images/fishers-intuition.png' className={classes.intuition} />
                      </>
                    )}
                    {[fish.bait, fish.mooch]
                      .filter((x) => x)
                      .map((bait) => <OceanFishIcon key={bait} name={bait} inline />)}
                  </TableCell>
                  <TableCell align='center'>
                    {fish.tug && <Tug strength={fish.tug} className={classes.tug} />}
                  </TableCell>
                  <TableCell align='center'>
                    <Typography>{fish.points}</Typography>
                  </TableCell>
                  <TableCell align='center'>
                    <Typography>{Array.isArray(fish.doubleHook) ? fish.doubleHook.join(', ') : fish.doubleHook}</Typography>
                  </TableCell>
                  <TableCell align='center'>
                    <Typography>{Array.isArray(fish.timer) ? fish.timer.join('-') : fish.timer}</Typography>
                  </TableCell>
                  <TableCell align='center'>
                    {(() => {
                      if (isSpectral) {
                        return fish.time === 'DSN'
                          ? 'Any'
                          : fish.time && fish.time.split('').map((time) => TIME_MAP[time])
                      } else {
                        if (!fish.weathers) return null
                        switch (fish.weathers.type) {
                          case 'ALL':
                            return 'Any'
                          case 'OK':
                            return fish.weathers.list.map((weather) =>
                              <WeatherIcon key={weather} weatherId={weather} showLabel={false} />
                            )
                          case 'NOT OK':
                            return (
                              <>
                                <span style={{ verticalAlign: 'super' }}>Not&nbsp;</span>
                                {fish.weathers.list.map((weather) =>
                                  <WeatherIcon key={weather} weatherId={weather} showLabel={false} />
                                )}
                              </>
                            )
                        }
                      }
                    })()}
                  </TableCell>
                  <TableCell align='center'>
                    {fish.category &&
                      <OceanFishIcon
                        name={FISH_CATEGORIES[fish.category]}
                        className={classes.category}
                      />}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </React.Fragment>
        )
      })}
    </Table>
  )
}

FishTable.propTypes = {
  regions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  time: PropTypes.string,
  checkList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setChecklist: PropTypes.func.isRequired
}

export default FishTable
