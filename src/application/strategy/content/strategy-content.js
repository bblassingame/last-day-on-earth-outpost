import React from 'react'
import { Route, Link } from 'react-router-dom'

import StrategyArticle from './strategy-article'
import StrategyArticleRecycler from './strategy-article-recycler'

const StrategyContent = (props) => {
  return (
    <div className='strategy-content-container'>
      <h1 className='strategy-heading-title'>LDOE: Strategy</h1>
      <Route key={0} exact path='/strategy' render={() => props.isLoading === true ? getLoadingPanel() : renderArticleLinks(props.onArticleClick)} />
      <Route key={1} path='/strategy/BaseDesign' render={(routeProps) => <StrategyArticle articleData={props.articleData} {...routeProps} />} />
      <Route key={2} path='/strategy/Bunkers' render={(routeProps) => <StrategyArticle articleData={props.articleData} {...routeProps} />} />
      <Route key={3} path='/strategy/Mulitplayer' render={(routeProps) => <StrategyArticle articleData={props.articleData} {...routeProps} />} />
      <Route key={4} path='/strategy/Updates' render={(routeProps) => <StrategyArticle articleData={props.articleData} {...routeProps} />} />
      <Route key={5} path='/strategy/Events' render={(routeProps) => <StrategyArticle articleData={props.articleData} {...routeProps} />} />
      <Route key={6} path='/strategy/AIBases' render={(routeProps) => <StrategyArticle articleData={props.articleData} {...routeProps} />} />
      <Route key={7} path='/strategy/TipsAndTricks' render={(routeProps) => <StrategyArticle articleData={props.articleData} {...routeProps} />} />
      <Route key={8} path='/strategy/Resources' render={(routeProps) => <StrategyArticle articleData={props.articleData} {...routeProps} items={props.items} />} />
      <Route key={9} path='/strategy/Pets' render={(routeProps) => <StrategyArticle articleData={props.articleData} {...routeProps} />} />
      <Route key={10} path='/strategy/Recycler' render={(routeProps) => <StrategyArticleRecycler articleData={props.articleData} {...routeProps} />} />
    </div>
  )
}

const renderArticleLinks = (onArticleClick) => {
  return (
    <div className='strategy-nav-button-container'>
      <div className='strategy-nav-button-row'>
        <div className='strategy-nav-button-row'>
          <Link to='/strategy/BaseDesign' onClick={() => onArticleClick('BaseDesign')}>
            <div className='strategy-nav-button strategy-nav-button-basedesign'>
              <p className='strategy-nav-button-text'>Base Design</p>
            </div>
          </Link>
          <Link to='/strategy/Bunkers' onClick={() => onArticleClick('Bunkers')}>
            <div className='strategy-nav-button strategy-nav-button-bunkers'>
              <p className='strategy-nav-button-text'>Bunkers</p>
            </div>
          </Link>
        </div>
        <div className='strategy-nav-button-row'>
          <Link to='/strategy/Mulitplayer' onClick={() => onArticleClick('Mulitplayer')}>
            <div className='strategy-nav-button strategy-nav-button-multiplayer'>
              <p className='strategy-nav-button-text'>Multiplayer</p>
            </div>
          </Link>
          <Link to='/strategy/Updates' onClick={() => onArticleClick('Updates')}>
            <div className='strategy-nav-button strategy-nav-button-updates'>
              <p className='strategy-nav-button-text'>Updates</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='strategy-nav-button-row'>
        <div className='strategy-nav-button-row'>
          <Link to='/strategy/Events' onClick={() => onArticleClick('Events')}>
            <div className='strategy-nav-button strategy-nav-button-events'>
              <p className='strategy-nav-button-text'>Events</p>
            </div>
          </Link>
          <Link to='/strategy/AIBases' onClick={() => onArticleClick('AIBases')}>
            <div className='strategy-nav-button strategy-nav-button-aibases'>
              <p className='strategy-nav-button-text'>AI Bases</p>
            </div>
          </Link>
        </div>
        <div className='strategy-nav-button-row'>
          <Link to='/strategy/TipsAndTricks' onClick={() => onArticleClick('TipsAndTricks')}>
            <div className='strategy-nav-button strategy-nav-button-tipsandtricks'>
              <p className='strategy-nav-button-text'>Tips &amp; Tricks</p>
            </div>
          </Link>
          <Link to='/strategy/Resources' onClick={() => onArticleClick('Resources')}>
            <div className='strategy-nav-button strategy-nav-button-resources'>
              <p className='strategy-nav-button-text'>Resources</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='strategy-nav-button-row'>
        <div className='strategy-nav-button-row'>
          <Link to='/strategy/Pets' onClick={() => onArticleClick('Pets')}>
            <div className='strategy-nav-button strategy-nav-button-pets'>
              <p className='strategy-nav-button-text'>Pets</p>
            </div>
          </Link>
          <Link to='/strategy/Recycler' onClick={() => onArticleClick('Recycler')}>
            <div className='strategy-nav-button strategy-nav-button-recycler'>
              <p className='strategy-nav-button-text'>Recycler</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

// 
const getLoadingPanel = () => {
  return (
    <div style={{margin: 'auto'}}>
      <h1>Loading...</h1>
    </div>
  )
}

export default StrategyContent


