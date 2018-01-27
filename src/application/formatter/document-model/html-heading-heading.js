import React from 'react'
import Link from 'react-router-dom'

const HtmlHeadingHeading = (props) => {
  if(props.isLink === true)
    return <Link to={props.src}><h1 className='formatted-heading'>{props.text}</h1></Link>
  else
    return <h1 className='formatted-heading'>{props.text}</h1>
}

export default HtmlHeadingHeading