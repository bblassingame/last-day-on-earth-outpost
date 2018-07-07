import React, { Component } from 'react'

class HtmlTable extends Component {
  constructor() {
    super()
    this.htmlTableRows = []
    this.columns = null
    this.header = null
    this.body = null
  }

  componentWillMount() {
    this.initialize()
  }

  componentWillUpdate() {
    this.initialize()
  }

  initialize() {
    // ensure that the column data and definitions are equal because if not then the table is not created correctly
    const columnDataLength = this.props.tablePageElement.columns.columnData.length
    const headerDataLength = this.props.tablePageElement.header.headerData.length
    const bodyDataLength = this.props.tablePageElement.body.bodyData.length
    if(columnDataLength !== headerDataLength && columnDataLength !== bodyDataLength) {
      console.log('ERROR:  Table data is not the same length')
      return
    }

    // ToDo:  eventually we may want to process the column definitions and translate them
    // into the CSS classes we may use or whatever else we need to do.

    // create the header rows
    this.createTableHeader()

    // create the body rows
    this.createTableBody()
  }

  createTableHeader() {
    // const columnData = this.props.tablePageElement.columns.columnData
    const headerData = this.props.tablePageElement.header.headerData

    let tempElements = []
    for(let i = 0 ; i < headerData.length ; i++) {
      let element = null
      element = <div key={i} className='formatted-table-header-cell'>{headerData[i].text}</div> 
      tempElements.push(element)
    }
    
    let row = <div className='formatted-table-header-row'>{tempElements}</div>

    this.htmlTableRows.push(
      <div key={0} className='formatted-table-header-container'>
        {row}
      </div>
    )
  }

  createTableBody() {
    const columnData = this.props.tablePageElement.columns.columnData
    const bodyData = this.props.tablePageElement.body.bodyData

    let tempElements = []
    for(let i = 0 ; i < bodyData.length ; i++) {
      let elRow = null
      let elCell = null
      let dataCells = []
      for(let j = 0 ; j < bodyData[i].length ; j++) {
        // check if we have a 'text' or 'image' type of column to know what kind of data cell we're putting in
        if(columnData[j].type === 'text') {
          elCell = <div key={j} className='formatted-table-data-cell'>{bodyData[i][j].text}</div>
        }
        else if(columnData[j].type === 'image') {
          // only put in an empty div to hold a spot in the table but we don't have an image to put in
          if(typeof(bodyData[i][j].img) === 'undefined' || Object.keys(bodyData[i][j]) === 0) {
            elCell = <div key={j} className='formatted-table-data-cell'></div>
          }
          else {
            elCell = <img key={j} className='formatted-table-data-cell' src={bodyData[i][j].img}></img>
          }
        }

        // add the cell to the row of cells that we're creating
        dataCells.push(elCell)
      }

      // add the final data row to the array of elements that we're going to append to the table after the header rows
      elRow = <div key={i} className='formatted-table-data-row'>{dataCells}</div>
      tempElements.push(elRow)
    }

    // finally, add all of the data rows to our table
    this.htmlTableRows.push(<div key={1} className='formatted-table-data-container'>{tempElements}</div>)
  }

  render() {
    return (
      <div className='formatted-table-container'>
        {this.htmlTableRows}
      </div>
    )
  }
}

export default HtmlTable