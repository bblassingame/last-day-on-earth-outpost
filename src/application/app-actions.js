import fetch from 'cross-fetch'

export const requestFeatures = () => {
  return {
    type: 'REQUEST_FEATURES',
    applicationName: 'application',
  }
}

export const receiveFeatures = (json) => {
  return {
    type: 'RECEIVE_FEATURES',
    applicationName: 'application',
    features: json,
    receivedAt: Date.now()
  }
}

export const fetchFeaturesIfNeeded = () => {
  return (dispatch, getState) => {
    if(shouldFetchFeatures(getState())) {
      return dispatch(fetchFeatures())
    }
    else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

function shouldFetchFeatures(state) {
  const appInitialized = state.application['appInitialized']
  if(null == appInitialized || (false == state.application.appInitialized && false == state.application.isFetching)) {
    return true
  }
  else if(state.application.isFetching)
    return false
  else
    return false
}

function fetchFeatures() {
  return dispatch => {
    dispatch(requestFeatures())
    return fetch('/api/v1/features')
      .then(response => response.json())
      .then(json => dispatch(receiveFeatures(json)))
  }
}
