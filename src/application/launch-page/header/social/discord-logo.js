import React from 'react'
import ReactGA from 'react-ga'

import DiscordChatLogo from './discord-white-128.png'

const DiscordLogo = () => {
  return (
    <div className='social-img-container'>
      <ReactGA.OutboundLink eventLabel='Click To Discord' to='https://discord.gg/9uwy7VU'>
        <img className='social-img' src={DiscordChatLogo} alt='Join The Outpost: LDOE Community On Discord' />
      </ReactGA.OutboundLink>
    </div>
  )
}

export default DiscordLogo