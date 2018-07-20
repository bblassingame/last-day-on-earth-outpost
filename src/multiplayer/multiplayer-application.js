import React from 'react'

import MultiplayerHeader from './header/multiplayer-header'
import MultiplayerContent from './content/multiplayer-content'
import MultiplayerFooter from './footer/multiplayer-footer'

import './multiplayer-application-style.css'

const multiplayerApplication = () => {
  return (
    <div className='multiplayer-container'>
      <MultiplayerHeader />
      <MultiplayerContent />
      <MultiplayerFooter />
    </div>
  )
}

export default multiplayerApplication