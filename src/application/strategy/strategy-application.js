import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import StrategyHeader from './header/strategy-header'
import StrategyArticleLinks from './content/strategy-article-links'
import StrategyArticle from './content/strategy-article'
import StrategyArticleRecycler from './content/strategy-article-recycler'
import StrategyFooter from './footer/strategy-footer'

import './strategy-application-style.css'

class StrategyApplication extends Component {
  constructor(props) {
    super(props)
  }


  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/
  /*                                                     REACT LIFECYCLE METHODS                                                          */
  

  render() {
    return (
      <div className='strategy-container'>
        <StrategyHeader location={this.props.location} />
        <Route key={0} exact path='/strategy' render={() => this.getArticleLinksPanel()} />
        <Route key={1} path='/strategy/BaseDesign' render={(routeProps) => this.getArticlePanel(routeProps)} />
        <Route key={2} path='/strategy/Bunkers' render={(routeProps) => this.getArticlePanel(routeProps)} />
        <Route key={3} path='/strategy/Multiplayer' render={(routeProps) => this.getArticlePanel(routeProps)} />
        <Route key={4} path='/strategy/Updates' render={(routeProps) => this.getArticlePanel(routeProps)} />
        <Route key={5} path='/strategy/Events' render={(routeProps) => this.getArticlePanel(routeProps)} />
        <Route key={6} path='/strategy/AIBases' render={(routeProps) => this.getArticlePanel(routeProps)} />
        <Route key={7} path='/strategy/TipsAndTricks' render={(routeProps) => this.getArticlePanel(routeProps)} />
        <Route key={8} path='/strategy/Resources' render={(routeProps) => this.getArticlePanel(routeProps)} />
        <Route key={9} path='/strategy/Pets' render={(routeProps) => this.getArticlePanel(routeProps)} />
        <Route key={10} path='/strategy/Recycler' render={(routeProps) => this.getArticleRecyclerPanel(routeProps)} />
        <StrategyFooter />
      </div>
    )
  }


  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/
  /*                                                          EVENT HANDLERS                                                              */
  

  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/
  /*                                                        COMPONENT CREATION                                                            */
  
  getArticleLinksPanel() {
    if(false === this.props.isLoading)
      return <StrategyArticleLinks items={this.props.items} articleData={this.props.articleData} isLoading={this.props.isLoading} />
    else
      return this.getLoadingPanel()
  }

  getArticlePanel(routeProps) {
    if(false === this.props.isLoading)
      return <StrategyArticle articleData={this.props.articleData} {...routeProps} />
    else
      return this.getLoadingPanel()
  }

  getArticleRecyclerPanel(routeProps) {
    if(false === this.props.isLoading)
      return <StrategyArticleRecycler articleData={this.props.articleData} {...routeProps} />
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


  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/
  /*                                                        UTILITY FUNCTIONS                                                             */

}

export default StrategyApplication