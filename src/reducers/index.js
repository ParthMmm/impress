import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";
import postsReducer from "./postsReducer";
import fetchReducer from "./fetchReducer";
import likesReducer from "./likesReducer";
export default combineReducers({
  // register: registerReducer,
  auth: loginReducer,
  user: authReducer,
  posts: postsReducer,
  likedPosts: likesReducer,
  fetchData: fetchReducer,
});
