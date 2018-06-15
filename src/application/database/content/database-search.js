import React from 'react'

import SearchIcon from './search-icon_48.png'

const DatabaseSearch = (props) => {
  return (
    <div className='database-search-container'>
      <img className='database-search-icon' src={SearchIcon} alt='A magnifying glass signifying a search input' />
      <input onInput={(event) => props.onInput(event)} className='database-search-input' type='text' name='search' placeholder='Search...' autoFocus />
    </div>
  )
}

export default DatabaseSearch