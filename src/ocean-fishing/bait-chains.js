import React from 'react'
import cn from 'classnames'
import FishIcon from './FishIcon.jsx'

import styles from './OceanFishing.scss'

const tugStyles = [styles.light, styles.medium, styles.heavy]

function createBaitChain (bait, intuitionBait) {
  const elems = []
  bait.forEach(({ name, tug, dh }, index) => {
    elems.push(
      <div key={index} className={styles.baitGroup}>
        <FishIcon name={name} />
        {tug && <span className={cn(styles.tug, tugStyles[tug - 1])}>{'!'.repeat(tug)}</span>}
        {dh && <span className={styles.dh}>DH: {dh}</span>}
      </div>
    )
    if (index < bait.length - 1) {
      elems.push('▸')
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

const baitChains = {
  S: [
    createBaitChain(
      [{ name: 'krill' }, { name: 'spectralDiscus', tug: 3 }]
    ),
    createBaitChain(
      [{ name: 'plumpWorm' }, { name: 'littleLeviathan', tug: 3 }],
      [{
        count: 1,
        bait: [{ name: 'krill' }, { name: 'ghoulBarracuda', tug: 2 }, { name: 'gladius', tug: 2 }]
      }]
    )
  ],
  G: [
    createBaitChain(
      [{ name: 'plumpWorm' }, { name: 'spectralMegalodon', tug: 3 }]
    ),
    createBaitChain(
      [{ name: 'krill' }, { name: 'drunkfish', tug: 3 }],
      [{
        count: 3,
        bait: [{ name: 'krill' }, { name: 'galadionChovy', tug: 1 }]
      }]
    )
  ],
  N: [
    createBaitChain(
      [{ name: 'ragworm' }, { name: 'spectralSeaBo', tug: 3 }]
    ),
    createBaitChain(
      [{ name: 'ragworm' }, { name: 'shootingStar', tug: 3 }],
      [{
        count: 1,
        bait: [{ name: 'ragworm' }, { name: 'tossedDagger', tug: 1 }, { name: 'elderDinichthys', tug: 2 }]
      }]
    )
  ],
  R: [
    createBaitChain(
      [{ name: 'plumpWorm' }, { name: 'spectralBass', tug: 3 }]
    ),
    createBaitChain(
      [{ name: 'krill' }, { name: 'sabaton', tug: 3 }],
      [{
        count: 2,
        bait: [{ name: 'plumpWorm' }, { name: 'crimsonMonkfish', tug: 2 }]
      }]
    )
  ],
  coralManta: createBaitChain(
    [{ name: 'shrimpCageFeeder' }, { name: 'coralManta', tug: 3 }],
    [{
      count: 2,
      bait: [{ name: 'plumpWorm' }, { name: 'hiAetherlouse', tug: 1 }, { name: 'greatGrandmarlin', tug: 2 }]
    }]
  ),
  sothis: createBaitChain(
    [{ name: 'glowworm' }, { name: 'sothis', tug: 3 }],
    [{
      count: 2,
      bait: [{ name: 'ragworm' }, { name: 'heavenskey', tug: 1 }]
    }, {
      count: 1,
      bait: [{ name: 'krill' }, { name: 'navigatorsPrint', tug: 1 }]
    }]
  ),
  elasmosaurus: createBaitChain(
    [{ name: 'heavySteelJig' }, { name: 'elasmosaurus', tug: 3 }],
    [{
      count: 3,
      bait: [{ name: 'plumpWorm' }, { name: 'gugrusaurus', tug: 3 }]
    }]
  ),
  stonescale: createBaitChain(
    [{ name: 'ratTail' }, { name: 'stonescale', tug: 3 }],
    [{
      count: 2,
      bait: [{ name: 'plumpWorm' }, { name: 'deepSeaEel', tug: 2 }]
    }, {
      count: 1,
      bait: [{ name: 'ragworm' }, { name: 'silencer', tug: 1 }]
    }]
  ),
  tarnishedShark: createBaitChain(
    [{ name: 'plumpWorm' }, { name: 'tarnishedShark', tug: 3, dh: 2 }]
  ),
  ghostShark: createBaitChain(
    [{ name: 'plumpWorm' }, { name: 'ghostShark', tug: 2, dh: 4 }]
  ),
  quicksilverBlade: createBaitChain(
    [{ name: 'plumpWorm' }, { name: 'quicksilverBlade', tug: 2, dh: 2 }]
  ),
  funnelShark: createBaitChain(
    [{ name: 'plumpWorm' }, { name: 'funnelShark', tug: 3, dh: 4 }]
  ),
  chromeHammerhead: createBaitChain(
    [{ name: 'plumpWorm' }, { name: 'chromeHammerhead', tug: 3, dh: 4 }]
  ),
  sweeper: createBaitChain(
    [{ name: 'plumpWorm' }, { name: 'sweeper', tug: 2, dh: 2 }]
  ),
  executioner: createBaitChain(
    [{ name: 'plumpWorm' }, { name: 'executioner', tug: 3, dh: 4 }]
  ),
  cyanOctopus: createBaitChain(
    [{ name: 'krill' }, { name: 'cyanOctopus', tug: 2, dh: 4 }]
  ),
  mermansMane: createBaitChain(
    [{ name: 'krill' }, { name: 'mermansMane', tug: 2, dh: 4 }]
  ),
  mopbeard: createBaitChain(
    [{ name: 'krill' }, { name: 'mopbeard', tug: 2, dh: 4 }]
  )
}

export default baitChains
