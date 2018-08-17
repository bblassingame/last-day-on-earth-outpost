import React from 'react'

import DatabaseWeaponMods from './database-weapon-mods'

const DAMAGE = 'Damage'
const CRIT_DAMAGE = 'Crit. Damage'
const CRIT_CHANCE = 'Crit. Chance'
const SPEED = 'Speed'
const DURABILITY = 'Durability'
const RANGE = 'Range'
const NOISE = 'Noise'
const STABILITY = 'Stability'
const WEIGHT = 'Weight'

// component variables
var annotations = null

class DatabaseWeaponStatsAndMods extends React.Component {
  constructor(props) {
    super(props)
    annotations = []
    this.isRanged = this.props.weaponData.sneakAttack == -1 ? true : false
    this.isFists = this.props.name === 'Fists' ? true : false

    this.handleTypeSelect = this.handleTypeSelect.bind(this)
    this.handleNameSelect = this.handleNameSelect.bind(this)
    this.handleShowRawStatsClicked  = this.handleShowRawStatsClicked.bind(this)

    let selectedMods = initializeSelectedMods(this.props.weaponModificationData)
    const firstMod = selectedMods.entries().next()

    let statIncreases = new Map()
    let statDecreases = new Map()
    let cumulativeStatChanges = new Map()
    initializeStatChanges(statIncreases, statDecreases, cumulativeStatChanges)

    this.state = {
      showRawStats: false,
      selectedType: firstMod.value[0],
      selectedName: firstMod.value[1],
      selectedMods,
      statIncreases,
      statDecreases,
      cumulativeStatChanges,
    }
  }

  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/
  /*                                                     REACT LIFECYCLE METHODS                                                          */
  
