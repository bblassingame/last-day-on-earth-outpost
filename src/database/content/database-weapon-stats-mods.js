import React from 'react'

// component variables
var annotations = null

const DatabaseWeaponStatsAndMods = (props) => {

  annotations = []
  const isRanged = props.weaponData.sneakAttack == -1 ? true : false
  const isFists = props.name === 'Fists' ? true : false

  return (
    <div>
      <div>
        <table className='db-item-weapon-table'>
          <thead>
            <tr>
              <th className='db-item-weapon-table-header-cell' colSpan='2'>Weapon Stats</th>
            </tr>
          </thead>
          <tbody className='db-item-weapon-table-body'>
            <tr className='db-item-weapon-table-body-row'>
              <td className='db-item-weapon-table-body-col1'>Damage</td>
              {getDamageValue(props.weaponData.damage)}
            </tr>
            <tr className='db-item-weapon-table-body-row'>
              <td className='db-item-weapon-table-body-col1'>Critical Damage{isRanged ? createAnnotation('1') : ''}</td>
              {getSneakDamageValue(props.weaponData.sneakAttack, props.weaponData.damage)}
            </tr>
            <tr className='db-item-weapon-table-body-row'>
              <td className='db-item-weapon-table-body-col1'>Critical Chance</td>
              <td className='db-item-weapon-table-body-col2'>{5}</td>
            </tr>
            <tr className='db-item-weapon-table-body-row'>
              <td className='db-item-weapon-table-body-col1'>Speed</td>
              {getRateValue(props.weaponData.speed)}
            </tr>
            <tr className='db-item-weapon-table-body-row'>
              <td className='db-item-weapon-table-body-col1'>Durability</td>
              {getDurabilityValue(props.weaponData.durability, isFists)}
            </tr>
            <tr className='db-item-weapon-table-body-row'>
              <td className='db-item-weapon-table-body-col1'>Range</td>
              <td className='db-item-weapon-table-body-col2'>{'short'}</td>
            </tr>
            <tr className='db-item-weapon-table-body-row'>
              <td className='db-item-weapon-table-body-col1'>Noise</td>
              <td className='db-item-weapon-table-body-col2'>{'loud'}</td>
            </tr>
            <tr className='db-item-weapon-table-body-row'>
              <td className='db-item-weapon-table-body-col1'>Stability</td>
              <td className='db-item-weapon-table-body-col2'>{'medium'}</td>
            </tr>
            <tr className='db-item-weapon-table-body-row'>
              <td className='db-item-weapon-table-body-col1'>Weight</td>
              <td className='db-item-weapon-table-body-col2'>{'high'}</td>
            </tr>
            {/* <tr className='db-item-weapon-table-body-row'>
              <td className='db-item-weapon-table-body-col1'>DPS</td>
              {getDPSValue(props.weaponData.dps)}
            </tr> */}
            {/* <tr className='db-item-weapon-table-body-row'>
              <td className='db-item-weapon-table-body-col1'>Total Dmg</td>
              {getTotalDmgValue(props.weaponData.totalDamage, isFists)}
            </tr> */}
          </tbody>
        </table>
      </div>
      <form className='weapon-mods-container'>
        <h2 className='weapon-mods-heading'>
          <span className='weapon-mods-type-width'>Type</span>
          <span className='weapon-mods-name-width'>Name</span>
          <span className='weapon-mods-mod-width'>Mod</span>
        </h2>
        <div className='weapon-mods-data-container'>
          <div className='weapon-mods-types-container weapon-mods-type-width'>
            <div className='weapon-mods-input-container'><input type='radio' name='type' id='Magazine'></input><label className='weapon-mods-text' htmlFor='Magazine'>Magazine</label></div>
            <div className='weapon-mods-input-container'><input type='radio' name='type' id='Sight'></input><label className='weapon-mods-text' htmlFor='Sight'>Sight</label></div>
            <div className='weapon-mods-input-container'><input type='radio' name='type' id='Barrel'></input><label className='weapon-mods-text' htmlFor='Barrel'>Barrel</label></div>
            <div className='weapon-mods-input-container'><input type='radio' name='type' id='Stock'></input><label className='weapon-mods-text' htmlFor='Stock'>Stock</label></div>
            <div className='weapon-mods-input-container'><input type='radio' name='type' id='Accessory'></input><label className='weapon-mods-text' htmlFor='Accessory'>Accessory</label></div>
          </div>
          <div className='weapon-mods-names-container weapon-mods-name-width'>
            <div className='weapon-mods-input-container'><input type='radio' name='name' id='None'></input><label className='weapon-mods-text' htmlFor='None'>None</label></div>
            <div className='weapon-mods-input-container'><input type='radio' name='name' id='Double Magazine'></input><label className='weapon-mods-text' htmlFor='Double Magazine'>Double Magazine</label></div>
            <div className='weapon-mods-input-container'><input type='radio' name='name' id='Extended Magazine'></input><label className='weapon-mods-text' htmlFor='Extended Magazine'>Extended Magazine</label></div>
            <div className='weapon-mods-input-container'><input type='radio' name='name' id='Large Magazine'></input><label className='weapon-mods-text' htmlFor='Large Magazine'>Large Magazine</label></div>
          </div>
          <div className='weapon-mods-mods-container weapon-mods-mod-width'>
            <div className='weapon-mods-stats-container'>
              <p className='weapon-mods-text'><span>Damage&nbsp;</span><span>+</span></p>
              <p className='weapon-mods-text'><span>Crit. Damage&nbsp;</span><span>--</span></p>
              <p className='weapon-mods-text'><span>Crit. Chance&nbsp;</span><span>-</span></p>
            </div>
          </div>
        </div>
      </form>
      <div className='db-item-weapon-annotation-container'>
        {annotations.map((item, index) => renderAnnotationRow(item, index))}
      </div>
    </div>
  )
}

