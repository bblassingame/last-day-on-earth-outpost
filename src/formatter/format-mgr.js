import Page from './page-model/page'

class FormatMgr
{
  constructor() {
    this.page = new Page()
  }

  formatContent(content) {
    this.page.formatPageElements(content)
    return this.page
  }
}

export default FormatMgr