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
        {renderWeaponModSelectionPanel(props.weaponModificationData, props.selectedType, props.selectedName)}
      </div>
    </form>
  )
}

const renderWeaponModSelectionPanel = (weaponModificationData, selectedType = 'Magazine', selectedName = 'Extended Magazine') => {
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
  elements.push(renderWeaponModTypes(modTypes, key++, selectedType))
  elements.push(renderWeaponModNames(modNames, key++, selectedName))
  elements.push(renderWeaponModStats(modStats, key++))

  return elements
}

const renderWeaponModTypes = (modTypes, key, selectedType) => {
  const elements = modTypes.map((modType, index) => renderWeaponModTypeRadios(modType, index, selectedType))
  return (
    <div key={key} className='weapon-mods-types-container weapon-mods-type-width'>
      {elements}
    </div>
  )
}

const renderWeaponModTypeRadios = (modType, index, selectedType) => {
  let elements = []
  let inputRow = null

  if(modType.type === selectedType)
    inputRow = <input type='radio' name='type' id={getURLString(modType.type)} checked />
  else
    inputRow = <input type='radio' name='type' id={getURLString(modType.type)} />

  elements.push(
    <div key={index} className='weapon-mods-input-container'>
      {inputRow}
      <label className='weapon-mods-text' htmlFor={getURLString(modType.type)}>{modType.type}</label>
    </div>
  )

  return elements
}

const renderWeaponModNames = (modNames, key, selectedName) => {
  return (
    <div key={key} className='weapon-mods-names-container weapon-mods-name-width'>
      {renderWeaponModNameRadios(modNames, selectedName)}
    </div>
  )
}

const renderWeaponModNameRadios = (modNames, selectedName) => {
  let elements = []

  // create the 'None' entry for the mod Names so that the user can deselect a modification
  renderWeaponModNameRadio(elements, 'None', 'None', 0, selectedName)

  // iterate over the modification Names and add them to our list
  modNames.map((modName, index) => {
    renderWeaponModNameRadio(elements, modName.name, getURLString(modName.name), index + 1, selectedName)
  })

  return elements
}

const renderWeaponModNameRadio = (elements, name, urlName, index, selectedName) => {
  // check whether the selected name matches the row we're rendering to know what to set the checked value
  let inputRow = null
  if(name === selectedName)
    inputRow = <input type='radio' name='name' id={urlName} checked />
  else 
    inputRow = <input type='radio' name='name' id={urlName} />

  // push a radio button row to the elements
  elements.push (
    <div key={index+1} className='weapon-mods-input-container'>
      {inputRow}
      <label className='weapon-mods-text' htmlFor={urlName}>{name}</label>
    </div>
  )
}

const renderWeaponModStats = (modStats, key) => {
  // return early if the stats are null; this happens when 'None' is the selected modification Name
  if(null === modStats || 'undefined' === typeof(modStats))
    return null

  let elements = []
  modStats.map((modStat, index) => renderWeaponModStatRows(elements, modStat, index))
  return (
    <div key={key} className='weapon-mods-mods-container weapon-mods-mod-width'>
      <div className='weapon-mods-stats-container'>
        {elements}
      </div>
    </div>
  )
}

const renderWeaponModStatRows = (elements, modStat, index) => {
  elements.push (
    <p key={index} className='weapon-mods-text'>
      <span>{modStat.stat}&nbsp;</span>
      <span>{renderWeaponModStatChange(modStat.statModification)}</span>
    </p>
  )
}

const renderWeaponModStatChange = (statChange) => {
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