  render() {
    const statIncreases = this.state.statIncreases
    const statDecreases = this.state.statDecreases
    const cumulativeStatChanges = this.state.cumulativeStatChanges
    return (
      <div>
        <div>
          <table className='db-item-weapon-table'>
            <thead>
              <tr>
                <th className='db-item-weapon-table-header-cell' colSpan='2'>
                  <span className='db-item-weapon-table-header-span-container'>
                    <span className='db-item-weapon-table-header-span-left'>{'Weapon Stats'}</span>
                    <span className='db-item-weapon-table-header-span-right'>
                      <input type='checkbox' id='showRawStats' value='showRawStats' onChange={this.handleShowRawStatsClicked} checked={this.state.showRawStats} />
                      <label htmlFor='showRawStats'>{'Show Raw Stats'}</label>
                    </span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className='db-item-weapon-table-body'>
              <tr className='db-item-weapon-table-body-row'>
                <td className='db-item-weapon-table-body-col1'>{DAMAGE}</td>
                {formatStatValue(DAMAGE, getDamageValue(this.props.weaponData.damage), getDamageAnnotation(this.props.weaponData.damage), statIncreases.get(DAMAGE), statDecreases.get(DAMAGE), cumulativeStatChanges.get(DAMAGE), this.props.weaponStatsData)}
              </tr>
              <tr className='db-item-weapon-table-body-row'>
                <td className='db-item-weapon-table-body-col1'>{CRIT_DAMAGE}{this.isRanged ? createAnnotation('1') : ''}</td>
                {formatStatValue(CRIT_DAMAGE, getSneakDamageValue(this.props.weaponData.sneakAttack, this.props.weaponData.damage), getSneakDamageAnnotation(this.props.weaponData.sneakAttack), statIncreases.get(CRIT_DAMAGE), statDecreases.get(CRIT_DAMAGE), cumulativeStatChanges.get(CRIT_DAMAGE), this.props.weaponStatsData)}
              </tr>
              <tr className='db-item-weapon-table-body-row'>
                <td className='db-item-weapon-table-body-col1'>{CRIT_CHANCE}</td>
                {formatStatValue(CRIT_CHANCE, 5, null, statIncreases.get(CRIT_CHANCE), statDecreases.get(CRIT_CHANCE), cumulativeStatChanges.get(CRIT_CHANCE), this.props.weaponStatsData)}
              </tr>
              <tr className='db-item-weapon-table-body-row'>
                <td className='db-item-weapon-table-body-col1'>{SPEED}</td>
                {formatStatValue(SPEED, getRateValue(this.props.weaponData.speed), getRateAnnotation(this.props.weaponData.speed), statIncreases.get(SPEED), statDecreases.get(SPEED), cumulativeStatChanges.get(SPEED), this.props.weaponStatsData)}
              </tr>
              <tr className='db-item-weapon-table-body-row'>
                <td className='db-item-weapon-table-body-col1'>{DURABILITY}</td>
                {formatDurabilityValue(DURABILITY, getDurabilityValue(this.props.weaponData.durability), getDurabilityAnnotation(this.props.weaponData.durability), statIncreases.get(DURABILITY), statDecreases.get(DURABILITY), cumulativeStatChanges.get(DURABILITY), this.props.weaponStatsData)}
              </tr>
              <tr className='db-item-weapon-table-body-row'>
                <td className='db-item-weapon-table-body-col1'>{RANGE}</td>
                {formatStatValue(RANGE, 'short', null, statIncreases.get(RANGE), statDecreases.get(RANGE), cumulativeStatChanges.get(RANGE), this.props.weaponStatsData)}
              </tr>
              <tr className='db-item-weapon-table-body-row'>
                <td className='db-item-weapon-table-body-col1'>{NOISE}</td>
                {formatStatValue(NOISE, 'loud', null, statIncreases.get(NOISE), statDecreases.get(NOISE), cumulativeStatChanges.get(NOISE), this.props.weaponStatsData)}
              </tr>
              <tr className='db-item-weapon-table-body-row'>
                <td className='db-item-weapon-table-body-col1'>{STABILITY}</td>
                {formatStatValue(STABILITY, 'medium', null, statIncreases.get(STABILITY), statDecreases.get(STABILITY), cumulativeStatChanges.get(STABILITY), this.props.weaponStatsData)}
              </tr>
              <tr className='db-item-weapon-table-body-row'>
                <td className='db-item-weapon-table-body-col1'>{WEIGHT}</td>
                {formatStatValue(WEIGHT, 'high', null, statIncreases.get(WEIGHT), statDecreases.get(WEIGHT), cumulativeStatChanges.get(WEIGHT), this.props.weaponStatsData)}
              </tr>
              {/* <tr className='db-item-weapon-table-body-row'>
                <td className='db-item-weapon-table-body-col1'>DPS</td>
                {getDPSValue(this.props.weaponData.dps)}
              </tr> */}
              {/* <tr className='db-item-weapon-table-body-row'>
                <td className='db-item-weapon-table-body-col1'>Total Dmg</td>
                {getTotalDmgValue(this.props.weaponData.totalDamage, isFists)}
              </tr> */}
            </tbody>
          </table>
        </div>
        <DatabaseWeaponMods 
          weaponModificationData={this.props.weaponModificationData}
          weaponStatsData={this.props.weaponStatsData}
          selectedType={this.state.selectedType}
          selectedName={this.state.selectedName}
          onTypeSelected={this.handleTypeSelect}
          onNameSelected={this.handleNameSelect}
        />
        <div className='db-item-weapon-annotation-container'>
          {annotations.map((item, index) => renderAnnotationRow(item, index))}
        </div>
      </div>
    )
  }


  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/
  /*                                                          EVENT HANDLERS                                                              */

  handleTypeSelect(event) {
    this.setState({
      selectedType: event.target.value,
      selectedName: this.state.selectedMods.get(event.target.value),
    })
  }

