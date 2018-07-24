import React from 'react'
import { Link } from 'react-router-dom'

import LeftArrow from './left-arrow-64-white.png'

const DatabaseHeader = (props) => {
  return (
    <div className='db-header-container'>
      <div className='db-header-home-button'>
        <Link to={getLinkDestination(props.location)} onClick={() => props.onBackArrowClick()} >
          <div className='db-header-img-container'>
            <img className='db-header-img' src={LeftArrow} />
          </div>
        </Link>
      </div>
      <div className='db-header-nav-container-wrapper'>
        <div className='db-header-nav-container'>
          <Link to='/forum' className='db-header-button forum-background-image'>
            <div>
              <p>Forum</p>
            </div>
          </Link>
          <Link to='/strategy' className='db-header-button strategy-background-image'>
            <div>
              <p>Strategy</p>
            </div>
          </Link>
          <Link to='/multiplayer' className='db-header-button multiplayer-background-image'>
            <div>
              <p>Multiplayer</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

const getLinkDestination = (location) => {
  let selectedItem = -1

  if(null != location.pathname.match(/^\/database\/[\w-_']+\/?$/))
    selectedItem = location.pathname.split('/')[2]

  if(-1 === Number(selectedItem))
    return '/'
  else
    return '/database'
}

export default DatabaseHeader