import PageElement from './page-element'

class List extends PageElement {
  constructor() {
    super()
    this.page = null
    this.rawProperties = []
    this.listItems = []
  }

  getType() {
    return 'List'
  }

  setRawProperties(page, rawProperties) {
    this.page = page
    this.rawProperties = rawProperties
  }

  initialize() {
    this.listItems = this.page.formatPageElementsForItem(this.rawProperties)
  }
}

export default List