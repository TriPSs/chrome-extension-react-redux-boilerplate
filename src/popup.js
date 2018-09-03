import React from 'react'
import { render } from 'react-dom'
import { Store } from 'react-chrome-redux'

import config from './config'
import App from './containers/App'

const proxyStore = new Store({
  portName: config.store.portName,
})

proxyStore.ready().then(() => {
  render(
    <App store={proxyStore} />,
    document.getElementById('container'),
  )
})
