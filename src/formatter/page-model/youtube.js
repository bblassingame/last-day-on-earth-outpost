import PageElement from './page-element'

class Youtube extends PageElement {
  constructor() {
    super()
    this.page = null
    this.link = ''
  }

  getType() {
    return 'Youtube'
  }

  setRawProperties(page, link) {
    this.page = page
    this.link = link
  }
}

export default Youtube