import { quoteRegExp } from '../utility/regex-utils'

const databaseAppReducer = (state = {}, action) => {
  switch(action.type) {
    case 'REQUEST_ITEMS':
    case 'RECEIVE_ITEMS':
      return Object.assign({}, itemsReducer(state, action))
    
    case 'SET_SELECTED_ITEM':
      return Object.assign({}, state, {selectedItem: action.selectedItem})

    case 'SET_SEARCH_TEXT':
      return Object.assign({}, state, {
        searchText: action.searchText,
        searchActive: (action.searchText === '' ? false : true)
      })
    
    case 'FILTER_ITEMS_LIST':
      return Object.assign({}, state, {sortedFilteredItems: getSortedFilteredItemsList(state)})

    default:
      return state
  }
}

const defaultDbAppState = {
  // the item data and associated other data
  items: {},
  itemCategories: {},
  craftProducts: {},
  craftIngredients: {},
  workbenchProducts: {},
  workbenchIngredients: {},
  // items related to searching
  searchText: '',
  searchActive: false,
  sortedFilteredItems: {},
  // application state items
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
        // the item data and associated other data
        items: action.itemData.items,
        itemCategories: action.itemData.itemCategories,
        craftProducts: action.itemData.craftProducts,
        craftIngredients: action.itemData.craftIngredients,
        workbenchProducts: action.itemData.workbenchProducts,
        workbenchIngredients: action.itemData.workbenchIngredients,
        // items related to searching
        searchText: action.itemData.searchText,
        searchActive: action.itemData.searchActive,
        sortedFilteredItems: getSortedFilteredItemsList(action.itemData),
        // application state items
        lastUpdated: action.receivedAt,
        isFetching: false,
        isInitialized: true,
      })

    default:
      console.log('***** ERROR:  Undefined Action.  This wasn\'t supposed to get hit, take a look.' + action.type)
      return dbAppState
  }
}

const getSortedFilteredItemsList = (state) => {
  // sort the items by name
  const sortedItems = getItemsSortedByName(state.items)

  // return just the sorted items if we don't have a search string and indicate search is inactive
  const searchText = state.searchText
  if(null == searchText || '' === searchText)
    return Object.assign({}, {...sortedItems})
  
  // if we have a search string, filter the items according to the search and indicate search is active
  let sortedFilteredItems = {}
  const itemKeys = Object.keys(sortedItems)
  itemKeys.map(key => populateFilteredList(key, sortedItems, searchText, sortedFilteredItems))
  return Object.assign({}, {...sortedFilteredItems})
}

const getItemsSortedByName = (items) => {
  // sort the list by alphabetical order
  let array = Object.keys(items)
  array.sort((a, b) => {
    if(items[a].name.toUpperCase() < items[b].name.toUpperCase())
      return -1
    else if(items[a].name.toUpperCase() > items[b].name.toUpperCase())
      return 1
    else
      return 0
  })

  // return an object with object indexes that reflect the new order
  let returnObject = {}
  array.map((key, index) => { returnObject[index] = items[key] })
  return returnObject
}

const populateFilteredList = (key, sortedItems, filterText, sortedFilteredItems) => {
  const itemName = sortedItems[key].name
  // escape all of the regular expression special characters
  const regExpFilter = new RegExp(quoteRegExp(filterText), 'i')
  if(0 <= itemName.search(regExpFilter)) {
    sortedFilteredItems[key] = sortedItems[key]
  }
}

export default databaseAppReducer