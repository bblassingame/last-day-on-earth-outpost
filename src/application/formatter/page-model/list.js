import PageElement from './page-element'
import ListItem from './list-item'

class List extends PageElement {
  constructor() {
    super()
    this.rawListItems = []
    this.listItems = []
  }

  getType() {
    return 'List'
  }

  setRawListItems(items) {
    this.rawListItems = items
  }

  initialize() {
    // iterate through the raw items and create child items
    for(let i = 0 ; i < this.rawListItems.length ; i++) {
      const item = this.rawListItems[i]
      let listItem = new ListItem()
      listItem.setRawProperties(item)
      listItem.initialize()
      this.listItems.push(listItem)
    }
  }
}

export default List