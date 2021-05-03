import { combineReducers } from "redux";

const registerReducer = (data = null, action) => {
  if (action.type === "USER_REGISTER") {
    return action.payload;
  }
  return data;
};

export default combineReducers({
  data: registerReducer,
});
