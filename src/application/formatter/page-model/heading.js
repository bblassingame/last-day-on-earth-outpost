import PageElement from './page-element'

class Heading extends PageElement {
  constructor() {
    super()
    this.rawProperties = {}
    this.headingLevel = -1
    this.text = ''
    this.isLink = false
    this.linkSrc = ''
    this.linkEvent = ''
  }

  getType() {
    return 'Heading'
  }

  setRawProperties(properties) {
    this.rawProperties = {...properties}
  }

  initialize() {
    this.headingLevel = this.rawProperties.level
    this.text = this.rawProperties.text
    this.isLink = this.rawProperties.link
    this.linkSrc = this.rawProperties.linkTo
    this.linkEvent = this.rawProperties.event
  }
}

export default Heading