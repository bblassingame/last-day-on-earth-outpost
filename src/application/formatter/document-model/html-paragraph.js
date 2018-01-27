import React, { Component } from 'react'

import HtmlParagraphElement from './html-paragraph-element'

class HtmlParagraph extends Component {
  constructor() {
    super()
    this.paragraphElements = []
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

    this.props.paragraphPageElement.elements.map( (element, i) => this.createParagraphElement(element, i) )
  }

  createParagraphElement(element, index) {
    this.paragraphElements.push(<HtmlParagraphElement paragraphElement={element} key={index} />)
  }

  render() {
    let paragraph = null
    if(this.hasId === true) {
      paragraph = <p id={this.idName} className='multiplayer-content-paragraph'>{this.paragraphElements}</p>
    }
    else {
      paragraph = <p className='multiplayer-content-paragraph'>{this.paragraphElements}</p>
    }

    return paragraph
  }
}

export default HtmlParagraph