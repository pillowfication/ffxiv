import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import { Icon, CRS } from 'leaflet'
import { MapContainer, ImageOverlay, Marker, Tooltip } from 'react-leaflet'
import Grid from '@material-ui/core/Grid'
import Section from '../Section'
import bozja from './ffxiv-bozja/data/bozja.json'
import { useTranslation } from '../i18n'
import { translate } from '../utils'

function getCoords (x: number, y: number): [number, number] {
  const scale = bozja.sizeFactor / 100
  const cX = (x + bozja.offsetX) * scale
  const cY = (y + bozja.offsetY) * scale
  // Not sure why I'm offset by -18, -12 here
  const fX = (41 / scale) * ((cX + 1024) / 2048) + 1 - 18
  const fY = (41 / scale) * ((cY + 1024) / 2048) + 1 - 12
  return [43 - fY, fX]
}

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: 0,
    paddingBottom: '100%',
    margin: theme.spacing(0, 'auto'),
    border: '2px solid black',
    overflow: 'hidden'
  },
  tooltip: {
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    color: 'white',
    fontSize: '1.1em',
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
  const locale = i18n.language

  return (
    <Section>
      <Head>
        <link href='/static/leaflet.css' rel='stylesheet' key='leaflet'/>
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        </Grid>
        <Grid item xs={12} md={8}>
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
                  position={getCoords(mapMarker.x, mapMarker.y)}
                  icon={new Icon({
                    iconUrl: `/images/bozja/icon-${mapMarker.icon}.png`,
                    iconSize: [32, 32]
                  })}
                  title={mapMarker.placeName_subtext_en}
                >
                  {mapMarker.placeName_subtext_en !== '' && (
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
          </MapContainer>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Map
