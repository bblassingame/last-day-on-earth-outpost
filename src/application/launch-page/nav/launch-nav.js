import React from 'react'
import { Link } from 'react-router-dom'

const LaunchNav = () => {
  return (
    <div className='nav-button-container'>
      <div className='nav-button-row'>
        <Link to='/forum'>
          <div className='nav-button nav-button-add-margin'>
            <p>Forum</p>
          </div>
        </Link>
        <Link to='/strategy'>
          <div className='nav-button'>
            <p>Strategy</p>
          </div>
        </Link>
      </div>
      <div className='nav-button-row'>
        <Link to='/multiplayer'>
          <div className='nav-button nav-button-add-margin'>
            <p>Multiplayer</p>
          </div>
        </Link>
        <Link to='/database'>
          <div className='nav-button'>
            <p>Database</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default LaunchNav