import Paragraph from './paragraph'
import Youtube from './youtube'
import List from './list'
import ListItemText from './list-item-text'
import Heading from './heading'
import Acknowledgement from './acknowledgement'
import Image from './image'
import Group from './group'
import Table from './table'

class Page
{
  constructor() {
    this.pageElements = []
  }

  formatPageElements(content) {
    content.map( item => this.pageElements.push(this.generateElement(item)) )
  }

  formatPageElementsForItem(content) {
    let elements = []
    content.map( item => elements.push(this.generateElement(item)) )
    return elements
  }

  generateElement(item) {
    switch(item.type) {
      case 'paragraph':
        return this.createParagraph(item)

      case 'heading':
        return this.createHeading(item)

      case 'youtube':
        return this.createYoutube(item)

      case 'list':
        return this.createList(item)

      case 'acknowledgement':
        return this.createAcknowledgement(item)

      case 'image':
        return this.createImage(item)

      case 'group':
        return this.createGroup(item)
      
      case 'text':
        return this.createListItemText(item)

      case 'table':
        return this.createTable(item)

      default:
        console.log('Page Model Error:  Unknown Item Type')
        break
    }
  }

  createParagraph(rawElementData) {
    let paragraph = new Paragraph()
    paragraph.setRawProperties(this, rawElementData)
    paragraph.initialize()
    return paragraph
  }

  createYoutube(rawElementData) {
    let youtube = new Youtube()
    youtube.setRawProperties(this, rawElementData.link)
    return youtube
  }

  createList(rawElementData) {
    let list = new List()
    list.setRawProperties(this, rawElementData.listItems)
    list.initialize()
    return list
  }

  createListItemText(rawElementData) {
    let listItemText = new ListItemText()
    listItemText.setRawProperties(this, rawElementData)
    listItemText.initialize()
    return listItemText
  }

  createHeading(rawElementData) {
    let heading = new Heading()
    heading.setRawProperties(this, rawElementData)
    heading.initialize()
    return heading
  }

  createAcknowledgement(rawAcknowledgementData) {
    let acknowledgement = new Acknowledgement()
    acknowledgement.setRawProperties(this, rawAcknowledgementData)
    acknowledgement.initialize()
    return acknowledgement
  }

  createImage(rawImageData) {
    let image = new Image()
    image.setRawProperties(this, rawImageData)
    image.initialize()
    return image
  }

  createGroup(rawGroupData) {
    let group = new Group()
    group.setRawProperties(this, rawGroupData)
    group.initialize()
    return group
  }

  createTable(rawTableData) {
    let table = new Table()
    table.setRawProperties(this, rawTableData)
    table.initialize()
    return table
  }

  getPageElements() {
    return this.pageElements
  }

  addElementToPage(element) {
    this.pageElements.push(element)
  }
}

export default Page