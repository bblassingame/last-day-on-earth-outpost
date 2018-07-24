// export const setSelectedItem = (itemId) => {
//   return {
//     type: 'SET_SELECTED_ITEM',
//     selectedItem: itemId,
//   }
// }

export const setSearchText = (enteredText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: enteredText,
  }
}

export const clearSearchText = () => {
  return {
    type: 'CLEAR_SEARCH_TEXT',
  }
}