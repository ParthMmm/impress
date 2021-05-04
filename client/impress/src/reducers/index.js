import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import authReducer from "./authReducer";

export default combineReducers({
  register: registerReducer,
  secretToken: loginReducer,
  auth: authReducer,
});
