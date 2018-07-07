import PageElement from './page-element'

class Table extends PageElement {
  constructor() {
    super()
    this.page = null
    this.rawProperties = []
    this.columns = null
    this.header = null
    this.body = null
  }

  getType() {
    return 'Table'
  }

  setRawProperties(page, rawProperties) {
    this.page = page
    this.rawProperties = rawProperties
  }

  initialize() {
    this.columns = this.rawProperties.tableData.columns
    this.header = this.rawProperties.tableData.header
    this.body = this.rawProperties.tableData.body
  }
}

export default Table