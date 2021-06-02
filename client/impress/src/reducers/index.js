import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";
import postsReducer from "./postsReducer";
import fetchReducer from "./fetchReducer";
import likesReducer from "./likesReducer";
import updateReducer from "./updateReducer";
import likesUpdateReducer from "./likesUpdateReducer";
import dislikesReducer from "./dislikesReducer";
import { AUTH_RESET } from "../actions/types";

const appReducer = combineReducers({
  // register: registerReducer,
  auth: loginReducer,
  user: authReducer,
  posts: postsReducer,
  likedPosts: likesReducer,
  dislikedPosts: dislikesReducer,
  likesUpdated: likesUpdateReducer,
  fetchData: fetchReducer,
  updatedPost: updateReducer,
});

const rootReducer = (state, action) => {
  if (action.type === AUTH_RESET) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
