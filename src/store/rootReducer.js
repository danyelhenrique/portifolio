import { combineReducers } from "redux";
import user from "./modules/User/reducer";
import project from "./modules/Project/reducer";
import session from "./modules/Session/reducer";
import tags from "./modules/Tags/reducer";
import contact from "./modules/Contact/reducer";

const rootReducer = combineReducers({
  user,
  project,
  session,
  tags,
  contact,
});

export default rootReducer;
