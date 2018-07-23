import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import StrategyApplication from './strategy-application'
import Articles from './content/strategy-content-data'

const mapStateToProps = (state, ownProps) => {
  let newProps = null

  // get the selected route here so that we can map properties based on the selected article
  let selectedArticle = ''
  if(null != ownProps.location.pathname.match(/^\/strategy\/\w+\/?$/))
    selectedArticle = ownProps.location.pathname.split('/')[2]

  // check if we're still loading and if we are, just return the current state
  // we don't need to try to do mapping until we're fully loaded
  // we are checking if the item and article data are finished loading
  if(true === getLoadingStatus(state)) {
    newProps = {...state.articles, isLoading: true}
    return {...newProps}
  }

  // this is temporarily pulling the article content from the local data instead of the article data we
  // will eventually pull from the store.  But we have to get the article data onto the database first.
  let articleContent = Articles[selectedArticle]
    
  // if we're done loading, do some special mapping when needed
  switch(selectedArticle)
  {
    case 'Recycler':
      newProps = mapPropsForRecycler(state, articleContent)
      break

    case '':
      newProps = mapCommonProps(state)
      break

    default:
      newProps = mapCommonProps(state)
      newProps.articleData = articleContent
      newProps.articleData.items = state.items.items
      break
  }

  return {...newProps}
}

const StrategyAppContainer = withRouter(connect(mapStateToProps)(StrategyApplication))

export default StrategyAppContainer



/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
/*                                                         MAPPING FUNCTIONS                                                            */


/*--------------------  COMMON MAPPING  --------------------*/
const mapCommonProps = (state) => {
  let commonProps = {}
  let isLoadingValue = getLoadingStatus(state)

  commonProps = Object.assign({}, state.articles, {isLoading: isLoadingValue})

  return commonProps
}


/*--------------------  RECYCLER MAPPING  --------------------*/
const mapPropsForRecycler = (state, articleContent) => {
  let newProps = {}
  const recycleables = state.items.recycleables

  // map properties common across the application
  newProps = Object.assign({}, newProps, mapCommonProps(state))

  // create the recycler table body data
  let recyclerTableData = []
  Object.keys(recycleables).map( (itemId) => createRecyclerTableDataRow(recyclerTableData, itemId, state) )

  // insert the body data into the article data
  // this could be expanded later to incorporate multiple tables using the tableId like I'm already checking for here
  articleContent.contentItems.map( entry => {
    if(entry.type === 'table' && entry.tableId === 'Recycler_0') {
      entry.tableData.body.bodyData = recyclerTableData
    }
  })

  newProps = Object.assign({}, newProps, {
    articleData: articleContent,
  })

  return newProps
}

const createRecyclerTableDataRow = (recyclerTableData, itemId, state) => {
  const items = state.items.items
  const recycleables = state.items.recycleables
  const recycleProducts = state.items.recycleProducts

  let fullLink = ''
  let recyclerTableDataRow = []
  // COLUMN 1
  // img = base 64 encoded thumbnail
  // text = item name
  // link = link to the item in the database
  fullLink = '/database/' + items[itemId].urlName
  recyclerTableDataRow.push({
    img: items[itemId].thumbnail,
    text: items[itemId].name,
    link: fullLink,
  })

  // COLUMN 2
  // text = skill leveled up by the item being recycled
  recyclerTableDataRow.push({
    text: recycleables[itemId].recycleSkill,
  })

  // COLUMN 3
  // text = time it takes to recycle this item
  recyclerTableDataRow.push({
    text: recycleables[itemId].recycleTime,
  })

  // COLUMN 4-6
  // ***KEY DESIGN POINT***:  we're assuming that the item tiers are already sorted
  // in the order they need to be.
  // img = base 64 encoded thumbnail of the tier 1 item produced
  // link = link to the item in the database
  const recycleProduct = recycleProducts[itemId]
  for(let i = 0 ; i < 3 ; i++) {
    // check to make sure there is actually an item at this tier, otherwise add an empty object
    if(recycleProduct.length > i) {
      const recycleableProductItemId = recycleProduct[i].recycleableProductItemId // get the item ID so that it's easier to read the code
      fullLink = '/database/' + items[recycleableProductItemId].urlName // this will be the 'to' attribute for our Link component
      recyclerTableDataRow.push({
        img: items[recycleableProductItemId].thumbnail,
        link: fullLink,
      })
    }
    else {
      recyclerTableDataRow.push({})
    }
  }

  // finally, add the data row to the table data array
  recyclerTableData.push(recyclerTableDataRow)
}



/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
/*                                                         UTILITY FUNCTIONS                                                            */


/*--------------------  LOADING STATUS FUNCTIONS  --------------------*/
const getLoadingStatus = (state) => {
  return getDatabaseLoadingStatus(state.items) || getArticlesLoadingStatus(state.articles)
}

const getDatabaseLoadingStatus = (itemsState) => {
  if(itemsState.isItemDataFetching === true || itemsState.hasItemDataFetched === false)
    return true
  else
    return false
}

const getArticlesLoadingStatus = (articlesState) => {
  if(articlesState.isArticleDataFetching === true || articlesState.hasArticleDataFetched === false)
    return true
  else
    return false
}

