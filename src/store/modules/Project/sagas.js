import { all, call, put, takeLatest } from "redux-saga/effects";

import Api from "../../../services/api";

import { projectsSuccess, projectsFailure } from "./actions";

function* updateProfile() {
  try {
    const response = yield call(Api, "/users/projects");
    const payload = { ...response.data, isLoading: false };

    yield put(projectsSuccess(payload));
  } catch (e) {
    yield put(projectsFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
