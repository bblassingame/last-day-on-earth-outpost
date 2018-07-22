const defaultFeaturesState = {
  features: [],
  lastUpdated: -1,
  // appInitialized: false,
  // for tracking feature data as we're fetching from the server
  isFeatureDataFetching: false,
  hasFeatureDataFetched: false,
  // for loading up data for the sub applications
  isDBFetching: false,
  hasDBFetched: false,
}

const features = (state = {}, action) => {
  if(Object.keys(state).length === 0 && state.constructor === Object)
    state = defaultFeaturesState

  switch(action.type) {
    case 'REQUEST_FEATURES':
    case 'RECEIVE_FEATURES':
      return Object.assign({}, featuresReducer(state, action))

    case 'REQUEST_ITEMS':
    case 'RECEIVE_ITEMS':
      return dataFetchingReducer(state, action)
        
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

const dataFetchingReducer = (applicationState, action) => {

  switch(action.type) {

    case 'REQUEST_ITEMS':
      return Object.assign({}, applicationState, {
        isDBFetching: true
      })

    case 'RECEIVE_ITEMS':
      return Object.assign({}, applicationState, {
        isDBFetching: false,
        hasDBFetched: true,
      })

  }
}

export default features