import React from 'react'

import FormatMgr from '../../formatter/format-mgr'
import HtmlDocument from '../../formatter/document-model/html-document'

const StrategyArticleRecycler = (props) => {
  let formatMgr = new FormatMgr()
  let pageModel = formatMgr.formatContent(props.articleData.contentItems)
  return (
    <div>
      <HtmlDocument pageModel={pageModel}/>
    </div>
  )
}

export default StrategyArticleRecycler