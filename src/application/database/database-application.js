import React from 'react'

import DatabaseHeader from './header/database-header'
import DatabaseContent from './content/database-content'
import DatabaseFooter from './footer/database-footer'

import './database-application-style.css'

const DatabaseApplication = () => {
  return (
    <div className='db-application-content'>
      <DatabaseHeader />
      <DatabaseContent />
      <DatabaseFooter />
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