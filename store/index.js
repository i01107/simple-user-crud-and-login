import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  users: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.users }
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunk));