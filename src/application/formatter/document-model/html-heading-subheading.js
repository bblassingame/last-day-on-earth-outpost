import React from 'react'
import Link from 'react-router-dom'

const HtmlHeadingSubheading = (props) => {
  if(props.isLink === true)
    return <Link to={props.src}><h2 className='formatted-subheading'>{props.text}</h2></Link>
  else
    return <h2 className='formatted-subheading'>{props.text}</h2>
}

export default HtmlHeadingSubheading