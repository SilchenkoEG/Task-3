let intialState = [];
      
  
 export default function users(state = intialState, action) {
    if (action.type === "ADD_USERS") {
      return action.payload
      
    }
      return state;
  }