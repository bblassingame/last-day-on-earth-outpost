import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import { getURLString } from '../../utility/regex-utils'

const DatabaseItemLinks = (props) => {
  return (
    <div className='database-item-links-container'>
      <h1 className='database-item-links-heading'>Additional Resources</h1>
      {/*I need a link to the LDOE Wiki page for the item, but not first*/}
      <div className='database-item-links-scroll-container'>
        {getResourceLink(props.itemName)}
      </div>
    </div>
  )
}

const getResourceLink = (itemName) => {
  let src = '/strategy/Resources#' + getURLString(itemName)
  return (
    <Link to={src}>
      <div className='database-item-links-scroll-item'>
        {/*fill this in and create the link item*/}
        <div className='database-item-links-scroll-item-heading'>
          <p>LDOE Outpost</p>
        </div>
        <div className='database-item-links-scroll-item-text'>
          <p>Resources:</p>
          <p>{itemName}</p>
        </div>
      </div>
    </Link>
  )
}

export default DatabaseItemLinks