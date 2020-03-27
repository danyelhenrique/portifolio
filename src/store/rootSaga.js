import { all } from "redux-saga/effects";
import project from "./modules/Project/sagas";
import user from "./modules/User/sagas";
import session from "./modules/Session/sagas";

export default function* rootSaga() {
  yield all([project, user, session]);
}
