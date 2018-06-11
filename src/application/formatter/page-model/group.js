import ParagraphElement from './paragraph-element'

class Group extends ParagraphElement
{
  constructor() {
    super()
    this.page = null
    this.rawProperties = null
    this.items = []
  }

  getType() {
    return 'Group'
  }

  setRawProperties(page, rawProperties) {
    this.page = page
    this.rawProperties = rawProperties
  }

  initialize() {
    this.items = this.page.formatPageElementsForItem(this.rawProperties.groupItems)
  }
}

export default Group