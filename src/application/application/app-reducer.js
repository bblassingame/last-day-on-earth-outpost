import { combineReducers } from 'redux'

import database from '../database/database-app-reducers'
import strategy from './strategy-app-reducers'

const defaultApplicationState = {
  features: [],
  lastUpdated: -1,
  appInitialized: false,
  appInvalidated: false,
  isFetching: false,
  // for loading up data for the sub applications
  isDBFetching: false,
  hasDBFetched: false,
  isStrategyFetching: false,
  hasStrategyFetched: false,  
}

const application = (state = defaultApplicationState, action) => {
  switch(action.type) {
    case 'APPLICATION_REQUEST_FEATURES':
    case 'APPLICATION_RECEIVE_FEATURES':
      return Object.assign({}, featuresReducer(state, action))

    case 'STRATEGY_REQUEST_ARTICLES':
    case 'STRATEGY_RECEIVE_ARTICLES':
    case 'DATABASE_REQUEST_ITEMS':
    case 'DATABASE_RECEIVE_ITEMS':
      return dataFetchingReducer(state, action)
        
    default:
      return state
  }
}

const featuresReducer = (applicationState, action) => {
  switch(action.type) {

    case 'APPLICATION_REQUEST_FEATURES':
      return Object.assign({}, applicationState, {isFetching: true})
    
    case 'APPLICATION_RECEIVE_FEATURES':
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

    case 'DATABASE_REQUEST_ITEMS':
      return Object.assign({}, applicationState, {
        isDBFetching: true
      })

    case 'DATABASE_RECEIVE_ITEMS':
      return Object.assign({}, applicationState, {
        isDBFetching: false,
        hasDBFetched: true,
      })

    case 'STRATEGY_REQUEST_ARTICLES':
      return Object.assign({}, applicationState, {
        isStrategyFetching: true
      })

    case 'STRATEGY_RECEIVE_ARTICLES':
      return Object.assign({}, applicationState, {
        isStrategyFetching: false,
        hasStrategyFetched: true,
      })
  }
}

const RootReducer = combineReducers({
  application,
  database,
  strategy,
})

export default RootReducer