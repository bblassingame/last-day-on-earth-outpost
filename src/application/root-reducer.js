import { combineReducers } from 'redux'

import application from './features-reducer'
import items from './items-reducer'
import database from '../database/database-app-reducers'
import articles from './articles-reducer'


const RootReducer = combineReducers({
  application,
  items,
  database,
  articles,
})

export default RootReducer