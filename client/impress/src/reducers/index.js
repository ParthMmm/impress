import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";
import postsReducer from "./postsReducer";
export default combineReducers({
  // register: registerReducer,
  auth: loginReducer,
  user: authReducer,
  posts: postsReducer,
});
