import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import cn from 'classnames'

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
  constructor (props) {
    super(props)

    this.state = {
      theme: window.localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
    }

    this.handleOnSwitchTheme = this.handleOnSwitchTheme.bind(this)

    if (this.state.theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  handleOnSwitchTheme () {
    const newTheme = this.state.theme === 'light' ? 'dark' : 'light'
    this.setState({ theme: newTheme })
    window.localStorage.setItem('theme', newTheme)

    if (newTheme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  render () {
    const { theme } = this.state

    return (
      <Router>
        <header>
          <div className={zf.gridContainer}>
            <nav className={zf.topBar}>
              <div className={zf.topBarLeft}>
                <Link to='/'>FFXIV</Link>
              </div>
              <div className={zf.topBarRight}>
                Light
                <div className={cn(zf.switch, zf.tiny)}>
                  <input
                    type='checkbox'
                    id='theme-switch'
                    className={zf.switchInput}
                    checked={theme === 'dark'}
                    onChange={this.handleOnSwitchTheme}
                  />
                  <label className={zf.switchPaddle} htmlFor='theme-switch' />
                </div>
                Dark
              </div>
            </nav>
          </div>
        </header>
        <main className={cn(zf.gridContainer)}>
          <Switch>
            <Route exact path='/' component={Home} />
            {routes.map(route =>
              <Route
                key={route.title}
                path={'/' + kebabCase(route.title)}
                component={route.component}
              />)}
            <Route component={_404} />
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
        <p>
          A bunch of FFXIV-related stuff I try making.<br />
          Message Pillowfication#0538 with questions or comments.
        </p>
      </>
    )
  }
}

class _404 extends Component {
  render () {
    return (
      <>
        <h1>404</h1>
        <p>This page does not exist. Go back <Link to='/'>home</Link>?</p>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
