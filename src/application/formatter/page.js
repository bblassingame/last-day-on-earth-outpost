import Paragraph from './paragraph'

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
}

export default Page