import { combineReducers } from 'redux'

import { homeReducer, HomeConstants } from './routes/Home'

export default combineReducers({
  [HomeConstants.REDUCER_NAME]: homeReducer,
})
