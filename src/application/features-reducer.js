const defaultFeaturesState = {
  features: [],
  lastUpdated: -1,
  // for tracking feature data as we're fetching from the server
  isFeatureDataFetching: false,
  hasFeatureDataFetched: false,
}

const features = (state = {}, action) => {
  if(Object.keys(state).length === 0 && state.constructor === Object)
    state = defaultFeaturesState

  switch(action.type) {
    case 'REQUEST_FEATURES':
    case 'RECEIVE_FEATURES':
      return Object.assign({}, featuresReducer(state, action))

    default:
      return state
  }
}

const featuresReducer = (state, action) => {
  switch(action.type) {

    case 'REQUEST_FEATURES':
      return Object.assign({}, state, {isFeatureDataFetching: true})
    
    case 'RECEIVE_FEATURES':
      return Object.assign({}, state, {
        features: action.features,
        lastUpdated: action.receivedAt, 
        isFeatureDataFetching: false,
        hasFeatureDataFetched: true,
      })

    default:
      console.log('***** ERROR:  Undefined Action.  This wasn\'t supposed to get hit, take a look.' + action.type)
      return state
  }
}

export default features