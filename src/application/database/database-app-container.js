import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import DatabaseApplication from './database-application'
import { fetchItemsIfNeeded, setSelectedItem } from './database-app-actions'

const mapStateToProps = (state) => {
  const {database} = state
  return {...database}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentWillMount: () => dispatch(fetchItemsIfNeeded()),
    onComponentUpdate: () => dispatch(fetchItemsIfNeeded()),
    onItemSelected: (itemId) => dispatch(setSelectedItem(itemId)),
  }
}

const DatabaseAppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(DatabaseApplication))

export default DatabaseAppContainer