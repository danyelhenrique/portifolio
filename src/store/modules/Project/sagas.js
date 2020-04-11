import { all, call, put, takeLatest } from "redux-saga/effects";

import Api from "../../../services/api";

import {
  projectsSuccess,
  projectsFailure,
  projectStoreSuccess,
  projectStoreFailure,
  projectUpdateSuccess,
  projectUpdateFailure,
  projectSearchSuccess,
  projectSearchFailure,
  projectFormReset,
} from "./actions";

function* projectsRequest() {
  try {
    const response = yield call(Api, "/users/projects");
    const payload = { ...response.data, isLoading: false };

    yield put(projectsSuccess(payload));
  } catch (e) {
    yield put(projectsFailure());
  }
}

function* projectStore(data) {
  try {
    const { payload } = data;

    const tag = payload && payload.tag && payload.tag.trim().toLowerCase();

    const project = { ...payload, tag };

    const response = yield call(Api.post, "/users/projects", project);

    yield put(projectStoreSuccess(response.data));
  } catch (e) {
    yield put(projectStoreFailure());
  }
}

function* projectUpdate(data) {
  try {
    const { _id, ...payload } = data.payload;

    const tag = payload && payload.tag ? payload.tag.trim().toLowerCase() : "";

    const project = { ...payload, tag };

    const response = yield call(Api.put, `/users/projects/${_id}`, project);

    yield put(projectUpdateSuccess(response.data));
    yield put(projectFormReset());
  } catch (e) {
    yield put(projectUpdateFailure());
  }
}

function* projectSearch(data) {
  try {
    const { title } = data.payload;

    const clearTitle = title.trim().toLowerCase();

    const response = yield call(Api, `/search?name=${clearTitle}`);

    yield put(projectSearchSuccess(response.data));
  } catch (e) {
    yield put(projectSearchFailure());
  }
}

export default all([
  takeLatest("@PROJECT/PROJECTS_REQUEST", projectsRequest),
  takeLatest("@PROJECT/PROJECT_STORE_REQUEST", projectStore),
  takeLatest("@PROJECT/PROJECT_UPDATE_REQUEST", projectUpdate),
  takeLatest("@PROJECT/PROJECT_SEARCH_REQUEST", projectSearch),
]);
