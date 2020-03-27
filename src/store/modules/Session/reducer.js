import produce from "immer";

const INITIAL_STATE = {
  token: null,
  isloggedin: false
};

function userReducer(state = INITIAL_STATE, action) {
  return produce(state, draftState => {
    switch (action.type) {
      case "@SESSION/SESSION_STORE_SUCCESS": {
        draftState.token = action.payload.token;
        draftState.isloggedin = true;
        break;
      }
      default:
        return state;
    }
  });
}

export default userReducer;
