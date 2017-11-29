import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import DatabaseHeader from './header/database-header'
import DatabaseContent from './content/database-content'
import DatabaseGenericItem from './content/database-generic-item'
import DatabaseFooter from './footer/database-footer'

import './database-application-style.css'

class DatabaseApplication extends Component {
  constructor(props) {
    super(props)
    this.handleBackArrowClick = this.handleBackArrowClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  componentWillMount() {
    this.props.onComponentWillMount()
  }

  componentDidUpdate() {
    this.props.onComponentUpdate()
  }

  handleBackArrowClick() {
    this.props.onItemSelected(-1)
  }

  handleItemClick (itemId) {
    this.props.onItemSelected(itemId)
  }

  render() {
    return (
      <div className='db-application-content'>
        <DatabaseHeader selectedItem={this.props.selectedItem}  onBackArrowClick={this.handleBackArrowClick}/>
        <Route exact path='/database' render={(routeProps) =><DatabaseContent isLoading={this.getLoadingStatus()} items={this.props.items} onItemClick={this.handleItemClick} {...routeProps} />} />
        <Route path='/database/:itemId' render={(routeProps) => this.getItemPanel(routeProps)} />
        <DatabaseFooter />
      </div>
    )
  }

  getLoadingStatus() {
    return (this.props.isFetching == null || this.props.isFetching == true) ? true : false
  }

  getItemPanel(routeProps) {
    const selItem = this.props.selectedItem
    switch(this.props.items[selItem].primaryCategory) {
      case 'ingredient':
      //   return (<DatabaseGenericItem {...routeProps} {...this.props.items[this.props.selectedItem]} />)
      case 'weapon':
      case 'armor':
      case 'tool':
      case 'health':
      default:
        return (<DatabaseGenericItem categories={this.props.itemCategories[selItem]} {...this.props.items[selItem]} {...routeProps} />)
    }
  }
}

export default DatabaseApplication