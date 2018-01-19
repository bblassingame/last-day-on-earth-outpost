import Paragraph from './paragraph'
import Youtube from './youtube'
import List from './list'
import Heading from './heading'

class Page
{
  constructor() {
    this.pageElements = []
  }

  createParagraph(rawElementData) {
    let paragraph = new Paragraph()
    paragraph.setRawText(rawElementData.text)
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
    list.setRawListItems(rawElementData.listItems)
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