import React from 'react'
import { Link } from 'react-router-dom'

import LeftArrow from './left-arrow-64-white.png'


const StrategyHeader = (props) => {
  return (
    <div className='strategy-header-container'>
      <div className='strategy-header-home-button'>
        <Link to={getLinkDestination(props.location)}>
          <div className='strategy-header-img-container'>
            <img className='strategy-header-img' src={LeftArrow} />
          </div>
        </Link>
      </div>
      <div className='strategy-header-nav-container-wrapper'>
        <div className='strategy-header-nav-container'>
          <Link to='/forum' className='strategy-header-button forum-background-image'>
            <div>
              <p>Forum</p>
            </div>
          </Link>
          <Link to='/multiplayer' className='strategy-header-button multiplayer-background-image'>
            <div>
              <p>Multiplayer</p>
            </div>
          </Link>
          <Link to='/database' className='strategy-header-button database-background-image'>
            <div>
              <p>Database</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

const getLinkDestination = (location) => {
  let selectedArticle = ''

  if(null != location.pathname.match(/^\/strategy\/\w+\/?$/))
    selectedArticle = location.pathname.split('/')[2]

  if('' === selectedArticle)
    return '/'
  else
    return '/strategy'
}

export default StrategyHeader