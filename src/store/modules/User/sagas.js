import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  updateUserSuccess,
  updateUserFailure,
  storeUserSuccess,
  storeUserFailure
} from "./actions";

import Api from "../../../services/api";

function* userUpdate(data) {
  try {
    const { payload } = data;
    if (!payload.password) {
      delete payload.password;
    }

    console.tron.log(payload);

    const response = yield call(Api.put, "/users", payload);

    yield put(updateUserSuccess(response.data));
  } catch (e) {
    yield put(updateUserFailure());
  }
}

function* userStore(data) {
  try {
    const { payload } = data;

    const response = yield call(Api.post, "/users", payload);

    yield put(storeUserSuccess(response.data));
  } catch (e) {
    yield put(storeUserFailure());
  }
}

export default all([
  takeLatest("@USER/USER_UPDATE_REQUEST", userUpdate),
  takeLatest("@USER/USER_STORE_REQUEST", userStore)
]);
