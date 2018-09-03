import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import getRoutes from '../../routes'

export const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      {getRoutes()}
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App