  handleNameSelect(event) {
    // handle updating which mods are selected
    let selectedMods = updateSelectedMods(this.state.selectedMods, this.state.selectedType, event.target.value)

    // update the stats that may have changed
    let statIncreases = new Map()
    let statDecreases = new Map()
    let cumulativeStatChanges = new Map()
    updateStats(this.props.weaponModificationData, selectedMods, statIncreases, statDecreases, cumulativeStatChanges)

    this.setState({
      selectedName: event.target.value,
      selectedMods,
      statIncreases,
      statDecreases,
      cumulativeStatChanges,
    })
  }

  handleShowRawStatsClicked() {
    this.setState({
      showRawStats: !this.state.showRawStats,
    })
  }
}


/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
/*                                                        COMPONENT CREATION                                                            */

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

// we have broken out the duarbility stat because we do something special whenever we show fists
const formatDurabilityValue = (stat, value, annotation, statIncrease, statDecrease, statChange, weaponStatsData, isFists) => {
  // if we're showing fists, show the special fists annotation
  // no need to do all of the other stuff, just return
  if(value == -1 && true === isFists){
    return (
      <td className='db-item-weapon-table-body-col2'>
        <span className='db-item-weapon-table-body-infinity'>{'\u221E'}</span>{createAnnotation('5')}
      </td>
    )
  }

  return formatStatValue(stat, value, annotation, statIncrease, statDecrease, statChange, weaponStatsData)
}

const formatStatValue = (stat, value, annotation, statIncrease, statDecrease, statChange, weaponStatsData) => {
  let statIncreaseDifference = 0
  let statDecreaseDifference = 0
  if(0 < statChange) {
    statIncreaseDifference = statIncrease - statChange
    statDecreaseDifference = statDecrease
  }
  else if(0 > statChange) {
    statIncreaseDifference = statIncrease
    statDecreaseDifference = statDecrease - statChange
  }

  // pull out the stat data that we're working with
  let statData = null
  for(let i = 0 ; i < weaponStatsData.length ; i++) {
    if(stat === weaponStatsData[i].statName) {
      statData = weaponStatsData[i]
      break
    }
  }

  if(statChange < 0 && statData.statIncreasePositive === true) // left red
    return (
      <td className='db-item-weapon-table-body-col2'>
        <span className='db-item-weapon-table-body-span-container'>
          <span className='db-item-weapon-table-body-span-left'>
            <span className='text-color-grey'>{getWeaponModStatChange(statDecreaseDifference)}</span>
            <span className='text-color-red'>{getWeaponModStatChange(statChange)}&nbsp;</span>
          </span>
          <span className='db-item-weapon-table-body-span-mid'>{value}{annotation}</span>
          <span className='db-item-weapon-table-body-span-right'>
            <span className='text-color-grey'>{getWeaponModStatChange(statIncreaseDifference)}</span>
          </span>
        </span>
      </td>
    )
  else if(statChange < 0 && statData.statIncreasePositive === false) // left green
    return (
      <td className='db-item-weapon-table-body-col2'>
        <span className='db-item-weapon-table-body-span-container'>
          <span className='db-item-weapon-table-body-span-left'>
            <span className='text-color-grey'>{getWeaponModStatChange(statDecreaseDifference)}</span>
            <span className='text-color-green'>{getWeaponModStatChange(statChange)}&nbsp;</span>
          </span>
          <span className='db-item-weapon-table-body-span-mid'>{value}{annotation}</span>
          <span className='db-item-weapon-table-body-span-right'>
            <span className='text-color-grey'>&nbsp;{getWeaponModStatChange(statIncreaseDifference)}</span>
          </span>
        </span>
      </td>
    )
  else if(statChange > 0 && statData.statIncreasePositive === false) // right red
    return (
      <td className='db-item-weapon-table-body-col2'>
        <span className='db-item-weapon-table-body-span-container'>
          <span className='db-item-weapon-table-body-span-left'>
            <span className='text-color-grey'>{getWeaponModStatChange(statDecreaseDifference)}&nbsp;</span>
          </span>
          <span className='db-item-weapon-table-body-span-mid'>{value}{annotation}</span>
          <span className='db-item-weapon-table-body-span-right'>
            <span className='text-color-red'>&nbsp;{getWeaponModStatChange(statChange)}</span>
            <span className='text-color-grey'>{getWeaponModStatChange(statIncreaseDifference)}</span>
          </span>
        </span>
      </td>
    )
  else if(statChange > 0 && statData.statIncreasePositive === true) // right green
    return (
      <td className='db-item-weapon-table-body-col2'>
        <span className='db-item-weapon-table-body-span-container'>
          <span className='db-item-weapon-table-body-span-left'>
            <span className='text-color-grey'>{getWeaponModStatChange(statDecreaseDifference)}&nbsp;</span>
          </span>
          <span className='db-item-weapon-table-body-span-mid'>{value}{annotation}</span>
          <span className='db-item-weapon-table-body-span-right'>
            <span className='text-color-green'>&nbsp;{getWeaponModStatChange(statChange)}</span>
            <span className='text-color-grey'>{getWeaponModStatChange(statIncreaseDifference)}</span>
          </span>
        </span>
      </td>
    )
  else // no stat change
    return (
      <td className='db-item-weapon-table-body-col2'>
        <span>{value}{annotation}</span>
      </td>
    )
}


