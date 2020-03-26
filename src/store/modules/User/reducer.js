const INITIAL_STATE = {};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "a":
      return;
    default:
      return state;
  }
}
