import React from 'react'
import {Route, Switch} from 'react-router-dom'

import TaskMasterView from './TaskMasterView'
import VoterView from './VoterView'
import PageNotFound from './PageNotFound'

export default function App() {
  return (
    <div className="app">
      <h1>Ephtimate</h1>
      <Switch>
        <Route exact path='/taskmaster' component={TaskMasterView}/>
        <Route exact path='/' component={VoterView}/>
        <Route path='*' component={PageNotFound}/>
      </Switch>
    </div>
  )
}
