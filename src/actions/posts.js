import {request } from '../lib/request'

export const getPosts = () => {
    return dispatch => {
      request(`https://jsonplaceholder.typicode.com/posts`)
          .then(json => {
            dispatch({ type: 'ADD_POSTS', payload: json });
          });
    }
}