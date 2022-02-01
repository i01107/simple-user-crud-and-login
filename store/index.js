import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  users: [],
  isLoggedIn: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.users }
    case 'SET_LOGIN':
      return { ...state, isLoggedIn: action.isLoggedIn }
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunk));