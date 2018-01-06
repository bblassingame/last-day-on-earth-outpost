import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { OutboundLink } from 'react-ga'

const LINK_START_TAG = '<L>'
const LINK_START_TAG_LENGTH = '<L>'.length
const LINK_END_TAG = '</L>'
const LINK_END_TAG_LENGTH = '</L>'.length
const OUTBOUND_LINK_START_TAG = '<OL>'
const OUTBOUND_LINK_START_TAG_LENGTH = '<OL>'.length
const OUTBOUND_LINK_END_TAG = '</OL>'
const OUTBOUND_LINK_END_TAG_LENGTH = '</OL>'.length

export const formatLaunchPageContent = (content) => {
  let elements = []
  elements = content.map( (item, i) => returnLaunchPageTag(item, i) )
  return elements
}

const returnLaunchPageTag = (item, i) => {
  switch(item.type) {
    case 'paragraph':
      return renderLaunchPageParagraph(item, i)

    case 'subheading':
      return renderLaunchPageSubheading(item, i)

    default:
      break
  }
}

// This function renders a paragraph element in an article.  It will extract any links or other elements that require formatting
// and format them in the sub-functions called from within the while loop.  It returns a final set of elements that can
// go into a paragraph element
const renderLaunchPageParagraph = (item, i) => {
  let elements = []
  let linkCounter = 0
  let internalLinkStart = item.text.indexOf(LINK_START_TAG)
  let outboundLinkStart = item.text.indexOf(OUTBOUND_LINK_START_TAG)
  let lastUsedIndex = 0

  // iterate through the content of the article and extract any link information and format it
  if(internalLinkStart !== -1 || outboundLinkStart !== -1) {
    while(internalLinkStart !== -1 || outboundLinkStart !== -1) {
      if(internalLinkStart !== -1 && (internalLinkStart < outboundLinkStart || outboundLinkStart === -1)) { // create the internal link
        lastUsedIndex = formatThroughInternalLink(elements, item, internalLinkStart, lastUsedIndex, linkCounter)
      }
      else if(outboundLinkStart !== -1 && (outboundLinkStart < internalLinkStart || internalLinkStart === -1)) { // create the outbound link
        lastUsedIndex = formatThroughCreateOutboundLink(elements, item, outboundLinkStart, lastUsedIndex, linkCounter)
      }
      else { // we shouldn't get here, maybe an exception or console log goes here
        console.log('renderLaunchPageParagraph:  Unexpected Tag')
      }

      linkCounter++ // increment the link counter so that we get the next link information in our links array
      // update the link start indexes to look for the next instance of each tag from the last tag found
      internalLinkStart = item.text.indexOf(LINK_START_TAG, lastUsedIndex)
      outboundLinkStart = item.text.indexOf(OUTBOUND_LINK_START_TAG, lastUsedIndex)
    }
  }
  else {
    elements.push(item.text)
  }

  // get any content after the last tag
  elements.push(item.text.substr(lastUsedIndex))

  // return the final set of content items with links and formatting in place
  return (
    <p key={i} className='content-paragraph'>{elements}</p>
  )
}

// this function will get all text from the last tag or element up to and including the next tag
// and format as we expect.
const formatThroughInternalLink = (elements, item, startIndex, lastUsedIndex, linkCounter) => {
  // get everything up to the link tag and add it to our array
  elements.push(item.text.substr(lastUsedIndex, startIndex - lastUsedIndex))

  // get the link tag text and properties and create the link tag
  lastUsedIndex = item.text.indexOf(LINK_END_TAG, startIndex)
  let linkText = item.text.substr(startIndex + LINK_START_TAG_LENGTH, lastUsedIndex - startIndex - LINK_START_TAG_LENGTH)
  let toProp = item.links[linkCounter].to
  elements.push(<Link key={linkCounter} to={toProp}>{linkText}</Link>)

  // return the last index incremented to take into account the length of the tag
  return lastUsedIndex + LINK_END_TAG_LENGTH
}

// this function will get all text from the last tag or element up to and including the next tag
// and format as we expect.
const formatThroughCreateOutboundLink = (elements, item, startIndex, lastUsedIndex, linkCounter) => {
  // get everything up to the link tag and add it to our array
  elements.push(item.text.substr(lastUsedIndex, startIndex - lastUsedIndex))
  
  // get the link tag text and properties and create the link tag
  lastUsedIndex = item.text.indexOf(OUTBOUND_LINK_END_TAG, startIndex)
  let linkText = item.text.substr(startIndex + OUTBOUND_LINK_START_TAG_LENGTH, lastUsedIndex - startIndex - OUTBOUND_LINK_START_TAG_LENGTH)
  let eventLabelProp = item.links[linkCounter].event
  let toProp = item.links[linkCounter].to
  elements.push(<OutboundLink key={linkCounter} eventLabel={eventLabelProp} to={toProp}>{linkText}</OutboundLink>)

  // return the last index incremented to take into account the length of the tag
  return lastUsedIndex + OUTBOUND_LINK_END_TAG_LENGTH
}

