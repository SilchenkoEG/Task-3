export const getPosts = () => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: json });
          });
    }
}