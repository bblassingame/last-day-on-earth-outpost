import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import DatabaseHeader from './header/database-header'
import DatabaseSearch from './content/database-search'
import DatabaseContent from './content/database-content'
import DatabaseGenericItem from './content/database-generic-item'
import DatabaseFooter from './footer/database-footer'

import './database-application-style.css'

class DatabaseApplication extends Component {
  constructor(props) {
    super(props)
    this.handleBackArrowClick = this.handleBackArrowClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  componentWillMount() {
    this.props.onComponentWillMount()
    // do this check in componentWillMount.  React expects functions that will update state to happen in a lifecyle
    // method aside from render.
    // match the expected path exactly in case later we add a further endpoint that builds off the path
    // accepted paths:  '/database/<itemId>'  OR  '/database/<itemId>/'
    if(null != this.props.location.pathname.match(/^\/database\/\d+\/?$/) && (-1 === this.props.selectedItem || null == this.props.selectedItem)) {
      const tmpArray = this.props.location.pathname.split('/')
      this.props.initializeSelectedItem(tmpArray[2])
    }
  }

  componentDidUpdate() {
    // we removed this for now because I couldn't remember why we were fetching items when the component updated.
    // keeping this in causes us to fetch items on each search so we had to remove it
    // this.props.onComponentUpdate()
  }

  handleBackArrowClick() {
    this.props.onItemSelected(-1)
  }

  handleItemClick(itemId) {
    this.props.onItemSelected(itemId)
  }

  handleSearchInput(event) {
    this.props.onSearchTextEntered(event.target.value)
    this.props.filterItemsList()
  }

  render() {
    return (
      <div className='db-application-content'>
        <DatabaseHeader selectedItem={this.props.selectedItem}  onBackArrowClick={this.handleBackArrowClick}/>
        <DatabaseSearch onInput={this.handleSearchInput}/>
        <Route exact path='/database' render={(routeProps) =><DatabaseContent isLoading={this.getLoadingStatus()} items={this.props.sortedFilteredItems} onItemClick={this.handleItemClick} {...routeProps} />} />
        <Route path='/database/:itemId' render={(routeProps) => this.getItemPanel(routeProps)} />
        <DatabaseFooter />
      </div>
    )
  }

  getLoadingStatus() {
    return (this.props.isFetching == null || this.props.isFetching == true) ? true : false
  }

  getItemPanel(routeProps) {
    // if we're loading, show a loading panel
    if(true == this.getLoadingStatus())
      return this.getLoadingPanel()
    
    let selectedItem = this.props.selectedItem
    switch(this.props.items[selectedItem].primaryCategory) {
      case 'ingredient':
      case 'weapon':
      case 'armor':
      case 'tool':
      case 'health':
      default:
        return (<DatabaseGenericItem categories={this.props.itemCategories[selectedItem]} {...this.props.items[selectedItem]} {...routeProps} />)
    }
  }

  getLoadingPanel() {
    return (
      <div style={{margin: 'auto'}}>
        <h1>Loading...</h1>
      </div>
    )
  }

  getErrorPanel() {
    return (
      <div style={{margin: 'auto'}}>
        <h1>An error has occurred.  Please go to the home page and try to access this item again.</h1>
      </div>
    )
  }
}

export default DatabaseApplication