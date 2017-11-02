import React from 'react'
import ReactGA from 'react-ga'

import TLogo from './twitter-white-128.png'

const TwitterLogo = () => {
  return (
    <div className='social-img-container'>
      <ReactGA.OutboundLink eventLabel='Click To Twitter' to='https://twitter.com/lastdaysurvival?lang=en'>
        <img className='social-img' src={TLogo} alt='The official Last Day On Earth: Survival twitter account' />
      </ReactGA.OutboundLink>
    </div>
  )
}

export default TwitterLogo