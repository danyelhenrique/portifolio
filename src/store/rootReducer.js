import { combineReducers } from "redux";
import user from "./modules/User/reducer";
import project from "./modules/Project/reducer";

const rootReducer = combineReducers({
  user,
  project
});

export default rootReducer;
