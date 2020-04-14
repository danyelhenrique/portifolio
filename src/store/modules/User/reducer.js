import produce from "immer";

const INITIAL_STATE = {
  user: {
    id: "",
    name: "",
    avatar_url: "",
    email: "",
  },
};

function userReducer(state = INITIAL_STATE, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "@USER/USER_UPDATE_SUCCESS": {
        draftState.user = action.payload.user;
        break;
      }
      case "@SESSION/SESSION_STORE_SUCCESS": {
        draftState.user = action.payload.user;
        break;
      }
      case "@SESSION/SESSION_VERIFY_FAILURE": {
        draftState.user = {};
        break;
      }
      case "@SESSION/SESSION_LOGOUT": {
        draftState.user = {};
        break;
      }
      default:
        return state;
    }
  });
}

export default userReducer;