/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
/*                                                        UTILITY FUNCTIONS                                                             */

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

  if(rawDmg == -1)
    dmgValue = 'N/A'
  else if(rawDmg < 0)
    dmgValue = '--'
  else if('string' === typeof(rawDmg) && Number(rawDmg) < 0)
    dmgValue = '--'
  else
    dmgValue = rawDmg

  return dmgValue
}

const getDamageAnnotation = (rawDmg) => {
  let annotation = ''

  if(rawDmg == -2)
    annotation = createAnnotation('2')
  else if(rawDmg == -3)
    annotation = createAnnotation('3')
  else if(rawDmg == -4)
    annotation = createAnnotation('4')

  return annotation
}

const getSneakDamageValue = (rawSneakDmg, rawDmg) => {
  let sneakDmg = ''

  if(rawSneakDmg == -1)
    sneakDmg = rawDmg
  else if(rawSneakDmg < 0)
    sneakDmg = '--'
  else if('string' === typeof(rawSneakDmg) && Number(rawSneakDmg) < 0)
    sneakDmg = '--'
  else
    sneakDmg = rawSneakDmg

  return sneakDmg
}

const getSneakDamageAnnotation = (rawSneakDmg) => {
  let annotation = ''

  if(rawSneakDmg == -2)
    annotation = createAnnotation('2')
  else if(rawSneakDmg == -3)
    annotation = createAnnotation('3')
  else if(rawSneakDmg == -4)
    annotation = createAnnotation('4')
    
  return annotation
}

const getRateValue = (rawRate) => {
  let rate = ''

  if(rawRate == -1)
    rate = 'N/A'
  else if(rawRate < 0)
    rate = '--'
  else if('string' === typeof(rawRate) && Number(rawRate) < 0)
    rate = '--'
  else
    rate = rawRate

  return rate
}

const getRateAnnotation = (rawRate) => {
  let annotation = ''

  if(rawRate == -2)
    annotation = createAnnotation('2')
  else if(rawRate == -3)
    annotation = createAnnotation('3')
  else if(rawRate == -4)
    annotation = createAnnotation('4')

  return annotation
}

const getDurabilityValue = (rawDurability) => {
  let durability = ''

  if(rawDurability == -1)
    durability = rawDurability
  else if(rawDurability < 0)
    durability = '--'
  else if('string' === typeof(rawDurability) && Number(rawDurability) < 0)
    durability = '--'
  else
    durability = rawDurability

  return durability
}

const getDurabilityAnnotation = (rawDurability) => {
  let annotation = ''

  if(rawDurability == -2)
    annotation = createAnnotation('2')
  else if(rawDurability == -3)
    annotation = createAnnotation('3')
  else if(rawDurability == -4)
    annotation = createAnnotation('4')

  return annotation
}

