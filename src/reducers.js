import { combineReducers } from 'redux'

import { testReducer, TestConstants } from './routes/Test'

export default combineReducers({
  [TestConstants.REDUCER_NAME]: testReducer,
})
