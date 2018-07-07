import React, { Component } from 'react'

import HtmlParagraph from './html-paragraph'
import HtmlList from './html-list'
import HtmlListItem from './html-list-item'
import HtmlListItemElement from './html-list-item-element'
import HtmlYoutube from './html-youtube'
import HtmlHeading from './html-heading'
import HtmlAcknowledgement from './html-acknowledgement'
import HtmlImage from './html-image'
import HtmlGroup from './html-group'
import HtmlParagraphElement from './html-paragraph-element'
import HtmlTable from './html-table'

class HtmlDocument extends Component {
  constructor() {
    super()
    this.htmlDocElements = []
  }

  componentWillMount() {
    this.generateDocumentElements()
  }

  componentWillUpdate() {
    this.generateDocumentElements()
  }

  generateDocumentElements() {
    // we need to clear out any existing document elements by setting the htmlDocElements to a new, empty array
    this.htmlDocElements = []
    let elements = this.props.pageModel.getPageElements()
    elements.map( (pageElement, index) => this.htmlDocElements.push(this.generateDocumentElement(pageElement, index)) )
  }

  generateDocumentElementsForItem(content) {
    let elements = []
    content.map( (pageElement, index) => elements.push(this.generateDocumentElement(pageElement, index)) )
    return elements
  }

  generateDocumentElement(pageElement, index) {
    switch(pageElement.getType()) {
      case 'Paragraph':
        return <HtmlParagraph key={index} paragraphPageElement={pageElement} htmlDocument={this} />
      
      case 'ParagraphElement':
        return <HtmlParagraphElement key={index} paragraphElement={pageElement} htmlDocument={this} />
      
      case 'List':
        return <HtmlList key={index} listPageElement={pageElement} htmlDocument={this} />

      case 'ListItemElement':
        return <HtmlListItemElement key={index} listItemElement={pageElement} htmlDocument={this} />
      
      case 'ListItemText':
        return <HtmlListItem key={index} listItemPageElement={pageElement} htmlDocument={this} />

      case 'Youtube':
        return <HtmlYoutube key={index} youtubePageElement={pageElement} htmlDocument={this} />
      
      case 'Heading':
        return <HtmlHeading key={index} headingPageElement={pageElement} htmlDocument={this} />

      case 'Acknowledgement':
        return <HtmlAcknowledgement key={index} acknowledgementPageElement={pageElement} htmlDocument={this} />

      case 'Image':
        return <HtmlImage key={index} imagePageElement={pageElement} htmlDocument={this} />

      case 'Group':
        return <HtmlGroup key={index} groupPageElement={pageElement} htmlDocument={this} />

      case 'Table':
        console.log(pageElement)
        return <HtmlTable key={index} tablePageElement={pageElement} htmlDocument={this} />

      default:
        console.log('undefined PageElement detected')
        break
    }
  }

  render() {
    return (
      <div className='formatted-content'>
        {this.htmlDocElements}
      </div>
    )
  }
}

export default HtmlDocument