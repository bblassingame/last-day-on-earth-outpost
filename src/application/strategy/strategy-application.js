import React, { Component } from 'react'

import StrategyHeader from './header/strategy-header'
import StrategyContent from './content/strategy-content'
import StrategyFooter from './footer/strategy-footer'

import './strategy-application-style.css'

// we're not using the React component lifecycle yet, but we will once we put in fetching the article content from the database
// so keep this a class for now
class StrategyApplication extends Component {
  constructor(props) {
    super(props)
    this.handleBackArrowClick = this.handleBackArrowClick.bind(this)
    this.handleArticleClick = this.handleArticleClick.bind(this)
  }

  componentWillMount() {
    // don't rely on actions dispatched from this method because React ends up combining all of the
    // calls to mapStateToProps into a single call.  The result is that a dispatched action that
    // needs a call to mapStateToProps doesn't get the required call and you don't get the props
    // updated with the new state.  You need to call you actions after the componentWillMount call
    // so that you get the mapStateToProps that you're expecting
    this.props.onComponentWillMount() // load here in case we stop loading in the main app for whatever reason
  }

  // do this check in componentDidMount & componentDidUpdate.  React expects functions that will update state to happen in a lifecyle
  // method aside from render.
  // we check for the URL and loading in both componentDidMount and componentDidUpdate because it is valid in both places depending on the scenario
  // - componentDidMount:  When navigating normally in the application, this is the place to look for the URL.  The application has successfully
  // loaded and the componentDidUpdate lifecycle method is not called during normal application navigation.
  // - componentDidUpdate:  This is only needed for when the user reloads the page while in the strategy application.  Whenever componentWillMount
  // is called, the app is not finished loading so we need to wait until later on in the lifecycle to initialize the selected article.
  componentDidMount() {
    if(null != this.props.location.pathname.match(/^\/strategy\/\w+\/?$/) && ('' === this.props.selectedArticle || null == this.props.selectedArticle)) {
      const tmpArray = this.props.location.pathname.split('/')
      this.props.initializeSelectedArticle(tmpArray[2])
      console.log('selected article initialized:  ' + this.props.selectedArticle)
    }
  }

  componentDidUpdate() {
    // match the expected path exactly in case later we add a further endpoint that builds off the path
    // accepted paths:  '/strategy/<articleName>'  OR  '/strategy/<articleName>/'
    if(null != this.props.location.pathname.match(/^\/strategy\/\w+\/?$/) && ('' === this.props.selectedArticle || null == this.props.selectedArticle)) {
      const tmpArray = this.props.location.pathname.split('/')
      this.props.initializeSelectedArticle(tmpArray[2])
      console.log('selected article initialized:  ' + this.props.selectedArticle)
    }
  }

  handleBackArrowClick() {
    this.props.onArticleSelected('')
  }

  handleArticleClick(articleId) {
    this.props.onArticleSelected(articleId)
  }

  render() {
    return (
      <div className='strategy-container'>
        <StrategyHeader selectedArticle={this.props.selectedArticle} onBackArrowClick={this.handleBackArrowClick} />
        {this.getContentPanel()}
        <StrategyFooter />
      </div>
    )
  }

  getContentPanel() {
    if(false === this.getLoadingStatus())
      return <StrategyContent onArticleClick={this.handleArticleClick} items={this.props.items} isLoading={this.getLoadingStatus()} />
    else
      return this.getLoadingPanel()
  }

  getLoadingPanel() {
    return (
      <div style={{margin: 'auto'}}>
        <h1>Loading...</h1>
      </div>
    )
  }

  getLoadingStatus() {
    // - this.props.isFetching == null || this.props.isFetching == true:  indicates that we're still fetching items from the server
    // - 'undefined' === typeof(this.props.selectedItem):  indicates that the full state is not initialized because selectedItem is not present in the state
    if( typeof(this.props.isFetching) === 'undefined' || this.props.isFetching === true || 'undefined' === typeof(this.props.selectedArticle) )
      return true
    else
      return false
  }

}

export default StrategyApplication