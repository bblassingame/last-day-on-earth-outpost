class ListItems {
  constructor() {
    this.rawProperties = {}
    this.text = ''
    this.isLink = false
    this.linkSrc = ''
    this.linkEvent = ''
  }

  setRawProperties(properties) {
    this.rawProperties = {...properties}
  }

  initialize() {
    // convert the raw properties to member properties
    this.text = this.rawProperties.text
    this.isLink = this.rawProperties.link
    this.link = this.rawProperties.linkTo
    this.linkEvent = this.rawProperties.event
  }
}

export default ListItems