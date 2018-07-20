import React from 'react'
import { Link } from 'react-router-dom'

const HtmlHeadingHeading = (props) => {
  let properties = []
  if(props.isLink === true)
    properties['to'] = props.src
  if(props.hasId === true)
    properties['id'] = props.idName
    
  if(props.isLink === true)
    return <Link {...properties}><h1 className='formatted-heading'>{props.text}</h1></Link>
  else
    return <h1 {...properties} className='formatted-heading'>{props.text}</h1>
}

export default HtmlHeadingHeading