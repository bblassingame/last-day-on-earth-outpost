const defaultStrategyAppState = {
  // application state items
  // lastUpdated: -1,  I don't need this yet, maybe ever
  selectedArticle: '',
  isFetching: false,
  isInitialized: false,
}

// why did I set the default state not at the reducer entry in my other reducers?  freakin comment the stuff you learn!
const strategyAppReducer = (state = defaultStrategyAppState, action) => {
  switch(action.type) {
    case 'STRATEGY_SET_SELECTED_ARTICLE':
      return Object.assign({}, state, {selectedArticle: action.selectedArticle})

    case 'STRATEGY_REQUEST_ARTICLES':
    case 'STRATEGY_RECEIVE_ARTICLES':
      return articlesReducer(state, action)

    default:
      return state
  }
}

const articlesReducer = (strategyAppState, action) => {
  if(Object.keys(strategyAppState).length === 0 && strategyAppState.constructor === Object)
    strategyAppState = defaultStrategyAppState

  switch(action.type) {
    case 'STRATEGY_REQUEST_ARTICLES':
      return Object.assign({}, strategyAppState, {isFetching: true})
    
    case 'STRATEGY_RECEIVE_ARTICLES':
      return Object.assign({}, strategyAppState, {
        // the item data and associated other data
        items: action.articleData.items,
        // application state items
        lastUpdated: action.receivedAt,
        isFetching: false,
        isInitialized: true,
      })

    default:
      console.log('***** ERROR:  Undefined Action.  This wasn\'t supposed to get hit, take a look.' + action.type)
      return strategyAppState
  }
}

export default strategyAppReducer