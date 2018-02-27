import React, { Component } from 'react'

import DatabaseCraftingTable from './database-crafting-table'

class DatabaseGenericItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      this.getIngredientPanel()
    )
  }

  getIngredientPanel() {
    return (
      <div className='db-item-info-container'>
        <h1 className='db-item-info-header'>{this.props.name}</h1>
        <p className='db-item-category-text'>categories:  {this.props.categories.map((category, i) => <span key={i} className='db-item-category'>{category}</span>)}</p>
        <div>
          <div className='db-item-pic-desc-container'>
            <img className='db-item-pic' src={this.props.img} />
            <p className='db-item-desc'>&quot;{this.props.inGameDescription}&quot;</p>
          </div>
          <div>
            <p>{this.props.outpostDescription}</p>
          </div>
        </div>
        <DatabaseCraftingTable
          craftable={this.props.craftable} 
          craftingMaterialsList={this.props.craftingMaterialsList} 
          craftPoints={this.props.craftPoints} 
          craftRequiredLevel={this.props.craftRequiredLevel} />
      </div>
    )
  }
}

export default DatabaseGenericItem