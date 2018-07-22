import { combineReducers } from 'redux'

import features from './features-reducer'
import items from './items-reducer'
import database from '../database/database-app-reducers'
import articles from './articles-reducer'


const RootReducer = combineReducers({
  features,
  items,
  database,
  articles,
})

export default RootReducer