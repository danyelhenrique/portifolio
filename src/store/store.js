import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import "../config/Reactotron";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const middlewares = [];

const persistConfig = {
  key: "portifolio",
  storage,
  whitelist: ["user", "session"]
};

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const persistedReducer = persistReducer(persistConfig, rootReducer);

middlewares.push(sagaMiddleware);

const composer =
  process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
    : compose(applyMiddleware(...middlewares));

const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
