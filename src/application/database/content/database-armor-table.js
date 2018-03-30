import React from 'react'

// component variables
var annotations = null

const DatabaseArmorTable = (props) => {

  annotations = []
  const isGasMask = props.name === 'Gas Mask' ? true : false

  return (
    <div>
      <div>
        <table className='db-item-armor-table'>
          <thead>
            <tr>
              <th colSpan='2'>Armor Stats{isGasMask ? createAnnotation('5') : null}</th>
            </tr>
          </thead>
          <tbody className='db-item-armor-table-body'>
            <tr className='db-item-armor-table-body-row'>
              <td>Armor Type</td>
              {getArmorTypeValue(props.armorData.armorType)}
            </tr>
            <tr className='db-item-armor-table-body-row'>
              <td>Armor</td>
              {getArmorValue(props.armorData.armor)}
            </tr>
            <tr className='db-item-armor-table-body-row'>
              <td>Speed</td>
              {getSpeedValue(props.armorData.speed)}
            </tr>
            {/* <tr className='db-item-armor-table-body-row'>
              <td>Durability</td>
              {getDurabilityValue(props.armorData.durability)}
            </tr> */}
            <tr className='db-item-armor-table-body-row'>
              <td>Warmth</td>
              {getWarmthValue(props.armorData.warmth)}
            </tr>
            <tr className='db-item-armor-table-body-row'>
              <td>Tier</td>
              {getTierValue(props.armorData.tier)}
            </tr>
          </tbody>
        </table>
      </div>
      <div className='db-item-armor-annotation-container'>
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
// 1: only boots have a speed increase/decrease right now
// 2: still researching value for this property and/or item
// 3: item or value not in game
// 4: can't find value for this item; probably because it is a seasonal item
// 5: this is the gas mask, make fun of this item
// 6: fur items that give warmth
// 7: armor items that don't fit with a tier
const getArmorTypeValue = (rawArmorType) => {
  let armorTypeValue = ''
  let annotation = ''

  if(rawArmorType < 0)
    armorTypeValue = '--'
  else if('string' === typeof(rawArmorType) && Number(rawArmorType) < 0)
    armorTypeValue = '--'
  else
    armorTypeValue = rawArmorType

  if(rawArmorType == -1)
    armorTypeValue = 'N/A'
  else if(rawArmorType == -2)
    annotation = createAnnotation('2')
  else if(rawArmorType == -3)
    annotation = createAnnotation('3')
  else if(rawArmorType == -4)
    annotation = createAnnotation('4')

  return (
    <td className='db-item-armor-table-body-col2'>
      {armorTypeValue}{annotation}
    </td>
  )
}

const getArmorValue = (rawArmor) => {
  let armorValue = ''
  let annotation = ''

  if(rawArmor < 0)
    armorValue = '--'
  else if('string' === typeof(rawArmor) && Number(rawArmor) < 0)
    armorValue = '--'
  else
    armorValue = rawArmor

  if(rawArmor == -1)
    armorValue = 'N/A'
  else if(rawArmor == -2)
    annotation = createAnnotation('2')
  else if(rawArmor == -3)
    annotation = createAnnotation('3')
  else if(rawArmor == -4)
    annotation = createAnnotation('4')
    
  return (
    <td className='db-item-armor-table-body-col2'>
      {armorValue}{annotation}
    </td>
  )
}

const getSpeedValue = (rawSpeed) => {
  let speedValue = ''
  let annotation = ''

  if(rawSpeed < 0)
    speedValue = '--'
  else if('string' === typeof(rawSpeed) && Number(rawSpeed) < 0)
    speedValue = '--'
  else
    speedValue = rawSpeed

  if(rawSpeed == -1)
    annotation = createAnnotation('1')
  else if(rawSpeed == -2)
    annotation = createAnnotation('2')
  else if(rawSpeed == -3)
    annotation = createAnnotation('3')
  else if(rawSpeed == -4)
    annotation = createAnnotation('4')

  return (
    <td className='db-item-armor-table-body-col2'>
      {speedValue}{annotation}
    </td>
  )
}

// const getDurabilityValue = (rawDurability) => {
//   let durabilityValue = ''
//   let annotation = ''

//   if(rawDurability < 0)
//     durabilityValue = '--'
//   else if('string' === typeof(rawDurability) && Number(rawDurability) < 0)
//     durabilityValue = '--'
//   else
//     durabilityValue = rawDurability

//   if(rawDurability == -1)
//     durabilityValue = 'N/A'
//   else if(rawDurability == -2)
//     annotation = createAnnotation('2')
//   else if(rawDurability == -3)
//     annotation = createAnnotation('3')
//   else if(rawDurability == -4)
//     annotation = createAnnotation('4')

//   return (
//     <td className='db-item-armor-table-body-col2'>
//       {durabilityValue}{annotation}
//     </td>
//   )
// }

const getWarmthValue = (rawWarmth) => {
  let warmthValue = ''
  let annotation = ''

  if(rawWarmth < 0)
    warmthValue = '--'
  else if('string' === typeof(rawWarmth) && Number(rawWarmth) < 0)
    warmthValue = '--'
  else
    warmthValue = 'Yes'

  if(rawWarmth == -1)
    annotation = createAnnotation('6')
  else if(rawWarmth == -2)
    annotation = createAnnotation('2')
  else if(rawWarmth == -3)
    annotation = createAnnotation('3')
  else if(rawWarmth == -4)
    annotation = createAnnotation('4')

  return (
    <td className='db-item-armor-table-body-col2'>
      {warmthValue}{annotation}
    </td>
  )
}

const getTierValue = (rawTier) => {
  let tierValue = ''
  let annotation = ''

  if(rawTier < 0)
    tierValue = '--'
  else if('string' === typeof(rawTier) && Number(rawTier) < 0)
    tierValue = '--'
  else
    tierValue = rawTier

  if(rawTier == -1)
    annotation = createAnnotation('7')
  else if(rawTier == -2)
    annotation = createAnnotation('2')
  else if(rawTier == -3)
    annotation = createAnnotation('3')
  else if(rawTier == -4)
    annotation = createAnnotation('4')

  return (
    <td className='db-item-armor-table-body-col2'>
      {tierValue}{annotation}
    </td>
  )
}

const renderAnnotationRow = (item, index) => {
  // locate the annotation entry in our data
  let annotationToRender = null
  for(let j = 0 ; j < annotationData.length && annotationToRender === null ; j++) {
    if(item === annotationData[j][0])
      annotationToRender = annotationData[j]
  }

  return (
    <div key={index} className='db-item-armor-annotation-entry'>
      <div className='db-item-armor-annotation superscript'>
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
  ['1', 'Speed effects only apply to the \'Feet\' Armor Type'],
  ['2', 'We are still researching this value'],
  ['3', 'This item or property are not active in the game yet'],
  ['4', 'This item was seasonal and we didn\'t get the stat before the item was removed'],
  ['5', 'The gas mask... WTH?  This thing feels like an unfinished experiment.  ummm... let us know if you feel like that about any part of this site.'],
  ['6', 'Only fur armor gives warmth right now, but we\'re anticipating more may be introduced'],
  ['7', 'This item doesn\'t fit into a tier.  Usually items like event items or the Gas Mask'],
]

export default DatabaseArmorTable