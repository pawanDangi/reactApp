const search = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.search
    default:
      return state
  }
}

export default search