// we just initialize each modification type with 'None' when we first render the component
const initializeSelectedMods = (weaponModificationData) => {
  let selectedMods = new Map()

  weaponModificationData.modTypes.map( modType => selectedMods.set(modType.type, 'None') )

  return selectedMods
}

const initializeStatChanges = (cumulativeStatChanges, statIncreases, statDecreases) => {
  // init the stat increases
  statIncreases.set(DAMAGE, 0)
  statIncreases.set(CRIT_DAMAGE, 0)
  statIncreases.set(CRIT_CHANCE, 0)
  statIncreases.set(SPEED, 0)
  statIncreases.set(DURABILITY, 0)
  statIncreases.set(RANGE, 0)
  statIncreases.set(NOISE, 0)
  statIncreases.set(STABILITY, 0)
  statIncreases.set(WEIGHT, 0)
  // init the stat decreases
  statDecreases.set(DAMAGE, 0)
  statDecreases.set(CRIT_DAMAGE, 0)
  statDecreases.set(CRIT_CHANCE, 0)
  statDecreases.set(SPEED, 0)
  statDecreases.set(DURABILITY, 0)
  statDecreases.set(RANGE, 0)
  statDecreases.set(NOISE, 0)
  statDecreases.set(STABILITY, 0)
  statDecreases.set(WEIGHT, 0)
  // init the cumulative changes
  cumulativeStatChanges.set(DAMAGE, 0)
  cumulativeStatChanges.set(CRIT_DAMAGE, 0)
  cumulativeStatChanges.set(CRIT_CHANCE, 0)
  cumulativeStatChanges.set(SPEED, 0)
  cumulativeStatChanges.set(DURABILITY, 0)
  cumulativeStatChanges.set(RANGE, 0)
  cumulativeStatChanges.set(NOISE, 0)
  cumulativeStatChanges.set(STABILITY, 0)
  cumulativeStatChanges.set(WEIGHT, 0)
}

// iterate over the modifications and update the selected mods based on the current selected Type and newly selected Name
const updateSelectedMods = (selectedMods, curType, newName) => {
  let newMods = new Map()
  let it = selectedMods.entries()
  let entry = it.next()

  // iterate over the mod Types and look for the one the user is currently working with
  while(false === entry.done) {
    if(entry.value[0] === curType)
      newMods.set(curType, newName) // update the currently selected Type with the newly selected Name
    else
      newMods.set(entry.value[0], entry.value[1]) // add the Type and Name that are not currently being worked with

    entry = it.next() // don't forget to increment the iterator or we get a fun inifinte loop
  }

  return newMods
}

