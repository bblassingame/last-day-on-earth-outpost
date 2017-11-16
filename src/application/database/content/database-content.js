import React from 'react'

const DatabaseContent = (props) => {
  return (
    <div className='db-content-container'>
      <h1>LDOE: Database</h1>
      <div className='db-search-container'>
      </div>
      <div className='db-content'>
        {createItems(props)}
      </div>
    </div>
  )
}

const createItems = (items) => {
  return (
    <ul>
      {Object.keys(items).map(index => createItem(items, index))}
    </ul>
  )
}

const createItem = (items, index) => {
  const item = items[index]
  return (
    <li key={item.itemId} className='db-content-list-entry'>
      <img src={item.img} />
      <span className='db-content-list-entry-name'>{item.name}</span>
    </li>
  )
}

export default DatabaseContent