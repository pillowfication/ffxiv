import React from 'react'
import BaitGroup from './BaitGroup'

function createBaitChain (bait, intuitionFishes) {
  return (
    <BaitGroup bait={bait} intuitionFishes={intuitionFishes} />
  )
}

const RAGWORM = { name: 'Ragworm' }
const KRILL = { name: 'Krill' }
const PLUMP_WORM = { name: 'Plump Worm' }
// const VERSATILE_LURE = { name: 'Versatile Lure' }

export default {
  'Aetheric Seadragon': createBaitChain(
    [PLUMP_WORM, { name: 'Hi-aetherlouse', tug: 1 }, { name: 'Aetheric Seadragon', tug: 1, dh: 2 }]
  ),
  Bareface: createBaitChain(
    [KRILL, { name: 'Bareface', tug: 3 }],
    [{
      count: 1,
      bait: [RAGWORM, { name: 'Sunken Mask', tug: 3 }]
    }]
  ),
  'Bartholomew the Chopper': createBaitChain(
    [RAGWORM, { name: 'Bartholomew the Chopper', tug: 1, dh: 4 }]
  ),
  'Bloodpolish Crab': createBaitChain(
    [RAGWORM, { name: 'Bloodpolish Crab', tug: 1, dh: 4 }]
  ),
  'Chrome Hammerhead': createBaitChain(
    [PLUMP_WORM, { name: 'Chrome Hammerhead', tug: 3, dh: 4 }]
  ),
  'Cieldalaes Geode': createBaitChain(
    [KRILL, { name: 'Cieldalaes Geode', tug: 3 }],
    [{
      count: 3,
      bait: [RAGWORM, { name: 'Metallic Boxfish', tug: 1 }]
    }]
  ),
  'Coral Seadragon': createBaitChain(
    [RAGWORM, { name: 'Coral Seadragon', tug: 1, dh: 4 }]
  ),
  'Crow Puffer': createBaitChain(
    [RAGWORM, { name: 'Crow Puffer', tug: 1, dh: 2 }]
  ),
  'Cyan Octopus': createBaitChain(
    [KRILL, { name: 'Cyan Octopus', tug: 2, dh: 4 }]
  ),
  'Coral Manta': createBaitChain(
    [{ name: 'Shrimp Cage Feeder' }, { name: 'Coral Manta', tug: 3 }],
    [{
      count: 2,
      bait: [PLUMP_WORM, { name: 'Hi-aetherlouse', tug: 1 }, { name: 'Great Grandmarlin', tug: 2 }]
    }]
  ),
  Drunkfish: createBaitChain(
    [KRILL, { name: 'Drunkfish', tug: 3 }],
    [{
      count: 3,
      bait: [KRILL, { name: 'Galadion Chovy', tug: 1 }]
    }]
  ),
  Elasmosaurus: createBaitChain(
    [{ name: 'Heavy Steel Jig' }, { name: 'Elasmosaurus', tug: 3 }],
    [{
      count: 3,
      bait: [PLUMP_WORM, { name: 'Gugrusaurus', tug: 3 }]
    }]
  ),
  Executioner: createBaitChain(
    [PLUMP_WORM, { name: 'Executioner', tug: 3, dh: 4 }]
  ),
  Exterminator: createBaitChain(
    [RAGWORM, { name: 'Exterminator', tug: 1, dh: 4 }]
  ),
  'Floating Saucer': createBaitChain(
    [KRILL, { name: 'Floating Saucer', tug: 1, dh: 4 }]
  ),
  'Funnel Shark': createBaitChain(
    [PLUMP_WORM, { name: 'Funnel Shark', tug: 3, dh: 4 }]
  ),
  'Garum Jug': createBaitChain(
    [RAGWORM, { name: 'Garum Jug', tug: 1, dh: 4 }]
  ),
  'Ghost Shark': createBaitChain(
    [PLUMP_WORM, { name: 'Ghost Shark', tug: 2, dh: 4 }]
  ),
  'Ginkgo Fin': createBaitChain(
    [RAGWORM, { name: 'Ginkgo Fin', tug: 3 }],
    [{
      count: 3,
      bait: [RAGWORM, { name: 'Rothlyt Kelp', tug: 1 }]
    }]
  ),
  'Goobbue Ray': createBaitChain(
    [PLUMP_WORM, { name: 'Goobbue Ray', tug: 2, dh: 2 }]
  ),
  Hafgufa: createBaitChain(
    [{ name: 'Squid Strip' }, { name: 'Hafgufa', tug: 3 }],
    [{
      count: 2,
      bait: [PLUMP_WORM, { name: 'Jetborne Manta', tug: 3 }]
    }, {
      count: 1,
      bait: [KRILL, { name: 'Mistbeard\'s Cup', tug: 2 }]
    }]
  ),
  'Honeycomb Fish': createBaitChain(
    [RAGWORM, { name: 'Honeycomb Fish', tug: 1, dh: 4 }]
  ),
  'Jetborne Manta': createBaitChain(
    [PLUMP_WORM, { name: 'Jetborne Manta', tug: 3, dh: 4 }]
  ),
  'La Noscean Jelly': createBaitChain(
    [RAGWORM, { name: 'La Noscean Jelly', tug: 1, dh: 4 }]
  ),
  Lampfish: createBaitChain(
    [RAGWORM, { name: 'Lampfish', tug: 1, dh: 2 }]
  ),
  'Little Leviathan': createBaitChain(
    [PLUMP_WORM, { name: 'Little Leviathan', tug: 3 }],
    [{
      count: 1,
      bait: [KRILL, { name: 'Ghoul Barracuda', tug: 2 }, { name: 'Gladius', tug: 2 }]
    }]
  ),
  'Metallic Boxfish': createBaitChain(
    [RAGWORM, { name: 'Metallic Boxfish', tug: 1, dh: 2 }]
  ),
  'Merman\'s Mane': createBaitChain(
    [KRILL, { name: 'Merman’s Mane', tug: 2, dh: 4 }]
  ),
  Mopbeard: createBaitChain(
    [KRILL, { name: 'Mopbeard', tug: 2, dh: 4 }]
  ),
  'Mythril Boxfish': createBaitChain(
    [RAGWORM, { name: 'Mythril Boxfish', tug: 1, dh: 4 }]
  ),
  'Net Crawler': createBaitChain(
    [KRILL, { name: 'Net Crawler', tug: 2, dh: 2 }]
  ),
  'Oracular Crab': createBaitChain(
    [RAGWORM, { name: 'Oracular Crab', tug: 1, dh: 4 }]
  ),
  'Pearl Bombfish': createBaitChain(
    [KRILL, { name: 'Pearl Bombfish', tug: 2, dh: 4 }]
  ),
  Placodus: createBaitChain(
    [RAGWORM, { name: 'Rothlyt Mussel', tug: 3 }, { name: 'Placodus', tug: 3 }],
    [{
      count: 1,
      bait: [RAGWORM, { name: 'Rothlyt Mussel', tug: 3 }, { name: 'Trollfish', tug: 1 }]
    }]
  ),
  'Quicksilver Blade': createBaitChain(
    [PLUMP_WORM, { name: 'Quicksilver Blade', tug: 2, dh: 2 }]
  ),
  Sabaton: createBaitChain(
    [KRILL, { name: 'Sabaton', tug: 3 }],
    [{
      count: 2,
      bait: [PLUMP_WORM, { name: 'Crimson Monkfish', tug: 2 }]
    }]
  ),
  'Sea Nettle': createBaitChain(
    [RAGWORM, { name: 'Sea Nettle', tug: 1, dh: 4 }]
  ),
  'Seafaring Toad': createBaitChain(
    [{ name: 'Pill Bug' }, { name: 'Seafaring Toad', tug: 3 }],
    [{
      count: 3,
      bait: [KRILL, { name: 'Beatific Vision', tug: 2 }]
    }]
  ),
  'Shaggy Seadragon': createBaitChain(
    [RAGWORM, { name: 'Shaggy Seadragon', tug: 1, dh: 4 }]
  ),
  'Shooting Star': createBaitChain(
    [RAGWORM, { name: 'Shooting Star', tug: 3 }],
    [{
      count: 1,
      bait: [RAGWORM, { name: 'Tossed Dagger', tug: 1 }, { name: 'Elder Dinichthys', tug: 2 }]
    }]
  ),
  Silencer: createBaitChain(
    [RAGWORM, { name: 'Silencer', tug: 1, dh: 4 }]
  ),
  Skaldminni: createBaitChain(
    [KRILL, { name: 'Skaldminni', tug: 2, dh: 4 }]
  ),
  Sothis: createBaitChain(
    [{ name: 'Glowworm' }, { name: 'Sothis', tug: 3 }],
    [{
      count: 2,
      bait: [RAGWORM, { name: 'Heavenskey', tug: 1 }]
    }, {
      count: 1,
      bait: [KRILL, { name: 'Navigator\'s Print', tug: 1 }]
    }]
  ),
  'Spectral Bass': createBaitChain(
    [PLUMP_WORM, { name: 'Spectral Bass', tug: 3 }]
  ),
  'Spectral Butterfly': createBaitChain(
    [RAGWORM, { name: 'Spectral Butterfly', tug: 3 }]
  ),
  'Spectral Discus': createBaitChain(
    [KRILL, { name: 'Spectral Discus', tug: 3 }]
  ),
  'Spectral Eel': createBaitChain(
    [KRILL, { name: 'Spectral Eel', tug: 3 }]
  ),
  'Spectral Megalodon': createBaitChain(
    [PLUMP_WORM, { name: 'Spectral Megalodon', tug: 3 }]
  ),
  'Spectral Sea Bo': createBaitChain(
    [RAGWORM, { name: 'Spectral Sea Bo', tug: 3 }]
  ),
  Spectresaur: createBaitChain(
    [PLUMP_WORM, { name: 'Spectresaur', tug: 3 }]
  ),
  Stonescale: createBaitChain(
    [{ name: 'Rat Tail' }, { name: 'Stonescale', tug: 3 }],
    [{
      count: 1,
      bait: [PLUMP_WORM, { name: 'Deep-sea Eel', tug: 2 }]
    }, {
      count: 1,
      bait: [RAGWORM, { name: 'Silencer', tug: 1 }]
    }]
  ),
  Sweeper: createBaitChain(
    [PLUMP_WORM, { name: 'Sweeper', tug: 2, dh: 2 }]
  ),
  'Tarnished Shark': createBaitChain(
    [PLUMP_WORM, { name: 'Tarnished Shark', tug: 3, dh: 2 }]
  ),
  'Thaliak Crab': createBaitChain(
    [RAGWORM, { name: 'Thaliak Crab', tug: 1, dh: 2 }]
  ),
  'Titanshell Crab': createBaitChain(
    [KRILL, { name: 'Titanshell Crab', tug: 2, dh: 4 }]
  ),
  'Tortoiseshell Crab': createBaitChain(
    [KRILL, { name: 'Tortoiseshell Crab', tug: 2, dh: 2 }]
  )
}
