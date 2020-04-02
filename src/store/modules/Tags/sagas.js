import {
  all,
  call,
  put,
  takeLatest,
  select,
  cancel,
  cancelled
} from "redux-saga/effects";

import {
  filterTagSuccess,
  filterTagFailure,
  tagListSuccess,
  tagListFailure
} from "./actions";

import Api from "../../../services/api";

function* filterRequest(data) {
  try {
    const { filter } = data.payload;

    const { filter_tag } = yield select(state => state.tags);

    const fitlerExists = filter_tag.some(
      filterItem => filterItem._id === filter._id
    );

    if (fitlerExists) {
      yield cancel();
    }

    const response = yield call(Api.get, "/filter", {
      params: { filter: filter.name }
    });

    const dataWithFilter = { ...response.data, filter };

    yield put(filterTagSuccess(dataWithFilter));
  } catch (e) {
    yield put(filterTagFailure());
  } finally {
    if (yield cancelled()) {
      yield put(filterTagFailure());
    }
  }
}

function* taglistRequest() {
  try {
    const response = yield call(Api.get, "/users/projects/tags");

    yield put(tagListSuccess(response.data));
  } catch (e) {
    yield put(tagListFailure());
  }
}

export default all([
  takeLatest("@TAG/FILTER_TAG_ITEM_REQUEST", filterRequest),
  takeLatest("@TAG/TAG_LIST_REQUEST", taglistRequest)
]);
