import React, { Component } from 'react'
import cn from 'classnames'
import baitChains from './bait-chains'
import { DEST_MAP, TIME_MAP } from './maps.jsx'

import zf from '../foundation.scss'
import styles from './OceanFishing.scss'

export class Jellyfish extends Component {
  render () {
    return (
      <div className={zf.cell}>
        <h4>Jellyfish Route</h4>
        <div className={cn(styles.routeTable, zf.gridX, zf.gridPaddingX)}>
          <div className={cn(zf.cell, zf.large4)}>
            <h5>1 - {DEST_MAP.G} {TIME_MAP.D}</h5>
            <ul className={styles.catches}>
              <li><p>No jellyfish here.</p></li>
            </ul>
          </div>
          <div className={cn(zf.cell, zf.large4)}>
            <h5>2 - {DEST_MAP.S} {TIME_MAP.S}</h5>
            <ul className={styles.catches}>
              <li>
                DH &lt;5s<br />
                {baitChains.laNosceanJelly}
              </li>
              <li>
                IC–DH<br />
                {baitChains.seaNettle}
              </li>
              <li className={styles.divider}>
                <h6>NON-SPECTRAL</h6>
                <p>Blind DH all <span className={cn(styles.tug, styles.light)}>!</span> before 5s, and recast after 5s. IC is not necessary.</p>
                <h6>SPECTRAL</h6>
                <p>While spectral is not recommended, it won’t kill your run.</p>
              </li>
            </ul>
          </div>
          <div className={cn(zf.cell, zf.large4)}>
            <h5>3 - {DEST_MAP.R} {TIME_MAP.N}</h5>
            <ul className={styles.catches}>
              <li>
                IC–DH<br />
                {baitChains.floatingSaucer}
              </li>
              <li className={styles.divider}>
                <h6>SPECTRAL</h6>
                <p>Nothing to say about this.</p>
              </li>
            </ul>
          </div>
        </div>

        <p>Sample jellyfish macro</p>
        <code className={zf.codeBlock}>
          {
            '/micon Cast\n' +
            '/ac Cast\n' +
            '<wait.5>\n' +
            '/echo 5 - Recast! <se.4>'
          }
        </code>
      </div>
    )
  }
}

export class Seadragons extends Component {
  render () {
    return (
      <div className={zf.cell}>
        <h4>Seadragons Route</h4>
        <div className={cn(styles.routeTable, zf.gridX, zf.gridPaddingX)}>
          <div className={cn(zf.cell, zf.large4)}>
            <h5>1 - {DEST_MAP.S} {TIME_MAP.N}</h5>
            <ul className={styles.catches}>
              <li>
                IC–DH at 10-18s<br />
                {baitChains.shaggySeadragon}
              </li>
              <li>
                No buffs<br />
                {baitChains.aethericSeadragon}
              </li>
              <li className={styles.divider}>
                <h6>NON-SPECTRAL</h6>
                <p>There’s possibly a blind DH at 14-17s.</p>
                <h6>SPECTRAL</h6>
                <p>Spectral is bad. Sit on IC if you have it going into spectral, instead of catching Aetheric Seadragons.</p>
              </li>
            </ul>
          </div>
          <div className={cn(zf.cell, zf.large4)}>
            <h5>2 - {DEST_MAP.G} {TIME_MAP.D}</h5>
            <ul className={styles.catches}>
              <li><p>No seadragons here.</p></li>
            </ul>
          </div>
          <div className={cn(zf.cell, zf.large4)}>
            <h5>3 - {DEST_MAP.N} {TIME_MAP.S}</h5>
            <ul className={styles.catches}>
              <li>
                IC–DH<br />
                {baitChains.coralSeadragon}
              </li>
              <li className={styles.divider}>
                <h6>SPECTRAL</h6>
                <p>Nothing to say about this.</p>
              </li>
            </ul>
          </div>
        </div>

        <p>Sample seadragons macro</p>
        <code className={zf.codeBlock}>
          {
            '/micon Cast\n' +
            '/ac Cast\n' +
            '<wait.9>\n' +
            '/echo 9 - Shaggy? <se.1>\n' +
            '<wait.3>\n' +
            '/echo 12 - Shaggy? (Sunfly Gone!) <se.2>\n' +
            '<wait.2>\n' +
            '/echo 14 - Shaggy! (Marine Bomb Gone!) <se.3>\n' +
            '<wait.3>\n' +
            '/echo 17 - Shaggy? (Butterfly Appears!) <se.2>\n' +
            '<wait.5>\n' +
            '/echo 22 - Recast! <se.4>'
          }
        </code>
      </div>
    )
  }
}

