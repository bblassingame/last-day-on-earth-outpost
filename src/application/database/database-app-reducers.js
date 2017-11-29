const databaseAppReducer = (state = {}, action) => {
  switch(action.type) {
    case 'REQUEST_ITEMS':
    case 'RECEIVE_ITEMS':
      return Object.assign({}, itemsReducer(state, action))
    
    case 'SET_SELECTED_ITEM':
      return Object.assign({}, state, {selectedItem: action.selectedItem})

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