import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import StrategyApplication from './strategy-application'
import { fetchArticlesIfNeeded, setSelectedArticle } from './strategy-app-actions'

const mapStateToProps = (state) => {
  const {strategy} = state
  return {...strategy}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentWillMount: () => dispatch(fetchArticlesIfNeeded()),
    onArticleSelected: (articleId) => dispatch(setSelectedArticle(articleId)),
    initializeSelectedArticle: (articleId) => dispatch(setSelectedArticle(articleId)),
  }
}

const StrategyAppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(StrategyApplication))

export default StrategyAppContainer