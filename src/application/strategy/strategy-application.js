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
    this.props.onComponentWillMount() // load here in case we stop loading in the main app for whatever reason
    // do this check in componentWillMount.  React expects functions that will update state to happen in a lifecyle
    // method aside from render.
    // match the expected path exactly in case later we add a further endpoint that builds off the path
    // accepted paths:  '/database/<articleId>'  OR  '/database/<articleId>/'
    if(null != this.props.location.pathname.match(/^\/strategy\/\w+\/?$/) && ('' === this.props.selectedArticle || null == this.props.selectedArticle)) {
      const tmpArray = this.props.location.pathname.split('/')
      this.props.initializeSelectedArticle(tmpArray[2])
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
        <StrategyContent onArticleClick={this.handleArticleClick} />
        <StrategyFooter />
      </div>
    )
  }
}

export default StrategyApplication