const updateStats = (weaponModificationData, selectedMods, statIncreases, statDecreases, cumulativeStatChanges) => {
  let incDamage = 0
  let decDamage = 0
  let incCritDamage = 0
  let decCritDamage = 0
  let incCritChance = 0
  let decCritChance = 0
  let incSpeed = 0
  let decSpeed = 0
  let incDurability = 0
  let decDurability = 0
  let incRange = 0
  let decRange = 0
  let incNoise = 0
  let decNoise = 0
  let incStability = 0
  let decStability = 0
  let incWeight = 0
  let decWeight = 0

  // iterate over the selected modifications and tally the stat increases and decreases
  let modsIterator = selectedMods.entries()
  let mod = modsIterator.next()
  while(false === mod.done) {

    const modStats = getModStatsFromWeaponModData(weaponModificationData, mod.value)
    if(null === modStats) {// check if there are stats to compute.  If there's not, then 'None' is the selected Name
      mod = modsIterator.next()
      continue
    }

    for(let i = 0 ; i < modStats.length ; i++) {
      switch(modStats[i].stat) {

        case DAMAGE:
          if(modStats[i].statModification > 0)
            incDamage += modStats[i].statModification
          else
            decDamage += modStats[i].statModification
          break

        case CRIT_DAMAGE:
          if(modStats[i].statModification > 0)
            incCritDamage += modStats[i].statModification
          else
            decCritDamage += modStats[i].statModification
          break

        case CRIT_CHANCE:
          if(modStats[i].statModification > 0)
            incCritChance += modStats[i].statModification
          else
            decCritChance += modStats[i].statModification
          break

        case SPEED:
          if(modStats[i].statModification > 0)
            incSpeed += modStats[i].statModification
          else
            decSpeed += modStats[i].statModification
          break

        case DURABILITY:
          if(modStats[i].statModification > 0)
            incDurability += modStats[i].statModification
          else
            decDurability += modStats[i].statModification
          break

        case RANGE:
          if(modStats[i].statModification > 0)
            incRange += modStats[i].statModification
          else
            decRange += modStats[i].statModification
          break

        case NOISE:
          if(modStats[i].statModification > 0)
            incNoise += modStats[i].statModification
          else
            decNoise += modStats[i].statModification
          break

        case STABILITY:
          if(modStats[i].statModification > 0)
            incStability += modStats[i].statModification
          else
            decStability += modStats[i].statModification
          break

        case WEIGHT:
          if(modStats[i].statModification > 0)
            incWeight += modStats[i].statModification
          else
            decWeight += modStats[i].statModification
          break

        default:

      }
    }

    mod = modsIterator.next()
  }

  updateStatMaps(statIncreases, statDecreases, cumulativeStatChanges, DAMAGE,       incDamage,      decDamage)
  updateStatMaps(statIncreases, statDecreases, cumulativeStatChanges, CRIT_DAMAGE,  incCritDamage,  decCritDamage)
  updateStatMaps(statIncreases, statDecreases, cumulativeStatChanges, CRIT_CHANCE,  incCritChance,  decCritChance)
  updateStatMaps(statIncreases, statDecreases, cumulativeStatChanges, SPEED,        incSpeed,       decSpeed)
  updateStatMaps(statIncreases, statDecreases, cumulativeStatChanges, DURABILITY,   incDurability,  decDurability)
  updateStatMaps(statIncreases, statDecreases, cumulativeStatChanges, RANGE,        incRange,       decRange)
  updateStatMaps(statIncreases, statDecreases, cumulativeStatChanges, NOISE,        incNoise,       decNoise)
  updateStatMaps(statIncreases, statDecreases, cumulativeStatChanges, STABILITY,    incStability,   decStability)
  updateStatMaps(statIncreases, statDecreases, cumulativeStatChanges, WEIGHT,       incWeight,      decWeight)
}

const getModStatsFromWeaponModData = (weaponModificationData, mod) => {
  const modTypes = weaponModificationData.modTypes
  let modNames = null
  const type = mod[0]
  const name = mod[1]
  for(let i = 0 ; i < modTypes.length ; i++)
  {
    if(type === modTypes[i].type)
    {
      modNames = modTypes[i].modNames
      for(let j = 0 ; j < modNames.length ; j++)
      {
        if(name === modNames[j].name)
        {
          return modNames[j].modStats
        }
      }
    }
  }

  return null
}

const updateStatMaps = (statIncreases, statDecreases, cumulativeStatChanges, stat, inc, dec) => {
  statIncreases.set(stat, inc)
  statDecreases.set(stat, dec)
  cumulativeStatChanges.set(stat, inc + dec)
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


/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
/*                                                             DATA                                                                     */

const annotationData = 
[
  ['1', 'Ranged weapons do not deal additional damage with a sneak attack'],
  ['2', 'We are still researching this value'],
  ['3', 'This item or property are not active in the game yet'],
  ['4', 'This item was seasonal and we didn\'t get the stat before the item was removed'],
  ['5', 'While entirely possible to do unlimited damage with your fists, it may not be your best idea'],
]

export default DatabaseWeaponStatsAndMods