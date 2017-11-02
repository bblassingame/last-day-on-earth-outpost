import React from 'react'
import ReactGA from 'react-ga'

import FBLogo from './facebook-white-128.png'

const FacebookLogo = () => {
  return (
    <div className='social-img-container'>
      <ReactGA.OutboundLink eventLabel='Click To Facebook' to='https://www.facebook.com/jugandoconfuerza/'>
        <img className='social-img' src={FBLogo} alt='Check out Fuerza on Facebook' />
      </ReactGA.OutboundLink>
    </div>
  )
}

export default FacebookLogo