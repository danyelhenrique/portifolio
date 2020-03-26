import { createStore } from "redux";
import rootRducer from "./rootReducer";

const store = createStore(rootRducer);

export { store };
