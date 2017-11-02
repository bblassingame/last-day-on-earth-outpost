import React from 'react'
import ReactGA from 'react-ga'

import YTLogo from './youtube-white-128.png'

const YoutubeLogo = () => {
  return (
    <div className='social-img-container'>
      <ReactGA.OutboundLink eventLabel='Click To Youtube' to='https://www.youtube.com/channel/UCYEw2obvAbRIVtni8JVSKhw'>
        <img className='social-img' src={YTLogo} alt='Check out Fuerza on his Youtube channel for the latest updates and strategies' />
      </ReactGA.OutboundLink>
    </div>
  )
}

export default YoutubeLogo