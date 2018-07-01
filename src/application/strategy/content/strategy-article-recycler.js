import React from 'react'

import FormatMgr from '../../formatter/format-mgr'
import HtmlDocument from '../../formatter/document-model/html-document'

const StrategyArticleRecycler = (props) => {
  let formatMgr = new FormatMgr()
  let pageModel = formatMgr.formatContent(props.articleData.contentItems)
  return (
    <div>
      <HtmlDocument pageModel={pageModel}/>
      <div>
        {renderTable()}
      </div>
    </div>
  )
}

const renderTable = () => {
  let childElements = []
  let tempElements = []
  const columnDefs = additionalContent.columns

  // create the header data elements
  for(let i = 0 ; i < columnDefs.length ; i++) {
    let element = null
    element = <div className='formatted-table-header-column'><div className='formatted-table-header-cell'>{columnDefs[i].text}</div></div>
    tempElements.push(element)
  }

  childElements.push(
    <div className='formatted-table-header-container'>
      {tempElements}
    </div>
  )

  // create the table data elements
  tempElements = []
  for(let i = 0 ; i < tableData.length ; i++) {
    let elRow = null
    let elCell = null
    let dataCells = []
    for(let j = 0 ; j < tableData[i].length ; j++) {
      elCell = <div className='formatted-table-data-cell'>{tableData[i][j]}</div>
      dataCells.push(elCell)
    }
    elRow = <div className='formatted-table-data-column'>{dataCells}</div>
    tempElements.push(elRow)
  }
  childElements.push(<div className='formatted-table-data-container'>{tempElements}</div>)

  return (
    <div className='formatted-table-container'>
      {childElements}
    </div>
  )
}

export default StrategyArticleRecycler

const additionalContent = {
  type: 'table',
  columns: 
  [
    {
      text: 'column 1',
    },
    {
      text: 'column 2',
    },
    {
      text: 'column 3',
    },
  ],
}

const tableData = [
  ['hello', 'this', 'is',],
  ['the', 'data', 'that',],
  ['goes', 'here', '.',],
]