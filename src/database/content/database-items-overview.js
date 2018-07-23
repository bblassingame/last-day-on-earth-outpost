import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { getURLString } from '../../utility/regex-utils'

class DatabaseItemsOverview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.isLoading ? this.getLoadingPanel() : this.getContentPanel()
  }

  getLoadingPanel() {
    return (
      <div style={{margin: 'auto'}}>
        <h1>Loading...</h1>
      </div>
    )
  }

  getContentPanel() {
    return (
      <div className='db-content-container'>
        <h1 className='db-content-header'>LDOE: Database</h1>
        <div className='db-content'>
          {this.createItems(this.props.items)}
        </div>
      </div>
    )
  }
    
  createItems(items) {
    return (
      <ul>
        {Object.keys(items).map(index => this.createItem(items, index))}
      </ul>
    )
  }
    
  createItem(items, index) {
    const item = items[index]
    return (
      <li key={item.itemId} className='db-content-list-entry'>
        <Link key={item.itemId} to={`/database/${getURLString(item.name)}`} onClick={() => this.props.onItemClick(item.itemId)} >
          <div className='db-content-list-entry-data-container'>
            <img src={item.thumbnail} />
            <span className='db-content-list-entry-name'>{item.name}</span>
          </div>
        </Link>
      </li>
    )
  }
}

export default DatabaseItemsOverview