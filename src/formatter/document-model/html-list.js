import React, { Component } from 'react'

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
    this.htmlListItems = this.props.htmlDocument.generateDocumentElementsForItem(this.props.listPageElement.listItems)
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