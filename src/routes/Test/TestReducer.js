import * as TestConstants from './TestConstants'

export default (state = TestConstants.INTIAL_STATE, action) => {
  switch (action.type) {

    case TestConstants.ACTION_ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      }

    default:
      return state
  }
}