export class Sharks extends Component {
  render () {
    return (
      <div className={zf.cell}>
        <h4>Sharks Route</h4>
        <div className={cn(styles.routeTable, zf.gridX, zf.gridPaddingX)}>
          <div className={cn(zf.cell, zf.large4)}>
            <h5>1 - {DEST_MAP.G} {TIME_MAP.S}</h5>
            <ul className={styles.catches}>
              <li>
                IC; DH–IC–DH post-spectral<br />
                {baitChains.tarnishedShark}
              </li>
              <li>
                IC–DH<br />
                {baitChains.ghostShark}
              </li>
              <li>
                No buffs<br />
                {baitChains.quicksilverBlade}
              </li>
              <li>
                DH–IC–DH<br />
                {baitChains.funnelShark}
              </li>
              <li className={styles.divider}>
                <h6>PRE-SPECTRAL</h6>
                <p>Save GP when possible; IC if capped.</p>
                <h6>SPECTRAL</h6>
                <p>Hook any <span className={cn(styles.tug, styles.medium)}>!!</span> and <span className={cn(styles.tug, styles.heavy)}>!!!</span>. IC–DH if you catch a Ghost Shark; <span className={cn(styles.tug, styles.heavy)}>!!!</span> is a blind DH–IC–DH.</p>
                <h6>POST-SPECTRAL</h6>
                <p>Spend all remaining GP with blind DH–IC–DH Tarnished Sharks.</p>
              </li>
            </ul>
          </div>
          <div className={cn(zf.cell, zf.large4)}>
            <h5>2 - {DEST_MAP.S} {TIME_MAP.N}</h5>
            <ul className={styles.catches}>
              <li><p>No sharks here.</p><p>Try for Coral Manta?<br />(but save GP)</p></li>
            </ul>
          </div>
          <div className={cn(zf.cell, zf.large4)}>
            <h5>3 - {DEST_MAP.R} {TIME_MAP.D}</h5>
            <ul className={styles.catches}>
              <li>
                IC–DH; DH–IC–DH post-spectral<br />
                {baitChains.chromeHammerhead}
              </li>
              <li>
                No buffs<br />
                {baitChains.sweeper}
              </li>
              <li>
                DH–IC–DH<br />
                {baitChains.executioner}
              </li>
              <li className={styles.divider}>
                <h6>PRE-SPECTRAL</h6>
                <p>Can’t blind DH Chrome Hammerheads.</p>
                <h6>SPECTRAL</h6>
                <p>Hook <span className={cn(styles.tug, styles.medium)}>!!</span> and <span className={cn(styles.tug, styles.heavy)}>!!!</span>. If you catch a Sweeper, can use IC if high on GP. <span className={cn(styles.tug, styles.heavy)}>!!!</span> is a blind DH.</p>
                <h6>POST-SPECTRAL</h6>
                <p>Can blind DH Chrome Hammerheads.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export class Octopodes extends Component {
  render () {
    return (
      <div className={zf.cell}>
        <h4>Octopodes Route</h4>
        <div className={cn(styles.routeTable, zf.gridX, zf.gridPaddingX)}>
          <div className={cn(zf.cell, zf.large4)}>
            <h5>1 - {DEST_MAP.S} {TIME_MAP.D}</h5>
            <ul className={styles.catches}>
              <li><p>No octopodes here.</p></li>
            </ul>
          </div>
          <div className={cn(zf.cell, zf.large4)}>
            <h5>2 - {DEST_MAP.G} {TIME_MAP.S}</h5>
            <ul className={styles.catches}>
              <li>
                IC–DH at 16-28s<br />
                {baitChains.cyanOctopus}
              </li>
              <li>
                DH–IC–DH at &lt;3s<br />
                {baitChains.mermansMane}
              </li>
              <li className={styles.divider}>
                <h6>NON-SPECTRAL</h6>
                <p>Can blind DH the Cyan Octopodes at 25s, or at 19s with a SS’d Jasperhead.</p>
                <h6>SPECTRAL</h6>
                <p>Only the instant <span className={cn(styles.tug, styles.medium)}>!!</span> is Merman’s Mane; any later is not.</p>
              </li>
            </ul>
          </div>
          <div className={cn(zf.cell, zf.large4)}>
            <h5>3 - {DEST_MAP.N} {TIME_MAP.N}</h5>
            <ul className={styles.catches}>
              <li>
                DH–IC–DH at 4s<br />
                {baitChains.mopbeard}
              </li>
              <li className={styles.divider}>
                <h6>SPECTRAL</h6>
                <p>The earlier <span className={cn(styles.tug, styles.medium)}>!!</span> is Coccosteus.</p>
              </li>
            </ul>
          </div>
        </div>

        <p>Sample octopodes macro</p>
        <code className={zf.codeBlock}>
          {
            '/micon Cast\n' +
            '/ac Cast\n' +
            '<wait.3>\n' +
            '/echo 3 - Not Mane! <se.1>\n' +
            '<wait.1>\n' +
            '/echo 4 - Mopbeard! <se.2>\n' +
            '<wait.12>\n' +
            '/echo 16 - Cyan? <se.3>\n' +
            '<wait.3>\n' +
            '/echo 19 - Not Eel! <se.3>\n' +
            '<wait.6>\n' +
            '/echo 25 - Not Jasperhead! <se.3>\n' +
            '<wait.4>\n' +
            '/echo 29 - Recast! <se.4>'
          }
        </code>
      </div>
    )
  }
}
