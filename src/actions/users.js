import {request } from '../lib/request'

export const getUsers = () => {
    return dispatch => {
      request("https://jsonplaceholder.typicode.com/users")
      .then(json => {
        dispatch({ type: 'ADD_USERS', payload: json });
      });
    }
}
