import React, { Component } from 'react'

import HtmlListItem from './html-list-item'

class HtmlList extends Component {
  constructor() {
    super()
    this.htmlListItems = []
  }

  componentWillMount() {
    this.initialize()
  }

  componentWillUpdate() {
    this.initialize()
  }

  initialize() {
    this.props.listPageElement.listItems.map( (item, i) => this.createListItems(item, i) )
  }

  createListItems(item, index) {
    if(item.getType() === 'List') {
      this.htmlListItems.push(<HtmlList key={index} listPageElement={item} />)
    }
    else if(item.getType() === 'ListItemText' ) {
      this.htmlListItems.push(<HtmlListItem key={index} listItemPageElement={item} />)
    }
    else {
      console.log('HTML Model Error:  Unknown list item type')
    }
  }

  render() {
    return (
      <ul className='formatted-ordered-list'>
        {this.htmlListItems}
      </ul>
    )
  }
}

export default HtmlList