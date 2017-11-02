import React from 'react'

import HoursIcon from './hours-icon-2.png'

const Operations = () => {
  return (
    <div className='mc-sub-panel'>
      <img className='mc-sub-panel-img' src={HoursIcon} alt='storage unit icon indicating information about available storage units' />
      <div className='mc-sub-panel-header-container'>
        <h1 className='mc-sub-panel-header'>Hours of Operations</h1>
        <div className='operations-container'>
          <div className='operations-type-container'>
            <p className='operations-type'>Access Hours</p>
            <p className='operations-hours-row'>
              <span className='operations-days'>Monday - Sunday:</span>
              <span className='operations-hours'>6am-10pm</span>
            </p>
          </div>
          <div className='operations-type-container'>
            <p className='operations-type'>Office Hours</p>
            <p className='operations-hours-row'>
              <span className='operations-days'>Monday - Friday:</span>
              <span className='operations-hours'>By Appointment Only</span>
            </p>
            <p className='operations-hours-row'>
              <span className='operations-days'>Saturday, Sunday:</span>
              <span className='operations-hours'>Closed</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const operationsData = [
  {
    ID: 1,
    type: 'Access Hours',
    times: [
      {
        days: 'Monday - Sunday',
        hoursStart: '06:00 am',
        hoursEnd: '22:00 pm',
        useCustom: false,
        customText: '',
        closed: false
      }
    ]
  },
  {
    ID: 2,
    type: 'Office Hours',
    times: [
      {
        days: 'Monday - Friday',
        hoursStart: '00:00 am',
        hoursEnd: '00:00 am',
        useCustom: true,
        customText: 'By Appointment Only',
        closed: false
      },
      {
        days: 'Saturday, Sunday',
        hoursStart: '00:00 am',
        hoursEnd: '00:00 am',
        useCustom: false,
        customText: '',
        closed: true
      }
    ]
  }
]

export default Operations