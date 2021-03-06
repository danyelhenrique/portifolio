import produce from "immer";
import history from "../../../services/history";

const INITIAL_STATE = {
  token: null,
  isloggedin: false,
};

function userReducer(state = INITIAL_STATE, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "@SESSION/SESSION_STORE_SUCCESS": {
        draftState.token = action.payload.token;
        draftState.isloggedin = true;
        break;
      }

      case "@SESSION/SESSION_VERIFY_FAILURE": {
        draftState.token = {};
        draftState.isloggedin = false;
        break;
      }
      case "@SESSION/SESSION_LOGOUT": {
        draftState.token = {};
        draftState.isloggedin = false;
        history.push("/");
        break;
      }
      default:
        return state;
    }
  });
}

export default userReducer;
