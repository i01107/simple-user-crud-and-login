import axios from 'axios';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const usersConverter = (raw_users) => {
  return raw_users.map(user => {
    let newUser = { ...user }
    newUser.id = uuidv4()
    return newUser
  })
}

export const fetchUsers = () => {
  return (dispatch, getState) => {
    const state = getState()

    if (state.users.length === 0) {
      axios({
        method: 'get',
        url: 'https://randomuser.me/api/?results=10&nat=us&inc=name,picture,email,phone,gender'
      })
      .then(fetchedUsers => {
        let users = usersConverter(fetchedUsers.data.results)
        dispatch({
          type: 'SET_USERS',
          users
        })
      })
    }
  }
}

export const delUser = userId => {
  return (dispatch, getState) => {
    const { users } = getState()
    let curUsers = [...users]
    let idx = curUsers.findIndex(u => u.id === userId)
    if (idx >= 0) {
      curUsers.splice(idx, 1)
    }
    dispatch({
      type: 'SET_USERS',
      users: curUsers
    })
  }
}