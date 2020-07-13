import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

export const ICONS = [
  'Ragworm',
  'Krill',
  'Plump Worm',
  'Versatile Lure',
  'Glowworm',
  'Shrimp Cage Feeder',
  'Heavy Steel Jig',
  'Rat Tail',
  //
  'Galadion Chovy',
  'Heavenskey',
  'Navigator’s Print',
  'Ghoul Barracuda',
  'Gladius',
  'Hi-aetherlouse',
  'Great Grandmarlin',
  'Tossed Dagger',
  //
  'Elder Dinichthys',
  'Gugrusaurus',
  'Crimson Monkfish',
  'Deep-sea Eel',
  'Silencer',
  'La Noscean Jelly',
  'Sea Nettle',
  'Floating Saucer',
  //
  'Shaggy Seadragon',
  'Aetheric Seadragon',
  'Coral Seadragon',
  'Tarnished Shark',
  'Ghost Shark',
  'Quicksilver Blade',
  'Funnel Shark',
  'Chrome Hammerhead',
  //
  'Sweeper',
  'Executioner',
  'Cyan Octopus',
  'Merman’s Mane',
  'Mopbeard',
  null,
  null,
  null,
  //
  'Spectral Megalodon',
  'Spectral Discus',
  'Spectral Sea Bo',
  'Spectral Bass',
  'Drunkfish',
  'Little Leviathan',
  'Shooting Star',
  'Sabaton',
  //
  'Sothis',
  'Coral Manta',
  'Elasmosaurus',
  'Stonescale',
  'What Did Octopodes Do to You?',
  'What Did Sharks Do to You?',
  'What Did Jellyfish Do to You?',
  'What Did Seadragons Do to You?'
]
const CHUNK_SIZE = 8

function camelCase (str) {
  str = str.replace(/[^a-z]/g, '')
  return str[0].toLowerCase() + str.slice(1)
}

const useStyles = makeStyles((theme) => {
  const styles = {
    oceanFishIcon: {
      display: 'inline-block',
      width: '2.5em',
      height: '2.5em',
      margin: theme.spacing(0.5),
      backgroundImage: 'url("/images/ocean-fish.png")',
      backgroundSize: `${CHUNK_SIZE * 100}% ${(ICONS.length / CHUNK_SIZE | 0) * 100}%`
    }
  }

  for (let i = 0; i < ICONS.length; ++i) {
    if (!ICONS[i]) continue
    const row = i / CHUNK_SIZE | 0
    const col = i % CHUNK_SIZE
    styles[camelCase(ICONS[i])] = {
      backgroundPosition: `${col * -100}% ${row * -100}%`
    }
  }
  return styles
})

export default function OceanFishIcon (props) {
  const { name } = props
  const classes = useStyles()

  return (
    <div className={cn(classes.oceanFishIcon, classes[camelCase(name)], props.className)} title={name} />
  )
}

OceanFishIcon.propTypes = {
  name: function (props, propName, componentName) {
    const propTypesError = PropTypes.string.isRequired.apply(this, arguments)
    if (propTypesError) {
      return propTypesError
    }
    if (ICONS.indexOf(props[propName]) === -1) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Unknown name '${props[propName]}'.`
      )
    }
  }
}
