const defaultArticlesState = {
  // application state items
  lastUpdated: -1,  // I don't need this yet, maybe ever
  isArticleDataFetching: false,
  hasArticleDataFetched: false,  
}

// just initialize with an empty object so that the first times we go through here everything is empty
// and it is apparent that no initialization has happened.
const articlesReducer = (state = {}, action) => {
  if(Object.keys(state).length === 0 && state.constructor === Object)
    state = defaultArticlesState

  switch(action.type) {

    case 'REQUEST_ARTICLES':
      return Object.assign({}, state, {
        isArticleDataFetching: true
      })

    case 'RECEIVE_ARTICLES':
      return Object.assign({}, state, {
        // application state items
        isArticleDataFetching: false,
        hasArticleDataFetched: true,
        lastUpdated: action.receivedAt,
      })

    default:
      return state

  }
}

export default articlesReducer