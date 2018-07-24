import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import DatabaseHeader from './header/database-header'
import DatabaseSearch from './content/database-search'
import DatabaseItemsOverview from './content/database-items-overview'
import DatabaseGenericItem from './content/database-generic-item'
import DatabaseWeaponItem from './content/database-weapon-item'
import DatabaseArmorItem from './content/database-armor-item'
import DatabaseFooter from './footer/database-footer'

import './database-application-style.css'

class DatabaseApplication extends Component {
  constructor(props) {
    super(props)
    this.handleBackArrowClick = this.handleBackArrowClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/
  /*                                                     REACT LIFECYCLE METHODS                                                          */
  
  render() {
    return (
      <div className='db-application-content'>
        <DatabaseHeader location={this.props.location}  onBackArrowClick={this.handleBackArrowClick} />
        <Route exact path='/database' render={(routeProps) => <DatabaseSearch onInput={this.handleSearchInput} {...routeProps} />}/>
        <Route exact path='/database' render={(routeProps) => <DatabaseItemsOverview isLoading={this.getLoadingStatus()} items={this.props.sortedFilteredItems} onItemClick={this.handleItemClick} {...routeProps} />} />
        <Route path='/database/:itemUrlName' render={(routeProps) => this.getItemPanel(routeProps)} />
        <DatabaseFooter />
      </div>
    )
  }


  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/
  /*                                                          EVENT HANDLERS                                                              */
  
  handleBackArrowClick() {
    this.props.clearSearchText()
  }

  handleItemClick() {
    this.props.clearSearchText()
  }

  handleSearchInput(event) {
    this.props.onSearchTextEntered(event.target.value)
  }


  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/
  /*                                                        COMPONENT CREATION                                                            */
  
  getItemPanel(routeProps) {
    // if we're loading or if we're still waiting on react to mount the component, show the loading panel
    if(true === this.getLoadingStatus())
      return this.getLoadingPanel()

    let selectedItem = this.getSelectedItemFromLocation()
    switch(this.props.items[selectedItem].primaryCategory) {
      case 'weapon':
        return (<DatabaseWeaponItem 
          categories={this.props.itemCategories[selectedItem]} 
          craftingMaterialsList={this.getItemCraftingMaterialsList(selectedItem)}
          weaponData={this.props.weapons[selectedItem]}
          {...this.props.items[selectedItem]} 
          {...routeProps} />)
      case 'armor':
        return (<DatabaseArmorItem 
          categories={this.props.itemCategories[selectedItem]} 
          craftingMaterialsList={this.getItemCraftingMaterialsList(selectedItem)}
          armorData={this.props.armor[selectedItem]}
          {...this.props.items[selectedItem]} 
          {...routeProps} />)
      case 'material':
      case 'provision':
      default:
        return (<DatabaseGenericItem 
          categories={this.props.itemCategories[selectedItem]} 
          {...this.props.items[selectedItem]} 
          craftingMaterialsList={this.getItemCraftingMaterialsList(selectedItem)} 
          {...routeProps} />)
    }
  }

  getLoadingPanel() {
    return (
      <div style={{margin: 'auto'}}>
        <h1>Loading...</h1>
      </div>
    )
  }

  // I'm not using this yet but I should try to handle fetching errors at some point
  getErrorPanel() {
    return (
      <div style={{margin: 'auto'}}>
        <h1>An error has occurred.  Please go to the home page and try to access this item again.</h1>
      </div>
    )
  }


  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/
  /*                                                        UTILITY FUNCTIONS                                                             */
  
  getSelectedItemFromLocation() {
    // match the expected path exactly in case later we add a further endpoint that builds off the path
    // accepted paths:  '/database/<itemId>'  OR  '/database/<itemId>/'
    let selectedItem = -1

    if(null != this.props.location.pathname.match(/^\/database\/[\w-_']+\/?$/)) {
      const tmpArray = this.props.location.pathname.split('/')
      selectedItem = this.getItemIdFromUrlName(this.props.items, tmpArray[2])
    }

    return Number(selectedItem)
  }

  getLoadingStatus() {
    // - this.props.isLoading == null || this.props.isLoading == true:  indicates that we're still fetching items from the server
    if(typeof(this.props.isLoading) === 'undefined' || this.props.isLoading === true)
      return true
    else
      return false
  }

  // create an array of objects that represent the items used to craft this object.
  // it has the following structure
  /*
    [
      {
        'img': <base64 encoded sm_thumb image>,
        'quantity': <quantity>,
        'name': <item_name>,
      },
    ]
  */
  getItemCraftingMaterialsList(selectedItem) {
    if(this.props.items[selectedItem].craftable == false) // use '==' because of string
      return null
    
    let itemCraftingMaterialsList = []
    let itemMaterial = {}

    const craftList = this.props.craftProducts[selectedItem]
    for(const key of Object.keys(craftList)) {
      itemMaterial['quantity'] = craftList[key].quantity
      itemMaterial['name'] = this.props.items[key].name
      itemMaterial['img'] = this.props.items[key].thumbnail
      itemCraftingMaterialsList.push(itemMaterial)
      itemMaterial = {}
    }

    return itemCraftingMaterialsList
  }

  getItemIdFromUrlName(items, selectedUrlName) {
    let returnItemId = 1

    Object.keys(items).map((itemId) => {
      if(items[itemId].urlName === selectedUrlName) {
        returnItemId = itemId
      }
    })

    return returnItemId
  }
}

export default DatabaseApplication