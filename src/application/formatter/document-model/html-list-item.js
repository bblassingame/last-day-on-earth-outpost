import React, { Component } from 'react'
import { OutboundLink } from 'react-ga'

import HtmlListItemElement from './html-list-item-element'

class HtmlListItem extends Component {
  constructor() {
    super()
    this.listItemElements = []
    this.text = ''
    this.src = ''
    this.isLink = false
    this.event = ''
  }

  componentWillMount() {
    this.initialize()
  }

  componentWillUpdate() {
    this.initialize()
  }

  initialize() {
    this.text = this.props.listItemPageElement.rawText
    this.src = this.props.listItemPageElement.linkSrc
    this.isLink = this.props.listItemPageElement.isLink
    this.event = this.props.listItemPageElement.linkEvent
    this.props.listItemPageElement.elements.map((element, i) => this.createListItemElement(element, i))
  }

  createListItemElement(element, index) {
    this.listItemElements.push(<HtmlListItemElement listItemElement={element} key={index} />)
  }

  render() {
    let returnElement = null

    if(this.listItemElements.length > 0) {
      return (
        <li>
          {this.listItemElements}
        </li>
      )
    }
    else {
      if(this.isLink === true) {
        returnElement = <OutboundLink to={this.src} eventLabel={this.event}>{this.text}</OutboundLink>
      }
      else {
        returnElement = <p>{this.text}</p>
      }
    
      return (
        <li>
          {returnElement}
        </li>
      )
    }
  }
}

export default HtmlListItem