import React, { Component, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'

import routes from './routes'
import Home from './Home.jsx'
import _404 from './404.jsx'
import zf from './foundation.scss'
import './App.scss'

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
                <FontAwesomeIcon icon={faSun} />
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
                <FontAwesomeIcon icon={faMoon} />
              </div>
            </nav>
          </div>
        </header>
        <main className={zf.gridContainer}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path='/' component={Home} />
              {routes.map(route =>
                <Route key={route.title} path={route.path} component={route.component} />
              )}
              <Route component={_404} />
            </Switch>
          </Suspense>
        </main>
      </Router>
    )
  }
}

class Loading extends Component {
  render () {
    return <p>Loading...</p>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
