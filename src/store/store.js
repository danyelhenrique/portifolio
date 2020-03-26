import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import rootRducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(rootRducer, middlewares);

sagaMiddleware.run(rootSaga);

export { store };
