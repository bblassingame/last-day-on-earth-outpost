import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { OutboundLink } from 'react-ga'

class HtmlListItemElement extends Component {
  constructor() {
    super()
    this.text = ''
    this.hasTag = false
    this.tag = ''
    this.attributes = null
  }

  componentWillMount() {
    this.initialize()
  }

  componentWillUpdate() {
    this.initialize()
  }

  initialize() {
    if(true === this.props.listItemElement.attributes.hasOwnProperty('tag')) {
      this.hasTag = true
      this.tag = this.props.listItemElement.attributes['tag']
      this.attributes = {...this.props.listItemElement.attributes}
      delete this.attributes['tag']
    }

    this.text = this.props.listItemElement.displayText
  }

  render() {
    if(true === this.hasTag)
      return this.renderComplexElement()
    else
      return this.renderSimpleElement()
  }

  renderSimpleElement() {
    return this.text
  }

  renderComplexElement() {
    switch(this.tag) {
      case 'L': // internal link to somewhere else in LDOE: Outpost
        return this.renderLink()
      
      case 'OL': // outbound link to another site
        return this.renderOutboundLink()
      
      case 'H': // highlight the encasulated text
        return this.renderHighlighted()
      
      default:
        console.log('ERROR:  Unknown tag encountered in HTML render')
        return <div>ERROR</div>
    }
  }

  renderLink() {
    return <Link {...this.attributes}>{this.text}</Link>
  }

  renderOutboundLink() {
    return <OutboundLink {...this.attributes}>{this.text}</OutboundLink> 
  }

  renderHighlighted() {
    return <span>;nbspTAG NOT SUPPORTED;nbsp</span>
  }

}

export default HtmlListItemElement