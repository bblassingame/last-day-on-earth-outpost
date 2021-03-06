const defaultItemsState = {
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
  searchWords: {},
  // items data state info
  lastUpdated: -1,
  isItemDataFetching: false,
  hasItemDataFetched: false,
}

const itemsReducer = (state = {}, action) => {
  if(Object.keys(state).length === 0 && state.constructor === Object)
    state = defaultItemsState

  switch(action.type) {

    case 'REQUEST_ITEMS':
      return Object.assign({}, state, {isItemDataFetching: true})
    
    case 'RECEIVE_ITEMS':
      return Object.assign({}, state, {
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
        searchWords: action.itemData.searchWords,
        // application state items
        lastUpdated: action.receivedAt,
        isItemDataFetching: false,
        hasItemDataFetched: true,
      })

    default:
      return state

  }
}



export default itemsReducer