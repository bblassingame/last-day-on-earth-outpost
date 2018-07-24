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
    this.handleArticleClick = this.handleArticleClick.bind(this)
  }

  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/
  /*                                                     REACT LIFECYCLE METHODS                                                          */
  
  componentWillMount() {
    // don't rely on actions dispatched from this method because React ends up combining all of the
    // calls to mapStateToProps into a single call.  The result is that a dispatched action that
    // needs a call to mapStateToProps doesn't get the required call and you don't get the props
    // updated with the new state.  You need to call you actions after the componentWillMount call
    // so that you get the mapStateToProps that you're expecting
    // this.props.onComponentWillMount() // load here in case we stop loading in the main app for whatever reason
  }

  // do this check in componentDidUpdate and componentDidMount.  React expects functions that will update state to happen in a lifecyle
  // method aside from render.
  componentDidMount() {
    // also, we're using componentDidMount because after the application fully loads and we transition to the database
    // from another sub application, componentDidUpdate is not called and only componentWillMount and componentDidMount get called.
    this.initializeApplication()
  }

  componentDidUpdate() {
    // also, we're using componenDidUpdate because the component's state doesn't actually get props until this method.  Most
    // other lifecycle methods don't actually have the updated props from the mapStateToProps function.
    this.initializeApplication()
  }

  componentWillUnmount() {
    // we need to clear out the selected item whenever the database application unmounts so that whenever we come
    // back to the application from another application like strategy then we don't already have a selected item.  otherwise
    // the selected item is set from whatever it was previously.  This is important whenever the user navigates using the
    // the browser back or mouse button back.
    this.props.clearSelectedItem()
  }

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
    this.props.clearSelectedItem()
    this.props.clearSearchText()
  }

  handleItemClick(itemId) {
    this.props.onItemSelected(itemId)
    this.props.clearSearchText()
  }

  handleSearchInput(event) {
    this.props.onSearchTextEntered(event.target.value)
  }

  handleArticleClick() {
    this.props.clearSelectedItem()
  }

  /****************************************************************************************************************************************/
  /****************************************************************************************************************************************/
  /*                                                        COMPONENT CREATION                                                            */
  
  getItemPanel(routeProps) {
    // if we're loading or if we're still waiting on react to mount the component, show the loading panel
    // this.props.selectedItem === -1:  indicates that the selected item has not been initialized and we're waiting on everything to finish loading and initializing
    if(true === this.getLoadingStatus() || this.props.selectedItem === -1)
      return this.getLoadingPanel()
    
    let selectedItem = this.props.selectedItem
    switch(this.props.items[selectedItem].primaryCategory) {
      case 'weapon':
        return (<DatabaseWeaponItem 
          categories={this.props.itemCategories[selectedItem]} 
          craftingMaterialsList={this.getItemCraftingMaterialsList(selectedItem)}
          weaponData={this.props.weapons[selectedItem]}
          {...this.props.items[selectedItem]} 
          {...routeProps}
          onArticleClick={this.handleArticleClick} />)
      case 'armor':
        return (<DatabaseArmorItem 
          categories={this.props.itemCategories[selectedItem]} 
          craftingMaterialsList={this.getItemCraftingMaterialsList(selectedItem)}
          armorData={this.props.armor[selectedItem]}
          {...this.props.items[selectedItem]} 
          {...routeProps}
          onArticleClick={this.handleArticleClick} />)
      case 'material':
      case 'provision':
      default:
        return (<DatabaseGenericItem 
          categories={this.props.itemCategories[selectedItem]} 
          {...this.props.items[selectedItem]} 
          craftingMaterialsList={this.getItemCraftingMaterialsList(selectedItem)} 
          {...routeProps}
          onArticleClick={this.handleArticleClick} />)
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
  
  initializeApplication() {
    // match the expected path exactly in case later we add a further endpoint that builds off the path
    // accepted paths:  '/database/<itemId>'  OR  '/database/<itemId>/'
    if(null != this.props.location.pathname.match(/^\/database\/[\w-_']+\/?$/) && true === this.shouldInitializeSelectedItem()) {
      const tmpArray = this.props.location.pathname.split('/')
      const itemId = this.getItemIdFromUrlName(this.props.items, tmpArray[2])
      this.props.initializeSelectedItem(itemId)
    }
  }

  getLoadingStatus() {
    // - this.props.isLoading == null || this.props.isLoading == true:  indicates that we're still fetching items from the server
    // - 'undefined' === typeof(this.props.selectedItem):  indicates that the full state is not initialized because selectedItem is not present in the state
    if(typeof(this.props.isLoading) === 'undefined' || this.props.isLoading === true || 'undefined' === typeof(this.props.selectedItem))
      return true
    else
      return false
  }

  shouldInitializeSelectedItem() {
    // - true === this.getLoadingStatus():  indicates that we've completed loading from the items API
    // - this.props.selectedItem === -1:   indicates that initializeSelectedItem has not been called
    if(false === this.getLoadingStatus() && this.props.selectedItem === -1)
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