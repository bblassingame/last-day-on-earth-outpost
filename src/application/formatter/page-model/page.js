import Paragraph from './paragraph'
import Youtube from './youtube'
import List from './list'
import Heading from './heading'
import Acknowledgement from './acknowledgement'
import Image from './image'

class Page
{
  constructor() {
    this.pageElements = []
  }

  getPageElements() {
    return this.pageElements
  }

  createParagraph(rawElementData) {
    let paragraph = new Paragraph()
    paragraph.setParagraphData(rawElementData)
    paragraph.initialize()
    this.pageElements.push(paragraph)
  }

  createYoutube(rawElementData) {
    let youtube = new Youtube()
    youtube.setLink(rawElementData.link)
    this.pageElements.push(youtube)
  }

  createList(rawElementData) {
    let list = new List()
    list.setRawProperties(rawElementData.listItems)
    list.initialize()
    this.pageElements.push(list)
  }

  createHeading(rawElementData) {
    let heading = new Heading()
    heading.setRawProperties(rawElementData)
    heading.initialize()
    this.pageElements.push(heading)
  }

  createAcknowledgement(rawAcknowledgementData) {
    let acknowledgement = new Acknowledgement()
    acknowledgement.setRawProperties(rawAcknowledgementData)
    acknowledgement.initialize()
    this.pageElements.push(acknowledgement)
  }

  createImage(rawImageData) {
    let image = new Image()
    image.setRawProperties(rawImageData)
    image.initialize()
    this.pageElements.push(image)
  }
}

export default Page