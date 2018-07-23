import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import DatabaseApplication from './database-application'
import { fetchItemsIfNeeded, setSelectedItem, setSearchText, clearSearchText } from './database-app-actions'
import { quoteRegExp } from '../utility/regex-utils'

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentWillMount: () => dispatch(fetchItemsIfNeeded()),
    onItemSelected: (itemId) => dispatch(setSelectedItem(itemId)),
    initializeSelectedItem: (itemId) => dispatch(setSelectedItem(itemId)),
    clearSelectedItem: () => dispatch(setSelectedItem(-1)),
    onSearchTextEntered: (enteredText) => dispatch(setSearchText(enteredText)),
    clearSearchText: () => dispatch(clearSearchText()),
  }
}

const mapStateToProps = (state) => {
  const {database} = state

  // sort the items so that we can display them better and more functionally
  if('undefined' !== typeof(state.database.items) && Object.keys(state.database.items).length !== 0)
    database.sortedFilteredItems = getSortedFilteredItemsList(state.database)

  return {...database}
}

// why did I use withRouter here?  freakin comment stuff!
const DatabaseAppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(DatabaseApplication))

export default DatabaseAppContainer


/****************************************************************************************************************************************/
/****************************************************************************************************************************************/
/*                                                         MAPPING FUNCTIONS                                                            */


/*--------------------  SORTING & FILTERING ITEMS  --------------------*/
const getSortedFilteredItemsList = (state) => {
  // sort the items by name
  const sortedItems = getItemsSortedByName(state.items)

  // return just the sorted items if we don't have a search string
  const searchText = state.searchText
  if(null == searchText || '' === searchText)
    return Object.assign({}, {...sortedItems})
  
  // if we have a search string, filter the items according to the search
  let sortedFilteredItems = {}
  const itemKeys = Object.keys(sortedItems)

  // TO DO:  Add some functionality so that we prioritize words items when they fully match.  A good example is "bat".
  // the first item is the Acid Bath, but really we probably want to see the Baseball Bat and Makeshift Bat first.
  
  // add the first set of matches, we look for a match at the beginning of a word and when it
  // matches a search word
  itemKeys.map(key => filterItemsMatchAtWordBoundary(key, sortedItems, searchText, state.searchWords, sortedFilteredItems))
  itemKeys.map(key => filterItemsMatchSearchWordsAtWordBoundary(key, sortedItems, searchText, state.searchWords, sortedFilteredItems))
  // now we add words where the search matches within the word
  itemKeys.map(key => filterItemsMatchAtNonWordBoundary(key, sortedItems, searchText, sortedFilteredItems))
  return Object.assign({}, {...sortedFilteredItems})
}

const getItemsSortedByName = (items) => {
  // sort the list by alphabetical order
  let array = Object.keys(items)
  array.sort((a, b) => {
    if(items[a].name.toUpperCase() < items[b].name.toUpperCase())
      return -1
    else if(items[a].name.toUpperCase() > items[b].name.toUpperCase())
      return 1
    else
      return 0
  })

  // return an object with object indexes that reflect the new order
  let returnObject = {}
  array.map((key, index) => { returnObject[index] = items[key] })
  return returnObject
}

const filterItemsMatchAtWordBoundary = (key, sortedItems, filterText, searchWords, sortedFilteredItems) => {
  const index = Object.keys(sortedFilteredItems).length
  const itemName = sortedItems[key].name

  // escape all of the regular expression special characters
  const regExpFilter = new RegExp('\\b' + quoteRegExp(filterText), 'i')

  // first check if the regular expression matches the actual item name
  if(0 <= itemName.search(regExpFilter))
    sortedFilteredItems[index] = sortedItems[key]
}

const filterItemsMatchSearchWordsAtWordBoundary = (key, sortedItems, filterText, searchWords, sortedFilteredItems) => {
  // now check if the regex matches secondary search words
  const index = Object.keys(sortedFilteredItems).length
  const itemName = sortedItems[key].name
  const itemSearchWords = searchWords[sortedItems[key].itemId]

  // escape all of the regular expression special characters
  const regExpFilter = new RegExp('\\b' + quoteRegExp(filterText), 'i')

  // check if there are any search words for this item before trying to match
  if(null != itemSearchWords) {
    itemSearchWords.map(searchWord => {
      if(0 <= searchWord.search(regExpFilter)) {
        let match = false
        // check whether the item has already been added to our sortedFilteredItems list
        Object.keys(sortedFilteredItems).map(key => {
          if(sortedFilteredItems[key].name === itemName)
            match = true
        })
    
        // if the regex matches and we haven't already added the item, add it
        if(false === match)
          sortedFilteredItems[index] = sortedItems[key]
      }
    })
  }
}

const filterItemsMatchAtNonWordBoundary = (key, sortedItems, filterText, sortedFilteredItems) => {
  const index = Object.keys(sortedFilteredItems).length
  const itemName = sortedItems[key].name

  // escape all of the regular expression special characters
  const regExpFilter = new RegExp('\\B' + quoteRegExp(filterText), 'i')

  // first check if the regular expression matches
  if(0 <= itemName.search(regExpFilter)) {
    let match = false
    // check whether the item has already been added to our sortedFilteredItems list
    Object.keys(sortedFilteredItems).map(key => {
      if(sortedFilteredItems[key].name === itemName)
        match = true
    })

    // if the regex matches and we haven't already added the item, add it
    if(false === match)
      sortedFilteredItems[index] = sortedItems[key]
  }
}