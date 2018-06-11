import ParagraphElement from './paragraph-element'

class Image extends ParagraphElement
{
  constructor() {
    super()
    this.page = null
    this.rawProperties = null
    // this.imageSrcType = ''
    this.imageSrc = ''
    this.imageStyle = ''
  }

  getType() {
    return 'Image'
  }

  setRawProperties(page, rawProperties) {
    this.page = page
    this.rawProperties = rawProperties
  }

  initialize() {
    // this.imageSrcType = this.rawProperties.imageSrcType
    this.imageSrc = this.rawProperties.imageSrc
    this.imageStyle = this.rawProperties.imageStyle

    if(this.imageSrc === '') {
      console.log('ERROR:  It looks like you didn\'t set the image source.  Skipping this image')
    }
  }
}

export default Image