import { USER_PROFILE } from "../actions/types";
import { USER_LOGOUT } from "../actions/types";

export default function foo(state = [], action) {
  switch (action.type) {
    case USER_PROFILE:
      return action.payload || false;
    case USER_LOGOUT:
      return [];
    default:
      return state;
  }
}
