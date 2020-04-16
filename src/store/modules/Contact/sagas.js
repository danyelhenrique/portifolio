import { all, call, put, takeLatest } from "redux-saga/effects";

import { contactSuccess, contactFailure } from "./actions";

import Api from "../../../services/api";

function* contactRequest(data) {
  try {
    const { payload } = data;
    console.tron.log("payload", payload);

    yield call(Api.post, "/contact", payload);

    yield put(contactSuccess());
  } catch (e) {
    yield put(contactFailure());
  }
}

export default all([takeLatest("@CONTACT/CONTACT_REQUEST", contactRequest)]);
