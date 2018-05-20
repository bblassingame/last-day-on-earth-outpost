import Page from './page-model/page'

class FormatMgr
{
  constructor() {
    this.page = new Page()
  }

  formatContent(content) {
    // iterate through each item in the content and generate the page elements
    content.map( item => this.generatePageElements(item) )
    return this.page
  }

  generatePageElements(item) {
    switch(item.type) {
      case 'paragraph':
        this.page.createParagraph(item)
        break
  
      case 'heading':
        this.page.createHeading(item)
        break
      
      case 'youtube':
        this.page.createYoutube(item)
        break
  
      case 'list':
        this.page.createList(item)
        break
      
      case 'acknowledgement':
        this.page.createAcknowledgement(item)
        break

      case 'image':
        this.page.createImage(item)
        break
  
      default:
        console.log('unknown page element encountered')
        break
    }
  }
}

export default FormatMgr