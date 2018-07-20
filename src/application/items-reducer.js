// just initialize with an empty object so that the first times we go through here everything is empty
// and it is apparent that no initialization has happened.
const itemsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'REQUEST_ITEMS':
    case 'RECEIVE_ITEMS':
      return state
    
    default:
      return state
  }
}



export default itemsReducer