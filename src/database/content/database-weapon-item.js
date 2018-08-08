import React from 'react'

import DatabaseWeaponStatsAndMods from './database-weapon-stats-mods'
import DatabaseCraftingTable from './database-crafting-table'
import DatabaseItemImagePanel from './database-item-image-panel'
import DatabaseItemLinks from './database-item-links'

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
        <DatabaseItemImagePanel inGameStatus={props.inGameStatus} img={props.img} inGameDescription={props.inGameDescription} />
        <div>
          <p/>
        </div>
      </div>
      <DatabaseWeaponStatsAndMods weaponData={props.weaponData} name={props.name} weaponModificationData={WeaponModificationData[0]} />
      <DatabaseCraftingTable
        craftable={props.craftable} 
        craftingMaterialsList={props.craftingMaterialsList} 
        craftPoints={props.craftPoints} 
        craftRequiredLevel={props.craftRequiredLevel} />
      <DatabaseItemLinks itemName={props.name} />
    </div>
  )
}

const WeaponModificationData = [
  {
    weaponName: 'AK-47',  
    modTypes: [
      {
        type: 'Magazine',
        modNames: [
          {
            name: 'Double Magazine',
            modStats: [
              {
                stat: 'Durability',
                statModification: 2,
              },
            ]
          },
          {
            name: 'Extended Magazine',
            modStats: [
              {
                stat: 'Durability',
                statModification: 3,
              },
              {
                stat: 'Crit. Chance',
                statModification: 2,
              },
              {
                stat: 'Stability',
                statModification: -1,
              },
            ]
          },
          {
            name: 'Large Magazine',
            modStats: [
              {
                stat: 'Durability',
                statModification: 3,
              },
              {
                stat: 'Crit. Damage',
                statModification: 2,
              },
              {
                stat: 'Stability',
                statModification: -1,
              },
            ]
          },
        ],
      },
      {
        type: 'Sight',
        modNames: [
          {
            name: 'Mechanical Sight',
            modStats: [
              {
                stat: 'Crit. Damage',
                statModification: 1,
              },
            ]
          },
          {
            name: 'Red Dot Sight',
            modStats: [
              {
                stat: 'Damage',
                statModification: 1,
              },
              {
                stat: 'Speed',
                statModification: -1,
              },
            ]
          },
          {
            name: 'Sight x2',
            modStats: [
              {
                stat: 'Damage',
                statModification: 2,
              },
              {
                stat: 'Speed',
                statModification: -2,
              },
              {
                stat: 'Range',
                statModification: 1,
              },
            ]
          },
          {
            name: 'Sight x4',
            modStats: [
              {
                stat: 'Crit. Chance',
                statModification: 3,
              },
              {
                stat: 'Crit. Damage',
                statModification: 2,
              },
              {
                stat: 'Speed',
                statModification: -1,
              },
              {
                stat: 'Range',
                statModification: 2,
              },
            ]
          },
          {
            name: 'Sight x8',
            modStats: [
            ]
          },
        ],
      },
      {
        type: 'Barrel',
        modNames: [
        ],
      },
      {
        type: 'Stock',
        modNames: [
        ],
      },
      {
        type: 'Accessory',
        modNames: [
        ],
      },
    ],
  },
]

export default DatabaseWeaponItem