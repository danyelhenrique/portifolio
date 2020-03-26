const INITIAL_STATE = {
  user: {
    id: "",
    name: "",
    avatar_url: "",
    email: ""
  },
  payload: null
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "a":
      return;
    default:
      return state;
  }
}

export default userReducer;
