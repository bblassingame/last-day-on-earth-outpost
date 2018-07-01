import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import StrategyApplication from './strategy-application'
import { fetchArticlesIfNeeded, setSelectedArticle } from './strategy-app-actions'
import Articles from './content/strategy-content-data'

const mapStateToProps = (state) => {
  let newProps = null

  // check if we're still loading and if we are, just return the current state
  // we don't need to try to do mapping until we're fully loaded
  // we are checking if the database and article data are finished loading
  if(true === getLoadingStatus(state)) {
    newProps = state.strategy
    return {...newProps}
  }

  // this is temporarily pulling the article content from the local data instead of the article data we
  // will eventually pull from the store.  But we have to get the article data onto the database first.
  const selectedArticle = state.strategy.selectedArticle
  let articleContent = Articles[selectedArticle]
    
  // if we're done loading, do some special mapping when needed
  switch(selectedArticle)
  {
    case 'Recycler':
      newProps = mapPropsForRecycler(state, articleContent)
      break

    default:
      console.log('Unknown article selected, default strategy props mapped')
      newProps = state.strategy
      newProps.articleData = articleContent
      break
  }

  return {...newProps}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentWillMount: () => dispatch(fetchArticlesIfNeeded()),
    onArticleSelected: (articleId) => dispatch(setSelectedArticle(articleId)),
    initializeSelectedArticle: (articleId) => dispatch(setSelectedArticle(articleId)),
  }
}

const StrategyAppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(StrategyApplication))

export default StrategyAppContainer



/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
/*                                                         MAPPING FUNCTIONS                                                            */


/*--------------------  RECYCLER MAPPING  --------------------*/
const mapPropsForRecycler = (state, articleContent) => {
  let newProps = null
  const recycleables = state.database.recycleables

  // create the recycler table body data
  let recyclerTableData = []
  Object.keys(recycleables).map( (itemId) => createRecyclerTableDataRow(recyclerTableData, itemId, state) )

  // insert the body data into the article data
  // this could be expanded later to incorporate multiple tables using the tableId like I'm already checking for here
  articleContent.contentItems.map( entry => {
    console.log(entry)
    if(entry.type === 'table' && entry.tableId === 'Recycler_0') {
      entry.tableData.body.bodyData = recyclerTableData
    }
  })

  newProps = Object.assign({}, {
    selectedArticle: state.strategy.selectedArticle,
    isFetching: state.strategy.isFetching,
    isInitialized: state.strategy.isInitialized,
    articleData: articleContent,
  })

  return newProps
}

const createRecyclerTableDataRow = (recyclerTableData, itemId, state) => {
  const items = state.database.items
  const recycleables = state.database.recycleables
  const recycleProducts = state.database.recycleProducts

  let fullLink = ''
  let recyclerTableDataRow = []
  // COLUMN 1
  // img = base 64 encoded thumbnail
  // link = link to the item in the database
  fullLink = '/database/' + items[itemId].urlName
  recyclerTableDataRow.push({
    img: items[itemId].thumbnail,
    link: fullLink,
  })

  // COLUMN 2
  // text = item name
  // link = link to the item in the database
  recyclerTableDataRow.push({
    text: items[itemId].name,
    link: fullLink,
  })

  // COLUMN 3
  // text = skill leveled up by the item being recycled
  recyclerTableDataRow.push({
    text: recycleables[itemId].recycleSkill,
  })

  // COLUMN 4
  // text = time it takes to recycle this item
  recyclerTableDataRow.push({
    text: recycleables[itemId].recycleTime,
  })

  // COLUMN 5-7
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
        img: items[itemId].thumbnail,
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
  return getDatabaseLoadingStatus(state.database) || getArticlesLoadingStatus(state.strategy)
}

const getDatabaseLoadingStatus = (dbState) => {
  // - this.props.isFetching == null || this.props.isFetching == true:  indicates that we're still fetching items from the server
  // - 'undefined' === typeof(this.props.selectedItem):  indicates that the full state is not initialized because selectedItem is not present in the state
  if(typeof(dbState.isFetching) === 'undefined' || dbState.isFetching === true || 'undefined' === typeof(dbState.selectedItem))
    return true
  else
    return false
}

const getArticlesLoadingStatus = (artState) => {
  // - this.props.isFetching == null || this.props.isFetching == true:  indicates that we're still fetching items from the server
  // - 'undefined' === typeof(this.props.selectedArticle):  indicates that the full state is not initialized because selectedArticle is not present in the state
  if( typeof(artState.isFetching) === 'undefined' || artState.isFetching === true || 'undefined' === typeof(artState.selectedArticle) )
    return true
  else
    return false
}

