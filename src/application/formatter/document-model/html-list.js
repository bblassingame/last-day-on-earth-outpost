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
    this.props.listPageElement.listItems.map( (item, i) => this.createHtmlListItem(item, i) )
  }

  createHtmlListItem(item, index) {
    this.htmlListItems.push(<HtmlListItem key={index} listItemPageElement={item} />)
  }

  render() {
    return (
      <ol className='multiplayer-ordered-list'>
        {this.htmlListItems}
      </ol>
    )
  }
}

export default HtmlList