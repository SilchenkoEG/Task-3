let intialState = [];
      
  
 export default function users(state = intialState, action) {
    if (action.type === "FETCH_USERS_SUCCESS") {
      return [
        ...state,
       action.payload
      ]
    }
      return state;
  }