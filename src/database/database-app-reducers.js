const defaultDbAppState = {
  // items related to searching
  searchText: '',
  searchActive: false,
  searchWords: {},
  // database application state items
  selectedItem: -1,
}

// just initialize with an empty object so that the first times we go through here everything is empty
// and it is apparent that no initialization has happened.
const databaseAppReducer = (state = {}, action) => {
  if(Object.keys(state).length === 0 && state.constructor === Object)
    state = defaultDbAppState
  
  switch(action.type) {
    
    case 'SET_SELECTED_ITEM':
      return Object.assign({}, state, {selectedItem: action.selectedItem})

    case 'SET_SEARCH_TEXT':
      return Object.assign({}, state, {
        searchText: action.searchText,
        searchActive: (action.searchText === '' ? false : true)
      })
    
    case 'CLEAR_SEARCH_TEXT':
      return Object.assign({}, state, {searchText: ''})

    default:
      return state
      
  }
}

export default databaseAppReducer