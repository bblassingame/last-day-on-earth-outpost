import { combineReducers } from 'redux'

import database from './database/database-app-reducers'
import strategy from './strategy/strategy-app-reducers'

const application = (state = {}, action) => {
  switch(action.type) {
    case 'REQUEST_FEATURES':
    case 'RECEIVE_FEATURES':
      return Object.assign({}, featuresReducer(state, action))

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
const featuresReducer = (applicationState, action) => {
  if(Object.keys(applicationState).length === 0 && applicationState.constructor === Object) {
    applicationState = defaultApplicationState    
  }
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

const RootReducer = combineReducers({
  application,
  database,
  strategy,
})

export default RootReducer