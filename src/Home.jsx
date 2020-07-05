import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import lulu from './lulu.svg'
import zf from './foundation.scss'
import styles from './Home.scss'

function kebabCase (str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-')
}

const routes = [{
  title: 'High or Low',
  component: React.lazy(() => import('./high-or-low/HighOrLow.jsx'))
}, {
  title: 'Mini Cactpot',
  component: React.lazy(() => import('./mini-cactpot/MiniCactpot.jsx'))
}, {
  title: 'Ocean Fishing',
  component: React.lazy(() => import('./ocean-fishing/OceanFishing.jsx'))
}]

class Home extends Component {
  componentDidMount () {
    document.title = 'Lulu’s FFXIV Tools'
  }

  render () {
    return (
      <>
        <div className={cn(zf.gridX, zf.gridPaddingX)}>
          <div className={cn(zf.cell, zf.mediumShrink)}>
            <div className={styles.lulu}>
              <img src={lulu} />
            </div>
          </div>
          <div className={cn(styles.info, zf.cell, zf.auto)}>
            <div>
              <h1>Lulu Pillow</h1>
              <p>A bunch of FFXIV-related stuff I try making.</p>
              <p>Message Lulu Pillow@Adamantoise or Pillowfication#0538 with questions or comments.</p>
            </div>
          </div>
        </div>
        <br />
        <p>put these links somewhere</p>
        <ul className={styles.pages}>
          {routes.map(route =>
            <li key={route.title}>
              <Link to={'/' + kebabCase(route.title)}>{route.title}</Link>
            </li>
          )}
        </ul>
      </>
    )
  }
}

export default Home
