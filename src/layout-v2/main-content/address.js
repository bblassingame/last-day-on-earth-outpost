import React from 'react'
import ReactGA from 'react-ga'

import AddressIcon from './address-icon.png'

const Units = () => {
  return (
    <div className='mc-sub-panel'>
      <img className='mc-sub-panel-img' src={AddressIcon} alt='storage unit icon indicating information about available storage units' />
      <div className='mc-sub-panel-header-container'>
        <h1 className='mc-sub-panel-header'>Address</h1>
        <div>
          <div className='address-row-container'>
            <ReactGA.OutboundLink eventLabel='Click To Directions' to='https://www.google.com/maps/dir/?api=1&amp;destination=At+Home+Climate+Storage%2C+Longview%2C+TX'>
              <p>2000 Jahan Trail, Longview TX  75604</p>
            </ReactGA.OutboundLink>
            <p></p>
          </div>
          <div className='address-info-container'>
            <p className='address-details-text'>Located near McWhorter Park</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Units