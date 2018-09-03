import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './Home'

export default () => (
  <Switch>
    <Route {...Home} />

    <Redirect to={'/'} />
  </Switch>
)
