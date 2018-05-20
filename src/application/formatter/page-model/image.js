import ParagraphElement from './paragraph-element'

class Image extends ParagraphElement
{
  constructor() {
    super()
    this.rawProperties = null
    this.imageSrc = ''
    this.imageType = ''
  }

  getType() {
    return 'Image'
  }

  setRawProperties(rawProperties) {
    this.rawProperties = rawProperties
  }

  initialize() {
    this.imageSrc = this.rawProperties.imageSrc
    this.imageType = this.rawProperties.imageType

    if(this.imageSrc === '') {
      console.log('ERROR:  It looks like you didn\'t set the image source.  Skipping this image')
    }
  }
}

export default Image