// this function formats the information for a subheading such as making it a link and adding any other tag properties needed
const renderLaunchPageSubheading = (item, i) => {
  let returnElement

  if(item.link === true) {
    returnElement = <Link key={i} to={item.linkTo}><h2 className='content-subheading'>{item.text}</h2></Link>
  }
  else {
    returnElement = <h2 key={i} className='content-subheading'>{item.text}</h2>
  }

  return (
    returnElement
  )
}



export const formatMultiplayerContent = (content) => {
  let elements = []
  elements = content.map( (item, i) => returnMultiplayerPageTag(item, i) )
  return elements
}

const returnMultiplayerPageTag = (item, i) => {
  switch(item.type) {
    case 'paragraph':
      return renderMultiplayerPageParagraph(item, i)

    case 'ordered-list':
      return renderMultiplayerPageOrderedList(item, i)

    case 'youtube':
      return renderMultiplayerPageYoutube(item, i)

    default:
      break
  }
}

// This function renders a paragraph element in an article.  It will extract any links or other elements that require formatting
// and format them in the sub-functions called from within the while loop.  It returns a final set of elements that can
// go into a paragraph element
const renderMultiplayerPageParagraph = (item, i) => {
  let elements = []
  let linkCounter = 0
  let internalLinkStart = item.text.indexOf(LINK_START_TAG)
  let outboundLinkStart = item.text.indexOf(OUTBOUND_LINK_START_TAG)
  let lastUsedIndex = 0

  // iterate through the content of the article and extract any link information and format it
  if(internalLinkStart !== -1 || outboundLinkStart !== -1) {
    while(internalLinkStart !== -1 || outboundLinkStart !== -1) {
      if(internalLinkStart !== -1 && (internalLinkStart < outboundLinkStart || outboundLinkStart === -1)) { // create the internal link
        lastUsedIndex = formatThroughInternalLink(elements, item, internalLinkStart, lastUsedIndex, linkCounter)
      }
      else if(outboundLinkStart !== -1 && (outboundLinkStart < internalLinkStart || internalLinkStart === -1)) { // create the outbound link
        lastUsedIndex = formatThroughCreateOutboundLink(elements, item, outboundLinkStart, lastUsedIndex, linkCounter)
      }
      else { // we shouldn't get here, maybe an exception or console log goes here
        console.log('renderLaunchPageParagraph:  Unexpected Tag')
      }

      linkCounter++ // increment the link counter so that we get the next link information in our links array
      // update the link start indexes to look for the next instance of each tag from the last tag found
      internalLinkStart = item.text.indexOf(LINK_START_TAG, lastUsedIndex)
      outboundLinkStart = item.text.indexOf(OUTBOUND_LINK_START_TAG, lastUsedIndex)
    }
  }
  else {
    elements.push(item.text)
  }

  // get any content after the last tag
  elements.push(item.text.substr(lastUsedIndex))

  // return the final set of content items with links and formatting in place
  let paragraph = null
  if(item.id != null && item.id === true) {
    paragraph = <p key={i} id={item.idName} className='multiplayer-content-paragraph'>{elements}</p>
  }
  else {
    paragraph = <p key={i} className='multiplayer-content-paragraph'>{elements}</p>
  }

  return paragraph
}

const renderMultiplayerPageOrderedList = (item, i) => {
  const listItems = item.listItems
  return (
    <ol key={i} className='multiplayer-ordered-list'>
      {listItems.map((item, i) => renderMultiplayerPageListItem(item, i))}
    </ol>
  )
}

const renderMultiplayerPageListItem = (item, i) => {
  let returnElement = null

  if(item.link === true) {
    returnElement = <OutboundLink to={item.linkTo} eventLabel={item.event}>{item.text}</OutboundLink>
  }
  else {
    returnElement = <p>{item.text}</p>
  }

  return (
    <li key={i} className='multiplayer-list-item'>
      {returnElement}
    </li>
  )
}

const renderMultiplayerPageYoutube = (item, i) => {
  return (
    <div key={i} className='multiplayer-youtube-container'>
      <iframe key={i} src={item.link} width='560' height='315' frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}