import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { Icon, CRS } from 'leaflet'
import { MapContainer, ImageOverlay, Pane, Marker, Tooltip } from 'react-leaflet'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Section from '../Section'
import { formatMonster } from './utils'
import zadnor from './ffxiv-zadnor/data/zadnor.json'
import translate from '../translate'

type SpriteType = 'ice' | 'wind' | 'lightning' | 'water'

const ICON_SIZE = 32

function toCoords ([x, y]: [number, number]): [number, number] {
  const scale = zadnor.sizeFactor / 100
  const cX = (x + zadnor.offsetX) * scale
  const cY = (y + zadnor.offsetY) * scale
  // Not sure why I'm offset by -20.5, -20.5 here
  const fX = (41 / scale) * ((cX + 1024) / 2048) + 1 - 20.5
  const fY = (41 / scale) * ((cY + 1024) / 2048) + 1 - 20.5
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
    case 'ice': return 60658
    case 'wind': return 60659
    case 'lightning': return 60661
    case 'water': return 60662
  }
}

// const useStyles = makeStyles(theme => ({
//   container: {
//     width: '100%',
//     paddingBottom: '100%',
//     margin: theme.spacing(0, 'auto'),
//     border: '1px solid black',
//     overflow: 'hidden'
//   },
//   tooltipBare: {
//     background: 'none',
//     border: 'none',
//     boxShadow: 'none',
//     padding: theme.spacing(1, 1.5),
//     color: 'white',
//     fontSize: '1.25em',
//     textShadow: '0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black',
//     '&::before, &::after': {
//       display: 'none'
//     }
//   },
//   tooltip: {
//     background: 'rgba(0, 0, 0, 0.75)',
//     border: 'none',
//     boxShadow: 'none',
//     padding: theme.spacing(0, 1),
//     color: 'white',
//     fontSize: '1.25em',
//     '&::before, &::after': {
//       display: 'none'
//     }
//   }
// }))

const Map = (): React.ReactElement => {
  const { t, i18n } = useTranslation('zadnor')
  const [showMapLabels, setShowMapLabels] = useState(false)
  const [showStarMonsters, setShowStarMonsters] = useState(false)
  const [showSprites, setShowSprites] = useState(false)
  const locale = i18n.language

  useEffect(() => {
    // Fixes offset markers on initial load for some reason
    setTimeout(() => {
      setShowMapLabels(true)
      setShowStarMonsters(true)
      setShowSprites(true)
    }, 0)
  }, [])

  // Force a mount/unmount whenever the theme type changes
  // Bypasses the Map's immutability
  // const theme = useTheme()
  // const [key, setKey] = useState(0)
  // useEffect(() => { setKey(key + 1) }, [theme.palette.type])

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
                label={t('mapLabels')}
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={showStarMonsters} onChange={handleToggleStarMonsters} />}
                label={t('starMonsters')}
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={showSprites} onChange={handleToggleSprites} />}
                label={t('sprites')}
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
              zoomSnap={0}
              className={'classes.container'}
            >
              <ImageOverlay
                bounds={[[1, 1], [42, 42]]}
                url='/images/zadnor/zadnor.png'
              />
              <Pane name='map'>
                {zadnor.mapMarkers
                  .filter(mapMarker => mapMarker.icon !== 0)
                  .map((mapMarker, index) => (
                    <Marker
                      key={index}
                      position={toLatLong(toCoords([mapMarker.x, mapMarker.y]))}
                      icon={new Icon({
                        iconUrl: `/images/zadnor/icon-${[7, 8, 15].includes(mapMarker.id) ? 60959 : mapMarker.icon}.png`,
                        iconSize: [32, 32]
                      })}
                    >
                      {showMapLabels && mapMarker.placeName_subtext.en !== '' && (
                        <Tooltip
                          permanent
                          direction={getDirection(mapMarker.subtextOrientation)}
                          className={'classes.tooltipBare'}
                        >
                          {translate(locale, mapMarker, 'placeName_subtext')
                            .replace(/<.*?>/g, '')}
                        </Tooltip>
                      )}
                    </Marker>
                  ))
                }
              </Pane>
              {showStarMonsters && (
                zadnor.starMonsters.map(starMonster =>
                  <Marker
                    key={starMonster.id}
                    position={toLatLong([starMonster.x, starMonster.y])}
                    icon={new Icon({
                      iconUrl: '/images/zadnor/icon-61804.png',
                      iconSize: [ICON_SIZE, ICON_SIZE]
                    })}
                  >
                    <Tooltip
                      direction='top'
                      offset={[0, -10]}
                      className={'classes.tooltip'}
                    >
                      {formatMonster(translate(locale, starMonster, 'name'), locale)}
                    </Tooltip>
                  </Marker>
                )
              )}
              {showSprites && (
                (['ice', 'wind', 'lightning', 'water'] as SpriteType[]).flatMap(spriteType =>
                  zadnor.sprites[spriteType].locations.map((location: { level: number, x: number, y: number }) =>
                    <Marker
                      key={`${spriteType}-${location.level}`}
                      position={toLatLong([location.x, location.y])}
                      icon={new Icon({
                        iconUrl: `/images/zadnor/icon-${getSpriteIcon(spriteType)}.png`,
                        iconSize: [ICON_SIZE, ICON_SIZE]
                      })}
                    >
                      <Tooltip
                        permanent
                        direction='top'
                        offset={[0, -10]}
                        className={'classes.tooltip'}
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
