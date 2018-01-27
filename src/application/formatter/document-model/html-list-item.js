import React, { Component } from 'react'
import { OutboundLink } from 'react-ga'

class HtmlListItem extends Component {
  constructor() {
    super()
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
    this.text = this.props.listItemPageElement.text
    this.src = this.props.listItemPageElement.linkSrc
    this.isLink = this.props.listItemPageElement.isLink
    this.event = this.props.listItemPageElement.linkEvent
  }

  render() {
    let returnElement = null

    if(this.isLink === true) {
      returnElement = <OutboundLink to={this.src} eventLabel={this.event}>{this.text}</OutboundLink>
    }
    else {
      returnElement = <p>{this.text}</p>
    }
  
    return (
      <li className='multiplayer-list-item'>
        {returnElement}
      </li>
    )
  }
}

export default HtmlListItem