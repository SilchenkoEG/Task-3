const intialState = {
  users: [],
  posts: []
};

export default function data(state = intialState, action) {
  switch (action.type) {
    case "ADD_POSTS": {
      return { ...state, posts: action.payload.data };
    }
    case "ADD_USERS": {
      return { ...state, users: action.payload.data };
    }
    default:
      return state;
  }
}
