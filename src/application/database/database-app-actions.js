import fetch from 'cross-fetch'

export const setSelectedItem = (itemId) => {
  return {
    type: 'SET_SELECTED_ITEM',
    selectedItem: itemId,
  }
}

export const requestItems = () => {
  return {
    type: 'REQUEST_ITEMS',
  }
}

export const receiveItems = (json) => {
  return {
    type: 'RECEIVE_ITEMS',
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
    return fetch('http://localhost/api/v1/items')
      .then(response => response.json())
      .then(json => dispatch(receiveItems(json)))
  }
}
