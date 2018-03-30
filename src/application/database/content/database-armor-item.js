import React from 'react'

import DatabaseArmorTable from './database-armor-table'
import DatabaseCraftingTable from './database-crafting-table'

const DatabaseArmorItem = (props) => {
  return (
    <div className='db-item-info-container'>
      <h1 className='db-item-info-header'>{props.name}</h1>
      <p className='db-item-category-text'>categories:  {props.categories.map((category, i) => <span key={i} className='db-item-category'>{category}</span>)}</p>
      <div>
        <div className='db-item-pic-desc-container'>
          <img className='db-item-pic' src={props.img} />
          <p className='db-item-desc'>&quot;{props.inGameDescription}&quot;</p>
        </div>
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