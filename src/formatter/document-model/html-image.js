import React, { Component } from 'react'

class HtmlImage extends Component {
  constructor() {
    super()
    // required properties
    // this.imageSrcType = ''
    this.imageSrc = ''
    this.imageStyle = ''
    // optional properties
  }

  componentWillMount() {
    this.initialize()
  }

  componentWillUpdate() {
    this.initialize()
  }

  initialize() {
    // this.imageSrcType = this.props.imagePageElement.imageSrcType
    this.imageSrc = this.props.imagePageElement.imageSrc
    this.imageStyle = this.props.imagePageElement.imageStyle
  }

  render() {
    let className = 'formatted-image'
    if(this.imageStyle !== '')
      className += ' ' + this.imageStyle

    return (
      <div className='formatted-image-container'>
        <img className={className} src={this.imageSrc} />
      </div>
    )
  }

  // getImageSrc() {
  //   if(this.imageSrcType === 'reduxStore') {
  //     return this.imageSrc
  //   }
  //   else if(this.imageSrcType === 'srcReady') {
  //     return this.imageSrc
  //   }
  // }
}

export default HtmlImage