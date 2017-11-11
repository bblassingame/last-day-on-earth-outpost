import React from 'react'
import { Link } from 'react-router-dom'

import LeftArrow from './left-arrow-64-white.png'

const DatabaseHeader = () => {
  return (
    <div className='db-header-container'>
      <div className='db-header-home-button'>
        <Link to='/'>
          <div className='db-header-img-container'>
            <img className='db-header-img' src={LeftArrow} />
          </div>
        </Link>
      </div>
      <div className='db-header-nav_container-wrapper'>
        <div className='db-header-nav-container'>
          <Link to='/forum' className='db-header-button'>
            <div>
              <p>Forum</p>
            </div>
          </Link>
          <Link to='/strategy' className='db-header-button'>
            <div>
              <p>Strategy</p>
            </div>
          </Link>
          <Link to='/multiplayer' className='db-header-button'>
            <div>
              <p>Multiplayer</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DatabaseHeader