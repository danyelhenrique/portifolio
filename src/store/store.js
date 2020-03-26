import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import "../config/Reactotron";

import rootRducer from "./rootReducer";
import rootSaga from "./rootSaga";

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer =
  process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
    : compose(applyMiddleware(...middlewares));

const store = createStore(rootRducer, composer);

sagaMiddleware.run(rootSaga);

export { store };
