import fetch from 'cross-fetch'

export const requestFeatures = () => {
  return {
    type: 'REQUEST_FEATURES',
    applicationName: 'application',
  }
}

export const receiveFeatures = (json) => {
  console.log('->json data from features<-')
  console.log(json)
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
      // Dispatch a thunk from thunk!
      return dispatch(fetchFeatures())
    }
    else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

function shouldFetchFeatures(state) {
  const application = state.application
  if(!application)
    return true
  else if(application.isFetching)
    return false
  else
    return application.appInvalidated
}

function fetchFeatures() {
  return dispatch => {
    dispatch(requestFeatures())
    return fetch('http://localhost/api/v1/feature')
      .then(response => response.json())
      .then(json => dispatch(receiveFeatures(json)))
  }
}
