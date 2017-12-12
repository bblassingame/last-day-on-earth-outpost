import { quoteRegExp } from '../utility/regex-utils'

const databaseAppReducer = (state = {}, action) => {
  switch(action.type) {
    case 'REQUEST_ITEMS':
    case 'RECEIVE_ITEMS':
      return Object.assign({}, itemsReducer(state, action))
    
    case 'SET_SELECTED_ITEM':
      return Object.assign({}, state, {selectedItem: action.selectedItem})

    case 'SET_SEARCH_TEXT':
      return Object.assign({}, state, {searchText: action.searchText})
    
    case 'FILTER_ITEMS_LIST':
      return Object.assign({}, getFilteredItemsList(state, action))

    default:
      return state
  }
}

const defaultDbAppState = {
  items: {},
  itemCategories: {},
  craftProducts: {},
  craftIngredients: {},
  workbenchProducts: {},
  workbenchIngredients: {},
  searchText: '',
  searchActive: false,
  filteredItems: {},
  lastUpdated: -1,
  selectedItem: -1,
  isFetching: false,
  isInitialized: false,
}
const itemsReducer = (dbAppState = defaultDbAppState, action) => {
  if(Object.keys(dbAppState).length === 0 && dbAppState.constructor === Object)
    dbAppState = defaultDbAppState
  switch(action.type) {

    case 'REQUEST_ITEMS':
      return Object.assign({}, dbAppState, {isFetching: true})
    
    case 'RECEIVE_ITEMS':
      return Object.assign({}, dbAppState, {
        items: action.itemData.items,
        itemCategories: action.itemData.itemCategories,
        craftProducts: action.itemData.craftProducts,
        craftIngredients: action.itemData.craftIngredients,
        workbenchProducts: action.itemData.workbenchProducts,
        workbenchIngredients: action.itemData.workbenchIngredients,
        searchText: action.itemData.searchText,
        searchActive: action.itemData.searchActive,
        filteredItems: action.itemData.items,
        lastUpdated: action.receivedAt,
        isFetching: false,
        isInitialized: true,
      })

    default:
      console.log('***** ERROR:  Undefined Action.  This wasn\'t supposed to get hit, take a look.' + action.type)
      return dbAppState
  }
}

const getFilteredItemsList = (state) => {
  const searchText = state.searchText
  if(null == searchText || '' === searchText)
    return Object.assign({}, {...state}, {filteredItems: state.items, searchActive: false})
  
  let filteredItems = {}
  const itemKeys = Object.keys(state.items)
  itemKeys.map(key => populateFilteredList(key, state, searchText, filteredItems))
  return Object.assign({}, {...state}, {filteredItems: filteredItems, searchActive: true})
}

const populateFilteredList = (key, state, filterText, filteredItems) => {
  const itemName = state.items[key].name
  const regExpFilter = new RegExp('^' + quoteRegExp(filterText), 'i')
  if(0 === itemName.search(regExpFilter)) {
    filteredItems[key] = state.items[key]
  }
}

export default databaseAppReducer