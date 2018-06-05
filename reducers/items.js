import defaultItems from './items.json'

const items = (state = defaultItems, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      let items = state
      if (!items.length) {
        return [{ key: 0, value: action.item }]
      }
      const exist = items.filter(item => item.value.toLowerCase() === action.item.toLowerCase())
      if (exist.length) {
        return items
      }
      const index = items.length - 1
      return [...state, { key: items[index]['key'] + 1, value: action.item }]
    case 'CLEAR_ITEM':
      return action.items
    case 'RESET_ITEM':
      return defaultItems
    case 'REMOVE_ITEM':
      return state.filter((item) => item.key !== action.key)
    default:
      return state
  }
}

export default items
