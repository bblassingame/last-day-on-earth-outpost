import React from 'react'

import DatabaseArmorTable from './database-armor-table'
import DatabaseCraftingTable from './database-crafting-table'
import DatabaseItemImagePanel from './database-item-image-panel'

const DatabaseArmorItem = (props) => {
  return (
    <div className='db-item-info-container'>
      <h1 className='db-item-info-header'>{props.name}</h1>
      <p className='db-item-category-text'>categories:  {props.categories.map((category, i) => <span key={i} className='db-item-category'>{category}</span>)}</p>
      <div>
        <DatabaseItemImagePanel inGameStatus={props.inGameStatus} img={props.img} inGameDescription={props.inGameDescription} />
        <div>
          <p/>
        </div>
      </div>
      <DatabaseArmorTable armorData={props.armorData} name={props.name} />
      <DatabaseCraftingTable
        craftable={props.craftable} 
        craftingMaterialsList={props.craftingMaterialsList} 
        craftPoints={props.craftPoints} 
        craftRequiredLevel={props.craftRequiredLevel} />
    </div>
  )
}

export default DatabaseArmorItem