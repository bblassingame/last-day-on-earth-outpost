import React from 'react'

import FormatMgr from '../../formatter/format-mgr'
import HtmlDocument from '../../formatter/document-model/html-document'

const StrategyArticle = (props) => {
  let formatMgr = new FormatMgr()
  let contentToRender = updateImageSources(props.articleData.contentItems)
  let pageModel = formatMgr.formatContent(contentToRender)
  return <HtmlDocument pageModel={pageModel}/>
}

const updateImageSources = (contentItems) => {
  Object.keys(contentItems).map(entry => {
    if(contentItems[entry].type === 'image' && contentItems[entry].imageSrcType === 'reduxStore') {
      contentItems[entry].imageSrc = '/images/acid-bath.png'
    }
    else if(contentItems[entry].type === 'group') {
      updateImageSources(contentItems[entry].groupItems)
    }
    else if(contentItems[entry].type === 'list') {
      updateImageSources(contentItems[entry].listItems)
    }
  })
  return contentItems
}

export default StrategyArticle