import React, { Component } from 'react'

import HtmlHeadingBloody from './html-heading-bloody'
import HtmlHeadingTitle from './html-heading-title'
import HtmlHeadingHeading from './html-heading-heading'
import HtmlHeadingSubheading from './html-heading-subheading'

class HtmlHeading extends Component {
  constructor() {
    super()
    // required properties
    this.headingType = ''
    this.text = ''
    // optional properties
    this.isLink = false
    this.src = ''
  }

  componentWillMount() {
    this.initialize()
  }

  componentWillUpdate() {
    this.initialize()
  }

  initialize() {
    this.headingType = this.props.headingPageElement.headingType
    this.text = this.props.headingPageElement.text
    this.isLink = this.props.headingPageElement.isLink
    this.src = this.props.headingPageElement.linkSrc
  }

  render() {
    // check for special headings first before rendering a generic heading
    switch(this.headingType.toLowerCase()){
      case 'title':
        return <HtmlHeadingTitle text={this.text} isLink={this.isLink} src={this.src} />

      case 'bloody':
        return <HtmlHeadingBloody text={this.text} />

      case 'heading':
        return <HtmlHeadingHeading text={this.text} isLink={this.isLink} src={this.src} />

      case 'subheading':
        return <HtmlHeadingSubheading text={this.text} isLink={this.isLink} src={this.src} />

      default:
        return <div>ERROR</div>
    }
  }
}

export default HtmlHeading