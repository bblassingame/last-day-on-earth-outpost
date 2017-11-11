import React from 'react'

import { Link } from 'react-router-dom'

const DatabaseHeader = () => {
  return (
    <div className='db-footer-container'>
      {/* <Link to='/about'>
        <p className='footer-link-text'>About</p>
      </Link> */}
      <p className='db-footer-copyright-text'>{'\u00a9'} 2017 High Speech Gaming</p>
    </div>
  )
}

export default DatabaseHeader