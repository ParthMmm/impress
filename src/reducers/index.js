import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";
import postsReducer from "./postsReducer";
import fetchReducer from "./fetchReducer";
import likesReducer from "./likesReducer";
import updateReducer from "./updateReducer";
import likeReducer from "./likeReducer";
import dislikesReducer from "./dislikesReducer";

export default combineReducers({
  // register: registerReducer,
  auth: loginReducer,
  user: authReducer,
  posts: postsReducer,
  likedPosts: likesReducer,
  dislikedPosts: dislikesReducer,
  like: likeReducer,
  fetchData: fetchReducer,
  updatedPost: updateReducer,
});
