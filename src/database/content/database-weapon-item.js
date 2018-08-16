import React from 'react'

import DatabaseWeaponStatsAndMods from './database-weapon-stats-mods'
import DatabaseCraftingTable from './database-crafting-table'
import DatabaseItemImagePanel from './database-item-image-panel'
import DatabaseItemLinks from './database-item-links'

const DAMAGE = 'Damage'
const CRIT_DAMAGE = 'Crit. Damage'
const CRIT_CHANCE = 'Crit. Chance'
const SPEED = 'Speed'
const DURABILITY = 'Durability'
const RANGE = 'Range'
const NOISE = 'Noise'
const STABILITY = 'Stability'
const WEIGHT = 'Weight'

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
      <DatabaseWeaponStatsAndMods 
        weaponData={props.weaponData}
        name={props.name}
        weaponModificationData={WeaponModificationData[0]}
        weaponStatsData={WeaponStatsData}
      />
      <DatabaseCraftingTable
        craftable={props.craftable} 
        craftingMaterialsList={props.craftingMaterialsList} 
        craftPoints={props.craftPoints} 
        craftRequiredLevel={props.craftRequiredLevel} />
      <DatabaseItemLinks itemName={props.name} />
    </div>
  )
}

const WeaponStatsData = [
  {
    statName: DAMAGE,
    statAppliesTo: 'All',
    statIncreasePositive: true,
  },
  {
    statName: CRIT_DAMAGE,
    statAppliesTo: 'All',
    statIncreasePositive: true,
  },
  {
    statName: CRIT_CHANCE,
    statAppliesTo: 'All',
    statIncreasePositive: true,
  },
  {
    statName: SPEED,
    statAppliesTo: 'All',
    statIncreasePositive: true,
  },
  {
    statName: DURABILITY,
    statAppliesTo: 'All',
    statIncreasePositive: true,
  },
  {
    statName: RANGE,
    statAppliesTo: 'All',
    statIncreasePositive: true,
  },
  {
    statName: NOISE,
    statAppliesTo: 'Ranged',
    statIncreasePositive: false,
  },
  {
    statName: STABILITY,
    statAppliesTo: 'Ranged',
    statIncreasePositive: true,
  },
  {
    statName: WEIGHT,
    statAppliesTo: 'All',
    statIncreasePositive: false,
  },
]

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
          {
            name: 'Compensator',
            modStats: [
              {
                stat: 'Crit. Chance',
                statModification: 3,
              },
              {
                stat: 'Durability',
                statModification: -2,
              },
              {
                stat: 'Noise',
                statModification: 1,
              },
              {
                stat: 'Stability',
                statModification: 2,
              },
            ]
          },
          {
            name: 'Compensator Modified',
            modStats: [
              {
                stat: 'Damage',
                statModification: 2,
              },
              {
                stat: 'Durability',
                statModification: -2,
              },
              {
                stat: 'Noise',
                statModification: 1,
              },
              {
                stat: 'Stability',
                statModification: -2,
              },
            ]
          },
          {
            name: 'Flash Hider',
            modStats: [
              {
                stat: 'Crit. Chance',
                statModification: 1,
              },
              {
                stat: 'Crit. Damage',
                statModification: 1,
              },
            ]
          },
          {
            name: 'Silencer',
            modStats: [
              {
                stat: 'Damage',
                statModification: 2,
              },
              {
                stat: 'Crit. Chance',
                statModification: 2,
              },
              {
                stat: 'Durability',
                statModification: -1,
              },
              {
                stat: 'Range',
                statModification: -2,
              },
              {
                stat: 'Noise',
                statModification: -2,
              },
            ]
          },
        ],
      },
      {
        type: 'Stock',
        modNames: [
          {
            name: 'No Stock (empty)',
            modStats: [
              {
                stat: 'Damage',
                statModification: 2,
              },
              {
                stat: 'Crit. Damage',
                statModification: 1,
              },
              {
                stat: 'Durability',
                statModification: -3,
              },
              {
                stat: 'Stability',
                statModification: -3,
              },
            ]
          },
          {
            name: 'Reinforced Stock',
            modStats: [
              {
                stat: 'Damage',
                statModification: 2,
              },
            ]
          },
          {
            name: 'Light Stock',
            modStats: [
              {
                stat: 'Crit. Chance',
                statModification: 1,
              },
              {
                stat: 'Crit. Damage',
                statModification: 1,
              },
            ]
          },
          {
            name: 'Tactical Stock',
            modStats: [
              {
                stat: 'Crit. Chance',
                statModification: 2,
              },
              {
                stat: 'Crit. Damage',
                statModification: 1,
              },
              {
                stat: 'Speed',
                statModification: 1,
              },
            ]
          },
        ],
      },
      {
        type: 'Accessory',
        modNames: [
          {
            name: 'Laser Red',
            modStats: [
              {
                stat: 'Crit. Damage',
                statModification: 1,
              },
            ]
          },
          {
            name: 'Laser Green',
            modStats: [
              {
                stat: 'Crit. Chance',
                statModification: 2,
              },
            ]
          },
          {
            name: 'Grenade Launcher (active skill)',
            modStats: [
            ]
          },
          {
            name: 'Knife (active skill)',
            modStats: [
            ]
          },
        ],
      },
    ],
  },
]

export default DatabaseWeaponItem