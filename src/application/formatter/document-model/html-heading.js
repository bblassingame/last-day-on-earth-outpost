import React, { Component } from 'react'

import HtmlHeadingBloody from './html-heading-bloody'
import HtmlHeadingTitle from './html-heading-title'
import HtmlHeadingHeading from './html-heading-heading'
import HtmlHeadingSubheading from './html-heading-subheading'

class HtmlHeading extends Component {
  constructor() {
    super()
    this.properties = []
    // required properties
    this.headingType = ''
    this.text = ''
    // optional properties
    this.isLink = false
    this.src = ''
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
    this.headingType = this.props.headingPageElement.headingType
    this.text = this.props.headingPageElement.text
    this.isLink = this.props.headingPageElement.isLink
    this.src = this.props.headingPageElement.linkSrc
    this.hasId = this.props.headingPageElement.hasId
    this.idName = this.props.headingPageElement.idName

    this.properties['text'] = this.text
    this.properties['isLink'] = this.isLink
    this.properties['src'] = this.src
    this.properties['hasId'] = this.hasId
    this.properties['idName'] = this.idName
  }

  render() {
    // check for special headings first before rendering a generic heading
    switch(this.headingType.toLowerCase()){
      case 'title':
        // return <HtmlHeadingTitle text={this.text} isLink={this.isLink} src={this.src} />
        return <HtmlHeadingTitle {...this.properties} />

      case 'bloody':
        // return <HtmlHeadingBloody text={this.text} />
        return <HtmlHeadingBloody {...this.properties} />

      case 'heading':
        // return <HtmlHeadingHeading text={this.text} isLink={this.isLink} src={this.src} />
        return <HtmlHeadingHeading {...this.properties} />

      case 'subheading':
        // return <HtmlHeadingSubheading text={this.text} isLink={this.isLink} src={this.src} />
        return <HtmlHeadingSubheading {...this.properties} />

      default:
        return <div>ERROR</div>
    }
  }
}

export default HtmlHeading