import React from 'react'
import { Link } from 'react-router-dom'

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
  return (
    <Link to='/strategy/Resources' >
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