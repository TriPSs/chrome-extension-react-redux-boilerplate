import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { alias, wrapStore } from 'react-chrome-redux'

import config from './config'

const logger = createLogger({
  level    : 'info',
  collapsed: true,
})

const middleware = [thunk, logger]

chrome.storage.local.get([config.store.storageKey], (result) => {
  const state = result.state !== undefined ? result.state : {}

  const store = createStore(
    reducers,
    state,
    compose(
      applyMiddleware(...middleware),
    ),
  )

  store.subscribe(() => {
    chrome.storage.local.set({ [config.store.storageKey]: store.getState() })
  })

  wrapStore(store, {
    portName: config.store.portName,
  })
})
