import React from 'react'

import CraftImage from './craft-point-icon.png'

const DatabaseCraftingTable = (props) => {
  if(false == props.craftable) // using '==' because we're using a string, not a number
    return null
  
  return (
    <div className='db-item-crafting-table-container'>
      <div className='db-item-crafting-table-header-container'>
        <h1 className='db-item-crafting-table-heading'>Crafting</h1>
        <span className='db-item-crafting-table-craft-level'>Lvl {props.craftRequiredLevel}</span> {/* <-------  START HERE:  pass in props to get the level and points set correctly */}
        <img src={CraftImage} />
        <span className='db-item-crafting-table-craft-points'>{props.craftPoints}</span>
      </div>
      {createCraftingTableEntries(props.craftingMaterialsList)}
    </div>
  )
}

const createCraftingTableEntries = (craftingMaterialsList) => {
  return (
    <div>
      {craftingMaterialsList.map((craftingMaterial, index) => createCraftingTableRow(craftingMaterial, index))}
    </div>
  )
}

const createCraftingTableRow = (craftingMaterial, index) => {
  return (
    <div key={index} className='db-item-crafting-table-row'>
      <img className='db-item-crafting-table-row-image' src={craftingMaterial['img']} />
      <span className='db-item-crafting-table-row-text'>{craftingMaterial['name']}</span>
      <span>x{craftingMaterial['quantity']}</span>
    </div>
  )
}

export default DatabaseCraftingTable