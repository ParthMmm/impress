import { USER_LOGIN } from "../actions/types";

export default function foo(state = [], action) {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    default:
      return state;
  }
}
