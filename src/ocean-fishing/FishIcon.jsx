import React, { Component } from 'react'
import propTypes from 'prop-types'
import cn from 'classnames'

import styles from './OceanFishing.scss'

export const ICON_TITLES = {
  ragworm: 'Ragworm',
  krill: 'Krill',
  plumpWorm: 'Plump Worm',
  versatileLure: 'Versatile Lure',
  glowworm: 'Glowworm',
  shrimpCageFeeder: 'Shrimp Cage Feeder',
  heavySteelJig: 'Heavy Steel Jig',
  ratTail: 'Rat Tail',
  galadionChovy: 'Galadion Chovy',
  heavenskey: 'Heavenskey',
  navigatorsPrint: 'Navigator’s Print',
  ghoulBarracuda: 'Ghoul Barracuda',
  gladius: 'Gladius',
  hiAetherlouse: 'Hi-aetherlouse',
  greatGrandmarlin: 'Great Grandmarlin',
  tossedDagger: 'Tossed Dagger',
  elderDinichthys: 'Elder Dinichthys',
  gugrusaurus: 'Gugrusaurus',
  crimsonMonkfish: 'Crimson Monkfish',
  deepSeaEel: 'Deep-sea Eel',
  silencer: 'Silencer',
  drunkfish: 'Drunkfish',
  laNosceanJelly: 'La Noscean Jelly',
  seaNettle: 'Sea Nettle',
  floatingSaucer: 'Floating Saucer',
  shaggySeadragon: 'Shaggy Seadragon',
  aethericSeadragon: 'Aetheric Seadragon',
  coralSeadragon: 'Coral Seadragon',
  tarnishedShark: 'Tarnished Shark',
  ghostShark: 'Ghost Shark',
  quicksilverBlade: 'Quicksilver Blade',
  funnelShark: 'Funnel Shark',
  chromeHammerhead: 'Chrome Hammerhead',
  sweeper: 'Sweeper',
  executioner: 'Executioner',
  cyanOctopus: 'Cyan Octopus',
  mermansMane: 'Merman’s Mane',
  mopbeard: 'Mopbeard',
  littleLeviathan: 'Little Leviathan',
  shootingStar: 'Shooting Star',
  sabaton: 'Sabaton',
  spectralMegalodon: 'Spectral Megalodon',
  spectralDiscus: 'Spectral Discus',
  spectralSeaBo: 'Spectral Sea Bo',
  spectralBass: 'Spectral Bass',
  sothis: 'Sothis',
  coralManta: 'Coral Manta',
  elasmosaurus: 'Elasmosaurus',
  stonescale: 'Stonescale',
  octopodes: 'What Did Octopodes Do to You?',
  sharks: 'What Did Sharks Do to You?',
  jellyfish: 'What Did Jellyfish Do to You?',
  seadragons: 'What Did Seadragons Do to You?'
}

class FishIcon extends Component {
  render () {
    const { name } = this.props
    return (
      <div className={cn(styles.fishIcon, styles[name])} title={ICON_TITLES[name]} />
    )
  }
}

FishIcon.propTypes = {
  name: function (props, propName, componentName) {
    const propTypesError = propTypes.string.isRequired.apply(this, arguments)
    if (propTypesError) {
      return propTypesError
    }
    if (ICON_TITLES[props[propName]] === undefined) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to \`${componentName}\`.` +
        ` Unknown name '${props[propName]}'.`
      )
    }
  }
}

export default FishIcon
