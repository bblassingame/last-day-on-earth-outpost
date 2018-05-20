import React, { Component } from 'react'

import HtmlParagraph from './html-paragraph'
import HtmlList from './html-list'
import HtmlYoutube from './html-youtube'
import HtmlHeading from './html-heading'
import HtmlAcknowledgement from './html-acknowledgement'
import HtmlImage from './html-image'

class HtmlDocument extends Component {
  constructor() {
    super()
    this.htmlDocElements = []
  }

  componentWillMount() {
    this.initialize()
  }

  componentWillUpdate() {
    this.initialize()
  }

  initialize() {
    let elements = this.props.pageModel.getPageElements()

    for(let i = 0 ; i < elements.length ; i++) {
      const pageElement = elements[i]
      switch(pageElement.getType()) {
        case 'Paragraph':
          this.htmlDocElements.push(<HtmlParagraph key={i} paragraphPageElement={pageElement} />)
          break
        
        case 'List':
          this.htmlDocElements.push(<HtmlList key={i} listPageElement={pageElement} />)
          break
        
        case 'Youtube':
          this.htmlDocElements.push(<HtmlYoutube key={i} youtubePageElement={pageElement} />)
          break
        
        case 'Heading':
          this.htmlDocElements.push(<HtmlHeading key={i} headingPageElement={pageElement} />)
          break

        case 'Acknowledgement':
          this.htmlDocElements.push(<HtmlAcknowledgement key={i} acknowledgementPageElement={pageElement} />)
          break

        case 'Image':
          console.log('creating HTML Image')
          console.log(pageElement)
          this.htmlDocElements.push(<HtmlImage key={i} imagePageElement={pageElement} />)
          console.log(this.htmlDocElements)
          break

        default:
          console.log('undefined PageElement detected')
          break
      }
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