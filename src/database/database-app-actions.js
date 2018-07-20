import fetch from 'cross-fetch'

export const setSelectedItem = (itemId) => {
  return {
    type: 'SET_SELECTED_ITEM',
    selectedItem: itemId,
  }
}

export const requestItems = () => {
  return {
    type: 'DATABASE_REQUEST_ITEMS',
  }
}

export const receiveItems = (json) => {
  return {
    type: 'DATABASE_RECEIVE_ITEMS',
    itemData: json,
    receivedAt: Date.now()
  }
}

export const fetchItemsIfNeeded = () => {
  return (dispatch, getState) => {
    if(shouldFetchItems(getState())) {
      return dispatch(fetchItems())
    }
    else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

function shouldFetchItems(state) {
  const dbInitialized = state.database['isInitialized']
  if(null == dbInitialized || (false == state.database.isInitialized && false == state.database.isFetching))
    return true
  else if(state.database.isFetching)
    return false
  else
    return false
}

function fetchItems() {
  return dispatch => {
    dispatch(requestItems())
    return fetch('/api/v1/items')
      .then(response => response.json())
      .then(json => dispatch(receiveItems(json)))
  }
}

export const setSearchText = (enteredText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: enteredText,
  }
}

export const filterItemsList = () => {
  return {
    type: 'FILTER_ITEMS_LIST',
  }
}

export const clearSearchText = () => {
  return {
    type: 'CLEAR_SEARCH_TEXT',
  }
}