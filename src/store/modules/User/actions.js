export function updateUserRequest(payload) {
  return {
    type: "@USER/USER_UPDATE_REQUEST",
    payload
  };
}

export function updateUserSuccess(payload) {
  return {
    type: "@USER/USER_UPDATE_SUCCESS",
    payload
  };
}

export function updateUserFailure() {
  return {
    type: "@USER/USER_UPDATE_FAILURE"
  };
}

// --------------------------------------- //

export function storeUserRequest(payload) {
  return {
    type: "@USER/USER_STORE_REQUEST",
    payload
  };
}

export function storeUserSuccess(payload) {
  return {
    type: "@USER/USER_STORE_SUCCESS",
    payload
  };
}

export function storeUserFailure() {
  return {
    type: "@USER/USER_STORE_FAILURE"
  };
}
