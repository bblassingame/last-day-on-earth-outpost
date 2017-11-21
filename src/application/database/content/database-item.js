import React, { Component } from 'react'

class DatabaseItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // <div>Here is my item ID:  {this.state.itemId}</div>
      <div>Here is my item ID:  {this.props.match.params.itemId}</div>
    )
  }
}

export default DatabaseItem