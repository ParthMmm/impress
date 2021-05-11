import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";

export default combineReducers({
  // register: registerReducer,
  auth: loginReducer,
  user: authReducer,
});
