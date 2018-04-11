let intialState = [];

export default function posts(state = intialState, action) {
  switch (action.type) {
    case "ADD_POSTS":
      return [...action.payload];
    default:
      return state;
  }
}
