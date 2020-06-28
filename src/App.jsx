import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import MiniCactpot from './mini-cactpot/MiniCactpot.jsx'
import OceanFishing from './ocean-fishing/OceanFishing.jsx'
import zf from './foundation.scss'
import './App.scss'

function kebabCase (str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-')
}

const routes = [{
  title: 'Mini Cactpot',
  component: MiniCactpot
}, {
  title: 'Ocean Fishing',
  component: OceanFishing
}]

class App extends Component {
  render () {
    return (
      <Router>
        <header>
          <div className={zf.gridContainer}>
            <nav className={zf.topBar}>
              <div className={zf.topBarLeft}>
                <Link to='/'>FFXIV</Link>
              </div>
            </nav>
          </div>
        </header>
        <main className={zf.gridContainer}>
          <Switch>
            <Route exact path='/' component={Home} />
            {routes.map(route =>
              <Route
                key={route.title}
                path={'/' + kebabCase(route.title)}
                component={route.component}
              />)}
          </Switch>
        </main>
      </Router>
    )
  }
}

class Home extends Component {
  render () {
    return (
      <>
        <h1>Home</h1>
        <ul>
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

ReactDOM.render(<App />, document.getElementById('app'))
