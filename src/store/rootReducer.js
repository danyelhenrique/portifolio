import { combineReducers } from "redux";
import user from "./modules/User/reducer";

const rootReducer = combineReducers({
  user
});

export default rootReducer;
