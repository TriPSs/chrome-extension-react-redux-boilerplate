import React from 'react'
import { connect } from 'react-redux'

import * as HomeConstants from './HomeConstants'

class HomeComponent extends React.Component {

  render() {
    const { count, dispatch } = this.props

    return (
      <div className='App' style={{ width: 500 }}>
        test {count}

        <button onClick={() => dispatch({ type: HomeConstants.ACTION_ADD_COUNT })}>Add Count</button>
      </div>
    )
  }

}


const mapStateToProps = (state) => ({
  count: state.home.count,
})

export default connect(mapStateToProps)(HomeComponent)
