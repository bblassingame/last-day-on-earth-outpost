import Page from './page'

class FormatMgr
{
  constructor() {
    this.page = new Page()
  }

  formatContent(content) {
    // iterate through each item in the content and generate the page elements
    content.map( item => this.generatePageElements(item) )
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
  
      case 'ordered-list':
        this.page.createList(item)
        break
  
      default:
        console.log('unknown page element encountered')
        break
    }
  }
}

export default FormatMgr