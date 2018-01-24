import React, { Component } from 'react'

class HtmlYoutube extends Component{
  constructor() {
    super()
    this.src = ''
  }

  componentWillMount() {
    this.src = this.props.youtubePageElement.link
  }

  componentWillUpdate() {
    this.src = this.props.youtubePageElement.link
  }

  render() {
    return (
      <div className='multiplayer-youtube-container'>
        <iframe src={this.src} width='560' height='315' frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  }
}

export default HtmlYoutube