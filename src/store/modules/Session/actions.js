export function sessionStoreRequest(payload) {
  return {
    type: "@SESSION/SESSION_STORE_REQUEST",
    payload,
  };
}

export function sessionStoreSuccess(payload) {
  return {
    type: "@SESSION/SESSION_STORE_SUCCESS",
    payload,
  };
}

export function sessionStoreFailure() {
  return {
    type: "@SESSION/SESSION_STORE_FAILURE",
  };
}

// --------------------------------------- //

export function verifySessionRequest() {
  return {
    type: "@SESSION/SESSION_VERIFY_REQUEST",
  };
}

export function verifySessionSuccess() {
  return {
    type: "@SESSION/SESSION_VERIFY_SUCCESS",
  };
}

export function verifySessionFailure() {
  return {
    type: "@SESSION/SESSION_VERIFY_FAILURE",
  };
}

export function sessionLogout() {
  return {
    type: "@SESSION/SESSION_LOGOUT",
  };
}
