import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import styles from './App.scss'

class TopBar extends Component {
  render () {
    return (
      <div className={styles.topBar}>
        <div className={styles.container}>
          foofoo
        </div>
      </div>
    )
  }
}

class Home extends Component {
  render () {
    return <div>Hello world</div>
  }
}

class App extends Component {
  render () {
    return (
      <>
        <TopBar />
        <div className={styles.container}>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </Router>
        </div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
