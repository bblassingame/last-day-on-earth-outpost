import React from 'react'
import { Link } from 'react-router-dom'

const HtmlHeadingSubheading = (props) => {
  let properties = []
  if(props.isLink === true)
    properties['to'] = props.src
  if(props.hasId === true)
    properties['id'] = props.idName
    
  if(props.isLink === true)
    return <Link {...properties}><h2 className='formatted-subheading'>{props.text}</h2></Link>
  else
    return <h2 {...properties} className='formatted-subheading'>{props.text}</h2>
}

export default HtmlHeadingSubheading