import Paragraph from './paragraph'
import Youtube from './youtube'
import List from './list'
import Heading from './heading'

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
}

export default Page