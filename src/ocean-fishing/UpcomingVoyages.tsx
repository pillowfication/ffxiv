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
import { translate, upperFirst } from './utils'

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
                <option value='sothis'>{translate(locale, fishes[29788], 'name')}</option>
                <option value='coral_manta'>{translate(locale, fishes[29789], 'name')}</option>
                <option value='stonescale'>{translate(locale, fishes[29790], 'name')}</option>
                <option value='elasmosaurus'>{translate(locale, fishes[29791], 'name')}</option>
                <option value='hafgufa'>{translate(locale, fishes[32074], 'name')}</option>
                <option value='seafaring_toad'>{translate(locale, fishes[32094], 'name')}</option>
                <option value='placodus'>{translate(locale, fishes[32114], 'name')}</option>
              </optgroup>
              <optgroup label='Achievements'>
                <option value='octopodes'>{translate(locale, achievements[2563], 'name')}</option>
                <option value='sharks'>{translate(locale, achievements[2564], 'name')}</option>
                <option value='jellyfish'>{translate(locale, achievements[2565], 'name')}</option>
                <option value='seadragons'>{translate(locale, achievements[2566], 'name')}</option>
                <option value='balloons'>{translate(locale, achievements[2754], 'name')}</option>
                <option value='crabs'>{translate(locale, achievements[2755], 'name')}</option>
                <option value='mantas'>{translate(locale, achievements[2756], 'name')}</option>
              </optgroup>
              <optgroup label={upperFirst(translate(locale, fishingSpots[241], 'place_name_sub', 'no_article'))}>
                <option value='R'>{upperFirst(translate(locale, fishingSpots[241], 'place_name_sub', 'no_article'))}</option>
                <option value='RD'>{upperFirst(translate(locale, fishingSpots[241], 'place_name_sub', 'no_article'))} - Day</option>
                <option value='RS'>{upperFirst(translate(locale, fishingSpots[241], 'place_name_sub', 'no_article'))} - Sunset</option>
                <option value='RN'>{upperFirst(translate(locale, fishingSpots[241], 'place_name_sub', 'no_article'))} - Night</option>
              </optgroup>
              <optgroup label={upperFirst(translate(locale, fishingSpots[243], 'place_name_sub', 'no_article'))}>
                <option value='N'>{upperFirst(translate(locale, fishingSpots[243], 'place_name_sub', 'no_article'))}</option>
                <option value='ND'>{upperFirst(translate(locale, fishingSpots[243], 'place_name_sub', 'no_article'))} - Day</option>
                <option value='NS'>{upperFirst(translate(locale, fishingSpots[243], 'place_name_sub', 'no_article'))} - Sunset</option>
                <option value='NN'>{upperFirst(translate(locale, fishingSpots[243], 'place_name_sub', 'no_article'))} - Night</option>
              </optgroup>
              <optgroup label={upperFirst(translate(locale, fishingSpots[248], 'place_name_sub', 'no_article'))}>
                <option value='B'>{upperFirst(translate(locale, fishingSpots[248], 'place_name_sub', 'no_article'))}</option>
                <option value='BD'>{upperFirst(translate(locale, fishingSpots[248], 'place_name_sub', 'no_article'))} - Day</option>
                <option value='BS'>{upperFirst(translate(locale, fishingSpots[248], 'place_name_sub', 'no_article'))} - Sunset</option>
                <option value='BN'>{upperFirst(translate(locale, fishingSpots[248], 'place_name_sub', 'no_article'))} - Night</option>
              </optgroup>
              <optgroup label={upperFirst(translate(locale, fishingSpots[250], 'place_name_sub', 'no_article'))}>
                <option value='T'>{upperFirst(translate(locale, fishingSpots[250], 'place_name_sub', 'no_article'))}</option>
                <option value='TD'>{upperFirst(translate(locale, fishingSpots[250], 'place_name_sub', 'no_article'))} - Day</option>
                <option value='TS'>{upperFirst(translate(locale, fishingSpots[250], 'place_name_sub', 'no_article'))} - Sunset</option>
                <option value='TN'>{upperFirst(translate(locale, fishingSpots[250], 'place_name_sub', 'no_article'))} - Night</option>
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
