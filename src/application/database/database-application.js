import React, { Component } from 'react'

import LoadingPage from '../utility/loading-page'
import DatabaseHeader from './header/database-header'
import DatabaseContent from './content/database-content'
import DatabaseFooter from './footer/database-footer'

import './database-application-style.css'

class DatabaseApplication extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      items: []
    }
  }

  componentWillMount() {
    fetch('http://localhost/api/v1/items').then(fetchResult => this.handleFetchResult(fetchResult))
  }

  handleFetchResult(fetchResult) {
    fetchResult.json().then(itemsResults => this.handleItems(itemsResults))
  }

  handleItems(itemsResults) {
    this.setState ({
      loading: false,
      items: itemsResults
    })
  }

  getPage() {
    return (this.state.loading == true ? LoadingPage : React.createElement(DatabaseContent, this.state.items))
  }

  render() {
    return (
      <div className='db-application-content'>
        <DatabaseHeader />
        {this.getPage()}
        <DatabaseFooter />
      </div>
    )
  }
}

export default DatabaseApplication