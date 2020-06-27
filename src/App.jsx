import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import cn from 'classnames'

import MiniCactpot from './mini-cactpot/MiniCactpot.jsx'
import zf from './foundation.scss'
import './App.scss'

function kebabCase (str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-')
}

const pages = [{
  title: 'Mini Cactpot',
  component: MiniCactpot
}]

class App extends Component {
  render () {
    return (
      <Router>
        <header className={zf.topBar}>
          <div className={cn(zf.gridContainer, zf.cell)}>
            <div className={zf.topBarLeft}>
              <Link to='/'>FFXIV</Link>
            </div>
          </div>
        </header>
        <main className={zf.gridContainer}>
          <Switch>
            <Route exact path='/' component={Home} />
            {pages.map(page =>
              <Route
                key={page.title}
                path={'/' + kebabCase(page.title)}
                component={page.component}
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
          {pages.map(page =>
            <li key={page.title}>
              <Link to={'/' + kebabCase(page.title)}>{page.title}</Link>
            </li>
          )}
        </ul>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
