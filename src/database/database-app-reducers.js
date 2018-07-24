const defaultDbAppState = {
  // items related to searching
  searchText: '',
}

// just initialize with an empty object so that the first times we go through here everything is empty
// and it is apparent that no initialization has happened.
const databaseAppReducer = (state = {}, action) => {
  if(Object.keys(state).length === 0 && state.constructor === Object)
    state = defaultDbAppState
  
  switch(action.type) {
    
    case 'SET_SEARCH_TEXT':
      return Object.assign({}, state, {
        searchText: action.searchText,
      })
    
    case 'CLEAR_SEARCH_TEXT':
      return Object.assign({}, state, {searchText: ''})

    default:
      return state

  }
}

export default databaseAppReducer