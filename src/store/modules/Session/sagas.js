import { all, call, put, takeLatest } from "redux-saga/effects";

import Api from "../../../services/api";
import history from "../../../services/history";

import { sessionStoreSuccess, sessionStoreFailure } from "./actions";

function* sessionRequest(data) {
  try {
    const { email, password } = data.payload;

    const response = yield call(Api.post, "/signin", { email, password });
    const payload = { ...response.data };

    Api.defaults.headers.authorization = `Bearer ${response.data.token}`;

    yield put(sessionStoreSuccess(payload));

    history.push("/admin");
  } catch (e) {
    yield put(sessionStoreFailure());
  }
}

export default all([
  takeLatest("@SESSION/SESSION_STORE_REQUEST", sessionRequest)
]);
