import React from 'react'

import FormatMgr from '../../formatter/format-mgr'
import HtmlDocument from '../../formatter/document-model/html-document'

const StrategyArticle = (props) => {
  let formatMgr = new FormatMgr()
  let contentToRender = updateImageSources(props.articleData.contentItems, props.items)
  let pageModel = formatMgr.formatContent(contentToRender)
  return <HtmlDocument pageModel={pageModel}/>
}

const updateImageSources = (contentItems, items) => {
  if('undefined' === typeof(items)) {
    return contentItems
  }
  Object.keys(contentItems).map(entry => {
    if(contentItems[entry].type === 'image' && contentItems[entry].imageSrcType === 'reduxStore') {
      matchImageSourceToItem(contentItems[entry], items)
    }
    else if(contentItems[entry].type === 'group') {
      updateImageSources(contentItems[entry].groupItems, items)
    }
    else if(contentItems[entry].type === 'list') {
      updateImageSources(contentItems[entry].listItems, items)
    }
  })
  return contentItems
}

const matchImageSourceToItem = (imageEntry, items) => {
  Object.keys(items).map( item => {
    if(items[item].name === imageEntry.imageSrc)
      imageEntry.imageSrc = items[item].img
  })
}

export default StrategyArticle