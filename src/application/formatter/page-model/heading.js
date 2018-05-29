import PageElement from './page-element'

class Heading extends PageElement {
  constructor() {
    super()
    this.rawProperties = {}
    this.headingType = ''
    this.text = ''
    this.isLink = false
    this.linkSrc = ''
    this.linkEvent = ''
    this.hasId = false
    this.idName = ''
  }

  getType() {
    return 'Heading'
  }

  setRawProperties(properties) {
    this.rawProperties = {...properties}
  }

  initialize() {
    this.headingType = this.rawProperties.headingType
    this.text = this.rawProperties.text
    if(null != this.rawProperties.link) {
      this.isLink = this.rawProperties.link
      this.linkSrc = this.rawProperties.linkTo
      this.linkEvent = this.rawProperties.event
    }
    if(null != this.rawProperties.id) {
      this.hasId = this.rawProperties.id
      this.idName = this.rawProperties.idName
    }
  }
}

export default Heading