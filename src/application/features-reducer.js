import { combineReducers } from 'redux'

import database from '../database/database-app-reducers'
import articles from './articles-reducer'

const defaultApplicationState = {
  features: [],
  lastUpdated: -1,
  appInitialized: false,
  appInvalidated: false,
  isFetching: false,
  // for loading up data for the sub applications
  isDBFetching: false,
  hasDBFetched: false,
}

const application = (state = defaultApplicationState, action) => {
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

const featuresReducer = (applicationState, action) => {
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

const RootReducer = combineReducers({
  application,
  database,
  articles,
})

export default RootReducer