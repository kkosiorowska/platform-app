import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import Dashboard from './containers/Dashboard/Dashboard'
import Calendar from './containers/Calendar/Calendar'
import Raports from './containers/Dashboard/Dashboard'

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/calendar" component={Calendar} />
        <Route path="/raports" component={Raports} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    )
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    )
  }
}

export default App
