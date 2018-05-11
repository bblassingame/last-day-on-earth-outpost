import PageElement from './page-element'
import ListItemText from './list-item-text'

class List extends PageElement {
  constructor() {
    super()
    this.rawProperties = []
    this.listItems = []
  }

  getType() {
    return 'List'
  }

  setRawProperties(items) {
    this.rawProperties = items
  }

  initialize() {
    // iterate through the raw items and create child items
    for(let i = 0 ; i < this.rawProperties.length ; i++) {
      const item = this.rawProperties[i]
      if(item.type === 'list') {
        let list = new List()
        list.setRawProperties(item.listItems)
        list.initialize()
        this.listItems.push(list)
      }
      else if(item.type === 'text') {
        let listItemText = new ListItemText()
        listItemText.setRawProperties(item)
        listItemText.initialize()
        this.listItems.push(listItemText)
      }
      else {
        console.log('Page Model Error:  Unknown list item type')
      }
    }
  }
}

export default List