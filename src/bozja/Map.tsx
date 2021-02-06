import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import { Icon, CRS } from 'leaflet'
import { MapContainer, ImageOverlay, Pane, Marker, Tooltip } from 'react-leaflet'
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

type SpriteType = 'wind' | 'earth' | 'lightning' | 'water'

const ICON_SIZE = 32

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

function getDirection (orientation: number): 'bottom' | 'left' | 'right' | 'top' | 'center' | 'auto' {
  switch (orientation) {
    case 1: return 'left'
    case 3: return 'bottom'
    case 4: return 'top'
    case 9: return 'center'
    default: return 'auto'
  }
}

function toRoman (num: number): string {
  switch (num) {
    case 1: return 'I'
    case 2: return 'II'
    case 3: return 'III'
    case 4: return 'IV'
    case 5: return 'V'
    default: return '?'
  }
}

function getSpriteIcon (spriteType: SpriteType): number {
  switch (spriteType) {
    case 'wind': return 60659
    case 'earth': return 60660
    case 'lightning': return 60661
    case 'water': return 60662
  }
}

function formatMonster (label: string, locale: string): string {
  switch (locale) {
    case 'en':
    case 'de':
      return label.split(' ').map(word => {
        if (['of', 'des'].includes(word)) {
          return word
        } else {
          return word[0].toUpperCase() + word.slice(1)
        }
      }).join(' ')
    case 'fr':
      return label[0].toUpperCase() + label.slice(1)
    default:
      return label
  }
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
  tooltipBare: {
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    padding: theme.spacing(1, 1.5),
    color: 'white',
    fontSize: '1.25em',
    textShadow: '0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black',
    '&::before, &::after': {
      display: 'none'
    }
  },
  tooltip: {
    background: 'rgba(0, 0, 0, 0.75)',
    border: 'none',
    boxShadow: 'none',
    padding: theme.spacing(0, 1),
    color: 'white',
    fontSize: '1.25em',
    '&::before, &::after': {
      display: 'none'
    }
  }
}))

const Map = (): React.ReactElement => {
  const classes = useStyles()
  const { i18n } = useTranslation()
  const [showMapLabels, setShowMapLabels] = useState(true)
  const [showStarMonsters, setShowStarMonsters] = useState(false)
  const [showSprites, setShowSprites] = useState(false)
  const locale = i18n.language

  const handleToggleMapLabels = (): void => { setShowMapLabels(!showMapLabels) }
  const handleToggleStarMonsters = (): void => { setShowStarMonsters(!showStarMonsters) }
  const handleToggleSprites = (): void => { setShowSprites(!showSprites) }

  return (
    <Section>
      <Head>
        <link href='/static/leaflet.css' rel='stylesheet' key='leaflet'/>
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <FormControl component='fieldset'>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={showMapLabels} onChange={handleToggleMapLabels} />}
                label='Map labels'
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={showStarMonsters} onChange={handleToggleStarMonsters} />}
                label='Star-rank monsters'
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={showSprites} onChange={handleToggleSprites} />}
                label='Sprites'
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper>
            <MapContainer
              bounds={[[1, 1], [42, 42]]}
              maxBounds={[[1, 1], [42, 42]]}
              attributionControl={false}
              crs={CRS.Simple}
              zoomSnap={0.1}
              className={classes.container}
            >
              <ImageOverlay
                bounds={[[1, 1], [42, 42]]}
                url='/images/bozja/bozja.png'
              />
              <Pane name='map'>
                {bozja.mapMarkers
                  .filter(mapMarker => mapMarker.icon !== 0)
                  .map((mapMarker, index) => (
                    <Marker
                      key={index}
                      position={toLatLong(toCoords([mapMarker.x, mapMarker.y]))}
                      icon={new Icon({
                        iconUrl: `/images/bozja/icon-${[7, 8, 15].includes(mapMarker.id) ? 60959 : mapMarker.icon}.png`,
                        iconSize: [32, 32]
                      })}
                    >
                      {showMapLabels && mapMarker.placeName_subtext_en !== '' && (
                        <Tooltip
                          permanent
                          direction={getDirection(mapMarker.subtextOrientation)}
                          className={classes.tooltipBare}
                        >
                          {translate(locale, mapMarker, 'placeName_subtext')}
                        </Tooltip>
                      )}
                    </Marker>
                  ))
                }
              </Pane>
              {showStarMonsters && (
                bozja.starMonsters.map(starMonster =>
                  <Marker
                    key={starMonster.id}
                    position={toLatLong([starMonster.x, starMonster.y])}
                    icon={new Icon({
                      iconUrl: '/images/bozja/icon-60580.png',
                      iconSize: [ICON_SIZE, ICON_SIZE]
                    })}
                  >
                    <Tooltip
                      permanent
                      direction='top'
                      offset={[0, -10]}
                      className={classes.tooltip}
                    >
                      {formatMonster(translate(locale, starMonster, 'name'), locale)}
                    </Tooltip>
                  </Marker>
                )
              )}
              {showSprites && (
                (['wind', 'water', 'lightning', 'earth'] as SpriteType[]).flatMap(spriteType =>
                  bozja.sprites[spriteType].locations.map((location: { level: number, x: number, y: number }) =>
                    <Marker
                      key={`${spriteType}-${location.level}`}
                      position={toLatLong([location.x, location.y])}
                      icon={new Icon({
                        iconUrl: `/images/bozja/icon-${getSpriteIcon(spriteType)}.png`,
                        iconSize: [ICON_SIZE, ICON_SIZE]
                      })}
                    >
                      <Tooltip
                        permanent
                        direction='top'
                        offset={[0, -10]}
                        className={classes.tooltip}
                      >
                        {toRoman(location.level)}
                      </Tooltip>
                    </Marker>
                  )
                )
              )}
            </MapContainer>
          </Paper>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Map
