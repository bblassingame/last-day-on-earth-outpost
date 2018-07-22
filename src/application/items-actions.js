import fetch from 'cross-fetch'

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
  if(typeof(state.items) === 'undefined' || (state.items.isItemDataFetching === false && state.items.hasItemDataFetched === false))
    return true
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