// Raw Value Meanings:
// -1: not applicable for that stat
// -2: waiting to confirm stat
// -3: stat not in game yet; item not released
// -4: past event item; can't find stat
// Annotations:
// 1: sneak attack does no extra damage due to ranged weapon
// 2: still researching value for this property and/or item
// 3: item or value not in game
// 4: can't find value for this item; probably because it is a seasonal item
const getDamageValue = (rawDmg) => {
  let dmgValue = ''
  let annotation = ''

  if(rawDmg < 0)
    dmgValue = '--'
  else if('string' === typeof(rawDmg) && Number(rawDmg) < 0)
    dmgValue = '--'
  else
    dmgValue = rawDmg

  if(rawDmg == -1)
    dmgValue = 'N/A'
  else if(rawDmg == -2)
    annotation = createAnnotation('2')
  else if(rawDmg == -3)
    annotation = createAnnotation('3')
  else if(rawDmg == -4)
    annotation = createAnnotation('4')

  return (
    <td className='db-item-weapon-table-body-col2'>
      {dmgValue}{annotation}
    </td>
  )
}

const getSneakDamageValue = (rawSneakDmg, rawDmg) => {
  let sneakDmg = ''
  let annotation = ''

  if(rawSneakDmg < 0)
    sneakDmg = '--'
  else if('string' === typeof(rawSneakDmg) && Number(rawSneakDmg) < 0)
    sneakDmg = '--'
  else
    sneakDmg = rawSneakDmg

  if(rawSneakDmg == -1)
    sneakDmg = rawDmg
  else if(rawSneakDmg == -2)
    annotation = createAnnotation('2')
  else if(rawSneakDmg == -3)
    annotation = createAnnotation('3')
  else if(rawSneakDmg == -4)
    annotation = createAnnotation('4')
    
  return (
    <td className='db-item-weapon-table-body-col2'>
      {sneakDmg}{annotation}
    </td>
  )
}

const getRateValue = (rawRate) => {
  let rate = ''
  let annotation = ''

  if(rawRate < 0)
    rate = '--'
  else if('string' === typeof(rawRate) && Number(rawRate) < 0)
    rate = '--'
  else
    rate = rawRate

  if(rawRate == -1)
    rate = 'N/A'
  else if(rawRate == -2)
    annotation = createAnnotation('2')
  else if(rawRate == -3)
    annotation = createAnnotation('3')
  else if(rawRate == -4)
    annotation = createAnnotation('4')

  return (
    <td className='db-item-weapon-table-body-col2'>
      {rate}{annotation}
    </td>
  )
}

