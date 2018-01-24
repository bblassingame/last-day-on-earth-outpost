import PageElement from './page-element'

class Youtube extends PageElement {
  constructor() {
    super()
    this.link = ''
  }

  getType() {
    return 'Youtube'
  }

  setLink(link) {
    this.link = link
  }
}

export default Youtube