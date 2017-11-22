import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AppContent from './app-content'
import { fetchFeaturesIfNeeded } from './app-actions'

const mapStateToProps = (state) => {
  const {application = {appInitialized: false}} = state
  return {...application}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentWillMount: () => dispatch(fetchFeaturesIfNeeded()),
    onComponentUpdate: () => dispatch(fetchFeaturesIfNeeded()),
  }
}

const AppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContent))

export default AppContainer