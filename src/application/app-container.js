import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AppContent from './app-content'
import { fetchFeaturesIfNeeded } from './features-actions'
import { fetchItemsIfNeeded } from '../database/database-app-actions'
import { fetchArticlesIfNeeded } from './articles-actions'

const mapStateToProps = (state) => {
  let {application} = state
  if(null == application['appInitialized'])
    application = {appInitialized: false}

  return {...application}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentWillMount: () => dispatch(fetchFeaturesIfNeeded()),
    onComponentUpdate: () => dispatch(fetchFeaturesIfNeeded()),
    onComponentDidMount: () => {
      dispatch(fetchItemsIfNeeded())
      dispatch(fetchArticlesIfNeeded())
    },
  }
}

const AppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContent))

export default AppContainer