const defaultStrategyAppState = {
  // application state items
  // lastUpdated: -1,  I don't need this yet, maybe ever
  selectedItem: '',
  // isFetching: false,  I don't need this yet, but I will when I put articles in the database
  // isInitialized: false,  Same as isInitialized, don't need this yet
}

// why did I set the default state not at the reducer entry in my other reducers?  freakin comment the stuff you learn!
const strategyAppReducer = (state = defaultStrategyAppState, action) => {
  switch(action.type) {
    case 'SET_SELECTED_ITEM':
      return Object.assign({}, state, {selectedItem: action.selectedItem})

    default:
      return state
  }
}


export default strategyAppReducer