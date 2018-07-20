import React from 'react'
import { Link } from 'react-router-dom'

import LeftArrow from './left-arrow-64-white.png'


const MultiplayerHeader = () => {
  return (
    <div className='multiplayer-header-container'>
      <div className='multiplayer-header-home-button'>
        <Link to='/'>
          <div className='multiplayer-header-img-container'>
            <img className='multiplayer-header-img' src={LeftArrow} />
          </div>
        </Link>
      </div>
      <div className='multiplayer-header-nav-container-wrapper'>
        <div className='multiplayer-header-nav-container'>
          <Link to='/forum' className='multiplayer-header-button forum-background-image'>
            <div>
              <p>Forum</p>
            </div>
          </Link>
          <Link to='/strategy' className='multiplayer-header-button strategy-background-image'>
            <div>
              <p>Strategy</p>
            </div>
          </Link>
          <Link to='/database' className='multiplayer-header-button database-background-image'>
            <div>
              <p>Database</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MultiplayerHeader