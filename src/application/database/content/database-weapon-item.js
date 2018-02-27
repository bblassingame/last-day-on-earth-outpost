import React from 'react'

import DatabaseCraftingTable from './database-crafting-table'

const DatabaseWeaponItem = (props) => {
  return (
    getIngredientPanel(props)
  )
}

const getIngredientPanel = (props) => {
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
      <div>
        <table className='db-item-weapon-table'>
          <thead>
            <tr>
              <th colSpan='2'>Weapon Stats</th>
            </tr>
          </thead>
          <tbody className='db-item-weapon-table-body'>
            <tr>
              <td>Dmg</td>
              <td className='db-item-weapon-table-body-col2'>10</td>
            </tr>
            <tr>
              <td>Sneak Dmg</td>
              <td className='db-item-weapon-table-body-col2'>30</td>
            </tr>
            <tr>
              <td>Rate (s)</td>
              <td className='db-item-weapon-table-body-col2'>1.0</td>
            </tr>
            <tr>
              <td>DPS</td>
              <td className='db-item-weapon-table-body-col2'>10</td>
            </tr>
            <tr>
              <td>Durability</td>
              <td className='db-item-weapon-table-body-col2'>60</td>
            </tr>
            <tr>
              <td>Total Dmg</td>
              <td className='db-item-weapon-table-body-col2'>600</td>
            </tr>
          </tbody>
        </table>
      </div>
      <DatabaseCraftingTable
        craftable={props.craftable} 
        craftingMaterialsList={props.craftingMaterialsList} 
        craftPoints={props.craftPoints} 
        craftRequiredLevel={props.craftRequiredLevel} />
    </div>
  )
}



export default DatabaseWeaponItem