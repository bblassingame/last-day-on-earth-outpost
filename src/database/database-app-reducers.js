import { quoteRegExp } from '../utility/regex-utils'

// just initialize with an empty object so that the first times we go through here everything is empty
// and it is apparent that no initialization has happened.
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
    
    case 'CLEAR_SEARCH_TEXT':
      return Object.assign({}, state, {searchText: ''})

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
  recycleables: {},
  recycleProducts: {},
  weapons: {},
  armor: {},
  // items related to searching
  searchText: '',
  searchActive: false,
  searchWords: {},
  sortedFilteredItems: {},
  // application state items
  lastUpdated: -1,
  selectedItem: -1,
  isFetching: false,
  isInitialized: false,
}

// set the default article data here once we actually request the items.  If we set it up before the request then
// it will appear that loading has happened or started when it hasn't because variables will be defined.
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
        recycleables: action.itemData.recycleables,
        recycleProducts: action.itemData.recycleProducts,
        weapons: action.itemData.weapons,
        armor: action.itemData.armor,
        // items related to searching
        searchText: action.itemData.searchText,
        searchActive: action.itemData.searchActive,
        searchWords: action.itemData.searchWords,
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

  // return just the sorted items if we don't have a search string
  const searchText = state.searchText
  if(null == searchText || '' === searchText)
    return Object.assign({}, {...sortedItems})
  
  // if we have a search string, filter the items according to the search
  let sortedFilteredItems = {}
  const itemKeys = Object.keys(sortedItems)
  // add the first set of matches, we look for a match at the beginning of a word and when it
  // matches a search word
  itemKeys.map(key => filterItemsMatchAtWordBoundary(key, sortedItems, searchText, state.searchWords, sortedFilteredItems))
  itemKeys.map(key => filterItemsMatchSearchWordsAtWordBoundary(key, sortedItems, searchText, state.searchWords, sortedFilteredItems))
  itemKeys.map(key => filterItemsMatchAtNonWordBoundary(key, sortedItems, searchText, sortedFilteredItems))
  // now we add words where the search matches within the word
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

const filterItemsMatchAtWordBoundary = (key, sortedItems, filterText, searchWords, sortedFilteredItems) => {
  const index = Object.keys(sortedFilteredItems).length
  const itemName = sortedItems[key].name

  // escape all of the regular expression special characters
  const regExpFilter = new RegExp('\\b' + quoteRegExp(filterText), 'i')

  // first check if the regular expression matches the actual item name
  if(0 <= itemName.search(regExpFilter))
    sortedFilteredItems[index] = sortedItems[key]
}

const filterItemsMatchSearchWordsAtWordBoundary = (key, sortedItems, filterText, searchWords, sortedFilteredItems) => {
  // now check if the regex matches secondary search words
  const index = Object.keys(sortedFilteredItems).length
  const itemName = sortedItems[key].name
  const itemSearchWords = searchWords[sortedItems[key].itemId]

  // escape all of the regular expression special characters
  const regExpFilter = new RegExp('\\b' + quoteRegExp(filterText), 'i')

  // check if there are any search words for this item before trying to match
  if(null != itemSearchWords) {
    itemSearchWords.map(searchWord => {
      if(0 <= searchWord.search(regExpFilter)) {
        let match = false
        // check whether the item has already been added to our sortedFilteredItems list
        Object.keys(sortedFilteredItems).map(key => {
          if(sortedFilteredItems[key].name === itemName)
            match = true
        })
    
        // if the regex matches and we haven't already added the item, add it
        if(false === match)
          sortedFilteredItems[index] = sortedItems[key]
      }
    })
  }
}

const filterItemsMatchAtNonWordBoundary = (key, sortedItems, filterText, sortedFilteredItems) => {
  const index = Object.keys(sortedFilteredItems).length
  const itemName = sortedItems[key].name

  // escape all of the regular expression special characters
  const regExpFilter = new RegExp('\\B' + quoteRegExp(filterText), 'i')

  // first check if the regular expression matches
  if(0 <= itemName.search(regExpFilter)) {
    let match = false
    // check whether the item has already been added to our sortedFilteredItems list
    Object.keys(sortedFilteredItems).map(key => {
      if(sortedFilteredItems[key].name === itemName)
        match = true
    })

    // if the regex matches and we haven't already added the item, add it
    if(false === match)
      sortedFilteredItems[index] = sortedItems[key]
  }
}

export default databaseAppReducer