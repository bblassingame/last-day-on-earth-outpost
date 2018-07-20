import React from 'react'
import { Link } from 'react-router-dom'

const HtmlHeadingTitle = (props) => {
  let properties = []
  if(props.isLink === true)
    properties['to'] = props.src
  if(props.hasId === true)
    properties['id'] = props.idName
    
  if(props.isLink === true)
    return <Link {...properties}><h1 className='formatted-title'>{props.text}</h1></Link>
  else
    return <h1 {...properties} className='formatted-title'>{props.text}</h1>
}

export default HtmlHeadingTitle