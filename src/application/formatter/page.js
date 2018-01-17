import Paragraph from './paragraph'
import Youtube from './youtube'

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
}

export default Page