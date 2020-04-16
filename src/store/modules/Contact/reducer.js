import produce from "immer";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
  loading: false,
};

function contactReducer(state = INITIAL_STATE, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "@CONTACT/CONTACT_REQUEST": {
        const { name, email, message } = action.payload;

        draftState.loading = true;

        draftState.name = name;
        draftState.email = email;
        draftState.message = message;

        break;
      }

      case "@CONTACT/CONTACT_SUCESS": {
        draftState = {
          name: "",
          email: "",
          message: "",
          loading: false,
        };

        break;
      }

      case "@CONTACT/CONTACT_FAILURE": {
        draftState.loading = false;

        break;
      }
      default:
        return state;
    }
  });
}

export default contactReducer;
