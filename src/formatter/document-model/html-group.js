import React, { Component } from 'react'

class HtmlGroup extends Component {
  constructor() {
    super()
    this.htmlGroupItems = []
  }

  componentWillMount() {
    this.initialize()
  }

  componentWillUpdate() {
    this.initialize()
  }

  initialize() {
    this.htmlGroupItems = this.props.htmlDocument.generateDocumentElementsForItem(this.props.groupPageElement.items)
  }

  render() {
    return (
      <div className='formatted-group'>
        {this.htmlGroupItems}
      </div>
    )
  }
}

export default HtmlGroup