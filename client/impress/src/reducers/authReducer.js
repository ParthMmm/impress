import { USER_PROFILE } from "../actions/types";

export default function foo(state = [], action) {
  switch (action.type) {
    case USER_PROFILE:
      return action.payload;
    default:
      return state;
  }
}
