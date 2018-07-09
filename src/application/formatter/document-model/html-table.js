import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
      element = <th key={i} className='formatted-table-header-cell'>{headerData[i].text}</th>
      tempElements.push(element)
    }
    
    let row = <tr key={0}>{tempElements}</tr>

    this.htmlTableRows.push(<thead key={0}>{row}</thead>)
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
        // check the type of column we're generating and go
        if(columnData[j].type === 'text') {
          elCell = this.createTextCell(bodyData[i][j], j)
        }
        else if(columnData[j].type === 'image') {
          elCell = this.createImageCell(bodyData[i][j], j)
        }
        else if(columnData[j].type === 'item') {
          elCell = this.createItemCell(bodyData[i][j], j)
        }

        // add the cell to the row of cells that we're creating
        dataCells.push(elCell)
      }

      // add the final data row to the array of elements that we're going to append to the table after the header rows
      elRow = <tr key={i}>{dataCells}</tr>
      tempElements.push(elRow)
    }

    // finally, add all of the data rows to our table
    this.htmlTableRows.push(<tbody key={1}>{tempElements}</tbody>)
  }

  createTextCell(cellData, index) {
    return <td key={index} className='formatted-table-data-cell'>{cellData.text}</td>
  }

  createImageCell(cellData, index) {
    let returnCell = null

    // return an empty cell if find one
    if(typeof(cellData.img) === 'undefined' || Object.keys(cellData) === 0) {
      // only put in an empty cell to hold a spot in the table but we don't have an image to put in
      returnCell = <td key={index} className='formatted-table-data-cell'></td>
      return returnCell
    }

    // create the base image that we need to return
    // returnCell = <td key={index} className='formatted-table-data-cell'><img className='formatted-table-image' src={cellData.img}></img></td>
    returnCell = <img className='formatted-table-image' src={cellData.img}></img>

    // check if we have a link and wrap the base cell in the Link if we have a link to add
    if(typeof(cellData.link) !== 'undefined')
      returnCell = <Link to={cellData.link}>{returnCell}</Link>

    // finally, wrap the data in a <td> tag that will be a cell in the table
    returnCell = <td key={index} className='formatted-table-data-cell'>{returnCell}</td>

    return returnCell
  }

  createItemCell(cellData, index) {
    return ( 
      <td key={index} className='formatted-table-data-cell'>
        <Link to={cellData.link}>
          <div className='formatted-table-data-cell-item-container'>
            <img className='formatted-table-image' src={cellData.img} />
            <span className='formatted-hide-on-mobile'>{cellData.text}</span>
          </div>
        </Link>
      </td>
    )
  }

  render() {
    return (
      <table className='formatted-table'>
        {this.htmlTableRows}
      </table>
    )
  }
}

export default HtmlTable