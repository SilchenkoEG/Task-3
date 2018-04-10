
export const getData = () => {
    return dispatch => {
        fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: json });
      });
    }
}
// export const getData = (data) => {
//   return { type: 'FETCH_TRACKS_SUCCESS', payload: data };
// }