import * as HomeConstants from './HomeConstants'

export default (state = HomeConstants.INITIAL_STATE, action) => {
  switch (action.type) {

    case HomeConstants.ACTION_ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      }

    default:
      return state
  }
}
