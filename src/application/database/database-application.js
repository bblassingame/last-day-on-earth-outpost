import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import DatabaseHeader from './header/database-header'
import DatabaseContent from './content/database-content'
import DatabaseItem from './content/database-item'
import DatabaseFooter from './footer/database-footer'

import './database-application-style.css'

class DatabaseApplication extends Component {
  constructor(props) {
    super(props)
    this.handleBackArrowClick = this.handleBackArrowClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.state = {
      viewingItem: false
    }
  }

  componentWillMount() {
    this.props.onComponentWillMount()
  }

  componentDidUpdate() {
    this.props.onComponentUpdate()
  }

  handleBackArrowClick() {
    this.setState({
      viewingItem: false
    })
  }

  handleItemClick () {
    this.setState({
      viewingItem: true
    })
  }

  render() {
    return (
      <div className='db-application-content'>
        <DatabaseHeader viewingItem={this.state.viewingItem}  onBackArrowClick={this.handleBackArrowClick}/>
        <Route exact path='/database' render={(routeProps) =><DatabaseContent isLoading={this.getLoadingStatus()} items={this.props.items} onItemClick={this.handleItemClick} {...routeProps} />} />
        <Route path='/database/:itemId' render={(routeProps) => <DatabaseItem {...routeProps} />} />
        <DatabaseFooter />
      </div>
    )
  }

  getLoadingStatus() {
    return (this.props.isFetching == null || this.props.isFetching == true) ? true : false
  }
}

export default DatabaseApplication