import React from 'react'

const HtmlBloodyHeading = (props) => {
  let properties = []
  if(props.hasId === true)
    properties['id'] = props.idName
    
  return (
    <div {...properties} className='formatted-bloody-heading-container'>
      <h1 className='formatted-bloody-heading'>{props.text}</h1>
    </div>
  )
}

export default HtmlBloodyHeading