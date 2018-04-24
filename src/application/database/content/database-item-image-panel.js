import React from 'react'

import NotAvailableImage from './not-available-low.png'

const DatabaseItemImagePanel = (props) => {
  let imgItemNotAvailable = null
  if(props.inGameStatus === 'false')
    imgItemNotAvailable = <img className='db-item-not-available-image' src={NotAvailableImage} />

  return (
    <div className='db-item-pic-desc-container'>
      <img className='db-item-pic' src={props.img} />
      {imgItemNotAvailable}
      <p className='db-item-desc'>&quot;{props.inGameDescription}&quot;</p>
    </div>
  )
}

export default DatabaseItemImagePanel