import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DatabaseContent extends Component {
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
        <div className='db-search-container'>
        </div>
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
      <Link key={item.itemId} to={`/database/${item.itemId}`} onClick={() => this.props.onItemClick(item.itemId)} >
        <li className='db-content-list-entry'>
          <img src={item.thumbnail} />
          <span className='db-content-list-entry-name'>{item.name}</span>
        </li>
      </Link>
    )
  }
}

export default DatabaseContent