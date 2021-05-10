import { USER_LOGIN } from "../actions/types";
import { LOGIN_ERROR } from "../actions/types";
import { AUTH_RESET } from "../actions/types";
export default function foo(state = [], action) {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload || false;
    case LOGIN_ERROR:
      return action.payload;
    case AUTH_RESET:
      return [];
    default:
      return state;
  }
}
