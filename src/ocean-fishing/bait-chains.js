import React from 'react'
import cn from 'classnames'
import FishIcon from './FishIcon.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import styles from './OceanFishing.scss'

/* eslint-disable react/jsx-key */
const tugs = [
  <span className={cn(styles.tug, styles.light)}>!</span>,
  <span className={cn(styles.tug, styles.medium)}>!!</span>,
  <span className={cn(styles.tug, styles.heavy)}>!!!</span>
]
/* eslint-enable react/jsx-key */

function createBaitChain (bait, intuitionBait) {
  const elems = []
  bait.forEach(({ name, tug, dh }, index) => {
    elems.push(
      <div key={index} className={styles.baitGroup}>
        <FishIcon name={name} />
        {tug && tugs[tug - 1]}
        {dh && <span className={styles.dh}>DH: {dh}</span>}
      </div>
    )
    if (index < bait.length - 1) {
      elems.push(<FontAwesomeIcon icon={faAngleRight} />)
    }
  })

  if (intuitionBait) {
    elems.push(
      <ul key='int'>
        {intuitionBait.map((bait, index) =>
          <li key={index}>
            {bait.count} {createBaitChain(bait.bait)}
          </li>
        )}
      </ul>
    )
  }

  return elems
}

const RAGWORM = { name: 'ragworm' }
const KRILL = { name: 'krill' }
const PLUMP_WORM = { name: 'plumpWorm' }

const baitChains = {
  S: [
    createBaitChain(
      [KRILL, { name: 'spectralDiscus', tug: 3 }]
    ),
    createBaitChain(
      [PLUMP_WORM, { name: 'littleLeviathan', tug: 3 }],
      [{
        count: 1,
        bait: [KRILL, { name: 'ghoulBarracuda', tug: 2 }, { name: 'gladius', tug: 2 }]
      }]
    )
  ],
  G: [
    createBaitChain(
      [PLUMP_WORM, { name: 'spectralMegalodon', tug: 3 }]
    ),
    createBaitChain(
      [KRILL, { name: 'drunkfish', tug: 3 }],
      [{
        count: 3,
        bait: [KRILL, { name: 'galadionChovy', tug: 1 }]
      }]
    )
  ],
  N: [
    createBaitChain(
      [RAGWORM, { name: 'spectralSeaBo', tug: 3 }]
    ),
    createBaitChain(
      [RAGWORM, { name: 'shootingStar', tug: 3 }],
      [{
        count: 1,
        bait: [RAGWORM, { name: 'tossedDagger', tug: 1 }, { name: 'elderDinichthys', tug: 2 }]
      }]
    )
  ],
  R: [
    createBaitChain(
      [PLUMP_WORM, { name: 'spectralBass', tug: 3 }]
    ),
    createBaitChain(
      [KRILL, { name: 'sabaton', tug: 3 }],
      [{
        count: 2,
        bait: [PLUMP_WORM, { name: 'crimsonMonkfish', tug: 2 }]
      }]
    )
  ],
  coralManta: createBaitChain(
    [{ name: 'shrimpCageFeeder' }, { name: 'coralManta', tug: 3 }],
    [{
      count: 2,
      bait: [PLUMP_WORM, { name: 'hiAetherlouse', tug: 1 }, { name: 'greatGrandmarlin', tug: 2 }]
    }]
  ),
  sothis: createBaitChain(
    [{ name: 'glowworm' }, { name: 'sothis', tug: 3 }],
    [{
      count: 2,
      bait: [RAGWORM, { name: 'heavenskey', tug: 1 }]
    }, {
      count: 1,
      bait: [KRILL, { name: 'navigatorsPrint', tug: 1 }]
    }]
  ),
  elasmosaurus: createBaitChain(
    [{ name: 'heavySteelJig' }, { name: 'elasmosaurus', tug: 3 }],
    [{
      count: 3,
      bait: [PLUMP_WORM, { name: 'gugrusaurus', tug: 3 }]
    }]
  ),
  stonescale: createBaitChain(
    [{ name: 'ratTail' }, { name: 'stonescale', tug: 3 }],
    [{
      count: 2,
      bait: [PLUMP_WORM, { name: 'deepSeaEel', tug: 2 }]
    }, {
      count: 1,
      bait: [RAGWORM, { name: 'silencer', tug: 1 }]
    }]
  ),
  laNosceanJelly: createBaitChain(
    [RAGWORM, { name: 'laNosceanJelly', tug: 1, dh: 4 }]
  ),
  seaNettle: createBaitChain(
    [RAGWORM, { name: 'seaNettle', tug: 1, dh: 4 }]
  ),
  floatingSaucer: createBaitChain(
    [KRILL, { name: 'floatingSaucer', tug: 1, dh: 4 }]
  ),
  shaggySeadragon: createBaitChain(
    [RAGWORM, { name: 'shaggySeadragon', tug: 1, dh: 4 }]
  ),
  aethericSeadragon: createBaitChain(
    [PLUMP_WORM, { name: 'hiAetherlouse', tug: 1 }, { name: 'aethericSeadragon', tug: 1, dh: 2 }]
  ),
  coralSeadragon: createBaitChain(
    [RAGWORM, { name: 'coralSeadragon', tug: 1, dh: 4 }]
  ),
  tarnishedShark: createBaitChain(
    [PLUMP_WORM, { name: 'tarnishedShark', tug: 3, dh: 2 }]
  ),
  ghostShark: createBaitChain(
    [PLUMP_WORM, { name: 'ghostShark', tug: 2, dh: 4 }]
  ),
  quicksilverBlade: createBaitChain(
    [PLUMP_WORM, { name: 'quicksilverBlade', tug: 2, dh: 2 }]
  ),
  funnelShark: createBaitChain(
    [PLUMP_WORM, { name: 'funnelShark', tug: 3, dh: 4 }]
  ),
  chromeHammerhead: createBaitChain(
    [PLUMP_WORM, { name: 'chromeHammerhead', tug: 3, dh: 4 }]
  ),
  sweeper: createBaitChain(
    [PLUMP_WORM, { name: 'sweeper', tug: 2, dh: 2 }]
  ),
  executioner: createBaitChain(
    [PLUMP_WORM, { name: 'executioner', tug: 3, dh: 4 }]
  ),
  cyanOctopus: createBaitChain(
    [KRILL, { name: 'cyanOctopus', tug: 2, dh: 4 }]
  ),
  mermansMane: createBaitChain(
    [KRILL, { name: 'mermansMane', tug: 2, dh: 4 }]
  ),
  mopbeard: createBaitChain(
    [KRILL, { name: 'mopbeard', tug: 2, dh: 4 }]
  )
}

export default baitChains
