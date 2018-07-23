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
        // sortedFilteredItems: getSortedFilteredItemsList(action.itemData),
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


export default databaseAppReducer