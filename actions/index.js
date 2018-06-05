export const addItem = item => ({
  type: 'ADD_ITEM',
  item
})

export const clearItems = () => ({
  type: 'CLEAR_ITEM',
  items: []
})

export const resetItems = () => ({
  type: 'RESET_ITEM'
})

export const setSearchText = search => ({
  type: 'SET_SEARCH_TEXT',
  search
})

export const removeItem = key => ({
  type: 'REMOVE_ITEM',
  key
})

