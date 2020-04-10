export function projectStoreRequest(payload) {
  return {
    type: "@PROJECT/PROJECT_STORE_REQUEST",
    payload,
  };
}

export function projectStoreSuccess(payload) {
  return {
    type: "@PROJECT/PROJECT_STORE_SUCCESS",
    payload,
  };
}

export function projectStoreFailure() {
  return {
    type: "@PROJECT/PROJECT_STORE_FAILURE",
  };
}

// -------------------------------------- //

export function projectsRequest() {
  return {
    type: "@PROJECT/PROJECTS_REQUEST",
  };
}

export function projectsSuccess(payload) {
  return {
    type: "@PROJECT/PROJECTS_SUCCESS",
    payload,
  };
}

export function projectsFailure() {
  return {
    type: "@PROJECT/PROJECTS_FAILURE",
  };
}

// -------------------------------------- //

export function projectUpdateRequest(payload) {
  return {
    type: "@PROJECT/PROJECT_UPDATE_REQUEST",
    payload,
  };
}

export function projectUpdateSuccess(payload) {
  return {
    type: "@PROJECT/PROJECT_UPDATE_SUCCESS",
    payload,
  };
}

export function projectUpdateFailure() {
  return {
    type: "@PROJECT/PROJECT_UPDATE_FAILURE",
  };
}

// ------------------------------------ //

export function projectFormReset() {
  return {
    type: "@PROJECT/PROJECT_FORM_RESET",
  };
}

// ------------------------------------ //

export function projectEdit(payload) {
  return {
    type: "@PROJECT/PROJECT_EDIT",
    payload,
  };
}

// -------------------------------- //

export function projectSearchRequest(payload) {
  return {
    type: "@PROJECT/PROJECT_SEARCH_REQUEST",
    payload,
  };
}

export function projectSearchSuccess(payload) {
  return {
    type: "@PROJECT/PROJECT_SEARCH_SUCCESS",
    payload,
  };
}

export function projectSearchFailure() {
  return {
    type: "@PROJECT/PROJECT_SEARCH_FAILURE",
  };
}

export function projectSearchCancel() {
  return {
    type: "@PROJECT/PROJECT_SEARCH_CANCEL",
  };
}
