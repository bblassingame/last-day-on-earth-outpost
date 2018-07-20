import React from 'react'
import ReactGA from 'react-ga'

import RLogo from './reddit-outline-white-128.png'

const RedditLogo = () => {
  return (
    <div className='social-img-container'>
      <ReactGA.OutboundLink eventLabel='Click To Reddit' to='https://www.reddit.com/subreddits/search?q=last+day+on+earth'>
        <img className='social-img' src={RLogo} alt='Check out Last Day On Earth: Survival on Reddit' />
      </ReactGA.OutboundLink>
    </div>
  )
}

export default RedditLogo