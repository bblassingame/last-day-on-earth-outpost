import React from 'react'
import Link from 'react-router-dom'

const HtmlHeadingTitle = (props) => {
  if(props.isLink === true)
    return <Link to={props.src}><h1 className='formatted-title'>{props.text}</h1></Link>
  else
    return <h1 className='formatted-title'>{props.text}</h1>
}

export default HtmlHeadingTitle