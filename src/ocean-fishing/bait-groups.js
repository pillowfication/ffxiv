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

export default {
  'Spectral Discus': createBaitChain(
    [KRILL, { name: 'Spectral Discus', tug: 3 }]
  ),
  'Spectral Megalodon': createBaitChain(
    [PLUMP_WORM, { name: 'Spectral Megalodon', tug: 3 }]
  ),
  'Spectral Sea Bo': createBaitChain(
    [RAGWORM, { name: 'Spectral Sea Bo', tug: 3 }]
  ),
  'Spectral Bass': createBaitChain(
    [PLUMP_WORM, { name: 'Spectral Bass', tug: 3 }]
  ),
  'Little Leviathan': createBaitChain(
    [PLUMP_WORM, { name: 'Little Leviathan', tug: 3 }],
    [{
      count: 1,
      bait: [KRILL, { name: 'Ghoul Barracuda', tug: 2 }, { name: 'Gladius', tug: 2 }]
    }]
  ),
  Drunkfish: createBaitChain(
    [KRILL, { name: 'Drunkfish', tug: 3 }],
    [{
      count: 3,
      bait: [KRILL, { name: 'Galadion Chovy', tug: 1 }]
    }]
  ),
  'Shooting Star': createBaitChain(
    [RAGWORM, { name: 'Shooting Star', tug: 3 }],
    [{
      count: 1,
      bait: [RAGWORM, { name: 'Tossed Dagger', tug: 1 }, { name: 'Elder Dinichthys', tug: 2 }]
    }]
  ),
  Sabaton: createBaitChain(
    [KRILL, { name: 'Sabaton', tug: 3 }],
    [{
      count: 2,
      bait: [PLUMP_WORM, { name: 'Crimson Monkfish', tug: 2 }]
    }]
  ),
  'Coral Manta': createBaitChain(
    [{ name: 'Shrimp Cage Feeder' }, { name: 'Coral Manta', tug: 3 }],
    [{
      count: 2,
      bait: [PLUMP_WORM, { name: 'Hi-aetherlouse', tug: 1 }, { name: 'Great Grandmarlin', tug: 2 }]
    }]
  ),
  Sothis: createBaitChain(
    [{ name: 'Glowworm' }, { name: 'Sothis', tug: 3 }],
    [{
      count: 2,
      bait: [RAGWORM, { name: 'Heavenskey', tug: 1 }]
    }, {
      count: 1,
      bait: [KRILL, { name: 'Navigator’s Print', tug: 1 }]
    }]
  ),
  Elasmosaurus: createBaitChain(
    [{ name: 'Heavy Steel Jig' }, { name: 'Elasmosaurus', tug: 3 }],
    [{
      count: 3,
      bait: [PLUMP_WORM, { name: 'Gugrusaurus', tug: 3 }]
    }]
  ),
  Stonescale: createBaitChain(
    [{ name: 'Rat Tail' }, { name: 'Stonescale', tug: 3 }],
    [{
      count: 2,
      bait: [PLUMP_WORM, { name: 'Deep-sea Eel', tug: 2 }]
    }, {
      count: 1,
      bait: [RAGWORM, { name: 'Silencer', tug: 1 }]
    }]
  ),
  'La Noscean Jelly': createBaitChain(
    [RAGWORM, { name: 'La Noscean Jelly', tug: 1, dh: 4 }]
  ),
  'Sea Nettle': createBaitChain(
    [RAGWORM, { name: 'Sea Nettle', tug: 1, dh: 4 }]
  ),
  'Floating Saucer': createBaitChain(
    [KRILL, { name: 'Floating Saucer', tug: 1, dh: 4 }]
  ),
  'Shaggy Seadragon': createBaitChain(
    [RAGWORM, { name: 'Shaggy Seadragon', tug: 1, dh: 4 }]
  ),
  'Aetheric Seadragon': createBaitChain(
    [PLUMP_WORM, { name: 'Hi-aetherlouse', tug: 1 }, { name: 'Aetheric Seadragon', tug: 1, dh: 2 }]
  ),
  'Coral Seadragon': createBaitChain(
    [RAGWORM, { name: 'Coral Seadragon', tug: 1, dh: 4 }]
  ),
  'Tarnished Shark': createBaitChain(
    [PLUMP_WORM, { name: 'Tarnished Shark', tug: 3, dh: 2 }]
  ),
  'Ghost Shark': createBaitChain(
    [PLUMP_WORM, { name: 'Ghost Shark', tug: 2, dh: 4 }]
  ),
  'Quicksilver Blade': createBaitChain(
    [PLUMP_WORM, { name: 'Quicksilver Blade', tug: 2, dh: 2 }]
  ),
  'Funnel Shark': createBaitChain(
    [PLUMP_WORM, { name: 'Funnel Shark', tug: 3, dh: 4 }]
  ),
  'Chrome Hammerhead': createBaitChain(
    [PLUMP_WORM, { name: 'Chrome Hammerhead', tug: 3, dh: 4 }]
  ),
  Sweeper: createBaitChain(
    [PLUMP_WORM, { name: 'Sweeper', tug: 2, dh: 2 }]
  ),
  Executioner: createBaitChain(
    [PLUMP_WORM, { name: 'Executioner', tug: 3, dh: 4 }]
  ),
  'Cyan Octopus': createBaitChain(
    [KRILL, { name: 'Cyan Octopus', tug: 2, dh: 4 }]
  ),
  'Merman’s Mane': createBaitChain(
    [KRILL, { name: 'Merman’s Mane', tug: 2, dh: 4 }]
  ),
  Mopbeard: createBaitChain(
    [KRILL, { name: 'Mopbeard', tug: 2, dh: 4 }]
  )
}
