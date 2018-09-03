import React from 'react'
import { render } from 'react-dom'
import { Store } from 'react-chrome-redux'

import config from './config'
import App from './containers/App'

const proxyStore = new Store({ portName: config.store.portName })

proxyStore.ready().then(() => {
  const anchor = document.createElement('div')
  anchor.id = config.anchorId

  document.body.insertBefore(anchor, document.body.childNodes[0])

  render(
    <App store={proxyStore} />,
    document.getElementById(config.anchorId),
  )
})

