import React, { Component } from 'react'
import Link from 'react-router-dom'

class HtmlHeading extends Component {
  constructor() {
    super()
    this.headingType = ''
    this.isLink = false
    this.src = ''
    this.text = ''
  }

  componentWillMount() {
    this.initialize()
  }

  componentWillUpdate() {
    this.initialize()
  }

  initialize() {
    this.headingType = this.props.headingPageElement.headingType
    this.isLink = this.props.headingPageElement.isLink
    this.src = this.props.headingPageElement.linkSrc
    this.text = this.props.headingPageElement.text
  }

  render() {
    let className = ''
    if(this.headingType.toLowerCase() === 'Title'.toLowerCase())
      className = 'content-subheading'
    else if(this.headingType.toLowerCase() === 'Heading'.toLowerCase())
      className = 'content-subheading'
    else if(this.headingType.toLowerCase() === 'Subheading'.toLowerCase())
      className = 'content-subheading'
    else
      className = 'content-subheading'
    
    if(this.isLink === true)
      return <Link to={this.src}><h2 className={className}>{this.text}</h2></Link>
    else
      return <h2 className={className}>{this.text}</h2>
  }
}

export default HtmlHeading