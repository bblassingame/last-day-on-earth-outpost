export const setSelectedItem = (itemId) => {
  return {
    type: 'SET_SELECTED_ITEM',
    selectedItem: itemId,
  }
}
