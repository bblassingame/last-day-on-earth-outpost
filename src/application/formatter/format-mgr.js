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
      // case 'test':
      case 'paragraph':
        this.page.createParagraph(item)
        console.log(this.page)
        break
  
      case 'subheading':
        // console.log('creating a heading element')
        break
      
      case 'youtube':
        // console.log('creating a youtube element')
        break
  
      case 'ordered-list':
        // console.log('creating an ordered list element')
        break
  
      default:
        // console.log('unknown page element encountered')
        break
    }
  }
}

export default FormatMgr