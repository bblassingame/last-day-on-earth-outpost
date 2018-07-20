import React, { Component } from 'react'
import { Redirect } from 'react-router'
import fetch from 'cross-fetch'
import ReactGA from 'react-ga'

import { storageAvailable } from '../utility/storage'
import * as jwt from '../utility/jwt'

class Preview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: false,
      checkboxChecked: false,
      redirect: false,
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    const previewAuthorized = localStorage.getItem('preview')
    if(null != previewAuthorized && 'allowed' === previewAuthorized)
      this.setState({
        redirect: true,
      })
  }

  render() {
    let returnComponent = null
    if(this.state.redirect === true)
      returnComponent = <Redirect to='/' />
    else if(this.state.isFetching === true)
      returnComponent = this.getLoadingPage()
    else
      returnComponent = this.getPreviewForm()
    return (returnComponent)
  }

  getPreviewForm() {
    return (
      <div style={{margin: '100px auto auto', width: '200px'}}>
        <form onSubmit={this.handleSubmit}>
          <div style={{margin: '0 0 5px'}}>
            <input id='preview-checkbox' type='checkbox' name='special' onChange={this.handleCheckboxChange} />
            <label htmlFor='preview-checkbox'>
              Turn On Preview...
            </label>
          </div>
          <input type='submit' name='submit' style={{margin: '0 0 0 auto', display: 'block'}} disabled={!this.state.checkboxChecked} />
        </form>
      </div>
    )
  }

  getLoadingPage() {
    return (
      <div>
        Loading...
      </div>
    )
  }

  handleCheckboxChange() {
    this.setState({
      checkboxChecked: !this.state.checkboxChecked
    })
  }

  handleSubmit(event) {
    console.log('Form Submitted')
    console.log(event)
    event.preventDefault()
    this.setState({
      isFetching: true,
      checkboxChecked: !this.state.checkboxChecked
    })

    fetch('/api/v1/authenticate').then(response => response.text()).then(text => this.handleFeatureResponse(text))
  }

  handleFeatureResponse(text) {
    const ret = storageAvailable('localStorage')
    if(true !== ret) {
      ReactGA.event({
        category: 'Browser Support',
        action: 'Local Storage Not Supported',
        value: ret
      })
    }

    const properties = jwt.getAllProperties(text)
    const previewFeature = properties['preview']
    localStorage.setItem('preview', previewFeature)

    // check the response
    if(previewFeature === 'allowed') {
      this.setState({
        redirect: true
      })
    }
    else {
      console.log('not redirecting')
      // handle preview disabled
    }
    // handle error
  }
}

export default Preview