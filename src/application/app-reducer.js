// const initialState = {
//   application: {},
//   database: {
//     items: [],
//     lastUpdated: -1,
//     selectedItem: -1,
//     didInvalidate: false,
//     isFetching: false,
//   },
//   strategy: {},
//   multiplayer: {},
//   forum: {},
// }
const RootReducer = (state = {}, action) => {
  switch(action.type) {
    case 'REQUEST_FEATURES':
    case 'RECEIVE_FEATURES':
      return Object.assign({}, state, {[action.applicationName]: applicationReducer(state[action.applicationName], action)})

    default:
      return state
  }
}

const defaultApplicationState = {
  features: [],
  lastUpdated: -1,
  appInitialized: false,
  appInvalidated: false,
  isFetching: false,
}
const applicationReducer = (applicationState = defaultApplicationState, action) => {
  switch(action.type) {

    case 'REQUEST_FEATURES':
      return Object.assign({}, applicationState, {isFetching: true})
    
    case 'RECEIVE_FEATURES':
      return Object.assign({}, applicationState, {
        features: action.features,
        lastUpdated: action.receivedAt, 
        appInitialized: true,
        appInvalidate: false,
        isFetching: false, 
      })

    default:
      console.log('***** ERROR:  Undefined Action.  This wasn\'t supposed to get hit, take a look.' + action.type)
      return applicationState
  }
}

export default RootReducer