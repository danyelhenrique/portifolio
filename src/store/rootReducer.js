import { combineReducers } from "redux";
import user from "./modules/User/reducer";
import project from "./modules/Project/reducer";
import session from "./modules/Session/reducer";

const rootReducer = combineReducers({
  user,
  project,
  session
});

export default rootReducer;
