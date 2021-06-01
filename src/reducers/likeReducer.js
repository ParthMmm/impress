import { LIKE_ERROR, LIKE_SUCCESS } from "../actions/types";

export default function foo(state = false, action) {
  switch (action.type) {
    case LIKE_ERROR:
      return false;
    case LIKE_SUCCESS:
      return true;

    default:
      return state;
  }
}
