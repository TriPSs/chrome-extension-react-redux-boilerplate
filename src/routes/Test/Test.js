import React from 'react'
import { connect } from 'react-redux'

import * as TestConstants from './TestConstants'

class Test extends React.Component {

  render() {
    const { count, dispatch } = this.props

    return (
      <div className='App' style={{ width: 500 }}>
        test {count}

        <button onClick={() => dispatch({ type: TestConstants.ACTION_ADD_COUNT })}>Add Count</button>
      </div>
    )
  }

}


const mapStateToProps = (state) => ({
  count: state.testReducer.count,
})

export default connect(mapStateToProps)(Test)
