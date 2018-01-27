import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { OutboundLink } from 'react-ga'

class HtmlParagraphElement extends Component {
  constructor() {
    super()
    this.hasText = false
    this.text = ''
    this.hasTag = false
    this.tag = ''
    this.attributes = null
    this.childElements = []
  }

  componentWillMount() {
    this.initialize()
  }

  componentWillUpdate() {
    this.initialize()
  }

  initialize() {
    if(true === this.props.paragraphElement.attributes.hasOwnProperty('tag')) {
      this.hasTag = true
      this.tag = this.props.paragraphElement.attributes['tag']
      this.attributes = {...this.props.paragraphElement.attributes}
      delete this.attributes['tag']

      if(this.props.paragraphElement.displayText !== '') {
        this.hasText = true
        this.text = this.props.paragraphElement.displayText
      }
    }
    else {
      this.text = this.props.paragraphElement.displayText
    }

    if(this.props.paragraphElement.elements.length > 0)
      this.props.paragraphElement.elements.map( (element, i) => this.createHtmlParagraphElement(element, i))
  }

  createHtmlParagraphElement(element, index) {
    this.childElements.push(<HtmlParagraphElement paragraphElement={element} key={index} />)
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
    if(this.childElements.length > 0)
      return <Link {...this.attributes}>{this.childElements}</Link>
    else if(true === this.hasText)
      return <Link {...this.attributes}>{this.text}</Link>
    else
      return <div>ERROR</div>
  }

  renderOutboundLink() {
    if(this.childElements.length > 0)
      return <OutboundLink {...this.attributes}>{this.childElements}</OutboundLink>
    else if(true === this.hasText)
      return <OutboundLink {...this.attributes}>{this.text}</OutboundLink>
    else
      return <div>ERROR</div>
  }

  renderHighlighted() {
    return <span>;nbspTAG NOT SUPPORTED;nbsp</span>
  }

}

export default HtmlParagraphElement