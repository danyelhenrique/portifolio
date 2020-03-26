export function projectRequest(payload) {
  return {
    type: "@PROJECT/PROJECT_REQUEST",
    payload
  };
}

export function projectSuccess(payload) {
  return {
    type: "@PROJECT/PROJECT_SUCCESS",
    payload
  };
}

export function projectFailure() {
  return {
    type: "@PROJECT/PROJECT_FAILURE"
  };
}

export function projectsRequest(payload) {
  return {
    type: "@PROJECT/PROJECTS_REQUEST",
    payload
  };
}

export function projectsSuccess(payload) {
  return {
    type: "@PROJECT/PROJECTS_SUCCESS",
    payload
  };
}

export function projectsFailure() {
  return {
    type: "@PROJECT/PROJECTS_FAILURE"
  };
}
