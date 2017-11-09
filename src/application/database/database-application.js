import React from 'react'

import DatabaseHeader from './header/database-header'

// import './reset.css'
// import './database-application-style.css'

const DatabaseApplication = () => {
  return (
    <div>
      <DatabaseHeader />
    </div>
  )
}

export default DatabaseApplication

const ItemData = {
  id: 0,
  category: 'consumable',
  name: 'Pine Log',
  craftTime: null,
  gameVersion: '1.6.7',
  released: true,
  inGameDescription: 'Can be cut into Planks or used as Fuel',
  outpostDescription: 'This is the description provded by The Outpost',
  movementSpeedEffect: null,
  image: null,
}