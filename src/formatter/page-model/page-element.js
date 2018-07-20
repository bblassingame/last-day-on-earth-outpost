class PageElement {
  constructor() {
    if(this.constructor === PageElement)
      throw new TypeError('Abstract class PageElement cannot be instantiated independently, please use one of the child classes of PageElement')
  }

  getType() {
    throw new TypeError('Classes extending the PageElement class must implement getType()')
  }
}

export default PageElement