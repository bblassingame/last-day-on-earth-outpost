import React from 'react'

import FormatMgr from '../../formatter/format-mgr'
import HtmlDocument from '../../formatter/document-model/html-document'

const StrategyArticle = (props) => {
  let formatMgr = new FormatMgr()
  let pageModel = formatMgr.formatContent(props.articleData.contentItems)
  return <HtmlDocument pageModel={pageModel}/>
}

export default StrategyArticle