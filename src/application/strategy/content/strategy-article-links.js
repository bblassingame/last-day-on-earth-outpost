import React from 'react'
import { Link } from 'react-router-dom'

const StrategyArticleLinks = (props) => {
  return (
    <div className='strategy-content-container'>
      <h1 className='strategy-heading-title'>LDOE: Strategy</h1>
      {getArticleLinks(props.isLoading)}
    </div>
  )
}

const getArticleLinks = (isLoading) => {
  if(isLoading === true) {
    return getLoadingPanel()
  }
  else {
    return (
      <div className='strategy-nav-button-container'>
        <div className='strategy-nav-button-row'>
          <div className='strategy-nav-button-row'>
            <Link to='/strategy/BaseDesign'>
              <div className='strategy-nav-button strategy-nav-button-basedesign'>
                <p className='strategy-nav-button-text'>Base Design</p>
              </div>
            </Link>
            <Link to='/strategy/Bunkers'>
              <div className='strategy-nav-button strategy-nav-button-bunkers'>
                <p className='strategy-nav-button-text'>Bunkers</p>
              </div>
            </Link>
          </div>
          <div className='strategy-nav-button-row'>
            <Link to='/strategy/Multiplayer'>
              <div className='strategy-nav-button strategy-nav-button-multiplayer'>
                <p className='strategy-nav-button-text'>Multiplayer</p>
              </div>
            </Link>
            <Link to='/strategy/Updates'>
              <div className='strategy-nav-button strategy-nav-button-updates'>
                <p className='strategy-nav-button-text'>Updates</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='strategy-nav-button-row'>
          <div className='strategy-nav-button-row'>
            <Link to='/strategy/Events'>
              <div className='strategy-nav-button strategy-nav-button-events'>
                <p className='strategy-nav-button-text'>Events</p>
              </div>
            </Link>
            <Link to='/strategy/AIBases'>
              <div className='strategy-nav-button strategy-nav-button-aibases'>
                <p className='strategy-nav-button-text'>AI Bases</p>
              </div>
            </Link>
          </div>
          <div className='strategy-nav-button-row'>
            <Link to='/strategy/TipsAndTricks'>
              <div className='strategy-nav-button strategy-nav-button-tipsandtricks'>
                <p className='strategy-nav-button-text'>Tips &amp; Tricks</p>
              </div>
            </Link>
            <Link to='/strategy/Resources'>
              <div className='strategy-nav-button strategy-nav-button-resources'>
                <p className='strategy-nav-button-text'>Resources</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='strategy-nav-button-row'>
          <div className='strategy-nav-button-row'>
            <Link to='/strategy/Pets'>
              <div className='strategy-nav-button strategy-nav-button-pets'>
                <p className='strategy-nav-button-text'>Pets</p>
              </div>
            </Link>
            <Link to='/strategy/Recycler'>
              <div className='strategy-nav-button strategy-nav-button-recycler'>
                <p className='strategy-nav-button-text'>Recycler</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const getLoadingPanel = () => {
  return (
    <div style={{margin: 'auto'}}>
      <h1>Loading...</h1>
    </div>
  )
}

export default StrategyArticleLinks


