const defaultStrategyAppState = {
  // application state items
  // lastUpdated: -1,  I don't need this yet, maybe ever
}

// just initialize with an empty object so that the first times we go through here everything is empty
// and it is apparent that no initialization has happened.
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

// set the default article data here once we actually request the items.  If we set it up before the request then
// it will appear that loading has happened or started when it hasn't because variables will be defined.
const articlesReducer = (strategyAppState, action) => {
  if(Object.keys(strategyAppState).length === 0 && strategyAppState.constructor === Object)
    strategyAppState = defaultStrategyAppState

  switch(action.type) {
    
    case 'STRATEGY_RECEIVE_ARTICLES':
      return Object.assign({}, strategyAppState, {
        // the item data and associated other data
        items: action.articleData.items,
        // application state items
        lastUpdated: action.receivedAt,
      })

    default:
      console.log('***** ERROR:  Undefined Action.  This wasn\'t supposed to get hit, take a look.' + action.type)
      return strategyAppState
  }
}

export default strategyAppReducer