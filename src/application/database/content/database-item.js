import React, { Component } from 'react'

class DatabaseItem extends Component {
  constructor(props) {
    super(props)
    console.log('DatabaseItem Constructor')
    console.log(this)
  }

  render() {
    return (
      this.getIngredientPanel()
    )
  }

  getIngredientPanel() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <div>
          <div>
            <img src={this.props.img} />
            <p>&quot;{this.props.inGameDescription}&quot;</p>
          </div>
          <div>
            <p>{this.props.outpostDescription}blah blah blah blah lots of description.  blah blah blah blah lots of description.  blah blah blah blah lots of description.  blah blah blah blah lots of description.  blah blah blah blah lots of description.  blah blah blah blah lots of description.  blah blah blah blah lots of description.  </p>
          </div>
        </div>
        <h2>Used To Craft</h2>
        <h2>Used To Build</h2>
        <h2>Used As Fuel By</h2>        
        <h2>Where To Find</h2>
      </div>
    )
  }
}

export default DatabaseItem