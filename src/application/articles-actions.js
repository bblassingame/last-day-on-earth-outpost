export const requestArticles = () => {
  return {
    type: 'REQUEST_ARTICLES',
  }
}

export const receiveArticles = (json) => {
  return {
    type: 'RECEIVE_ARTICLES',
    articleData: json,
    receivedAt: Date.now()
  }
}

export const fetchArticlesIfNeeded = () => {
  return (dispatch, getState) => {
    if(shouldFetchArticles(getState())) {
      return dispatch(fetchArticles())
    }
    else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

function shouldFetchArticles(state) {
  if(typeof(state.articles) === 'undefined' || (state.articles.isArticleDataFetching === false && state.articles.hasArticleDataFetched === false))
    return true
  else
    return false
}

function fetchArticles() {
  return dispatch => {
    dispatch(requestArticles())
    return fetch('/api/v1/strategy')
      .then(response => response.json())
      .then(json => dispatch(receiveArticles(json)))
  }
}

