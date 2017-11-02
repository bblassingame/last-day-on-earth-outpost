import React from 'react'

import StorageIcon from './storage-icon-2.png'

const Units = () => {
  return (
    <div className='mc-sub-panel'>
      <img className='mc-sub-panel-img' src={StorageIcon} alt='storage unit icon indicating information about available storage units' />
      <div className='mc-sub-panel-header-container'>
        <h1 className='mc-sub-panel-header'>Storage Units</h1>
        {createEntries(storageUnitData)}
      </div>
    </div>
  )
}

/*****************************   Units Entries   *****************************/
/*****************************************************************************/

// create all of the storage unit entries in our JSON
const createEntries = (storageUnitData) => {
  let unitEntries = []

  unitEntries = storageUnitData.map(unitData => createEntry(unitData))

  return (
    <div>
      {unitEntries}
    </div>
  )
}

// create a single storage unit entry based on the unit's data
const createEntry = (unitData) => {
  let length = unitData.Dimensions.Length
  let width = unitData.Dimensions.Width
  let rate = unitData.Rate
  let isAvailable = unitData.Available
  let unitDiscountDescription = getDiscountDescription(unitData)
  return (
    <div key={unitData.Id} className='units-entry-container'>
      {createUnitDimensionsAndRates(length, width, rate)}
      {createUnitsInfo(isAvailable, unitDiscountDescription)}
    </div>
  )
}

// finds the discount description based on the discount ID in the storage unit data
const getDiscountDescription = (unitData) => {
  // returns the discount object with the ID in the storage unit data
  let returnVal = discountsData.find(discount => discount.Id === unitData.DiscountId)
  return returnVal.Description // return just the description that we're after
}

/*****************************   Unit Dimensions & Rates   *****************************/
/***************************************************************************************/

// returns us a row with the length, width, and rate formatted as we like
const createUnitDimensionsAndRates = (length, width, rate) => {
  return (
    <div>
      <p className='units-dim-row'>
        {createUnitsDimensions(length, width)}
        {createRate(rate)}
      </p>
    </div>
  )
}

// kicks off the units creation
const createUnitsDimensions = (length, width) => {
  return (
    <span className='units-dimensions'>
      {formatSize(length, width)}
    </span>
  )
}

// function takes a width and a length and converts them to a '<length> x <width>' format
// example:  length = 10, width = 10   result = '10 x 10
const formatSize = function(length, width) {
  return formatDimension(length) + '\' x ' + formatDimension(width) + '\''
}

// function takes a dimension and converts the decimal portion to a vulgar fraction
// we only support .5 -> ½ right now
// example:  7.5 -> 7½
const formatDimension = function(dimension) {
  let numericalParts = (dimension + '').split('.') // split at the '.' separate the integer and decimal
  let formattedDimension = numericalParts[0] // set the initial integer portion
  if( numericalParts.length > 1 ) { // check if there is actually a fractional part
    formattedDimension += '\u00bd' // append the vulgar fraction if needed
  }
  return formattedDimension
}

// takes an item and returns a table cell for the size column
// example:  item.rate = 80   result = <span>'\u0024'80.<sup>00</sup></span>
const createRate = (rate) => {
  let value = parseFloat(rate).toFixed(2) // convert the value to a 2 decimal float
  let numericalParts = (value).split('.') // split at the '.' separate the integer and decimal

  return (
    <span>
      {'\u0024' + numericalParts[0] + '.'}<sup className='units-rate-sup'>{numericalParts[1]}</sup>
    </span>
  )
}

/*****************************   Units Info Containers   *****************************/
/*************************************************************************************/

// creates the units info
const createUnitsInfo = (isAvailable, unitDiscountDescription) => {
  return (
    <div className='units-info-container'>
      <p className='units-info-text'>
        {createUnitAvailability(isAvailable)}
        {createUnitDescription(unitDiscountDescription, isAvailable)}
      </p>
    </div>
  )
}

// break this out into it's own because we'll probably end up doing a little
// more for the availability text like show red when it's unavailable
const createUnitAvailability = (isAvailable) => {
  let text = 'Ready To Reserve'
  let classNameValue = 'units-info-availability'

  if(false === isAvailable) {
    text = 'No Vacancies'
    classNameValue += ' unit-not-available'
  }
  else {
    classNameValue += ' unit-available'
  }

  return (
    <span className={classNameValue}>
      {text}
    </span>
  )
}

// creates the description text for the unit, such as the discount available
// we hide the discount if there's nothing available
const createUnitDescription = (unitDiscountDescription, isAvailable) => {
  let text = ''

  if(isAvailable === true) {
    text = unitDiscountDescription
  }

  return (
    <span>{text}</span>
  )
}

/*****************************   Storage Unit Data   *****************************/
/*********************************************************************************/

const storageUnitData = [
  {
    Id: 0,
    Dimensions:
    {
      Length: 7.5,
      Width: 10
    },
    Rate: 75,
    Available: true,
    DiscountVisible: true,
    DiscountId: 0
  },
  {
    Id: 1,
    Dimensions:
    {
      Length: 10,
      Width: 10
    },
    Rate: 90,
    Available: true,
    DiscountVisible: true,
    DiscountId: 0
  },
  {
    Id: 2,
    Dimensions:
    {
      Length: 10,
      Width: 15
    },
    Rate: 120,
    Available: false,
    DiscountVisible: true,
    DiscountId: 0
  }
]

const discountsData = [
  {
    Id: 0,
    Name: '7th Month Free',
    Requirements: '',
    Discount: '',
    Description: '7th month free & no administrative fee with 6 month lease and online reservation'
  },
  {
    Id: 1,
    Name: 'Military',
    Requirements: '',
    Discount: '',
    Description: 'Military Discount Available: Active-Duty, Reserves or Veterans'
  }
]

export default Units