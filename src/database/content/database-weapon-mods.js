import React from 'react'

import { getURLString } from '../../utility/regex-utils'

const DatabaseWeaponMods = (props) => {
  return (
    <form className='weapon-mods-container'>
      <h2 className='weapon-mods-heading'>
        <span className='weapon-mods-type-width'>Type</span>
        <span className='weapon-mods-name-width'>Name</span>
        <span className='weapon-mods-mod-width'>Mod</span>
      </h2>
      <div className='weapon-mods-data-container'>
        {renderWeaponModSelectionPanel(props.weaponModificationData, props.weaponStatsData, props.selectedType, props.selectedName, props.onTypeSelected, props.onNameSelected)}
      </div>
    </form>
  )
}

const renderWeaponModSelectionPanel = (weaponModificationData, weaponStatsData, selectedType, selectedName, onTypeSelected, onNameSelected) => {
  let elements = []

  const modTypes = weaponModificationData.modTypes

  let modNames = null
  for(let i = 0 ; i < modTypes.length && typeof(modTypes) !== 'undefined' ; i++) {
    if(modTypes[i].type === selectedType) {
      modNames = modTypes[i].modNames
      break
    }
  }

  let modStats = null
  for(let i = 0 ; i < modNames.length && typeof(modNames) !== 'undefined' ; i++) {
    if(modNames[i].name === selectedName)
      modStats = modNames[i].modStats
  }

  let key = 0
  elements.push(renderWeaponModTypes(modTypes, key++, selectedType, onTypeSelected))
  elements.push(renderWeaponModNames(modNames, key++, selectedName, onNameSelected))
  elements.push(renderWeaponModStats(modStats, key++, weaponStatsData))

  return elements
}


/*********************************   Weapon Types Radio Panel   *********************************/

const renderWeaponModTypes = (modTypes, key, selectedType, onTypeSelected) => {
  const elements = modTypes.map((modType, index) => renderWeaponModTypeRadios(modType, index, selectedType, onTypeSelected))
  return (
    <div key={key} className='weapon-mods-types-container weapon-mods-type-width'>
      {elements}
    </div>
  )
}

const renderWeaponModTypeRadios = (modType, index, selectedType, onTypeSelected) => {
  let elements = []

  let checkedValue = false
  if(modType.type === selectedType)
    checkedValue = true

  elements.push(
    <div key={index} className='weapon-mods-input-container'>
      <input type='radio' name='type' id={getURLString(modType.type)} value={modType.type} onChange={onTypeSelected} checked={checkedValue} />
      <label className='weapon-mods-text' htmlFor={getURLString(modType.type)}>{modType.type}</label>
    </div>
  )

  return elements
}


/*********************************   Weapon Names Radio Panel   *********************************/

const renderWeaponModNames = (modNames, key, selectedName, onNameSelected) => {
  return (
    <div key={key} className='weapon-mods-names-container weapon-mods-name-width'>
      {renderWeaponModNameRadios(modNames, selectedName, onNameSelected)}
    </div>
  )
}

const renderWeaponModNameRadios = (modNames, selectedName, onNameSelected) => {
  let elements = []

  // create the 'None' entry for the mod Names so that the user can deselect a modification
  renderWeaponModNameRadio(elements, 'None', 'None', 0, selectedName, onNameSelected)

  // iterate over the modification Names and add them to our list
  modNames.map((modName, index) => {
    renderWeaponModNameRadio(elements, modName.name, getURLString(modName.name), index + 1, selectedName, onNameSelected)
  })

  return elements
}

const renderWeaponModNameRadio = (elements, name, urlName, index, selectedName, onNameSelected) => {
  // check whether the selected name matches the row we're rendering to know what to set the checked value
  let checkedValue = false
  if(name === selectedName)
    checkedValue = true

  // push a radio button row to the elements
  elements.push (
    <div key={index+1} className='weapon-mods-input-container'>
      <input type='radio' name='name' id={urlName} value={name} onChange={onNameSelected} checked={checkedValue} />
      <label className='weapon-mods-text' htmlFor={urlName}>{name}</label>
    </div>
  )
}


/*********************************   Weapon Stats Panel   *********************************/

const renderWeaponModStats = (modStats, key, weaponStatsData) => {
  // return early if the stats are null; this happens when 'None' is the selected modification Name
  if(null === modStats || 'undefined' === typeof(modStats))
    return null

  let elements = []
  modStats.map((modStat, index) => renderWeaponModStatRows(elements, modStat, index, weaponStatsData))
  return (
    <div key={key} className='weapon-mods-mods-container weapon-mods-mod-width'>
      <div className='weapon-mods-stats-container'>
        {elements}
      </div>
    </div>
  )
}

const renderWeaponModStatRows = (elements, modStat, index, weaponStatsData) => {
  let statData = null
  for(let i = 0 ; i < weaponStatsData.length ; i++) {
    if(modStat.stat === weaponStatsData[i].statName) {
      statData = weaponStatsData[i]
      break
    }
  }

  let classNameValue = 'text-color-green'
  if(modStat.statModification < 0 && statData.statIncreasePositive === true)
    classNameValue = 'text-color-red'
  else if(modStat.statModification > 0 && statData.statIncreasePositive === false)
    classNameValue = 'text-color-red'

  elements.push (
    <p key={index} className='weapon-mods-text'>
      <span>{modStat.stat}&nbsp;</span>
      <span className={classNameValue}>{getWeaponModStatChange(modStat.statModification)}</span>
    </p>
  )
}

const getWeaponModStatChange = (statChange) => {
  let temp = ''

  for(let i = 0 ; i < Math.abs(statChange) ; i++ ) {
    if(0 > statChange)
      temp += '-'
    else if(0 < statChange)
      temp += '+'
  }

  return temp
}

export default DatabaseWeaponMods