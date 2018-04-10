let intialState = [];
      
  
 export default function getPosts(state = intialState, action) {
    if (action.type === "FETCH_POSTS_SUCCESS") {
      return [
        ...state,
       action.payload
      ]
    }
      return state;
  }