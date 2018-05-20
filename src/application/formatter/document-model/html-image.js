import React, { Component } from 'react'

class HtmlImage extends Component {
  constructor() {
    super()
    // required properties
    this.imageSrc = ''
    this.imageType = ''
    // optional properties
  }

  componentWillMount() {
    this.initialize()
  }

  componentWillUpdate() {
    this.initialize()
  }

  initialize() {
    this.imageSrc = this.props.imagePageElement.imageSrc
    this.imageType = this.props.imagePageElement.imageType
  }

  render() {
    return (
      <div className='formatted-image-container'>
        <img className='formatted-image' src={this.imageSrc} />
      </div>
    )
  }
}

export default HtmlImage