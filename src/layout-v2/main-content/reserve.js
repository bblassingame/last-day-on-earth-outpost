import React from 'react'
import ReactGA from 'react-ga'

import PhoneIcon from './phone-icon.png'

const logPhoneClick = function() {
  ReactGA.event({
    category: 'Phone Link',
    action: 'Click to Call'
  })
}

const Reserve = () => {
  return (
    <div className='mc-sub-panel' >
      <img className='mc-sub-panel-img' src={PhoneIcon} alt='phone icon indicating to call to reserve a storage unit' />
      <div className='mc-sub-panel-header-container'>
        <h1 className='mc-sub-panel-header'>Reserve Today</h1>
        <div>
          <p>
            <span>Call:  </span>
            <a href="tel:+19037575845" rel="nofollow" onClick={logPhoneClick}>903-757-5845</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Reserve