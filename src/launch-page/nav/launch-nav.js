import React from 'react'
import { Link } from 'react-router-dom'

const LaunchNav = () => {
  return (
    <div className='nav-button-container'>
      <div className='nav-button-row'>
        <Link to='/forum'>
          <div className='nav-button nav-button-add-margin nav-button-forum'>
            <p className='nav-button-text'>Forum</p>
          </div>
        </Link>
        <Link to='/strategy'>
          <div className='nav-button nav-button-strategy'>
            <p className='nav-button-text'>Strategy</p>
          </div>
        </Link>
      </div>
      <div className='nav-button-row'>
        <Link to='/multiplayer'>
          <div className='nav-button nav-button-add-margin nav-button-multiplayer'>
            <p className='nav-button-text'>Multiplayer</p>
          </div>
        </Link>
        <Link to='/database'>
          <div className='nav-button nav-button-database'>
            <p className='nav-button-text'>Database</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default LaunchNav