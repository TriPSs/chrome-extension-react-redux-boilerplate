import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Test from './Test'

export default () => (
  <Switch>
    <Route {...Test} />

    <Redirect to={'/'} />
  </Switch>
)
