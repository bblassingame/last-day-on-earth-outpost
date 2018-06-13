import React, { Component } from 'react'

import HtmlParagraphElement from './html-paragraph-element'

class HtmlParagraph extends Component {
  constructor() {
    super()
    this.paragraphElements = []
    // optional properties
    this.hasId = false
    this.idName = ''
  }

  componentWillMount() {
    this.initialize()
  }

  componentWillUpdate() {
    this.initialize()
  }

  initialize() {
    this.hasId = this.props.paragraphPageElement.hasId
    this.idName = this.props.paragraphPageElement.idName

    this.paragraphElements = this.props.htmlDocument.generateDocumentElementsForItem(this.props.paragraphPageElement.elements)
  }

  render() {
    let paragraph = null
    if(this.hasId === true) {
      paragraph = <p id={this.idName} className='formatted-paragraph'>{this.paragraphElements}</p>
    }
    else {
      paragraph = <p className='formatted-paragraph'>{this.paragraphElements}</p>
    }

    return paragraph
  }
}

export default HtmlParagraph