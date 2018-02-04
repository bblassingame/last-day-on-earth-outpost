import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import StrategyApplication from './strategy-application'
import { setSelectedItem } from './strategy-app-actions'

const mapStateToProps = (state) => {
  const {strategy} = state
  return {...strategy}
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onComponentWillMount: () => dispatch(fetchItemsIfNeeded()),
    // onComponentUpdate: () => dispatch(fetchItemsIfNeeded()),
    onItemSelected: (itemId) => dispatch(setSelectedItem(itemId)),
    initializeSelectedItem: (itemId) => dispatch(setSelectedItem(itemId)),
  }
}

const StrategyAppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(StrategyApplication))

export default StrategyAppContainer