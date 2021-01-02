import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import NoSsr from '@material-ui/core/NoSsr'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import Section from '../Section'
import UpcomingVoyagesTable from './UpcomingVoyagesTable'
import { fishingSpots, fishes, achievements } from './gists/data/ocean-fish-data.json'
import calculateVoyages from './calculate-voyages'
import * as maps from './maps'
import { translate } from './utils'

type Props = {
  now?: Date,
  onSelectRoute: (route: maps.DestinationStopTime) => void
}

const UpcomingVoyages = ({ now, onSelectRoute }: Props) => {
  const router = useRouter()
  const [numRows, setNumRows] = useState(10)
  const [filter, setFilter] = useState('none')
  const firstRender = useRef(false)

  const locale = router.locale

  useEffect(() => {
    const queryFilter = maps.FILTER_MAP[String(router.query.filter)] ? String(router.query.filter) : 'none'
    if ((!firstRender.current && now) || filter !== queryFilter) {
      firstRender.current = true
      setFilter(queryFilter)
      onSelectRoute(calculateVoyages(now, 1, maps.FILTER_MAP[queryFilter])[0].destinationCode)
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
              <UpcomingVoyagesTable now={now} numRows={numRows} filter={maps.FILTER_MAP[filter]} onSelectRoute={onSelectRoute} />
            </Grid>}
        </NoSsr>
      </Grid>
    </Section>
  )
}

export default UpcomingVoyages
