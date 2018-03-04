export const setSelectedItem = (itemId) => {
  return {
    type: 'STRATEGY_SET_SELECTED_ITEM',
    selectedItem: itemId,
  }
}