// const getDPSValue = (rawDps) => {
//   let dps = ''
//   let annotation = ''

//   if(rawDps < 0)
//     dps = '--'
//   else if('string' === typeof(rawDps) && Number(rawDps) < 0)
//     dps = '--'
//   else
//     dps = rawDps

//   if(rawDps == -1)
//     dps = 'N/A'
//   else if(rawDps == -2)
//     annotation = createAnnotation('2')
//   else if(rawDps == -3)
//     annotation = createAnnotation('3')
//   else if(rawDps == -4)
//     annotation = createAnnotation('4')

//   return (
//     <td className='db-item-weapon-table-body-col2'>
//       {dps}{annotation}
//     </td>
//   )
// }

const getDurabilityValue = (rawDurability, isFists) => {
  // if we're showing fists, show the special fists annotation
  // no need to do all of the other stuff, just return
  if(rawDurability == -1 && true === isFists){
    return (
      <td className='db-item-weapon-table-body-col2'>
        <span className='db-item-weapon-table-body-infinity'>{'\u221E'}</span>{createAnnotation('5')}
      </td>
    )
  }

  let durability = ''
  let annotation = ''

  if(rawDurability < 0)
    durability = '--'
  else if('string' === typeof(rawDurability) && Number(rawDurability) < 0)
    durability = '--'
  else
    durability = rawDurability

  if(rawDurability == -1)
    durability = rawDurability
  else if(rawDurability == -2)
    annotation = createAnnotation('2')
  else if(rawDurability == -3)
    annotation = createAnnotation('3')
  else if(rawDurability == -4)
    annotation = createAnnotation('4')

  return (
    <td className='db-item-weapon-table-body-col2'>
      {durability}{annotation}
    </td>
  )
}

// const getTotalDmgValue = (rawTotalDmg, isFists) => {
//   // if we're showing fists, show the special fists annotation
//   // no need to do all of the other stuff, just return
//   if(rawTotalDmg == -1 && true === isFists){
//     return (
//       <td className='db-item-weapon-table-body-col2'>
//         <span className='db-item-weapon-table-body-infinity'>{'\u221E'}</span>{createAnnotation('5')}
//       </td>
//     )
//   }

//   let totalDmg = ''
//   let annotation = ''

//   if(rawTotalDmg < 0)
//     totalDmg = '--'
//   else if('string' === typeof(rawTotalDmg) && Number(rawTotalDmg) < 0)
//     totalDmg = '--'
//   else
//     totalDmg = rawTotalDmg

//   if(rawTotalDmg == -1)
//     totalDmg = rawTotalDmg
//   else if(rawTotalDmg == -2)
//     annotation = createAnnotation('2')
//   else if(rawTotalDmg == -3)
//     annotation = createAnnotation('3')
//   else if(rawTotalDmg == -4)
//     annotation = createAnnotation('4')

//   return (
//     <td className='db-item-weapon-table-body-col2'>
//       {totalDmg}{annotation}
//     </td>
//   )
// }

const renderAnnotationRow = (item, index) => {
  // locate the annotation entry in our data
  let annotationToRender = null
  for(let j = 0 ; j < annotationData.length && annotationToRender === null ; j++) {
    if(item === annotationData[j][0])
      annotationToRender = annotationData[j]
  }

  return (
    <div key={index} className='db-item-weapon-annotation-entry'>
      <div className='db-item-weapon-annotation superscript'>
        {annotationToRender[0]}
      </div>
      <div>
        <span>{annotationToRender[1]}</span>
      </div>
    </div>
  )
}

const createAnnotation = (value) => {
  // add the annotation value so that we can add the reference below the table afterwards
  // be sure to check whether it's already there
  if(-1 === annotations.indexOf(value))
    annotations.push(value)

  return (
    <span className='superscript'>
      {value}
    </span>
  )
}

const annotationData = 
[
  ['1', 'Ranged weapons do not deal additional damage with a sneak attack'],
  ['2', 'We are still researching this value'],
  ['3', 'This item or property are not active in the game yet'],
  ['4', 'This item was seasonal and we didn\'t get the stat before the item was removed'],
  ['5', 'While entirely possible to do unlimited damage with your fists, it may not be your best idea'],
]

export default DatabaseWeaponStatsAndMods