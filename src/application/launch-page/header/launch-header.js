import React from 'react'

import FacebookLogo from './social/facebook-logo'
import YoutubeLogo from './social/youtube-logo'
// import TwitterLogo from './social/twitter-logo'
// import RedditLogo from './social/reddit-logo'

const LaunchHeader = () => {
  return (
    <div className='header-content'>
      <div className='social-container'>
        <FacebookLogo />
        <YoutubeLogo />
        {/* <TwitterLogo /> */}
        {/* <RedditLogo /> */}
      </div>
      <div>
        <h1>The Outpost</h1>
        <p>Last Day On Earth: Survival{'\u2122'}</p>
      </div>
    </div>
  )
}

export default LaunchHeader