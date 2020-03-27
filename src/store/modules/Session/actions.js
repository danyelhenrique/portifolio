export function sessionStoreRequest(payload) {
  return {
    type: "@SESSION/SESSION_STORE_REQUEST",
    payload
  };
}

export function sessionStoreSuccess(payload) {
  return {
    type: "@SESSION/SESSION_STORE_SUCCESS",
    payload
  };
}

export function sessionStoreFailure() {
  return {
    type: "@SESSION/SESSION_STORE_FAILURE"
  };
}
