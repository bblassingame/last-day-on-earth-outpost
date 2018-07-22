import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import AppContent from './app-content'
import { fetchFeaturesIfNeeded } from './features-actions'
import { fetchArticlesIfNeeded } from './articles-actions'
import { fetchItemsIfNeeded } from './items-actions'

const mapStateToProps = (state) => {
  let {features} = state
  let isLoadingValue = false
  if(features.isFeatureDataFetching === true || features.hasFeatureDataFetched === false)
    isLoadingValue = true

  features = Object.assign({}, features, {isLoading: isLoadingValue})

  return {...features}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentWillMount: () => dispatch(fetchFeaturesIfNeeded()),
    onComponentUpdate: () => dispatch(fetchFeaturesIfNeeded()),
    onComponentDidMount: () => {
      dispatch(fetchArticlesIfNeeded())
      dispatch(fetchItemsIfNeeded())
    },
  }
}

const AppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContent))

export default AppContainer