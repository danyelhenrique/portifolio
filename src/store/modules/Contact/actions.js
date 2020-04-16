export function contactRequest(payload) {
  return {
    type: "@CONTACT/CONTACT_REQUEST",
    payload,
  };
}

export function contactSuccess() {
  return {
    type: "@CONTACT/CONTACT_SUCESS",
  };
}

export function contactFailure() {
  return {
    type: "@CONTACT/CONTACT_FAILURE",
  };
}
