import { all } from "redux-saga/effects";
import project from "./modules/Project/sagas";

export default function* rootSaga() {
  yield all([project]);
}
