import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import { Icon, CRS } from 'leaflet'
import { MapContainer, ImageOverlay, Marker, Tooltip } from 'react-leaflet'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Section from '../Section'
import bozja from './ffxiv-bozja/data/bozja.json'
import { useTranslation } from '../i18n'
import { translate } from '../utils'

function toCoords ([x, y]: [number, number]): [number, number] {
  const scale = bozja.sizeFactor / 100
  const cX = (x + bozja.offsetX) * scale
  const cY = (y + bozja.offsetY) * scale
  // Not sure why I'm offset by -18, -12 here
  const fX = (41 / scale) * ((cX + 1024) / 2048) + 1 - 18
  const fY = (41 / scale) * ((cY + 1024) / 2048) + 1 - 12
  return [fX, fY]
}

function toLatLong ([x, y]: [number, number]): [number, number] {
  return [43 - y, x]
}

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: 0,
    paddingBottom: '100%',
    margin: theme.spacing(0, 'auto'),
    border: '1px solid black',
    overflow: 'hidden'
  },
  tooltip: {
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    color: 'white',
    fontSize: '1.33em',
    textShadow: '0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black',
    '&::before, &::after': {
      display: 'none'
    }
  }
}))

function getDirection (orientation: number): 'bottom' | 'left' | 'right' | 'top' | 'center' | 'auto' {
  switch (orientation) {
    case 1: return 'left'
    case 3: return 'bottom'
    case 4: return 'top'
    case 9: return 'center'
    default: return 'auto'
  }
}

const Map = (): React.ReactElement => {
  const classes = useStyles()
  const { i18n } = useTranslation()
  const [showMapLabels, setShowMapLabels] = useState(true)
  const [showStarMonsters, setShowStarMonsters] = useState(false)
  const locale = i18n.language

  const handleToggleMapLabels = (): void => { setShowMapLabels(!showMapLabels) }
  const handleToggleStarMonsters = (): void => { setShowStarMonsters(!showStarMonsters) }

  return (
    <Section>
      <Head>
        <link href='/static/leaflet.css' rel='stylesheet' key='leaflet'/>
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <FormControl component='fieldset'>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={showMapLabels} onChange={handleToggleMapLabels} />}
                label='Show map labels'
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={showStarMonsters} onChange={handleToggleStarMonsters} />}
                label='Show ★-rank monsters'
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <MapContainer
              bounds={[[1, 1], [42, 42]]}
              maxBounds={[[1, 1], [42, 42]]}
              attributionControl={false}
              crs={CRS.Simple}
              zoomSnap={0}
              maxZoom={7}
              className={classes.container}
            >
              <ImageOverlay
                bounds={[[1, 1], [42, 42]]}
                url='/images/bozja/bozja.png'
              />
              {bozja.mapMarkers
                .filter(mapMarker => mapMarker.icon !== 0)
                .map((mapMarker, index) => (
                  <Marker
                    key={index}
                    position={toLatLong(toCoords([mapMarker.x, mapMarker.y]))}
                    icon={new Icon({
                      iconUrl: `/images/bozja/icon-${mapMarker.icon}.png`,
                      iconSize: [32, 32]
                    })}
                  >
                    {showMapLabels && mapMarker.placeName_subtext_en !== '' && (
                      <Tooltip
                        permanent
                        className={classes.tooltip}
                        direction={getDirection(mapMarker.subtextOrientation)}
                      >
                        {translate(locale, mapMarker, 'placeName_subtext')}
                      </Tooltip>
                    )}
                  </Marker>
                ))
              }
              {showStarMonsters && bozja.starMonsters.map(starMonster =>
                <Marker
                  key={starMonster.id}
                  position={toLatLong([starMonster.x, starMonster.y])}
                  icon={new Icon({
                    iconUrl: '/images/bozja/icon-60580.png',
                    iconSize: [32, 32]
                  })}
                >
                  <Tooltip
                    permanent
                    className={classes.tooltip}
                  >
                    {translate(locale, starMonster, 'name')}
                  </Tooltip>
                </Marker>
              )}
            </MapContainer>
          </Paper>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Map
