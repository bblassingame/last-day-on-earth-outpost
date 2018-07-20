import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import 'babel-polyfill'
import AppContainer from './app-container'
import RootReducer from './app-reducer'
import ScrollToTop from '../utility/scroll-to-top'

import './reset.css'
import './base-styles.css'

let store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/*global process*/
if (process.env.NODE_ENV !== 'production') {
  console.log('Dev Environment Detected:  Starting Application')
  store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, createLogger())))
}
else {
  store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <AppContainer />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>, document.getElementById('main')
)