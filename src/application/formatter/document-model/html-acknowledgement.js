import React, { Component } from 'react'

class HtmlAcknowledgement extends Component {
  constructor() {
    super()
    // required properties
    this.text = ''
    // optional properties
  }

  componentWillMount() {
    this.initialize()
  }

  componentWillUpdate() {
    this.initialize()
  }

  initialize() {
    this.text = this.props.acknowledgementPageElement.text
  }

  render() {
    return (
      <div>
        <p className='formatted-acknowledgement-text'>&mdash;{this.text}</p>
      </div>
    )
  }
}

export default HtmlAcknowledgement